"use client";

import React from "react";

interface StageSummaryProps {
  stage: 1 | 2 | 3 | 4;
  onContinue: () => void;
  soloScore: number;
  stageCorrectCount: number;
  totalCorrectCount: number;
  totalAnsweredSoFar: number;
}

const STAGE_DETAILS = {
  1: {
    title: "Chặng 1 – Bối cảnh và nền tảng",
    range: "Câu 1 – Câu 5",
    desc: "Khảo sát thực tiễn Việt Nam đầu thế kỷ XX, tác động của Cách mạng Tháng Mười Nga, cội nguồn truyền thống yêu nước và sự tiếp cận giá trị tiến bộ văn hóa phương Tây.",
    target: "Mục tiêu: Nhận diện sâu sắc nhu cầu lịch sử và các điều kiện xuất phát điểm."
  },
  2: {
    title: "Chặng 2 – Các cơ sở hình thành",
    range: "Câu 6 – Câu 10",
    desc: "Khẳng định vai trò tiền đề lý luận quyết định của Chủ nghĩa Mác – Lênin, phẩm chất tư duy độc lập tự chủ và năng lực tổng kết thực tiễn sáng tạo của Hồ Chí Minh.",
    target: "Mục tiêu: Nắm chắc bản chất phân tầng chức năng giữa các cơ sở hình thành tư tưởng."
  },
  3: {
    title: "Chặng 3 – Tìm thấy con đường",
    range: "Câu 11 – Câu 15",
    desc: "Dấu mốc trước 1911, bước ngoặt lịch sử năm 1920 với Luận cương của Lênin, giai đoạn hình thành cơ bản 1920–1930 và Cương lĩnh chính trị đầu tiên của Đảng (1930).",
    target: "Mục tiêu: Thấu hiểu bước chuyển về chất từ người yêu nước thành chiến sĩ cộng sản."
  },
  4: {
    title: "Chặng 4 – Phát triển và làm chủ bản đồ",
    range: "Câu 16 – Câu 20",
    desc: "Vượt qua thử thách giữ vững đường lối (1930–1941), thắng lợi Cách mạng Tháng Tám (1945), sự phát triển đến đỉnh cao (1941–1969) và phê phán cách hiểu máy móc.",
    target: "Mục tiêu: Hoàn thiện phương pháp luận biện chứng khoa học Chương II."
  }
};

export const StageSummary: React.FC<StageSummaryProps> = ({
  stage,
  onContinue,
  soloScore,
  stageCorrectCount,
  totalCorrectCount,
  totalAnsweredSoFar
}) => {
  const details = STAGE_DETAILS[stage];

  return (
    <div className="bg-white rounded-2xl border-2 border-[#B88A44] p-6 sm:p-10 shadow-lg text-center max-w-2xl mx-auto animate-fadeIn">
      {/* Badge */}
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#8B1E1E]/10 text-[#8B1E1E] mb-3">
        Tổng kết Chặng {stage}/4
      </span>

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-bold font-scholarly text-[#1C2024] mb-1">
        {details.title}
      </h3>
      <p className="text-xs sm:text-sm font-semibold text-[#B88A44] mb-5">{details.range}</p>

      {/* Description & Target */}
      <div className="bg-[#FAF7F2] border border-[#E2D9CC] rounded-xl p-4 sm:p-5 mb-6 text-left space-y-2">
        <p className="text-xs sm:text-sm text-[#2D3136] leading-relaxed">
          {details.desc}
        </p>
        <p className="text-xs font-semibold text-[#8B1E1E] italic pt-1 border-t border-[#E2D9CC]/60">
          {details.target}
        </p>
      </div>

      {/* Stage Score Grid */}
      <div className="mb-6 p-4 rounded-xl border border-[#E2D9CC] bg-[#F5EFEB]">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg border border-[#E2D9CC]">
            <span className="text-[11px] text-[#718096] block font-medium">Chặng {stage}</span>
            <span className="text-xl font-bold font-mono text-emerald-700">
              {stageCorrectCount}/5
            </span>
            <span className="text-[10px] text-[#718096] block">câu đúng</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#E2D9CC]">
            <span className="text-[11px] text-[#718096] block font-medium">Tích lũy</span>
            <span className="text-xl font-bold font-mono text-[#1C2024]">
              {totalCorrectCount}/{totalAnsweredSoFar}
            </span>
            <span className="text-[10px] text-[#718096] block">tổng đúng</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-[#E2D9CC]">
            <span className="text-[11px] text-[#718096] block font-medium">Điểm số</span>
            <span className="text-xl font-bold font-mono text-[#8B1E1E]">
              {soloScore}
            </span>
            <span className="text-[10px] text-[#718096] block">tổng điểm</span>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button
        type="button"
        onClick={onContinue}
        className="px-8 py-3 rounded-xl bg-[#8B1E1E] text-white text-base font-bold hover:bg-[#721616] shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
      >
        <span>
          {stage < 4 ? `Bắt đầu Chặng ${stage + 1}` : "Xem kết quả chung cuộc"}
        </span>
        <span>&rarr;</span>
      </button>
    </div>
  );
};
