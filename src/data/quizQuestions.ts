export type QuizQuestion = {
  id: number;
  stage: 1 | 2 | 3 | 4;
  category: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  source: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    stage: 1,
    category: "Thực tiễn Việt Nam",
    question: "Vì sao đầu thế kỷ XX Việt Nam cần tìm một con đường cứu nước mới?",
    options: [
      "Nhân dân chưa hình thành tinh thần yêu nước.",
      "Các khuynh hướng cứu nước cũ chưa giải quyết được khủng hoảng đường lối.",
      "Việt Nam chưa từng xuất hiện phong trào chống Pháp.",
      "Phong trào quốc tế yêu cầu Việt Nam đổi đường lối."
    ],
    correctIndex: 1,
    explanation: "Sự thất bại của các phong trào theo khuynh hướng phong kiến và tư sản đặt ra yêu cầu cấp bách phải tìm một con đường cứu nước mới.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 19–21."
  },
  {
    id: 2,
    stage: 1,
    category: "Bối cảnh thế giới",
    question: "Sự kiện nào mở ra thời đại cách mạng mới và ảnh hưởng mạnh đến lựa chọn của Hồ Chí Minh?",
    options: [
      "Cách mạng Tháng Mười Nga năm 1917.",
      "Chiến tranh thế giới thứ hai kết thúc.",
      "Liên hợp quốc chính thức được thành lập.",
      "Phong trào Đông Du được phát động."
    ],
    correctIndex: 0,
    explanation: "Cách mạng Tháng Mười Nga mở ra thời đại mới và tác động sâu sắc đến phong trào cách mạng, giải phóng dân tộc trên thế giới.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 21–22."
  },
  {
    id: 3,
    stage: 1,
    category: "Truyền thống dân tộc",
    question: "Truyền thống yêu nước giữ vai trò chủ yếu nào đối với Hồ Chí Minh?",
    options: [
      "Cung cấp sẵn một mô hình cách mạng hoàn chỉnh.",
      "Thay thế mọi học thuyết được tiếp xúc sau này.",
      "Tạo cội nguồn và động lực tìm đường cứu nước.",
      "Chỉ ảnh hưởng đến đời sống đạo đức cá nhân."
    ],
    correctIndex: 2,
    explanation: "Chủ nghĩa yêu nước là cội nguồn, động lực thôi thúc Hồ Chí Minh ra đi tìm đường cứu nước, nhưng chưa tự cung cấp con đường cách mạng mới.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 22–23."
  },
  {
    id: 4,
    stage: 1,
    category: "Khủng hoảng đường lối",
    question: "Thất bại của các phong trào yêu nước cuối thế kỷ XIX đầu thế kỷ XX cho thấy điều gì?",
    options: [
      "Mọi hình thức đấu tranh đều không còn giá trị.",
      "Dân tộc Việt Nam không đủ khả năng tự giải phóng.",
      "Chỉ cần tiếp tục nguyên vẹn con đường phong kiến.",
      "Cần khảo nghiệm một con đường cứu nước phù hợp hơn."
    ],
    correctIndex: 3,
    explanation: "Các thất bại không phủ nhận lòng yêu nước mà cho thấy sự bế tắc của những con đường cũ và nhu cầu tìm hướng đi mới.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 19–21."
  },
  {
    id: 5,
    stage: 1,
    category: "Văn hóa phương Tây",
    question: "Hồ Chí Minh tiếp cận giá trị tiến bộ nào từ văn hóa phương Tây?",
    options: [
      "Tự do, bình đẳng và quyền con người.",
      "Chế độ thuộc địa và sự phân biệt dân tộc.",
      "Quyền lực tuyệt đối của nhà nước phong kiến.",
      "Tư tưởng khước từ mọi cuộc cách mạng xã hội."
    ],
    correctIndex: 0,
    explanation: "Người tiếp thu các giá trị tiến bộ về tự do, bình đẳng, quyền con người, đồng thời nhận rõ khoảng cách giữa khẩu hiệu và thực tế thuộc địa.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 24–25."
  },
  {
    id: 6,
    stage: 2,
    category: "Chủ nghĩa Mác–Lênin",
    question: "Vì sao chủ nghĩa Mác–Lênin là tiền đề lý luận quyết định?",
    options: [
      "Đây là nguồn văn hóa duy nhất Người từng tiếp xúc.",
      "Nó cung cấp thế giới quan và phương pháp luận khoa học.",
      "Nó thay thế hoàn toàn truyền thống yêu nước Việt Nam.",
      "Nó được áp dụng nguyên vẹn cho mọi dân tộc thuộc địa."
    ],
    correctIndex: 1,
    explanation: "Chủ nghĩa Mác–Lênin giúp Hồ Chí Minh xác định con đường giải phóng dân tộc và cung cấp thế giới quan, phương pháp luận khoa học.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 25–26."
  },
  {
    id: 7,
    stage: 2,
    category: "Phẩm chất Hồ Chí Minh",
    question: "Phẩm chất nào giúp Hồ Chí Minh xử lý sáng tạo các nguồn tư tưởng?",
    options: [
      "Chấp nhận mọi học thuyết mà không cần kiểm chứng.",
      "Tin rằng một mô hình có thể dùng cho mọi quốc gia.",
      "Tư duy độc lập, tự chủ và óc phê phán.",
      "Tách nghiên cứu lý luận khỏi hoạt động thực tiễn."
    ],
    correctIndex: 2,
    explanation: "Tư duy độc lập, tự chủ, sáng tạo và tinh thần phê phán giúp Người tiếp thu có chọn lọc thay vì sao chép máy móc.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 26–27."
  },
  {
    id: 8,
    stage: 2,
    category: "Tổng kết thực tiễn",
    question: "Năng lực tổng kết thực tiễn có ý nghĩa gì đối với sự phát triển tư tưởng Hồ Chí Minh?",
    options: [
      "Giúp ghi nhớ đầy đủ mọi sự kiện đã trải qua.",
      "Làm cho hoạt động thực tiễn không cần đến lý luận.",
      "Cho phép dùng nguyên mẫu cách mạng của nước khác.",
      "Giúp kiểm nghiệm, bổ sung và phát triển lý luận."
    ],
    correctIndex: 3,
    explanation: "Hồ Chí Minh gắn lý luận với thực tiễn, dùng thực tiễn để kiểm nghiệm và tiếp tục bổ sung, phát triển nhận thức.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 27."
  },
  {
    id: 9,
    stage: 2,
    category: "Văn hóa phương Đông",
    question: "Yếu tố tích cực nào của Nho giáo được Hồ Chí Minh tiếp thu?",
    options: [
      "Triết lý hành động và tu dưỡng đạo đức.",
      "Trật tự đẳng cấp bất biến trong xã hội.",
      "Quan niệm coi nhẹ vai trò của người lao động.",
      "Tư tưởng bảo vệ tuyệt đối chế độ phong kiến."
    ],
    correctIndex: 0,
    explanation: "Người tiếp thu những yếu tố tích cực như triết lý hành động, tu dưỡng đạo đức, đồng thời loại bỏ các yếu tố bảo thủ và phân biệt đẳng cấp.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 23–24."
  },
  {
    id: 10,
    stage: 2,
    category: "Phương pháp tiếp thu",
    question: "Hồ Chí Minh tiếp thu tinh hoa văn hóa nhân loại theo phương pháp nào?",
    options: [
      "Ưu tiên hoàn toàn phương Đông và loại bỏ phương Tây.",
      "Chọn lọc giá trị tiến bộ và phê phán mặt hạn chế.",
      "Tiếp nhận đồng đều mọi hệ tư tưởng đã gặp.",
      "Chỉ dựa vào sách vở, không đối chiếu thực tiễn."
    ],
    correctIndex: 1,
    explanation: "Người tiếp thu có chọn lọc, kế thừa những hạt nhân hợp lý và chuyển hóa chúng phù hợp với mục tiêu giải phóng dân tộc, con người.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 23–25."
  },
  {
    id: 11,
    stage: 3,
    category: "Giai đoạn trước 1911",
    question: "Nội dung nổi bật trong tư tưởng Hồ Chí Minh trước ngày 5/6/1911 là gì?",
    options: [
      "Hoàn thiện hệ thống quan điểm về cách mạng Việt Nam.",
      "Thành lập chính đảng của giai cấp công nhân Việt Nam.",
      "Hình thành lòng yêu nước và chí hướng tìm đường mới.",
      "Xác lập đầy đủ con đường cách mạng vô sản."
    ],
    correctIndex: 2,
    explanation: "Trước khi ra đi, Hồ Chí Minh đã hình thành tư tưởng yêu nước, thương dân và chí hướng khảo nghiệm một con đường cứu nước mới.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 28."
  },
  {
    id: 12,
    stage: 3,
    category: "Bước ngoặt năm 1920",
    question: "Việc đọc Luận cương của Lênin giúp Hồ Chí Minh giải đáp vấn đề cốt lõi nào?",
    options: [
      "Cách tổ chức riêng một nhà nước tư sản thuộc địa.",
      "Phương pháp khôi phục nguyên vẹn xã hội phong kiến.",
      "Khả năng cứu nước bằng cải cách hành chính ôn hòa.",
      "Con đường giải phóng dân tộc gắn với cách mạng vô sản."
    ],
    correctIndex: 3,
    explanation: "Luận cương của Lênin giúp Người tìm thấy lời giải cho con đường giải phóng dân tộc theo cách mạng vô sản.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 28–29."
  },
  {
    id: 13,
    stage: 3,
    category: "Giai đoạn 1911–1920",
    question: "Kết quả quan trọng nhất của giai đoạn 1911–1920 là gì?",
    options: [
      "Xác định con đường cứu nước theo cách mạng vô sản.",
      "Hoàn thành mọi nội dung của tư tưởng cách mạng.",
      "Trực tiếp lãnh đạo thắng lợi Cách mạng Tháng Tám.",
      "Soạn thảo đầy đủ đường lối kháng chiến lâu dài."
    ],
    correctIndex: 0,
    explanation: "Qua khảo nghiệm thực tiễn và tiếp cận chủ nghĩa Mác–Lênin, Hồ Chí Minh lựa chọn con đường cách mạng vô sản.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 28–29."
  },
  {
    id: 14,
    stage: 3,
    category: "Giai đoạn 1920–1930",
    question: "Ý nghĩa nổi bật của giai đoạn 1920–1930 là gì?",
    options: [
      "Mới hình thành tình cảm yêu nước ban đầu.",
      "Chỉ tập trung khảo sát xã hội các nước phương Tây.",
      "Hình thành nội dung cơ bản về cách mạng Việt Nam.",
      "Tạm dừng phát triển lý luận để chờ thời cơ."
    ],
    correctIndex: 2,
    explanation: "Giai đoạn này hình thành những nội dung cơ bản của tư tưởng Hồ Chí Minh về cách mạng Việt Nam qua hoạt động lý luận và tổ chức.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 29–31."
  },
  {
    id: 15,
    stage: 3,
    category: "Thành lập Đảng",
    question: "Sự kiện nào đánh dấu tư tưởng về đường lối cách mạng được thể hiện trong cương lĩnh đầu tiên?",
    options: [
      "Người rời Bến Nhà Rồng năm 1911.",
      "Hội nghị thành lập Đảng đầu năm 1930.",
      "Cách mạng Tháng Mười Nga thắng lợi.",
      "Cách mạng Tháng Tám thành công."
    ],
    correctIndex: 1,
    explanation: "Hồ Chí Minh chủ trì Hội nghị thành lập Đảng và soạn thảo các văn kiện đầu tiên, thể hiện những quan điểm cơ bản về cách mạng Việt Nam.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 30–31."
  },
  {
    id: 16,
    stage: 4,
    category: "Giai đoạn 1930–1941",
    question: "Điểm nổi bật của giai đoạn 1930–1941 là gì?",
    options: [
      "Chuyển từ yêu nước sang tìm hiểu đời sống công nhân.",
      "Hoàn thành toàn bộ nhiệm vụ xây dựng chủ nghĩa xã hội.",
      "Tạm thời thay đổi mục tiêu giành độc lập dân tộc.",
      "Vượt thử thách và giữ vững đường lối sáng tạo."
    ],
    correctIndex: 3,
    explanation: "Giai đoạn này thể hiện việc Hồ Chí Minh vượt qua thử thách, kiên trì quan điểm đúng đắn và sáng tạo về cách mạng Việt Nam.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 31–33."
  },
  {
    id: 17,
    stage: 4,
    category: "Giai đoạn 1941–1969",
    question: "Tư tưởng Hồ Chí Minh trong giai đoạn 1941–1969 có đặc điểm chủ yếu nào?",
    options: [
      "Tiếp tục phát triển và soi đường cho cách mạng.",
      "Chỉ còn lặp lại những nhận thức của năm 1920.",
      "Tách rời nhiệm vụ dân tộc khỏi thực tiễn đất nước.",
      "Không còn được bổ sung qua hoạt động lãnh đạo."
    ],
    correctIndex: 0,
    explanation: "Trong giai đoạn này, tư tưởng Hồ Chí Minh tiếp tục được bổ sung, phát triển và soi đường cho sự nghiệp cách mạng của Đảng, nhân dân.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 33–35."
  },
  {
    id: 18,
    stage: 4,
    category: "Kiểm nghiệm thực tiễn",
    question: "Thắng lợi của Cách mạng Tháng Tám năm 1945 cho thấy điều gì?",
    options: [
      "Mọi vấn đề cách mạng đã được giải quyết vĩnh viễn.",
      "Lý luận có thể thành công mà không cần tổ chức thực tiễn.",
      "Đường lối giải phóng dân tộc được thực tiễn kiểm nghiệm.",
      "Mục tiêu độc lập không còn gắn với quyền của nhân dân."
    ],
    correctIndex: 2,
    explanation: "Thắng lợi năm 1945 là kết quả thực tiễn quan trọng, kiểm nghiệm tính đúng đắn của đường lối giải phóng dân tộc đã được xác lập.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 33–34."
  },
  {
    id: 19,
    stage: 4,
    category: "Vai trò các cơ sở",
    question: "Các cơ sở hình thành tư tưởng Hồ Chí Minh có giữ vai trò ngang nhau không?",
    options: [
      "Có, vì mỗi cơ sở đóng góp một tỷ lệ bằng nhau.",
      "Không, mỗi cơ sở thực hiện một vai trò khác nhau.",
      "Có, vì tất cả đều là những hệ tư tưởng hoàn chỉnh.",
      "Không, vì chỉ bối cảnh thế giới tạo ra tư tưởng."
    ],
    correctIndex: 1,
    explanation: "Các cơ sở cùng tham gia nhưng có chức năng khác nhau; trong đó chủ nghĩa Mác–Lênin giữ vai trò tiền đề lý luận quyết định.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 19–27."
  },
  {
    id: 20,
    stage: 4,
    category: "Nhận diện cách hiểu sai",
    question: "Nhận định nào thể hiện cách hiểu máy móc về quá trình hình thành tư tưởng Hồ Chí Minh?",
    options: [
      "Thực tiễn đặt ra yêu cầu cho quá trình nhận thức.",
      "Các nguồn ảnh hưởng giữ những vai trò khác nhau.",
      "Hồ Chí Minh tiếp thu văn hóa nhân loại có chọn lọc.",
      "Tư tưởng là phép cộng nguyên vẹn của các nguồn."
    ],
    correctIndex: 3,
    explanation: "Tư tưởng Hồ Chí Minh không phải phép cộng cơ học. Các giá trị được Người chủ động lựa chọn, chuyển hóa, vận dụng và phát triển trong thực tiễn.",
    source: "Tổng hợp Giáo trình Tư tưởng Hồ Chí Minh 2019, Chương II, tr. 19–35."
  }
];

export interface TimelineBonusStage {
  id: number;
  period: string;
  name: string;
  detail: string;
}

export const TIMELINE_BONUS_STAGES: TimelineBonusStage[] = [
  {
    id: 1,
    period: "Trước ngày 5/6/1911",
    name: "Hình thành tư tưởng yêu nước và chí hướng cứu nước",
    detail: "Tiếp thu truyền thống gia đình, quê hương; bước đầu nhận thức nỗi đau mất nước và định hình ý chí xuất dương tìm đường cứu nước."
  },
  {
    id: 2,
    period: "Từ 6/6/1911 đến 30/12/1920",
    name: "Tìm tòi con đường cứu nước, giải phóng dân tộc",
    detail: "Khảo sát thực tiễn nhiều quốc gia, tiếp cận Sơ thảo Luận cương của Lênin (7/1920) và bỏ phiếu gia nhập Quốc tế III, sáng lập ĐCS Pháp (12/1920)."
  },
  {
    id: 3,
    period: "Từ 31/12/1920 đến 3/2/1930",
    name: "Hình thành những nội dung cơ bản tư tưởng về cách mạng Việt Nam",
    detail: "Hoạt động lý luận và tổ chức sôi nổi: Bản án chế độ thực dân Pháp, Đường Kách mệnh, thành lập Hội VN Cách mạng Thanh niên và sáng lập Đảng."
  },
  {
    id: 4,
    period: "Từ 4/2/1930 đến 28/1/1941",
    name: "Vượt qua thử thách, kiên trì giữ vững đường lối cách mạng",
    detail: "Kiên định quan điểm độc lập dân tộc gắn liền CNXH trước khuynh hướng tả khuynh; trở về nước trực tiếp lãnh đạo phong trào (đầu 1941)."
  },
  {
    id: 5,
    period: "Từ 29/1/1941 đến 2/9/1969",
    name: "Phát triển và hoàn thiện tư tưởng Hồ Chí Minh",
    detail: "Chuyển hướng chỉ đạo chiến lược cách mạng, lãnh đạo Cách mạng Tháng Tám thành công và hai cuộc kháng chiến chống xâm lược."
  }
];

export interface InfluenceBonusPair {
  id: string;
  premise: string;
  role: string;
}

export const INFLUENCE_BONUS_PAIRS: InfluenceBonusPair[] = [
  {
    id: "inf_1",
    premise: "Thực tiễn Việt Nam",
    role: "Đặt ra yêu cầu phải tìm con đường cứu nước mới."
  },
  {
    id: "inf_2",
    premise: "Truyền thống dân tộc",
    role: "Cội nguồn và động lực yêu nước."
  },
  {
    id: "inf_3",
    premise: "Tinh hoa văn hóa Đông–Tây",
    role: "Bồi đắp giá trị nhân văn và tri thức."
  },
  {
    id: "inf_4",
    premise: "Chủ nghĩa Mác–Lênin",
    role: "Tiền đề lý luận quyết định."
  },
  {
    id: "inf_5",
    premise: "Nhân tố chủ quan Hồ Chí Minh",
    role: "Tiếp thu, chọn lọc, chuyển hóa và phát triển sáng tạo."
  }
];

/**
 * Hàm kiểm tra tự động toàn diện chất lượng ngân hàng câu hỏi (Mục 8).
 * Thực thi kiểm tra trong môi trường phát triển (development).
 */
export function validateQuizData(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // 1. Đúng 20 câu và ID không trùng
  if (quizQuestions.length !== 20) {
    errors.push(`Số lượng câu hỏi không đúng: có ${quizQuestions.length} câu (yêu cầu đúng 20 câu).`);
  }
  const ids = new Set<number>();
  quizQuestions.forEach((q) => {
    if (ids.has(q.id)) {
      errors.push(`ID câu hỏi bị trùng: ${q.id}.`);
    }
    ids.add(q.id);
  });

  // 2. Mỗi chặng có đúng 5 câu
  const stagesCount: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  quizQuestions.forEach((q) => {
    if (q.stage >= 1 && q.stage <= 4) {
      stagesCount[q.stage] = (stagesCount[q.stage] || 0) + 1;
    } else {
      errors.push(`Câu ${q.id} có stage không hợp lệ: ${q.stage}.`);
    }
  });
  for (let s = 1; s <= 4; s++) {
    if (stagesCount[s] !== 5) {
      errors.push(`Chặng ${s} có ${stagesCount[s]} câu (yêu cầu đúng 5 câu).`);
    }
  }

  // 3. Mỗi câu có đúng 4 phương án và correctIndex từ 0 đến 3
  quizQuestions.forEach((q) => {
    if (!q.options || q.options.length !== 4) {
      errors.push(`Câu ${q.id} không có đúng 4 phương án.`);
    }
    if (q.correctIndex < 0 || q.correctIndex > 3) {
      errors.push(`Câu ${q.id} có correctIndex ${q.correctIndex} nằm ngoài khoảng 0–3.`);
    }
    if (!q.explanation || q.explanation.trim() === "") {
      errors.push(`Câu ${q.id} thiếu phần giải thích (explanation).`);
    }
    if (!q.source || q.source.trim() === "") {
      errors.push(`Câu ${q.id} thiếu nguồn đối chiếu (source).`);
    }
  });

  // 4. Phân bố vị trí đáp án đúng cân bằng tuyệt đối: A: 5, B: 5, C: 5, D: 5
  const letterCounts: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
  quizQuestions.forEach((q) => {
    letterCounts[q.correctIndex] = (letterCounts[q.correctIndex] || 0) + 1;
  });
  const letters = ["A", "B", "C", "D"];
  for (let i = 0; i < 4; i++) {
    if (letterCounts[i] !== 5) {
      errors.push(`Phương án ${letters[i]} xuất hiện đúng ${letterCounts[i]} lần (yêu cầu đúng 5 lần).`);
    }
  }

  // 5. Không để một chữ cái đúng quá hai lần liên tiếp
  for (let i = 0; i < quizQuestions.length - 2; i++) {
    if (
      quizQuestions[i].correctIndex === quizQuestions[i + 1].correctIndex &&
      quizQuestions[i + 1].correctIndex === quizQuestions[i + 2].correctIndex
    ) {
      errors.push(
        `Chữ cái ${letters[quizQuestions[i].correctIndex]} bị lặp 3 lần liên tiếp tại các câu ${quizQuestions[i].id}, ${quizQuestions[i + 1].id}, ${quizQuestions[i + 2].id}.`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

// Tự động kiểm tra trong development
if (process.env.NODE_ENV !== "production") {
  const check = validateQuizData();
  if (!check.valid) {
    console.error("[Quiz Validation Errors]:", check.errors);
  }
}
