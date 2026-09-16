"use client";

import React, { useEffect, useCallback } from "react";
import { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedOptionIndex: number | null; // 0, 1, 2, 3 or null
  isAnswered: boolean;
  onSelectOption: (index: number) => void;
  onNextQuestion: () => void;
  isTimedOut?: boolean;
  onOpenSource?: (sourceId: string) => void;
}

const OPTION_PREFIXES = ["A", "B", "C", "D"];

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionIndex,
  isAnswered,
  onSelectOption,
  onNextQuestion,
  isTimedOut = false,
  onOpenSource
}) => {
  const isCorrect = selectedOptionIndex === question.correctIndex;

  // Keyboard shortcut listener: 1-4 for options, Enter for Next
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (!isAnswered) {
        if (e.key === "1") onSelectOption(0);
        else if (e.key === "2") onSelectOption(1);
        else if (e.key === "3") onSelectOption(2);
        else if (e.key === "4") onSelectOption(3);
      }

      if (isAnswered && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        onNextQuestion();
      }
    },
    [isAnswered, onSelectOption, onNextQuestion]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E2D9CC] p-6 sm:p-8 shadow-md transition-all">
      {/* Question Header */}
      <div className="flex items-start gap-3 sm:gap-4 mb-6">
        <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#8B1E1E] text-white font-bold text-sm sm:text-base flex items-center justify-center font-mono shadow-sm">
          {questionNumber}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] bg-[#8B1E1E]/10 px-2.5 py-0.5 rounded-full">
              {question.category}
            </span>
            <span className="text-xs font-semibold text-[#B88A44] bg-[#B88A44]/15 px-2.5 py-0.5 rounded-full">
              Chặng {question.stage}
            </span>
          </div>
          <h3 className="text-base sm:text-xl font-bold font-scholarly text-[#1C2024] leading-snug">
            {question.question}
          </h3>
        </div>
      </div>

      {/* Screen reader live region for answer feedback */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {isAnswered &&
          (isTimedOut
            ? "Đã hết 30 giây. Xem đáp án đúng và luận giải bên dưới."
            : isCorrect
            ? "Chính xác! Bạn đã chọn đáp án đúng."
            : "Chưa chính xác! Xem giải thích bên dưới.")}
      </div>

      {/* Options List */}
      <div className="space-y-3 mb-6" role="radiogroup" aria-label="Các phương án trả lời">
        {question.options.map((optionText, idx) => {
          const isSelected = selectedOptionIndex === idx;
          const isOptionCorrect = idx === question.correctIndex;
          const letter = OPTION_PREFIXES[idx];

          let optionStyle =
            "bg-[#FAF7F2] border-[#E2D9CC] text-[#2D3136] hover:bg-white hover:border-[#B88A44]";

          if (isAnswered) {
            if (isOptionCorrect) {
              optionStyle =
                "bg-emerald-50 border-emerald-500 text-emerald-950 font-medium ring-2 ring-emerald-500/20";
            } else if (isSelected && !isOptionCorrect) {
              optionStyle = "bg-red-50 border-red-400 text-red-950 ring-2 ring-red-400/20";
            } else {
              optionStyle = "bg-[#FAF7F2]/60 border-[#E2D9CC] text-[#718096] opacity-60";
            }
          } else if (isSelected) {
            optionStyle =
              "bg-[#F5EFEB] border-[#8B1E1E] text-[#1C2024] ring-2 ring-[#8B1E1E]/30 font-medium";
          }

          return (
            <button
              key={`q-${question.id}-opt-${idx}`}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={isAnswered}
              onClick={() => onSelectOption(idx)}
              className={`w-full min-h-[54px] p-3.5 sm:p-4 rounded-xl border-2 text-left text-sm sm:text-base transition-all flex items-start gap-3.5 cursor-pointer ${optionStyle} ${
                isAnswered ? "cursor-default" : ""
              }`}
            >
              {/* Option badge (A, B, C, D) */}
              <span
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg font-bold text-xs sm:text-sm flex-shrink-0 flex items-center justify-center transition-colors ${
                  isAnswered
                    ? isOptionCorrect
                      ? "bg-emerald-600 text-white"
                      : isSelected
                      ? "bg-red-600 text-white"
                      : "bg-[#E2D9CC] text-[#718096]"
                    : isSelected
                    ? "bg-[#8B1E1E] text-white"
                    : "bg-white border border-[#C8BCAC] text-[#1C2024]"
                }`}
              >
                {letter}
              </span>

              {/* Option text */}
              <span className="flex-1 leading-relaxed self-center">
                {optionText}
              </span>

              {/* Keyboard indicator tag for desktop */}
              {!isAnswered && (
                <span className="hidden md:inline-block text-[11px] text-[#A0AEC0] border border-[#E2D9CC] bg-white px-1.5 py-0.5 rounded font-mono">
                  Phím {idx + 1}
                </span>
              )}

              {/* Visual status icons */}
              {isAnswered && isOptionCorrect && (
                <span className="text-emerald-700 font-bold text-lg">✓</span>
              )}
              {isAnswered && isSelected && !isOptionCorrect && (
                <span className="text-red-700 font-bold text-lg">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Action / Next Button bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-[#E2D9CC]/60">
        <div className="flex items-center gap-2">
          {isAnswered && (
            <span
              className={`text-sm font-bold flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
                isTimedOut
                  ? "bg-amber-50 text-amber-800 border border-amber-200"
                  : isCorrect
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {isTimedOut ? (
                <>⏱ Hết giờ 30s (Chưa chọn)</>
              ) : isCorrect ? (
                <>
                  <span className="text-emerald-600">✓</span> Chính xác!
                </>
              ) : (
                <>
                  <span className="text-red-600">✗</span> Chưa chính xác
                </>
              )}
            </span>
          )}
          {!isAnswered && (
            <span className="text-xs text-[#718096]">
              Chọn đáp án để kiểm tra (hoặc bấm phím 1–4)
            </span>
          )}
        </div>

        {/* Next Question button appears once answered */}
        {isAnswered && (
          <button
            onClick={onNextQuestion}
            type="button"
            className="px-6 py-2.5 rounded-xl bg-[#8B1E1E] text-white text-sm font-bold hover:bg-[#721616] transition-all shadow cursor-pointer flex items-center gap-2"
          >
            <span>{questionNumber === totalQuestions ? "Xem kết quả chung cuộc" : "Câu tiếp theo"}</span>
            <span>&rarr;</span>
            <span className="hidden sm:inline text-xs text-white/70 font-mono font-normal">
              (Enter)
            </span>
          </button>
        )}
      </div>

      {/* Explanation and Academic citation */}
      {isAnswered && (
        <div className="mt-6 pt-5 border-t border-[#E2D9CC] space-y-3.5 text-sm animate-fadeIn">
          {/* Explanation */}
          <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-xl border border-[#E2D9CC]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-1.5 flex items-center gap-1.5">
              <span>📖</span> Luận giải biện chứng
            </span>
            <p className="text-[#2D3136] leading-relaxed">
              {question.explanation}
            </p>
          </div>

          {/* Academic citation */}
          <div className="bg-[#F5EFEB] p-3.5 rounded-xl border-l-4 border-[#B88A44] flex items-center justify-between flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#B88A44]">Đối chiếu giáo trình:</span>
              <span className="text-[#1C2024] font-medium">{question.source}</span>
            </div>
            {onOpenSource && (
              <button
                type="button"
                onClick={() => onOpenSource("src_ll_ml")}
                className="font-semibold text-[#8B1E1E] hover:underline flex items-center gap-1 cursor-pointer bg-white px-2.5 py-1 rounded border border-[#C8BCAC]"
              >
                <span>Xem kho tư liệu</span>
                <span>&rarr;</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
