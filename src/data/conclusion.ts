export interface ConclusionPillar {
  id: string;
  title: string;
  summary: string;
  details: string;
  citation: string;
}

export const CONCLUSION_DATA = {
  centralQuestion: "Tư tưởng Hồ Chí Minh hình thành trên những cơ sở nào, mỗi cơ sở có vai trò gì, và được Người tiếp thu, vận dụng, phát triển qua các giai đoạn như thế nào?",
  overarchingThesis: "Tư tưởng Hồ Chí Minh hình thành trên cơ sở thực tiễn Việt Nam và thế giới, kế thừa truyền thống dân tộc, tiếp thu tinh hoa văn hóa nhân loại và chủ nghĩa Mác–Lênin, thông qua hoạt động và tư duy sáng tạo của Hồ Chí Minh. Trong đó, chủ nghĩa Mác–Lênin giữ vai trò cơ sở lý luận quyết định; các yếu tố có vai trò khác nhau, không phải phép cộng cơ học.",
  thesisNote: "Đây là nhận định tổng hợp khoa học của nhóm nghiên cứu dựa trên tinh thần Chương II Giáo trình Tư tưởng Hồ Chí Minh (2019), không trình bày như câu nói nguyên văn của Chủ tịch Hồ Chí Minh.",
  pillars: [
    {
      id: "pillar_roles",
      title: "1. Đa tầng cơ sở với vai trò chức năng riêng biệt",
      summary: "Các cơ sở không hòa lẫn hay cào bằng, mà mỗi nhân tố đảm nhiệm một chức năng biện chứng xác định.",
      details: "Thực tiễn Việt Nam và thế giới đặt ra yêu cầu sống còn và quy luật thời đại; truyền thống dân tộc nuôi dưỡng cội nguồn tình cảm và ý chí quật khởi; văn hóa Đông - Tây cung cấp tinh hoa tri thức nhân loại. Không có sự pha trộn giản đơn hay phép cộng số học giữa các trường phái tư tưởng.",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 19–25"
    },
    {
      id: "pillar_decisive",
      title: "2. Vai trò quyết định của Chủ nghĩa Mác – Lênin",
      summary: "Là cơ sở lý luận quyết định bước phát triển về chất và bản chất khoa học cách mạng.",
      details: "Chủ nghĩa Mác – Lênin đóng vai trò chiếc kim chỉ nam duy nhất cung cấp thế giới quan duy vật biện chứng và phương pháp luận duy vật lịch sử. Chính chủ nghĩa Mác – Lênin đã biến người thanh niên yêu nước Nguyễn Tất Thành thành người chiến sĩ cộng sản kiên trung Nguyễn Ái Quốc, đưa phong trào giải phóng dân tộc Việt Nam hòa vào dòng chảy cách mạng vô sản toàn cầu.",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 25–26"
    },
    {
      id: "pillar_agency",
      title: "3. Vai trò chủ động, sáng tạo của Chủ thể Hồ Chí Minh",
      summary: "Hồ Chí Minh không sao chép giáo điều mà là linh hồn kết tinh và sáng tạo nên hệ tư tưởng.",
      details: "Tư tưởng Hồ Chí Minh chỉ có thể ra đời nhờ phẩm chất kiên định, trí tuệ mẫn tiệp, tư duy độc lập và năng lực tổng kết thực tiễn kiệt xuất của Người. Người đã tiếp thu có phê phán, 'gạn đục khơi trong', loại bỏ những điều lỗi thời, kế thừa những giá trị nhân văn tiến bộ và sáng tạo phát triển lý luận Mác - Lênin vào hoàn cảnh cụ thể của một nước thuộc địa nửa phong kiến.",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 26–27"
    },
    {
      id: "pillar_praxis",
      title: "4. Sự gắn bó hữu cơ biện chứng giữa Lý luận và Thực tiễn",
      summary: "Lý luận xuất phát từ thực tiễn và quay trở lại chỉ đạo, kiểm nghiệm trong thực tiễn đấu tranh sinh động.",
      details: "Tư tưởng Hồ Chí Minh không dừng lại ở những trang sách lý thuyết mà luôn đồng hành, phát triển qua từng chặng đường cam go của cách mạng Việt Nam: từ giải phóng dân tộc, lập nên nước Việt Nam Dân chủ Cộng hòa, đến hai cuộc kháng chiến vĩ đại và công cuộc xây dựng chế độ mới. Thực tiễn cách mạng là thước đo cao nhất chứng minh chân lý sáng ngời của tư tưởng Người.",
      citation: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 28–35"
    }
  ]
};
