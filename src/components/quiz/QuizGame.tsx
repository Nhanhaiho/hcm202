"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { quizQuestions, QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { StageSummary } from "./StageSummary";
import { QuizFinalResult } from "./QuizFinalResult";

interface QuizGameProps {
  onOpenSource?: (sourceId: string) => void;
  onNavigateToBonus?: () => void;
}

type GameStage = "welcome" | "question" | "stage-summary" | "final-result";

const QUESTION_TIME_LIMIT = 60; // 1 phút (60 giây) cho mỗi câu hỏi

export const QuizGame: React.FC<QuizGameProps> = ({ onOpenSource, onNavigateToBonus }) => {
  // Game Setup State
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestionType[]>(quizQuestions);
  const [gameStage, setGameStage] = useState<GameStage>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isRetryWrongMode, setIsRetryWrongMode] = useState<boolean>(false);

  // Stats State
  const [soloScore, setSoloScore] = useState<number>(0);
  const [soloStreak, setSoloStreak] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [isTimedOut, setIsTimedOut] = useState<boolean>(false);
  const [wrongQuestionIds, setWrongQuestionIds] = useState<number[]>([]);
  const [soloCorrectCount, setSoloCorrectCount] = useState<number>(0);
  const [stageCorrectCount, setStageCorrectCount] = useState<number>(0);

  // High score loaded safely after client mount to prevent hydration mismatch
  const [highScore, setHighScore] = useState<number>(0);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      try {
        const saved = localStorage.getItem("hcm202_quiz_high_score");
        if (saved) {
          const val = parseInt(saved, 10);
          if (!isNaN(val) && val > 0) {
            setHighScore(val);
          }
        }
      } catch {
        // Ignore
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  // 60-second Timer (1 phút)
  const [timeLeft, setTimeLeft] = useState<number>(QUESTION_TIME_LIMIT);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Save high score to localStorage safely
  const checkAndUpdateHighScore = useCallback(
    (newScore: number) => {
      if (newScore > highScore) {
        setHighScore(newScore);
        try {
          localStorage.setItem("hcm202_quiz_high_score", newScore.toString());
        } catch {
          // Ignore
        }
      }
    },
    [highScore]
  );

  const currentQuestion = activeQuestions[currentQuestionIndex] || activeQuestions[0];
  const currentStage = currentQuestion?.stage || 1;

  // Handle Timeout (30s expired)
  const handleTimeout = useCallback(() => {
    if (isAnswered) return;
    setIsTimedOut(true);
    setIsAnswered(true);
    setSoloStreak(0); // Reset streak on timeout
    setWrongQuestionIds((prev) =>
      prev.includes(currentQuestion.id) ? prev : [...prev, currentQuestion.id]
    );
  }, [isAnswered, currentQuestion]);

  // 30-Second Timer effect
  useEffect(() => {
    if (gameStage !== "question" || isAnswered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameStage, currentQuestionIndex, isAnswered, handleTimeout]);

  const resetQuestionState = () => {
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setIsTimedOut(false);
    setTimeLeft(QUESTION_TIME_LIMIT);
  };

  // Start 20-question challenge
  const handleStartGame = () => {
    setActiveQuestions(quizQuestions);
    setIsRetryWrongMode(false);
    setWrongQuestionIds([]);
    setSoloCorrectCount(0);
    setStageCorrectCount(0);
    setSoloScore(0);
    setSoloStreak(0);
    setCurrentQuestionIndex(0);
    resetQuestionState();
    setGameStage("question");
  };

  // User selects an option
  const handleSelectOption = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === currentQuestion.correctIndex;
    if (isCorrect) {
      // 100 points + speed bonus (max 50 based on 60 seconds)
      const timeBonus = Math.round((timeLeft / QUESTION_TIME_LIMIT) * 50);
      const earned = 100 + timeBonus;
      const newScore = soloScore + earned;
      setSoloScore(newScore);
      const newStreak = soloStreak + 1;
      setSoloStreak(newStreak);
      setSoloCorrectCount((prev) => prev + 1);
      setStageCorrectCount((prev) => prev + 1);
      checkAndUpdateHighScore(newScore);
    } else {
      setSoloStreak(0);
      setWrongQuestionIds((prev) =>
        prev.includes(currentQuestion.id) ? prev : [...prev, currentQuestion.id]
      );
    }
  };

  // Progress to next question or stage summary or final
  const handleNextStep = () => {
    const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;

    if (isLastQuestion) {
      setGameStage("final-result");
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    const nextQuestion = activeQuestions[nextIndex];

    // Check if moving to next stage (every 5 questions in regular mode)
    if (!isRetryWrongMode && nextQuestion.stage !== currentQuestion.stage) {
      setGameStage("stage-summary");
    } else {
      setCurrentQuestionIndex(nextIndex);
      resetQuestionState();
      setGameStage("question");
    }
  };

  // Continue from stage summary to next stage
  const handleContinueFromStageSummary = () => {
    const nextIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextIndex);
    setStageCorrectCount(0);
    resetQuestionState();
    setGameStage("question");
  };

  // Retry wrong questions
  const handleRetryWrongQuestions = () => {
    const wrongQuestions = quizQuestions.filter((q) => wrongQuestionIds.includes(q.id));
    if (wrongQuestions.length === 0) return;

    setActiveQuestions(wrongQuestions);
    setIsRetryWrongMode(true);
    setCurrentQuestionIndex(0);
    setSoloScore(0);
    setSoloCorrectCount(0);
    setSoloStreak(0);
    resetQuestionState();
    setGameStage("question");
  };

  // Back to welcome screen
  const handleBackToWelcome = () => {
    setGameStage("welcome");
    resetQuestionState();
  };

  return (
    <div className="w-full">
      {/* 1. WELCOME / MODE SCREEN (Single Start Button & 5 Key Points) */}
      {gameStage === "welcome" && (
        <div className="max-w-2xl mx-auto animate-fadeIn">
          {/* High Score banner if available */}
          {highScore > 0 && (
            <div className="mb-6 p-3.5 bg-white rounded-xl border border-[#E2D9CC] flex items-center justify-between flex-wrap gap-2 text-sm shadow-xs">
              <div className="flex items-center gap-2 text-[#4A5568]">
                <span className="text-xl">🏆</span>
                <span>Kỷ lục điểm cao cá nhân đã lưu trên máy:</span>
              </div>
              <span className="font-mono font-bold text-lg text-[#8B1E1E]">
                {highScore} điểm
              </span>
            </div>
          )}

          {/* Main Welcome Card */}
          <div className="bg-white rounded-2xl border-2 border-[#E2D9CC] p-6 sm:p-8 shadow-md text-center">
            <span className="w-14 h-14 rounded-2xl bg-[#8B1E1E]/10 text-[#8B1E1E] text-3xl flex items-center justify-center font-bold mx-auto mb-4">
              🎯
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold font-scholarly text-[#1C2024] mb-3">
              Thử thách &ldquo;Tự khám phá&rdquo;
            </h3>
            <p className="text-sm text-[#4A5568] leading-relaxed mb-6 max-w-lg mx-auto">
              Hệ thống kiểm tra toàn diện Chương II – Giáo trình Tư tưởng Hồ Chí Minh 2019, giúp bạn củng cố phương pháp luận khoa học và tư duy biện chứng lịch sử.
            </p>

            {/* 5 Required Descriptions */}
            <div className="bg-[#FAF7F2] border border-[#E2D9CC] rounded-xl p-5 mb-8 text-left max-w-lg mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-3">
                Quy tắc và thể lệ thử thách:
              </span>
              <ul className="text-xs sm:text-sm text-[#2D3136] space-y-2.5">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>20 câu hỏi trong 4 chặng.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>1 phút (60 giây) suy nghĩ cho mỗi câu.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>Đúng nhận 100 điểm; thưởng tốc độ tối đa 50 điểm.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>Ghi nhận chuỗi đúng liên tiếp và lưu kỷ lục.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] text-xs font-bold flex items-center justify-center flex-shrink-0">
                    ✓
                  </span>
                  <span>Có thể làm lại riêng các câu trả lời sai.</span>
                </li>
              </ul>
            </div>

            {/* Single Start Button */}
            <button
              type="button"
              onClick={handleStartGame}
              className="w-full sm:w-auto px-10 py-3.5 rounded-xl bg-[#8B1E1E] text-white text-base font-bold hover:bg-[#721616] transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-2.5"
            >
              <span>🚀</span>
              <span>Bắt đầu thử thách 20 câu</span>
            </button>
          </div>

          {/* Bonus Jump banner */}
          {onNavigateToBonus && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={onNavigateToBonus}
                className="text-xs sm:text-sm font-semibold text-[#8B1E1E] hover:underline cursor-pointer"
              >
                Hoặc trải nghiệm khu vực Thử thách Bonus (Sắp xếp dòng thời gian & Ghép cơ sở) &rarr;
              </button>
            </div>
          )}
        </div>
      )}

      {/* 2. PLAYING QUESTION */}
      {gameStage === "question" && (
        <div className="max-w-4xl mx-auto">
          {/* Progress bar, Stage info & 60s timer */}
          <QuizProgress
            currentStage={currentStage}
            questionIndex={currentQuestionIndex}
            totalQuestions={activeQuestions.length}
            timeLeft={timeLeft}
            maxTime={QUESTION_TIME_LIMIT}
            isAnswered={isAnswered}
            streak={soloStreak}
            highScore={highScore}
          />

          {/* Question Card */}
          <QuizQuestion
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={activeQuestions.length}
            selectedOptionIndex={selectedOptionIndex}
            isAnswered={isAnswered}
            onSelectOption={handleSelectOption}
            onNextQuestion={handleNextStep}
            isTimedOut={isTimedOut}
            onOpenSource={onOpenSource}
          />

          {/* Bottom navigation */}
          <div className="mt-4 flex items-center justify-between text-xs text-[#718096] px-2">
            <button
              onClick={handleBackToWelcome}
              type="button"
              className="hover:text-[#8B1E1E] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>&larr;</span> Thoát về màn hình bắt đầu
            </button>
            <span>
              {isRetryWrongMode ? "Chế độ luyện lại các câu trả lời sai" : "Thử thách 20 câu · 4 Chặng"}
            </span>
          </div>
        </div>
      )}

      {/* 3. STAGE SUMMARY (AFTER EVERY 5 QUESTIONS) */}
      {gameStage === "stage-summary" && (
        <StageSummary
          stage={currentStage}
          onContinue={handleContinueFromStageSummary}
          soloScore={soloScore}
          stageCorrectCount={stageCorrectCount}
          totalCorrectCount={soloCorrectCount}
          totalAnsweredSoFar={currentQuestionIndex + 1}
        />
      )}

      {/* 4. FINAL RESULT SCREEN */}
      {gameStage === "final-result" && (
        <QuizFinalResult
          totalQuestions={activeQuestions.length}
          soloScore={soloScore}
          correctCount={soloCorrectCount}
          highScore={highScore}
          hasWrongQuestions={wrongQuestionIds.length > 0}
          onRetryAll={handleStartGame}
          onRetryWrong={handleRetryWrongQuestions}
          onBackToHome={handleBackToWelcome}
        />
      )}
    </div>
  );
};
