export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  explanation: string;
  academicSource: string;
  sourceId: string;
  coreInsight: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "quiz_1",
    question: "Vì sao lòng yêu nước nồng nàn là động lực to lớn nhưng chưa đủ để giải thích toàn bộ việc Hồ Chí Minh lựa chọn con đường cách mạng vô sản?",
    options: [
      {
        id: "q1_opt_a",
        text: "Vì lòng yêu nước của người Việt Nam thời kỳ đó chưa đủ sâu sắc để thúc đẩy hành động cách mạng.",
        isCorrect: false
      },
      {
        id: "q1_opt_b",
        text: "Vì lòng yêu nước truyền thống là điều kiện cần và cội nguồn thôi thúc, nhưng để tìm ra con đường cứu nước đúng đắn trong thời đại mới bắt buộc phải có thế giới quan khoa học và phương pháp luận cách mạng của chủ nghĩa Mác – Lênin soi đường.",
        isCorrect: true
      },
      {
        id: "q1_opt_c",
        text: "Vì Hồ Chí Minh đã từ bỏ chủ nghĩa yêu nước truyền thống để chuyển hoàn toàn sang chủ nghĩa quốc tế.",
        isCorrect: false
      },
      {
        id: "q1_opt_d",
        text: "Vì phong trào công nhân thế giới ép buộc người cách mạng thuộc địa phải đi theo quỹ đạo của họ.",
        isCorrect: false
      }
    ],
    explanation: "Các bậc tiền bối như Phan Bội Châu, Phan Chu Trinh, Hoàng Hoa Thám đều nồng nàn yêu nước và sẵn sàng hy sinh, nhưng các phong trào đều thất bại vì thiếu một hệ tư tưởng khoa học dẫn đường. Lòng yêu nước truyền thống là động lực xuất phát điểm, nhưng chỉ khi Hồ Chí Minh tiếp thu chủ nghĩa Mác – Lênin, lòng yêu nước ấy mới được nâng lên tầm cao mới: độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
    academicSource: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 22–23 & tr. 25–26",
    sourceId: "src_ll_tt",
    coreInsight: "Yêu nước là động lực tinh thần cội nguồn; Chủ nghĩa Mác – Lênin là vũ khí lý luận quyết định định hướng đường lối."
  },
  {
    id: "quiz_2",
    question: "Vì sao năm 1920 là bước ngoặt quyết định nhưng không có nghĩa là toàn bộ Tư tưởng Hồ Chí Minh đã hoàn chỉnh ngay tại thời điểm đó?",
    options: [
      {
        id: "q2_opt_a",
        text: "Vì năm 1920 Người mới chỉ tìm thấy con đường cứu nước đúng đắn (phương hướng chiến lược); toàn bộ hệ thống quan điểm cụ thể, đường lối chính trị, sách lược, phương pháp cách mạng và tổ chức lãnh đạo còn cần tiếp tục được khảo nghiệm, đúc kết và phát triển qua thực tiễn những năm sau đó.",
        isCorrect: true
      },
      {
        id: "q2_opt_b",
        text: "Vì lúc đó Người chưa thực sự gia nhập Đảng Cộng sản Pháp mà chỉ mới tìm hiểu trên lý thuyết.",
        isCorrect: false
      },
      {
        id: "q2_opt_c",
        text: "Vì Luận cương của Lênin không đề cập cụ thể đến bất kỳ vấn đề nào của các nước thuộc địa châu Á.",
        isCorrect: false
      },
      {
        id: "q2_opt_d",
        text: "Vì tư tưởng cách mạng của Hồ Chí Minh chỉ thực sự bắt đầu hình thành từ sau Cách mạng Tháng Tám năm 1945.",
        isCorrect: false
      }
    ],
    explanation: "Năm 1920 đánh dấu bước ngoặt về chất khi Người xác định được con đường cách mạng vô sản. Tuy nhiên, một hệ tư tưởng hoàn chỉnh cần quá trình cụ thể hóa: viết 'Bản án chế độ thực dân Pháp' (1925), 'Đường Kách mệnh' (1927), soạn thảo 'Cương lĩnh chính trị đầu tiên' (1930), rồi tiếp tục tôi luyện qua thử thách (1930–1941) và kiểm nghiệm qua hai cuộc kháng chiến vĩ đại (1945–1969).",
    academicSource: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 28–31",
    sourceId: "src_stage_2",
    coreInsight: "Nhận thức là một quá trình vận động biện chứng: từ bước ngoặt xác định mục tiêu con đường (1920) đến xây dựng hệ thống lý luận (1920–1930) và hoàn thiện trong thực tiễn lãnh đạo (1930–1969)."
  },
  {
    id: "quiz_3",
    question: "Nhiều cơ sở cùng tham gia hình thành Tư tưởng Hồ Chí Minh có đồng nghĩa với việc các cơ sở đó có vai trò ngang nhau không?",
    options: [
      {
        id: "q3_opt_a",
        text: "Có, vì mỗi yếu tố đều đóng góp một tỉ lệ phần trăm ngang nhau trong việc cấu thành tư tưởng.",
        isCorrect: false
      },
      {
        id: "q3_opt_b",
        text: "Có, vì tư tưởng Hồ Chí Minh là phép cộng cơ học tập hợp từ tất cả các học thuyết Đông, Tây, kim, cổ.",
        isCorrect: false
      },
      {
        id: "q3_opt_c",
        text: "Không, các cơ sở giữ vai trò khác nhau: thực tiễn đặt ra yêu cầu; truyền thống nuôi dưỡng động lực; văn hóa nhân loại bồi đắp tri thức nhân văn; trong đó chủ nghĩa Mác – Lênin giữ vai trò cơ sở lý luận quyết định, và nhân tố chủ quan Hồ Chí Minh giữ vai trò tiếp thu, gạn lọc, sáng tạo.",
        isCorrect: true
      },
      {
        id: "q3_opt_d",
        text: "Không, chỉ có chủ nghĩa Mác – Lênin có ý nghĩa, còn các yếu tố truyền thống và văn hóa khác không đóng vai trò gì.",
        isCorrect: false
      }
    ],
    explanation: "Tư tưởng Hồ Chí Minh không phải là phép cộng số học giản đơn hay sự lắp ghép cơ học. Mỗi cơ sở đóng một chức năng bản thể luận riêng biệt. Trong đó, Chủ nghĩa Mác – Lênin là tiền đề lý luận quan trọng nhất, đóng vai trò quyết định bản chất cách mạng và khoa học; còn Hồ Chí Minh là chủ thể sáng tạo đã vận dụng biện chứng các cơ sở ấy vào hoàn cảnh nước ta.",
    academicSource: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 19 & tr. 25–27",
    sourceId: "src_ll_ml",
    coreInsight: "Các yếu tố có vai trò phân tầng chức năng rõ rệt; chống lối tư duy cào bằng hoặc cơ học."
  }
];
