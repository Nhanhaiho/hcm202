"use client";

import React from "react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#E2D9CC]">
      {/* Decorative subtle background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#B88A44]/10 blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#8B1E1E]/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5EFEB] border border-[#C8BCAC] text-[#8B1E1E] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#8B1E1E]"></span>
          <span>HCM202 · Nhóm 5 · Triển lãm Lịch sử Số</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-scholarly text-[#1C2024] tracking-tight leading-tight md:leading-tight mb-4">
          Bản đồ hình thành <br className="hidden sm:inline" />
          <span className="text-[#8B1E1E]">Tư tưởng Hồ Chí Minh</span>
        </h1>

        {/* Lead subheader */}
        <p className="text-lg sm:text-2xl font-scholarly italic text-[#B88A44] mb-8">
          Từ khát vọng cứu nước đến con đường cách mạng Việt Nam
        </p>

        {/* Central Question Card */}
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm border-2 border-[#8B1E1E]/30 rounded-2xl p-6 sm:p-8 shadow-xl mb-8 text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#8B1E1E]" />
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E1E] block mb-2">
            Câu hỏi trung tâm của đề tài
          </span>
          <p className="text-lg sm:text-xl font-scholarly font-bold text-[#1C2024] leading-snug mb-4">
            &ldquo;Tư tưởng Hồ Chí Minh hình thành trên những cơ sở nào, mỗi cơ sở có vai trò gì, và được Người tiếp thu, vận dụng, phát triển qua các giai đoạn như thế nào?&rdquo;
          </p>

          <div className="pt-4 border-t border-[#E2D9CC] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B88A44] block">
              Luận điểm học thuật xuyên suốt (Tổng hợp nghiên cứu)
            </span>
            <p className="text-sm sm:text-base text-[#2D3136] leading-relaxed">
              &ldquo;Tư tưởng Hồ Chí Minh hình thành trên cơ sở thực tiễn Việt Nam và thế giới, kế thừa truyền thống dân tộc, tiếp thu tinh hoa văn hóa nhân loại và chủ nghĩa Mác–Lênin, thông qua hoạt động và tư duy sáng tạo của Hồ Chí Minh. Trong đó, chủ nghĩa Mác–Lênin giữ vai trò cơ sở lý luận quyết định; các yếu tố có vai trò khác nhau, không phải phép cộng cơ học.&rdquo;
            </p>
            <p className="text-xs text-[#718096] italic">
              * Lưu ý khoa học: Đây là nhận định tổng hợp lý luận của nhóm nghiên cứu đối chiếu theo Chương II Giáo trình Tư tưởng Hồ Chí Minh (2019), không trình bày như câu nói nguyên văn của Chủ tịch Hồ Chí Minh.
            </p>
          </div>
        </div>

        {/* Quick navigation buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#timeline"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#8B1E1E] text-white font-medium hover:bg-[#721616] shadow-lg shadow-[#8B1E1E]/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Khám phá dòng thời gian</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a
            href="#storymap"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white border-2 border-[#B88A44] text-[#1C2024] font-medium hover:bg-[#F5EFEB] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Xem bản đồ hình thành</span>
            <svg className="w-4 h-4 text-[#B88A44]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </a>
        </div>

        {/* Highlights stats banner */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/70 p-3 rounded-lg border border-[#E2D9CC]">
            <span className="block text-2xl font-bold font-scholarly text-[#8B1E1E]">5</span>
            <span className="text-xs text-[#4A5568]">Chặng nhận thức lịch sử</span>
          </div>
          <div className="bg-white/70 p-3 rounded-lg border border-[#E2D9CC]">
            <span className="block text-2xl font-bold font-scholarly text-[#B88A44]">8</span>
            <span className="text-xs text-[#4A5568]">Cơ sở cấu thành 3 nhóm</span>
          </div>
          <div className="bg-white/70 p-3 rounded-lg border border-[#E2D9CC]">
            <span className="block text-2xl font-bold font-scholarly text-[#8B1E1E]">1</span>
            <span className="text-xs text-[#4A5568]">Tiền đề lý luận quyết định</span>
          </div>
          <div className="bg-white/70 p-3 rounded-lg border border-[#E2D9CC]">
            <span className="block text-2xl font-bold font-scholarly text-[#1C2024]">100%</span>
            <span className="text-xs text-[#4A5568]">Căn cứ Giáo trình 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
};
