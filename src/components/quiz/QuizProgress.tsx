"use client";

import React from "react";

interface QuizProgressProps {
  currentStage: 1 | 2 | 3 | 4;
  questionIndex: number; // 0-based
  totalQuestions: number; // 20
  timeLeft: number; // 0 to 30
  isAnswered: boolean;
  streak?: number;
  highScore?: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentStage,
  questionIndex,
  totalQuestions,
  timeLeft,
  isAnswered,
  streak = 0,
  highScore = 0
}) => {
  const currentNum = questionIndex + 1;
  const progressPercent = Math.min(100, Math.round((currentNum / totalQuestions) * 100));

  // Timer color transition: green -> amber -> red
  const timerColor =
    timeLeft > 15
      ? "text-emerald-700 stroke-emerald-600"
      : timeLeft > 7
      ? "text-amber-600 stroke-amber-500"
      : "text-red-600 stroke-red-500 animate-pulse";

  // SVG circular countdown calculations (radius = 18, circumference = 2 * PI * 18 = 113.1)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / 30) * circumference;

  return (
    <div className="bg-white rounded-2xl border border-[#E2D9CC] p-4 sm:p-5 shadow-sm mb-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Stage and Question counter */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#8B1E1E]/10 text-[#8B1E1E] tracking-wide uppercase">
            Chặng {currentStage}/4
          </span>
          <span className="text-sm sm:text-base font-bold text-[#1C2024]">
            Câu {currentNum}/{totalQuestions}
          </span>
        </div>

        {/* Solo Stats: Streak & High Score */}
        <div className="flex items-center gap-4 text-xs sm:text-sm">
          {streak > 1 && (
            <span className="flex items-center gap-1 font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 animate-fadeIn">
              <span>🔥</span> Chuỗi đúng: {streak}
            </span>
          )}
          {highScore > 0 && (
            <span className="text-[#718096] hidden md:flex items-center gap-1">
              <span>🏆</span> Kỷ lục: <strong className="text-[#1C2024]">{highScore}</strong>
            </span>
          )}
        </div>

        {/* 30-Second Countdown Timer Widget */}
        <div className="flex items-center gap-2">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg className="w-11 h-11 transform -rotate-90" viewBox="0 0 44 44">
              {/* Background circle */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-[#E2D9CC]"
                strokeWidth="4"
                fill="transparent"
              />
              {/* Animated countdown circle */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className={`transition-all duration-300 ease-linear ${timerColor}`}
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={isAnswered ? 0 : strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <span
              className={`absolute text-xs sm:text-sm font-mono font-bold ${
                isAnswered ? "text-[#718096]" : timerColor
              }`}
            >
              {isAnswered ? "—" : timeLeft}s
            </span>
          </div>
          <span className="text-xs text-[#718096] font-medium hidden sm:inline">
            {isAnswered ? "Đã khóa" : "Thời gian (30s)"}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-3.5 w-full bg-[#FAF7F2] rounded-full h-2 border border-[#E2D9CC] overflow-hidden">
        <div
          className="bg-gradient-to-r from-[#8B1E1E] to-[#B88A44] h-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
};
