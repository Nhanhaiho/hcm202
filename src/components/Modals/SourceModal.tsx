"use client";

import React, { useEffect, useRef } from "react";
import { ACADEMIC_SOURCES, AcademicSource } from "@/data/sources";

interface SourceModalProps {
  sourceId: string | null;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const SourceModal: React.FC<SourceModalProps> = ({
  sourceId,
  onClose,
  triggerRef,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const source: AcademicSource | undefined = sourceId ? ACADEMIC_SOURCES[sourceId] : undefined;

  useEffect(() => {
    if (!sourceId) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Return focus to trigger element
      triggerRef?.current?.focus();
    };
  }, [sourceId, onClose, triggerRef]);

  if (!sourceId || !source) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="source-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#C8BCAC] rounded-xl shadow-2xl p-6 md:p-8 text-[#1C2024] max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E2D9CC] pb-4 mb-5">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#8B1E1E] bg-[#8B1E1E]/10 px-2.5 py-1 rounded">
              Nguồn học thuật đối chiếu
            </span>
            <h3 id="source-modal-title" className="text-xl md:text-2xl font-bold font-scholarly mt-2 text-[#1C2024]">
              {source.sectionTitle}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Đóng cửa sổ nguồn"
            className="p-2 text-[#718096] hover:text-[#1C2024] hover:bg-[#E2D9CC]/50 rounded-lg transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#E2D9CC] space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-[#4A5568] min-w-[110px]">Tài liệu:</span>
              <span className="font-medium text-[#1C2024]">{source.bookTitle}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-[#4A5568] min-w-[110px]">Tác giả / Năm:</span>
              <span>{source.author} ({source.year})</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-[#4A5568] min-w-[110px]">Vị trí trang:</span>
              <span className="text-[#8B1E1E] font-semibold">
                Trang sách {source.pages} (bản PDF: trang {source.pdfPages})
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-[#4A5568] min-w-[110px]">Chương mục:</span>
              <span>{source.chapter}</span>
            </div>
          </div>

          <div className="bg-[#F5EFEB] p-4 rounded-lg border-l-4 border-[#8B1E1E]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] mb-1">
              Nội dung cốt lõi trích yếu
            </h4>
            <p className="text-[#2D3136] italic">
              &ldquo;{source.summaryQuote}&rdquo;
            </p>
          </div>

          {source.academicNote && (
            <div className="bg-[#FFFFFF] p-4 rounded-lg border border-[#E2D9CC]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B88A44] mb-1">
                Ghi chú phương pháp luận
              </h4>
              <p className="text-[#4A5568] text-sm">
                {source.academicNote}
              </p>
            </div>
          )}

          <div className="text-xs text-[#718096] pt-2 border-t border-[#E2D9CC]">
            <p>
              * Lưu ý: Giáo trình là tài liệu tham khảo nội bộ phục vụ học tập môn HCM202, không được lưu trữ công khai trên website. Trích dẫn tuân thủ các quy tắc trích lục học thuật chuẩn mực.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium bg-[#1C2024] text-white hover:bg-[#8B1E1E] rounded-lg transition-colors cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
