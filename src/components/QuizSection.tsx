"use client";

import React, { useState } from "react";
import { QUIZ_QUESTIONS, QuizQuestion } from "@/data/quiz";

interface QuizSectionProps {
  onOpenSource: (sourceId: string) => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenSource }) => {
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (submittedQuestions[questionId]) return; // Đã nộp bài câu này thì không đổi nữa, cần bấm làm lại
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleSubmitQuestion = (questionId: string) => {
    if (!userAnswers[questionId]) return;
    setSubmittedQuestions((prev) => ({ ...prev, [questionId]: true }));
  };

  const handleResetQuestion = (questionId: string) => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    setSubmittedQuestions((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
  };

  const handleResetAll = () => {
    setUserAnswers({});
    setSubmittedQuestions({});
  };

  return (
    <section id="quiz" className="py-16 md:py-24 border-b border-[#E2D9CC] scroll-mt-16 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E1E] bg-[#8B1E1E]/10 px-3 py-1 rounded-full inline-block mb-3">
            Góc tương tác học tập
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-scholarly text-[#1C2024]">
            Thử hiểu đúng về Tư tưởng Hồ Chí Minh
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-3">
            Kiểm tra và củng cố phương pháp luận thông qua 3 câu hỏi nhận thức cốt lõi. Không đánh đố, phản hồi minh bạch có căn cứ học thuật theo Giáo trình 2019.
          </p>
        </div>

        {/* List of 3 Questions */}
        <div className="space-y-8">
          {QUIZ_QUESTIONS.map((q: QuizQuestion, qIndex: number) => {
            const selectedOptionId = userAnswers[q.id];
            const isSubmitted = submittedQuestions[q.id];
            const selectedOption = q.options.find((o) => o.id === selectedOptionId);
            const isCorrect = selectedOption?.isCorrect ?? false;

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border-2 transition-all p-6 sm:p-8 shadow-md ${
                  isSubmitted
                    ? isCorrect
                      ? "border-emerald-500 ring-1 ring-emerald-500/20"
                      : "border-red-400 ring-1 ring-red-400/20"
                    : "border-[#E2D9CC] hover:border-[#B88A44]"
                }`}
              >
                {/* Question Header */}
                <div className="flex items-start gap-3 mb-5">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8B1E1E] text-white font-bold text-sm flex items-center justify-center font-mono">
                    {qIndex + 1}
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-[#8B1E1E] uppercase tracking-wider block mb-1">
                      Câu hỏi nhận thức {qIndex + 1} / 3
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-scholarly text-[#1C2024] leading-snug">
                      {q.question}
                    </h3>
                  </div>
                </div>

                {/* Options list */}
                <div className="space-y-3 mb-6">
                  {q.options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    let optionStyle = "bg-[#FAF7F2] border-[#E2D9CC] text-[#2D3136] hover:bg-white hover:border-[#B88A44]";

                    if (isSubmitted) {
                      if (opt.isCorrect) {
                        optionStyle = "bg-emerald-50 border-emerald-500 text-emerald-950 font-medium";
                      } else if (isSelected && !opt.isCorrect) {
                        optionStyle = "bg-red-50 border-red-400 text-red-950";
                      } else {
                        optionStyle = "bg-[#FAF7F2]/50 border-[#E2D9CC] text-[#718096] opacity-60";
                      }
                    } else if (isSelected) {
                      optionStyle = "bg-[#F5EFEB] border-[#8B1E1E] text-[#1C2024] ring-1 ring-[#8B1E1E]/30 font-medium";
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(q.id, opt.id)}
                        className={`w-full p-3.5 sm:p-4 rounded-xl border text-left text-sm transition-all flex items-start gap-3 cursor-pointer ${optionStyle} ${
                          isSubmitted ? "cursor-default" : ""
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center text-xs mt-0.5 ${
                          isSelected ? "border-[#8B1E1E] bg-[#8B1E1E] text-white" : "border-[#C8BCAC] bg-white"
                        }`}>
                          {isSelected ? "✓" : ""}
                        </span>
                        <span className="flex-1 leading-relaxed">
                          {opt.text}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Submit / Reset Actions */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  {!isSubmitted ? (
                    <button
                      onClick={() => handleSubmitQuestion(q.id)}
                      disabled={!selectedOptionId}
                      className="px-6 py-2.5 rounded-xl bg-[#8B1E1E] text-white text-sm font-medium hover:bg-[#721616] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    >
                      Kiểm tra đáp án
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-bold flex items-center gap-1.5 ${isCorrect ? "text-emerald-700" : "text-red-700"}`}>
                        {isCorrect ? (
                          <>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Chính xác!
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Chưa chính xác
                          </>
                        )}
                      </span>
                      <button
                        onClick={() => handleResetQuestion(q.id)}
                        className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#FAF7F2] border border-[#C8BCAC] text-[#1C2024] hover:bg-white transition-colors cursor-pointer"
                      >
                        Làm lại câu này
                      </button>
                    </div>
                  )}

                  <span className="text-xs text-[#718096]">
                    Nguồn thảo luận: GT 2019, Chương II
                  </span>
                </div>

                {/* Academic Explanation Feedback */}
                {isSubmitted && (
                  <div className="mt-6 pt-5 border-t border-[#E2D9CC] space-y-3 animate-fadeIn text-sm">
                    <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CC]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-1">
                        Luận giải biện chứng
                      </span>
                      <p className="text-[#2D3136] leading-relaxed">
                        {q.explanation}
                      </p>
                    </div>

                    <div className="bg-[#F5EFEB] p-3 rounded-lg border-l-4 border-[#B88A44] flex items-center justify-between flex-wrap gap-2 text-xs">
                      <div>
                        <span className="font-bold text-[#B88A44]">Đúc kết nhận thức: </span>
                        <span className="text-[#1C2024] italic">{q.coreInsight}</span>
                      </div>
                      <button
                        onClick={() => onOpenSource(q.sourceId)}
                        className="font-semibold text-[#8B1E1E] hover:underline flex items-center gap-1 cursor-pointer bg-white px-2 py-1 rounded border border-[#C8BCAC]"
                      >
                        <span>{q.academicSource}</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reset all button */}
        {Object.keys(submittedQuestions).length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={handleResetAll}
              className="px-6 py-2.5 rounded-xl bg-white border border-[#C8BCAC] text-[#4A5568] hover:text-[#1C2024] hover:bg-[#FAF7F2] text-sm font-medium transition-colors cursor-pointer"
            >
              Làm lại tất cả 3 câu hỏi
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
