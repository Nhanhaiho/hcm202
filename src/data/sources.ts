export interface AcademicSource {
  id: string;
  bookTitle: string;
  author: string;
  year: number;
  chapter: string;
  pages: string;
  pdfPages: string;
  sectionTitle: string;
  citationShort: string;
  summaryQuote: string;
  academicNote?: string;
}

export const ACADEMIC_SOURCES: Record<string, AcademicSource> = {
  src_tt_vn: {
    id: "src_tt_vn",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "19–21",
    pdfPages: "21–23",
    sectionTitle: "1. Cơ sở thực tiễn - Thực tiễn Việt Nam cuối thế kỷ XIX đầu thế kỷ XX",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 19–21",
    summaryQuote: "Xã hội Việt Nam trở thành xã hội thuộc địa nửa phong kiến. Mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược và mâu thuẫn giữa nhân dân lao động với phong kiến tay sai ngày càng gay gắt. Các phong trào cứu nước theo hệ tư tưởng phong kiến và tư sản lần lượt thất bại, đặt ra yêu cầu bức thiết về một con đường cứu nước mới.",
    academicNote: "Thực tiễn lịch sử dân tộc đặt ra câu hỏi sống còn cho Nguyễn Tất Thành: Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản."
  },
  src_tt_tg: {
    id: "src_tt_tg",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "21–22",
    pdfPages: "23–24",
    sectionTitle: "1. Cơ sở thực tiễn - Thực tiễn thế giới cuối thế kỷ XIX đầu thế kỷ XX",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 21–22",
    summaryQuote: "Chủ nghĩa tư bản chuyển từ tự do cạnh tranh sang giai đoạn đế quốc chủ nghĩa, xác lập ách thống trị thuộc địa trên phạm vi toàn cầu; Cách mạng Tháng Mười Nga năm 1917 thắng lợi mở ra thời đại mới; Quốc tế Cộng sản (Quốc tế III) ra đời thúc đẩy phong trào giải phóng dân tộc gắn liền với phong trào công nhân quốc tế.",
    academicNote: "Giúp Hồ Chí Minh nhận thức bản chất chung của chủ nghĩa đế quốc và tình cảnh chung của các dân tộc thuộc địa, từ đó xác lập sự gắn kết giữa cách mạng giải phóng dân tộc với cách mạng vô sản thế giới."
  },
  src_ll_tt: {
    id: "src_ll_tt",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "22–23",
    pdfPages: "24–25",
    sectionTitle: "2. Cơ sở lý luận - Giá trị truyền thống tốt đẹp của dân tộc Việt Nam",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 22–23",
    summaryQuote: "Chủ nghĩa yêu nước truyền thống là giá trị xuyên suốt, là dòng chủ lưu trong lịch sử tư tưởng Việt Nam; kết hợp với tinh thần đoàn kết, ý thức cộng đồng, lòng nhân ái khoan dung, tinh thần tự lực tự cường và trí thông minh, sáng tạo trong lao động, chiến đấu.",
    academicNote: "Chủ nghĩa yêu nước truyền thống là cội nguồn sâu xa, động lực xuất phát điểm thôi thúc Hồ Chí Minh ra đi tìm đường cứu nước và là cơ sở nền tảng để Người tiếp nhận chủ nghĩa Mác - Lênin."
  },
  src_ll_pd: {
    id: "src_ll_pd",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "23–24",
    pdfPages: "25–26",
    sectionTitle: "2. Cơ sở lý luận - Tinh hoa văn hóa phương Đông",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 23–24",
    summaryQuote: "Tiếp thu những mặt tích cực của Nho giáo (tu dưỡng đạo đức cá nhân, tinh thần nhân nghĩa, triết lý hành động vì dân); Phật giáo (tinh thần từ bi, bác ái, bình đẳng, nhập thế giúp đời); Lão giáo (hòa đồng với thiên nhiên, ít ham muốn vật chất); cùng tư tưởng tiến bộ của Tôn Trung Sơn (Chủ nghĩa Tam Dân).",
    academicNote: "Người tiếp thu có chọn lọc, gạn đục khơi trong, kế thừa các giá trị đạo đức và nhân bản tiến bộ để phục vụ sự nghiệp giải phóng con người."
  },
  src_ll_pt: {
    id: "src_ll_pt",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "24–25",
    pdfPages: "26–27",
    sectionTitle: "2. Cơ sở lý luận - Tinh hoa văn hóa phương Tây",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 24–25",
    summaryQuote: "Tiếp thu tư tưởng Tự do - Bình đẳng - Bác ái của các nhà khai sáng Pháp (Rousseau, Montesquieu, Voltaire); các giá trị nhân quyền và dân quyền tiến bộ trong Tuyên ngôn Độc lập Mỹ (1776) và Tuyên ngôn Nhân quyền và Dân quyền Pháp (1789).",
    academicNote: "Tiếp nhận tinh thần dân chủ, khoa học và tư duy pháp quyền nhưng tỉnh táo nhận ra hạn chế của cách mạng tư sản để không đi theo con đường đó."
  },
  src_ll_ml: {
    id: "src_ll_ml",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "25–26",
    pdfPages: "27–28",
    sectionTitle: "2. Cơ sở lý luận - Chủ nghĩa Mác – Lênin (Tiền đề quyết định)",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 25–26",
    summaryQuote: "Chủ nghĩa Mác – Lênin là cơ sở lý luận quyết định bước phát triển về chất trong tư tưởng Hồ Chí Minh, cung cấp thế giới quan duy vật biện chứng và phương pháp luận khoa học để phân tích thời đại, chỉ đạo thực tiễn giải phóng dân tộc gắn với giải phóng giai cấp và giải phóng con người.",
    academicNote: "Đây là tiền đề lý luận quan trọng nhất, có vai trò quyết định bản chất cách mạng và khoa học của tư tưởng Hồ Chí Minh; biến người yêu nước trở thành chiến sĩ cộng sản lỗi lạc."
  },
  src_cq_pc: {
    id: "src_cq_pc",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "26–27",
    pdfPages: "28–29",
    sectionTitle: "3. Nhân tố chủ quan - Phẩm chất Hồ Chí Minh",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 26–27",
    summaryQuote: "Lòng yêu nước nồng nàn, thương dân tha thiết; hoài bão cứu nước, cứu dân cháy bỏng; ý chí, nghị lực phi thường vượt qua mọi gian nguy; tinh thần độc lập, tự chủ, sáng tạo; phong cách giản dị, khiêm tốn, giàu lòng nhân ái.",
    academicNote: "Phẩm chất cá nhân đặc biệt là động lực nội sinh mãnh liệt giúp Người kiên định mục tiêu giải phóng dân tộc dù trong hoàn cảnh ngục tù hay gian nan hiểm trở."
  },
  src_cq_nl: {
    id: "src_cq_nl",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "27",
    pdfPages: "29",
    sectionTitle: "3. Nhân tố chủ quan - Năng lực hoạt động, tổng kết thực tiễn và phát triển lý luận",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 27",
    summaryQuote: "Tư duy độc lập, tự chủ, sáng tạo, giàu tính phê phán; khả năng thấu hiểu sâu sắc bản chất hiện thực; năng lực tổ chức phong trào quần chúng; đặc biệt là khả năng biến lý luận trừu tượng thành phương châm hành động thực tiễn dễ hiểu, phù hợp với đặc thù Việt Nam.",
    academicNote: "Không sao chép giáo điều mà vận dụng, bổ sung, phát triển sáng tạo lý luận Mác - Lênin vào hoàn cảnh cụ thể của một nước thuộc địa nửa phong kiến ở phương Đông."
  },
  src_stage_1: {
    id: "src_stage_1",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "28",
    pdfPages: "30",
    sectionTitle: "Giai đoạn trước ngày 5/6/1911: Hình thành tư tưởng yêu nước và chí hướng tìm con đường cứu nước mới",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 28",
    summaryQuote: "Hấp thụ truyền thống gia đình và quê hương xứ Nghệ; sớm có tinh thần yêu nước và căm ghét ách áp bức thực dân; khâm phục các bậc tiền bối nhưng không tán thành con đường của các cụ; quyết định xuất dương sang phương Tây để tìm hiểu thực chất 'Tự do - Bình đẳng - Bác ái'.",
    academicNote: "Mốc xuất phát điểm quan trọng đánh dấu sự phân kỳ nhận thức: không đi theo con đường Đông Du sang Nhật hay vận động bạo động phong kiến, mà trực tiếp sang Pháp và phương Tây."
  },
  src_stage_2: {
    id: "src_stage_2",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "28–29",
    pdfPages: "30–31",
    sectionTitle: "Giai đoạn 1911–1920: Hình thành tư tưởng cứu nước, giải phóng dân tộc theo con đường cách mạng vô sản",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 28–29",
    summaryQuote: "Qua lao động và khảo sát ở nhiều châu lục, Người nhận rõ: ở đâu nhân dân lao động cũng bị bóc lột, ở đâu chủ nghĩa đế quốc cũng tàn bạo; năm 1919 gửi Bản Yêu sách của nhân dân An Nam; tháng 7/1920 đọc Sơ thảo Luận cương của Lênin; tháng 12/1920 bỏ phiếu tán thành Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp.",
    academicNote: "Bước ngoặt căn bản trong tư duy: Từ người yêu nước tiến bộ trở thành người cộng sản, gắn độc lập dân tộc với chủ nghĩa xã hội, gắn cách mạng Việt Nam với phong trào cách mạng thế giới."
  },
  src_stage_3: {
    id: "src_stage_3",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "29–31",
    pdfPages: "31–33",
    sectionTitle: "Giai đoạn 1920–1930: Hình thành những nội dung cơ bản của tư tưởng về cách mạng Việt Nam",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 29–31",
    summaryQuote: "Tích cực hoạt động lý luận và thực tiễn qua các tác phẩm Bản án chế độ thực dân Pháp (1925), Đường Kách mệnh (1927); thành lập Hội Việt Nam Cách mạng Thanh niên (1925); chủ trì Hội nghị hợp nhất và soạn thảo Cương lĩnh chính trị đầu tiên của Đảng Cộng sản Việt Nam (1930).",
    academicNote: "Hệ thống luận điểm cốt lõi về con đường cách mạng giải phóng dân tộc được xác lập hoàn chỉnh về mục tiêu, lực lượng, giai cấp lãnh đạo, phương pháp bạo lực và đoàn kết quốc tế."
  },
  src_stage_4: {
    id: "src_stage_4",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "31–33",
    pdfPages: "33–35",
    sectionTitle: "Giai đoạn 1930–1941: Vượt qua thử thách, giữ vững đường lối, phương pháp cách mạng Việt Nam đúng đắn, sáng tạo",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 31–33",
    summaryQuote: "Trải qua thử thách tư tưởng tả khuynh, biệt phái của Quốc tế Cộng sản thời kỳ này; bị giam cầm tại Hương Cảng (1931-1933); vẫn kiên định bảo vệ đường lối độc lập dân tộc gắn liền với đại đoàn kết toàn dân tộc; ngày 28/1/1941 trở về Tổ quốc tại Pác Bó; chủ trì Hội nghị Trung ương 8 (tháng 5/1941) hoàn chỉnh chuyển hướng chỉ đạo chiến lược đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
    academicNote: "Chứng minh bản lĩnh kiên định và năng lực bảo vệ chân lý khoa học, vượt qua hiểu lầm và giáo điều tả khuynh để đưa cách mạng trở về đúng quỹ đạo thắng lợi."
  },
  src_stage_5: {
    id: "src_stage_5",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "33–35",
    pdfPages: "35–37",
    sectionTitle: "Giai đoạn 1941–1969: Tiếp tục phát triển, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 33–35",
    summaryQuote: "Lãnh đạo Cách mạng Tháng Tám 1945 thành công, khai sinh nước Việt Nam Dân chủ Cộng hòa; phát triển tư tưởng kháng chiến toàn dân, toàn diện, trường kỳ (1946-1954); xây dựng chủ nghĩa xã hội ở miền Bắc và đấu tranh giải phóng miền Nam thống nhất đất nước (1954-1969); để lại bản Di chúc thiêng liêng (1969).",
    academicNote: "Tư tưởng Hồ Chí Minh phát triển toàn diện trên mọi lĩnh vực: xây dựng Nhà nước của dân, do dân, vì dân; đại đoàn kết toàn dân tộc; kinh tế, văn hóa, giáo dục, đạo đức cách mạng và xây dựng Đảng trong sạch, vững mạnh."
  },
  src_quiz_discussion: {
    id: "src_quiz_discussion",
    bookTitle: "Giáo trình Tư tưởng Hồ Chí Minh (Dành cho bậc đại học, không chuyên ngành lý luận chính trị)",
    author: "Bộ Giáo dục và Đào tạo",
    year: 2019,
    chapter: "Chương II: Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    pages: "39",
    pdfPages: "41",
    sectionTitle: "Câu hỏi ôn tập và thảo luận chương II",
    citationShort: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 39",
    summaryQuote: "Hệ thống các câu hỏi thảo luận cốt lõi: phân tích cơ sở hình thành, vai trò của từng yếu tố (đặc biệt là chủ nghĩa Mác - Lênin và phẩm chất cá nhân Hồ Chí Minh), và các bước phát triển nhận thức qua các thời kỳ lịch sử.",
    academicNote: "Cơ sở định hình các nội dung tương tác 'Thử hiểu đúng' nhằm làm sáng rõ bản chất phương pháp luận và chống lối tư duy cơ học, giản đơn."
  }
};
