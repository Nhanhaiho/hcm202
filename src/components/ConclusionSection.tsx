"use client";

import React from "react";
import { CONCLUSION_DATA } from "@/data/conclusion";

interface ConclusionSectionProps {
  onOpenSource: (sourceId: string) => void;
}

export const ConclusionSection: React.FC<ConclusionSectionProps> = ({ onOpenSource }) => {
  return (
    <section id="conclusion" className="py-16 md:py-24 border-b border-[#E2D9CC] scroll-mt-16 bg-[#F5EFEB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E1E] bg-[#8B1E1E]/10 px-3 py-1 rounded-full inline-block mb-3">
            Tổng kết học thuật
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-scholarly text-[#1C2024]">
            Kết luận: 4 Luận điểm cốt lõi trả lời câu hỏi trung tâm
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-3">
            Khẳng định bản chất khoa học, tính sáng tạo độc đáo và sự gắn bó hữu cơ giữa các yếu tố cấu thành Tư tưởng Hồ Chí Minh.
          </p>
        </div>

        {/* Central Thesis banner */}
        <div className="bg-white rounded-2xl border-2 border-[#8B1E1E] p-6 sm:p-8 shadow-xl mb-12 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-[#8B1E1E]/10 text-[#8B1E1E] items-center justify-center font-bold text-xl">
              ⚖
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-1">
                Luận điểm xuyên suốt của công trình nghiên cứu
              </span>
              <p className="text-base sm:text-lg font-scholarly font-bold text-[#1C2024] leading-relaxed mb-3">
                &ldquo;{CONCLUSION_DATA.overarchingThesis}&rdquo;
              </p>
              <p className="text-xs text-[#718096] italic">
                * {CONCLUSION_DATA.thesisNote}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CONCLUSION_DATA.pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-xl border border-[#C8BCAC] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold font-scholarly text-[#8B1E1E] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm font-semibold text-[#1C2024] mb-3">
                  {pillar.summary}
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed mb-4">
                  {pillar.details}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2D9CC] flex items-center justify-between text-xs text-[#718096]">
                <span>Căn cứ: {pillar.citation}</span>
                <button
                  onClick={() => onOpenSource("src_stage_3")}
                  className="text-[#8B1E1E] hover:underline font-medium cursor-pointer"
                >
                  Đối chiếu giáo trình &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dialectical synthesis diagram / summary box */}
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#C8BCAC] text-center max-w-3xl mx-auto">
          <h4 className="text-base sm:text-lg font-bold font-scholarly text-[#1C2024] mb-3">
            Mô hình biện chứng: Thực tiễn &harr; Lý luận &harr; Chủ thể sáng tạo
          </h4>
          <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-6">
            Thực tiễn sinh động đặt ra đòi hỏi sống còn; Tinh hoa văn hóa nhân loại và Chủ nghĩa Mác – Lênin soi rọi thế giới quan khoa học; Chủ thể Hồ Chí Minh với tư duy độc lập sáng tạo đã tiếp thu, gạn lọc, vận dụng nhuần nhuyễn để giải phóng dân tộc Việt Nam.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold">
            <span className="px-3 py-1.5 bg-white border border-[#C8BCAC] rounded-lg text-emerald-800">
              Hiện thực thuộc địa
            </span>
            <span>+</span>
            <span className="px-3 py-1.5 bg-white border border-[#C8BCAC] rounded-lg text-[#B88A44]">
              Chủ nghĩa yêu nước & Văn hóa
            </span>
            <span>+</span>
            <span className="px-3 py-1.5 bg-[#8B1E1E] text-white rounded-lg shadow-sm">
              Chủ nghĩa Mác – Lênin (Quyết định)
            </span>
            <span>+</span>
            <span className="px-3 py-1.5 bg-indigo-900 text-white rounded-lg shadow-sm">
              Trí tuệ & Phẩm chất Hồ Chí Minh
            </span>
            <span>=</span>
            <span className="px-4 py-1.5 bg-amber-100 border border-amber-400 text-amber-950 font-bold rounded-lg">
              TƯ TƯỞNG HỒ CHÍ MINH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
