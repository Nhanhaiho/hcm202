"use client";

import React from "react";
import { ACADEMIC_SOURCES } from "@/data/sources";

interface SourcesSectionProps {
  onOpenSource: (sourceId: string) => void;
}

export const SourcesSection: React.FC<SourcesSectionProps> = ({ onOpenSource }) => {
  const sourcesList = Object.values(ACADEMIC_SOURCES);

  return (
    <section id="sources" className="py-16 md:py-24 scroll-mt-16 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B1E1E] bg-[#8B1E1E]/10 px-3 py-1 rounded-full inline-block mb-3">
            Học thuật & Phương pháp
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-scholarly text-[#1C2024]">
            Nguồn tài liệu & Phương pháp thực hiện
          </h2>
          <p className="text-sm sm:text-base text-[#4A5568] mt-3">
            Minh bạch căn cứ đối chiếu, phân định rõ ràng giữa nội dung giáo trình chính thống, sơ đồ diễn giải tổng hợp của Nhóm 5 và vai trò công nghệ hỗ trợ.
          </p>
        </div>

        {/* Primary Source Card */}
        <div className="bg-white rounded-2xl border-2 border-[#C8BCAC] p-6 sm:p-8 shadow-md mb-10">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-2xl text-[#8B1E1E]">📖</span>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8B1E1E] block mb-1">
                Tài liệu nguồn chính thống duy nhất
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-scholarly text-[#1C2024]">
                Bộ Giáo dục và Đào tạo (2019), Giáo trình Tư tưởng Hồ Chí Minh — Dành cho bậc đại học, không chuyên ngành lý luận chính trị, Hà Nội, Chương II.
              </h3>
              <p className="text-xs text-[#718096] mt-1">
                * Tuân thủ quy định học thuật: Không tự ý bổ sung tên nhà xuất bản. Tài liệu PDF nội bộ không đưa vào thư mục công khai để đảm bảo bản quyền và quy định môn học.
              </p>
            </div>
          </div>

          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D9CC] text-xs sm:text-sm text-[#2D3136] space-y-2">
            <p>
              <strong>Phạm vi trích lục:</strong> Toàn bộ 8 cơ sở hình thành và 5 chặng phát triển lịch sử trong sản phẩm này được đối chiếu nghiêm ngặt theo Chương II: <em>Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh</em> (từ trang sách 19 đến 39).
            </p>
            <p>
              <strong>Quy ước trích dẫn:</strong> Các đoạn trích dẫn được ghi rõ: &ldquo;dẫn theo Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. ...&rdquo;, phân định rõ với việc tra cứu trực tiếp từ nguyên bản <em>Hồ Chí Minh Toàn tập</em>.
            </p>
          </div>
        </div>

        {/* Academic Mapping Table */}
        <div className="bg-white rounded-2xl border border-[#C8BCAC] overflow-hidden shadow-sm mb-10">
          <div className="px-6 py-4 border-b border-[#E2D9CC] bg-[#F5EFEB] flex items-center justify-between">
            <h4 className="text-base font-bold font-scholarly text-[#1C2024]">
              Bảng đối chiếu vị trí số trang theo từng chủ đề nội dung
            </h4>
            <span className="text-xs text-[#718096]">14 mục đối chiếu</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#FAF7F2] text-[#4A5568] border-b border-[#E2D9CC] uppercase font-semibold">
                <tr>
                  <th className="px-5 py-3">Chủ đề / Mục nội dung</th>
                  <th className="px-4 py-3">Trang sách</th>
                  <th className="px-4 py-3">Trang PDF</th>
                  <th className="px-4 py-3 text-right">Chi tiết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2D9CC] text-[#2D3136]">
                {sourcesList.map((src) => (
                  <tr key={src.id} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-[#1C2024]">
                      {src.sectionTitle}
                    </td>
                    <td className="px-4 py-3.5 text-[#8B1E1E] font-semibold">
                      tr. {src.pages}
                    </td>
                    <td className="px-4 py-3.5 text-[#4A5568]">
                      tr. {src.pdfPages}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button
                        onClick={() => onOpenSource(src.id)}
                        className="text-xs font-semibold text-[#8B1E1E] hover:underline cursor-pointer"
                      >
                        Mở trích yếu &rarr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Methodology & AI Transparency declaration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#E2D9CC]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8B1E1E] mb-2">
              Phân định vai trò nghiên cứu & diễn giải
            </h4>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              Các mốc thời gian, luận điểm, trích dẫn được rút ra trực tiếp từ Giáo trình 2019. Sơ đồ hình thành 8 nút xoay quanh vùng trung tâm và các câu hỏi trong mục &ldquo;Thử hiểu đúng&rdquo; là sản phẩm tổng hợp, cấu trúc hóa của <strong>Nhóm 5</strong> nhằm giúp người học tiếp cận trực quan, chống lối tư duy cơ học cào bằng.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E2D9CC]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#B88A44] mb-2">
              Minh bạch công nghệ & Hỗ trợ trí tuệ nhân tạo
            </h4>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              Website được lập trình bằng Next.js, React, Tailwind CSS. Trợ lý AI (Google Antigravity) được sử dụng để hỗ trợ viết mã nguồn frontend và định dạng cấu trúc tương tác. Mọi nội dung học thuật đều được nhóm đối chiếu từ tài liệu giáo trình được cung cấp; không có dữ liệu bịa đặt hay khảo sát giả mạo.
            </p>
          </div>
        </div>

        {/* Project Credits Footer */}
        <div className="mt-12 text-center text-xs text-[#718096] pt-6 border-t border-[#E2D9CC]">
          <p className="font-semibold text-[#1C2024]">
            BÀI TẬP NHÓM MÔN HCM202 · NHÓM 5 · NĂM HỌC 2025–2026
          </p>
          <p className="mt-1">
            Sản phẩm Interactive Timeline & Story Map phục vụ mục đích học tập nội bộ và thuyết trình môn học.
          </p>
        </div>
      </div>
    </section>
  );
};
