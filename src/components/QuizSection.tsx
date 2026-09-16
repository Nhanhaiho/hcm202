"use client";

import React, { useState } from "react";
import { QuizGame } from "./quiz/QuizGame";
import { TimelineOrderGame } from "./quiz/TimelineOrderGame";
import { InfluenceMatchGame } from "./quiz/InfluenceMatchGame";

interface QuizSectionProps {
  onOpenSource: (sourceId: string) => void;
}

type ActiveTab = "main-quiz" | "bonus-timeline" | "bonus-influence";

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenSource }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("main-quiz");

  const handleNavigateToBonus = () => {
    setActiveTab("bonus-timeline");
  };

  return (
    <section
      id="quiz"
      className="py-16 md:py-24 border-b border-[#E2D9CC] scroll-mt-16 bg-[#FAF7F2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E1E] bg-[#8B1E1E]/10 px-3.5 py-1 rounded-full inline-block mb-3">
            Góc tương tác học tập số
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-scholarly text-[#1C2024]">
            Thử hiểu đúng về Tư tưởng Hồ Chí Minh
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-3 leading-relaxed">
            Hệ thống tương tác học thuật chuẩn hóa theo Chương II, Giáo trình Tư tưởng Hồ Chí Minh 2019. Trực quan hóa bối cảnh, cơ sở lý luận và nhân tố chủ quan qua 4 chặng thử thách trí tuệ.
          </p>
        </div>

        {/* Tab Switcher: Main Game vs 2 Bonus Challenges */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#EFE9DF] border border-[#E2D9CC] flex-wrap justify-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("main-quiz")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "main-quiz"
                  ? "bg-white text-[#8B1E1E] shadow-sm"
                  : "text-[#718096] hover:text-[#1C2024]"
              }`}
            >
              <span>🎯</span>
              <span>20 Câu hỏi chuẩn (4 Chặng)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("bonus-timeline")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "bonus-timeline"
                  ? "bg-white text-[#8B1E1E] shadow-sm"
                  : "text-[#718096] hover:text-[#1C2024]"
              }`}
            >
              <span>⏳</span>
              <span>Bonus 1: Sắp xếp dòng thời gian</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("bonus-influence")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "bonus-influence"
                  ? "bg-white text-[#8B1E1E] shadow-sm"
                  : "text-[#718096] hover:text-[#1C2024]"
              }`}
            >
              <span>🔗</span>
              <span>Bonus 2: Ghép cơ sở – vai trò</span>
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div>
          {activeTab === "main-quiz" && (
            <QuizGame
              onOpenSource={onOpenSource}
              onNavigateToBonus={handleNavigateToBonus}
            />
          )}

          {activeTab === "bonus-timeline" && (
            <div className="max-w-4xl mx-auto space-y-4">
              <TimelineOrderGame />
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("bonus-influence")}
                  className="text-xs text-[#8B1E1E] hover:underline font-semibold cursor-pointer"
                >
                  Chuyển sang Thử thách Bonus 2 (Ghép cơ sở – vai trò) &rarr;
                </button>
              </div>
            </div>
          )}

          {activeTab === "bonus-influence" && (
            <div className="max-w-4xl mx-auto space-y-4">
              <InfluenceMatchGame />
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("main-quiz")}
                  className="text-xs text-[#8B1E1E] hover:underline font-semibold cursor-pointer"
                >
                  &larr; Quay lại 12 câu hỏi trắc nghiệm chính
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
