"use client";

import React, { useEffect, useRef } from "react";
import { InfluenceNode } from "@/data/influences";
import { STAGES } from "@/data/stages";

interface InfluenceModalProps {
  influence: InfluenceNode | null;
  onClose: () => void;
  onSelectStage?: (stageId: string) => void;
  onOpenSource?: (sourceId: string) => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const InfluenceModal: React.FC<InfluenceModalProps> = ({
  influence,
  onClose,
  onSelectStage,
  onOpenSource,
  triggerRef,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!influence) return;

    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef?.current?.focus();
    };
  }, [influence, onClose, triggerRef]);

  if (!influence) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="influence-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#C8BCAC] rounded-xl shadow-2xl p-6 md:p-8 text-[#1C2024] max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E2D9CC] pb-4 mb-5">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1E1E] bg-[#8B1E1E]/10 px-2.5 py-1 rounded">
                {influence.groupName}
              </span>
              {influence.isDecisive && (
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded">
                  Tiền đề lý luận quyết định
                </span>
              )}
            </div>
            <h3 id="influence-modal-title" className="text-xl md:text-2xl font-bold font-scholarly mt-2 text-[#1C2024]">
              {influence.name}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Đóng bảng chi tiết cơ sở"
            className="p-2 text-[#718096] hover:text-[#1C2024] hover:bg-[#E2D9CC]/50 rounded-lg transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 7 Mục chi tiết */}
        <div className="space-y-5 text-sm md:text-base leading-relaxed">
          {/* 1. Vai trò */}
          <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#E2D9CC]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#8B1E1E]"></span>
              1. Vai trò trong quá trình hình thành tư tưởng
            </h4>
            <p className="text-[#1C2024] font-medium">
              {influence.role}
            </p>
          </div>

          {/* 2. Nội dung đóng góp */}
          <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#E2D9CC]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4A5568]"></span>
              2. Nội dung đóng góp cụ thể
            </h4>
            <p className="text-[#2D3136]">
              {influence.contribution}
            </p>
          </div>

          {/* 3. Cách tiếp thu hoặc vận dụng */}
          <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#E2D9CC]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4A5568]"></span>
              3. Phương thức tiếp thu, gạn lọc hoặc vận dụng của Hồ Chí Minh
            </h4>
            <p className="text-[#2D3136] mb-3">
              {influence.assimilation}
            </p>
            {influence.orientalDetails && (
              <div className="mt-3 pt-3 border-t border-[#E2D9CC] space-y-2">
                <span className="text-xs font-semibold text-[#B88A44] uppercase tracking-wider block">
                  Phân tích các dòng tư tưởng Phương Đông theo Giáo trình:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                  {influence.orientalDetails.map((item, idx) => (
                    <div key={idx} className="bg-[#FAF7F2] p-2.5 rounded border border-[#E2D9CC]">
                      <span className="font-bold text-[#8B1E1E] block mb-1">{item.school}:</span>
                      <span className="text-[#4A5568]">{item.content}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 4. Ví dụ có căn cứ */}
          <div className="bg-[#F5EFEB] p-4 rounded-lg border-l-4 border-[#B88A44]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B88A44] mb-1.5">
              4. Dẫn chứng và luận cứ lịch sử
            </h4>
            <p className="text-[#2D3136] italic">
              &ldquo;{influence.evidence}&rdquo;
            </p>
          </div>

          {/* 5. Giới hạn nếu chỉ giải thích bằng yếu tố này */}
          <div className="bg-[#FFF5F5] p-4 rounded-lg border border-red-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-800 mb-1.5 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-red-600 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              5. Giới hạn phương pháp luận (Tránh sai lầm cào bằng hoặc tuyệt đối hóa)
            </h4>
            <p className="text-red-950 text-sm">
              {influence.limitations}
            </p>
          </div>

          {/* 6. Các mốc timeline liên quan */}
          <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#E2D9CC]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4A5568]"></span>
              6. Các chặng thời gian có liên quan mật thiết
            </h4>
            <div className="flex flex-wrap gap-2">
              {influence.relatedStageIds.map((stId) => {
                const stage = STAGES.find((s) => s.id === stId);
                if (!stage) return null;
                return (
                  <button
                    key={stId}
                    onClick={() => {
                      onClose();
                      onSelectStage?.(stId);
                      // Cuộn tới timeline
                      const el = document.getElementById("timeline");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#C8BCAC] hover:bg-[#8B1E1E] hover:text-white hover:border-[#8B1E1E] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>{stage.shortLabel}:</span>
                    <span className="font-semibold">{stage.title.slice(0, 32)}...</span>
                    <span>&rarr;</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 7. Nguồn học thuật */}
          <div className="flex items-center justify-between bg-[#F5EFEB] p-3.5 rounded-lg border border-[#E2D9CC]">
            <div className="text-xs text-[#4A5568]">
              <span className="font-semibold text-[#1C2024]">Căn cứ tài liệu: </span>
              Giáo trình Tư tưởng Hồ Chí Minh (2019, Chương II)
            </div>
            {onOpenSource && (
              <button
                onClick={() => onOpenSource(influence.sourceId)}
                className="text-xs font-semibold text-[#8B1E1E] hover:underline flex items-center gap-1 cursor-pointer bg-white px-2.5 py-1 rounded border border-[#C8BCAC]"
              >
                <span>Xem vị trí trang</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium bg-[#1C2024] text-white hover:bg-[#8B1E1E] rounded-lg transition-colors cursor-pointer"
          >
            Đóng bảng thông tin
          </button>
        </div>
      </div>
    </div>
  );
};
