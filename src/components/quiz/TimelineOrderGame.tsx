"use client";

import React, { useState } from "react";
import { TIMELINE_BONUS_STAGES, TimelineBonusStage } from "@/data/quizQuestions";

// Helper to shuffle array (not in-place)
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  // Ensure it's not already in sorted order
  if (result.every((item, idx) => (item as unknown as TimelineBonusStage).id === idx + 1)) {
    // swap first two
    [result[0], result[1]] = [result[1], result[0]];
  }
  return result;
}

// Deterministic initial permutation so SSR and client hydration match 100%
const INITIAL_STAGES_ORDER: TimelineBonusStage[] = [
  TIMELINE_BONUS_STAGES[2],
  TIMELINE_BONUS_STAGES[0],
  TIMELINE_BONUS_STAGES[4],
  TIMELINE_BONUS_STAGES[1],
  TIMELINE_BONUS_STAGES[3]
];

export const TimelineOrderGame: React.FC = () => {
  const [items, setItems] = useState<TimelineBonusStage[]>(INITIAL_STAGES_ORDER);
  const [isChecked, setIsChecked] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setIsChecked(false);
    setItems((prev) => {
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  const handleMoveDown = (index: number) => {
    if (index === items.length - 1) return;
    setIsChecked(false);
    setItems((prev) => {
      const next = [...prev];
      const temp = next[index + 1];
      next[index + 1] = next[index];
      next[index] = temp;
      return next;
    });
  };

  // Drag and Drop support
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    const newItems = [...items];
    const draggedItem = newItems[draggedIndex];
    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    setItems(newItems);
    setIsChecked(false);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleCheck = () => {
    setIsChecked(true);
  };

  const handleReset = () => {
    setItems(shuffleArray(TIMELINE_BONUS_STAGES));
    setIsChecked(false);
  };

  // Check if completely correct: id 1 to 5 in order
  const isAllCorrect = items.length === 5 && items.every((item, idx) => item.id === idx + 1);

  return (
    <div className="bg-white rounded-2xl border-2 border-[#E2D9CC] p-5 sm:p-8 shadow-md">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B88A44] bg-[#B88A44]/10 px-3 py-1 rounded-full inline-block mb-2">
          Thử thách Bonus 1
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-scholarly text-[#1C2024]">
          Sắp xếp 5 giai đoạn lịch sử hình thành tư tưởng
        </h3>
        <p className="text-xs sm:text-sm text-[#4A5568] mt-2">
          Sử dụng nút mũi tên <strong className="text-[#8B1E1E]">▲ Lên / ▼ Xuống</strong> (hoặc kéo thả) để sắp xếp 5 giai đoạn theo đúng tiến trình lịch sử.
        </p>
      </div>

      {/* Item List */}
      <div className="space-y-3 max-w-3xl mx-auto mb-6">
        {items.map((stage, idx) => {
          const isItemCorrect = isChecked && stage.id === idx + 1;

          return (
            <div
              key={stage.id}
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDragEnd={handleDragEnd}
              className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between gap-3 ${
                draggedIndex === idx ? "opacity-40 border-dashed border-[#8B1E1E]" : ""
              } ${
                isChecked
                  ? isItemCorrect
                    ? "bg-emerald-50/80 border-emerald-500 shadow-sm"
                    : "bg-red-50/60 border-red-400"
                  : "bg-[#FAF7F2] border-[#E2D9CC] hover:border-[#B88A44]"
              }`}
            >
              {/* Position indicator */}
              <div className="flex items-center gap-3 sm:gap-4 flex-1">
                <span
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center flex-shrink-0 font-mono shadow-xs ${
                    isChecked
                      ? isItemCorrect
                        ? "bg-emerald-600 text-white"
                        : "bg-red-600 text-white"
                      : "bg-[#8B1E1E] text-white"
                  }`}
                >
                  {idx + 1}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <span className="font-bold text-xs sm:text-sm text-[#8B1E1E]">
                      {stage.period}
                    </span>
                    {isChecked && (
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                          isItemCorrect
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {isItemCorrect ? "✓ Vị trí đúng" : `✗ Phải là Giai đoạn ${stage.id}`}
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#1C2024] leading-snug">
                    {stage.name}
                  </h4>
                  <p className="text-xs text-[#718096] mt-1 line-clamp-2 sm:line-clamp-none">
                    {stage.detail}
                  </p>
                </div>
              </div>

              {/* Action Buttons: Up and Down Arrows */}
              <div className="flex flex-col gap-1 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => handleMoveUp(idx)}
                  disabled={idx === 0}
                  aria-label={`Di chuyển giai đoạn ${idx + 1} lên`}
                  className="w-8 h-8 rounded-lg bg-white border border-[#C8BCAC] text-[#1C2024] hover:bg-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-xs shadow-xs transition-colors cursor-pointer"
                  title="Di chuyển lên"
                >
                  ▲
                </button>
                <button
                  type="button"
                  onClick={() => handleMoveDown(idx)}
                  disabled={idx === items.length - 1}
                  aria-label={`Di chuyển giai đoạn ${idx + 1} xuống`}
                  className="w-8 h-8 rounded-lg bg-white border border-[#C8BCAC] text-[#1C2024] hover:bg-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center font-bold text-xs shadow-xs transition-colors cursor-pointer"
                  title="Di chuyển xuống"
                >
                  ▼
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Result feedback message */}
      {isChecked && (
        <div
          className={`max-w-3xl mx-auto p-4 rounded-xl border mb-6 text-center animate-fadeIn ${
            isAllCorrect
              ? "bg-emerald-50 border-emerald-300 text-emerald-900"
              : "bg-amber-50 border-amber-300 text-amber-900"
          }`}
        >
          {isAllCorrect ? (
            <div>
              <h4 className="font-bold text-base flex items-center justify-center gap-2">
                <span>🎉</span> Tuyệt vời! Bạn đã sắp xếp chính xác cả 5 giai đoạn lịch sử!
              </h4>
              <p className="text-xs sm:text-sm mt-1 text-emerald-800">
                Toàn bộ dòng chảy biện chứng: từ nung nấu chí hướng (trước 1911) → tìm đường (1911–1920) → hình thành cơ bản (1920–1930) → tôi luyện qua bão táp (1930–1941) → phát triển đến đỉnh cao (1941–1969).
              </p>
            </div>
          ) : (
            <div>
              <h4 className="font-bold text-sm sm:text-base">
                Chưa hoàn toàn chính xác! Hãy quan sát các nhãn đỏ và đổi vị trí các giai đoạn.
              </h4>
            </div>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          type="button"
          onClick={handleCheck}
          className="px-6 py-2.5 rounded-xl bg-[#8B1E1E] text-white text-sm font-bold hover:bg-[#721616] shadow transition-all cursor-pointer flex items-center gap-2"
        >
          <span>✓</span> Kiểm tra kết quả
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-2.5 rounded-xl bg-white border border-[#C8BCAC] text-[#1C2024] hover:bg-[#FAF7F2] text-sm font-semibold transition-all cursor-pointer"
        >
          <span>↺</span> Xáo trộn & Làm lại
        </button>
      </div>
    </div>
  );
};
