"use client";

import React from "react";

interface QuizFinalResultProps {
  totalQuestions: number; // 20
  soloScore: number;
  correctCount: number;
  highScore: number;
  hasWrongQuestions: boolean;
  onRetryAll: () => void;
  onRetryWrong: () => void;
  onBackToHome?: () => void;
}

export const QuizFinalResult: React.FC<QuizFinalResultProps> = ({
  totalQuestions,
  soloScore,
  correctCount,
  highScore,
  hasWrongQuestions,
  onRetryAll,
  onRetryWrong,
  onBackToHome
}) => {
  const percent = Math.round((correctCount / totalQuestions) * 100);

  // Celebratory effect when reaching at least 16/20
  const showCelebration = correctCount >= 16;

  // Pedagogical feedback based on score
  let feedbackTitle = "Cần củng cố thêm kiến thức";
  let feedbackDesc =
    "Bạn cần ôn lại các mốc thời gian và luận điểm của Chương II, đặc biệt là vai trò quyết định của CN Mác – Lênin và nhân tố chủ quan Hồ Chí Minh.";
  let badgeColor = "bg-amber-100 text-amber-900 border-amber-300";

  if (percent >= 90) {
    feedbackTitle = "Xuất sắc – Nắm vững phương pháp luận!";
    feedbackDesc =
      "Bạn hiểu sâu sắc bản chất biện chứng trong quá trình hình thành tư tưởng Hồ Chí Minh, phân biệt rõ vai trò các cơ sở và nhận diện chính xác các cách hiểu máy móc.";
    badgeColor = "bg-emerald-100 text-emerald-900 border-emerald-300";
  } else if (percent >= 75) {
    feedbackTitle = "Khá tốt – Hiểu rõ các giai đoạn then chốt";
    feedbackDesc =
      "Bạn đã nắm vững các dấu mốc cơ bản (1920, 1930) và các tiền đề lý luận. Hãy đọc kỹ thêm phần giải thích đối chiếu giáo trình để đạt độ chuẩn xác tối đa.";
    badgeColor = "bg-blue-100 text-blue-900 border-blue-300";
  } else if (percent >= 50) {
    feedbackTitle = "Đạt yêu cầu nhận thức cơ bản";
    feedbackDesc =
      "Bạn đã nhận diện được một số nội dung quan trọng, nhưng vẫn còn nhầm lẫn giữa các vai trò của từng cơ sở và các giai đoạn lịch sử.";
    badgeColor = "bg-orange-100 text-orange-900 border-orange-300";
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-[#B88A44] p-6 sm:p-10 shadow-xl max-w-3xl mx-auto text-center relative overflow-hidden animate-fadeIn">
      {/* Gentle CSS Confetti Effect (respects prefers-reduced-motion) */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-80" aria-hidden="true">
          <div className="absolute top-2 left-1/4 w-3 h-3 bg-[#8B1E1E] rounded-full animate-ping" />
          <div className="absolute top-6 right-1/4 w-3 h-3 bg-[#B88A44] rounded-full animate-ping delay-150" />
          <div className="absolute top-12 left-1/3 w-2 h-2 bg-emerald-500 rounded-full animate-ping delay-300" />
          <div className="absolute top-10 right-1/3 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping delay-200" />
        </div>
      )}

      {/* Top Trophy / Badge */}
      <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FAF7F2] border-2 border-[#B88A44] text-3xl sm:text-4xl mb-4 shadow-inner">
        {showCelebration ? "🏆" : "📜"}
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold font-scholarly text-[#1C2024] mb-2">
        Hoàn thành thử thách 20 câu hỏi
      </h3>
      <p className="text-xs sm:text-sm text-[#718096] mb-6">
        Giáo trình Tư tưởng Hồ Chí Minh 2019 · Chương II (4 Chặng)
      </p>

      {/* Score Stats Grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D9CC]">
          <span className="text-xs text-[#718096] block">Tổng điểm</span>
          <span className="text-2xl sm:text-3xl font-black font-mono text-[#8B1E1E]">
            {soloScore}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D9CC]">
          <span className="text-xs text-[#718096] block">Số câu đúng</span>
          <span className="text-2xl sm:text-3xl font-black font-mono text-emerald-700">
            {correctCount}/{totalQuestions}
          </span>
        </div>

        <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2D9CC]">
          <span className="text-xs text-[#718096] block">Tỷ lệ chính xác</span>
          <span className="text-2xl sm:text-3xl font-black font-mono text-[#B88A44]">
            {percent}%
          </span>
        </div>
      </div>

      {/* Feedback Card */}
      <div className={`p-5 rounded-xl border text-left mb-4 ${badgeColor}`}>
        <h4 className="font-bold text-sm sm:text-base mb-1 flex items-center gap-2">
          <span>📌</span> {feedbackTitle}
        </h4>
        <p className="text-xs sm:text-sm leading-relaxed opacity-95">
          {feedbackDesc}
        </p>
      </div>

      {/* High Score Notification */}
      {highScore > 0 && (
        <p className="text-xs text-[#718096] flex items-center justify-center gap-1.5 mb-2">
          <span>🏆</span> Kỷ lục cá nhân đã lưu trên trình duyệt:{" "}
          <strong className="text-[#1C2024]">{highScore} điểm</strong>
        </p>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-center flex-wrap gap-3 pt-6 border-t border-[#E2D9CC]">
        <button
          onClick={onRetryAll}
          type="button"
          className="px-6 py-2.5 rounded-xl bg-[#8B1E1E] text-white text-sm font-bold hover:bg-[#721616] transition-all shadow cursor-pointer flex items-center gap-2"
        >
          <span>↺</span> Chơi lại 20 câu
        </button>

        {hasWrongQuestions && (
          <button
            onClick={onRetryWrong}
            type="button"
            className="px-6 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-bold hover:bg-amber-700 transition-all shadow cursor-pointer flex items-center gap-2"
          >
            <span>✏</span> Làm lại câu sai
          </button>
        )}

        {onBackToHome && (
          <button
            onClick={onBackToHome}
            type="button"
            className="px-5 py-2.5 rounded-xl bg-white border border-[#C8BCAC] text-[#1C2024] hover:bg-[#FAF7F2] text-sm font-semibold transition-all cursor-pointer"
          >
            Màn hình giới thiệu
          </button>
        )}
      </div>
    </div>
  );
};
