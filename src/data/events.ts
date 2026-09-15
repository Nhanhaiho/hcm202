export interface TimelineEvent {
  id: string;
  stageId: string;
  dateDisplay: string;
  exactDate?: string;
  title: string;
  tag: string;
  context: string;
  eventDetails: string;
  significance: string;
  relatedInfluenceIds: string[];
  sourceId: string;
}

export const TIMELINE_EVENTS: Record<string, TimelineEvent> = {
  evt_1_quehuong: {
    id: "evt_1_quehuong",
    stageId: "stage_1",
    dateDisplay: "Thời niên thiếu (1890 – 1910)",
    title: "Gia đình, quê hương xứ Nghệ và những bài học tuổi trẻ",
    tag: "Cội nguồn tư tưởng",
    context: "Sinh ra tại làng Sen, Nam Đàn, Nghệ An trong một gia đình nhà nho yêu nước có truyền thống hiếu học, sống gần gũi với nhân dân lao động nghèo khổ.",
    eventDetails: "Hấp thụ đạo lý dân tộc từ cha (cụ Phó bảng Nguyễn Sinh Sắc) và mẹ (bà Hoàng Thị Loan). Tận mắt chứng kiến nỗi cơ cực của đồng bào dưới ách sưu cao thuế nặng và các phong trào đấu tranh đẫm máu của các chí sĩ tiền bối.",
    significance: "Sớm hun đúc lòng thương dân sâu sắc, tinh thần căm thù giặc cướp nước; đồng thời hình thành nhận thức độc lập: không tán thành con đường bạo động phong kiến hay cầu viện nước ngoài của các bậc tiền bối.",
    relatedInfluenceIds: ["inf_ll_tt", "inf_ll_pd", "inf_cq_pc"],
    sourceId: "src_stage_1"
  },
  evt_1_xuatduong: {
    id: "evt_1_xuatduong",
    stageId: "stage_1",
    dateDisplay: "Ngày 5 tháng 6 năm 1911",
    exactDate: "1911-06-05",
    title: "Rời bến cảng Nhà Rồng ra đi tìm con đường cứu nước mới",
    tag: "Khởi đầu cuộc hành trình",
    context: "Các phong trào yêu nước đầu thế kỷ XX (Đông Du, Duy Tân, Yên Thế) bị thực dân Pháp dìm trong bể máu, cách mạng Việt Nam lâm vào bế tắc sâu sắc về đường lối.",
    eventDetails: "Với tên gọi Văn Ba, Người bước chân lên con tàu buôn Amiral Latouche-Tréville rời Tổ quốc, mở đầu cuộc hành trình bôn ba tìm chân lý cứu nước kéo dài 30 năm.",
    significance: "Khẳng định chí hướng mới: Sang tận nước Pháp và các nước phương Tây để khảo sát bản chất 'Tự do - Bình đẳng - Bác ái', xem họ làm thế nào để trở về giúp đồng bào.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_cq_pc"],
    sourceId: "src_stage_1"
  },
  evt_2_khao_sat: {
    id: "evt_2_khao_sat",
    stageId: "stage_2",
    dateDisplay: "Năm 1911 – 1917",
    title: "Hành trình khảo sát thực tiễn qua nhiều châu lục",
    tag: "Khảo nghiệm thực tiễn",
    context: "Bước vào thế giới tư bản phương Tây và hệ thống thuộc địa tại Á, Phi, Mỹ Latinh; làm nhiều nghề lao động cực nhọc để sinh sống.",
    eventDetails: "Khảo sát thực tiễn tại Pháp, Mỹ (New York, Boston), Anh (London) và nhiều thuộc địa ở châu Phi. Hòa mình vào đời sống công nhân và người lao động bản xứ.",
    significance: "Rút ra kết luận quan trọng đầu tiên: Ở đâu bọn thực dân đế quốc cũng tàn bạo; ở đâu nhân dân lao động nghèo khổ cũng bị bóc lột dã man. Từ đó xác lập tình cảm giai cấp quốc tế sâu sắc.",
    relatedInfluenceIds: ["inf_tt_tg", "inf_ll_pt"],
    sourceId: "src_stage_2"
  },
  evt_2_yeu_sach: {
    id: "evt_2_yeu_sach",
    stageId: "stage_2",
    dateDisplay: "Ngày 18 tháng 6 năm 1919",
    exactDate: "1919-06-18",
    title: "Gửi Bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles",
    tag: "Đấu tranh pháp lý & Quốc tế",
    context: "Chiến tranh thế giới thứ nhất kết thúc, các nước đế quốc thắng trận họp Hội nghị Versailles để phân chia lại thị trường thế giới.",
    eventDetails: "Thay mặt Hội những người yêu nước Việt Nam tại Pháp, lấy tên Nguyễn Ái Quốc, Người gửi bản Yêu sách 8 điểm đòi các quyền tự do, dân chủ và bình đẳng tối thiểu cho nhân dân An Nam.",
    significance: "Lần đầu tiên tiếng nói chính nghĩa của nhân dân Việt Nam vang lên tại diễn đàn quốc tế; đồng thời giúp Người nhận rõ bản chất lừa mị của chủ nghĩa đế quốc: 'muốn được giải phóng, các dân tộc chỉ có thể trông cậy vào chính lực lượng của bản thân mình'.",
    relatedInfluenceIds: ["inf_tt_tg", "inf_ll_pt", "inf_cq_nl"],
    sourceId: "src_stage_2"
  },
  evt_2_luan_cuong: {
    id: "evt_2_luan_cuong",
    stageId: "stage_2",
    dateDisplay: "Tháng 7 năm 1920",
    title: "Đọc Sơ thảo lần thứ nhất những Luận cương về vấn đề dân tộc và vấn đề thuộc địa của V.I. Lênin",
    tag: "Bước ngoặt lý luận quyết định",
    context: "Đang tìm kiếm con đường giải phóng dân tộc thực sự tại Paris trong vô vàn khuynh hướng chính trị phức tạp của phong trào công nhân Pháp.",
    eventDetails: "Đọc Luận cương của Lênin đăng trên báo L'Humanité (Nhân đạo). Luận cương giải đáp trúng những băn khoăn bức thiết nhất của Người về số phận các dân tộc thuộc địa.",
    significance: "Bước ngoặt căn bản trong tư duy: Tìm thấy con đường giải phóng cho dân tộc Việt Nam. Luận cương đưa Người đến với Chủ nghĩa Mác - Lênin và định hướng cách mạng thuộc địa theo quỹ đạo cách mạng vô sản.",
    relatedInfluenceIds: ["inf_ll_ml", "inf_cq_pc"],
    sourceId: "src_stage_2"
  },
  evt_2_tua_dang: {
    id: "evt_2_tua_dang",
    stageId: "stage_2",
    dateDisplay: "Ngày 30 tháng 12 năm 1920",
    exactDate: "1920-12-30",
    title: "Bỏ phiếu tán thành Quốc tế III, tham gia sáng lập Đảng Cộng sản Pháp",
    tag: "Trở thành người Cộng sản",
    context: "Đại hội lần thứ XVIII của Đảng Xã hội Pháp họp tại thành phố Tours thảo luận việc gia nhập Quốc tế III (Quốc tế Cộng sản do Lênin sáng lập).",
    eventDetails: "Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế III và trở thành một trong những người sáng lập Đảng Cộng sản Pháp, người cộng sản đầu tiên của Việt Nam.",
    significance: "Đánh dấu bước nhảy vọt về chất: Từ người yêu nước tiến bộ trở thành chiến sĩ cộng sản kiên trung; gắn cuộc đấu tranh giải phóng dân tộc Việt Nam với phong trào công nhân và cộng sản quốc tế.",
    relatedInfluenceIds: ["inf_tt_tg", "inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_2"
  },
  evt_3_thanh_nien: {
    id: "evt_3_thanh_nien",
    stageId: "stage_3",
    dateDisplay: "Tháng 6 năm 1925",
    title: "Thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu",
    tag: "Tổ chức tiền thân",
    context: "Sau thời gian học tập và hoạt động tại Liên Xô (1923-1924), Người đến Quảng Châu (Trung Quốc) để trực tiếp chuẩn bị lực lượng cho cách mạng Việt Nam.",
    eventDetails: "Sáng lập Hội Việt Nam Cách mạng Thanh niên, xuất bản báo Thanh niên (21/6/1925), mở các lớp huấn luyện chính trị cho cán bộ cốt cán đưa về nước hoạt động theo phong trào vô sản hóa.",
    significance: "Chuẩn bị trực tiếp về mặt tổ chức và đội ngũ cán bộ tiên phong; truyền bá Chủ nghĩa Mác - Lênin vào phong trào công nhân và phong trào yêu nước Việt Nam.",
    relatedInfluenceIds: ["inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_3"
  },
  evt_3_duong_kach_menh: {
    id: "evt_3_duong_kach_menh",
    stageId: "stage_3",
    dateDisplay: "Đầu năm 1927",
    title: "Xuất bản tác phẩm Đường Kách mệnh",
    tag: "Tác phẩm lý luận nền tảng",
    context: "Tập hợp các bài giảng tại các lớp đào tạo chính trị tại Quảng Châu phục vụ huấn luyện cán bộ cách mạng.",
    eventDetails: "Tác phẩm vạch rõ tính chất, đối tượng, mục tiêu, động lực của cách mạng Việt Nam; xác định công nông là 'gốc cách mệnh'; nêu cao tư cách người cách mạng và vai trò hạt nhân của Đảng.",
    significance: "Cuốn cẩm nang lý luận đầu tiên chỉ đạo cách mạng Việt Nam theo con đường vô sản; thể hiện tư duy sáng tạo của Hồ Chí Minh trong việc truyền bá chủ nghĩa Mác - Lênin bằng ngôn ngữ giản dị, thiết thực.",
    relatedInfluenceIds: ["inf_ll_ml", "inf_cq_nl", "inf_cq_pc"],
    sourceId: "src_stage_3"
  },
  evt_3_thanh_lap_dang: {
    id: "evt_3_thanh_lap_dang",
    stageId: "stage_3",
    dateDisplay: "Ngày 3 tháng 2 năm 1930",
    exactDate: "1930-02-03",
    title: "Chủ trì Hội nghị hợp nhất thành lập Đảng và soạn thảo Cương lĩnh chính trị đầu tiên",
    tag: "Cương lĩnh chính trị đầu tiên",
    context: "Cuối năm 1929, ba tổ chức cộng sản ở Việt Nam ra đời nhưng hoạt động tranh giành ảnh hưởng lẫn nhau, làm suy yếu phong trào.",
    eventDetails: "Với tư cách phái viên Quốc tế Cộng sản, Người chủ trì Hội nghị hợp nhất tại Cửu Long (Hương Cảng), thành lập Đảng Cộng sản Việt Nam và soạn thảo Chánh cương vắn tắt, Sách lược vắn tắt.",
    significance: "Hoàn chỉnh về cơ bản những nội dung cốt lõi của tư tưởng cách mạng Việt Nam: làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản; xác lập khối liên minh công nông và đại đoàn kết toàn dân tộc.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_3"
  },
  evt_4_thu_thach: {
    id: "evt_4_thu_thach",
    stageId: "stage_4",
    dateDisplay: "Năm 1930 – 1935",
    title: "Vượt qua thử thách tả khuynh và quan điểm biệt phái",
    tag: "Bản lĩnh bảo vệ chân lý",
    context: "Quốc tế Cộng sản và một số đồng chí trong Đảng lúc bấy giờ chịu ảnh hưởng của khuynh hướng giáo điều tả khuynh, phê phán Cương lĩnh chính trị đầu tiên của Nguyễn Ái Quốc là thỏa hiệp với tư sản và địa chủ.",
    eventDetails: "Nguyễn Ái Quốc vẫn kiên trì lập trường: Ở một nước thuộc địa, mâu thuẫn chủ yếu là mâu thuẫn dân tộc; phải tập hợp mọi lực lượng yêu nước vào mặt trận chống đế quốc chứ không cô lập lực lượng.",
    significance: "Khẳng định bản lĩnh tư duy độc lập, sáng tạo, không dao động trước sức ép giáo điều; bảo vệ đường lối cách mạng đúng đắn cho vận mệnh dân tộc.",
    relatedInfluenceIds: ["inf_ll_ml", "inf_cq_nl", "inf_cq_pc"],
    sourceId: "src_stage_4"
  },
  evt_4_nguc_huong_cang: {
    id: "evt_4_nguc_huong_cang",
    stageId: "stage_4",
    dateDisplay: "Ngày 6/6/1931 – Đầu năm 1933",
    title: "Thoát khỏi nhà tù Hương Cảng (Vụ án Tống Văn Sơ)",
    tag: "Ý chí kiên cường trong gian nan",
    context: "Bị mật thám Anh bắt giam tại Hương Cảng theo yêu cầu dẫn độ của thực dân Pháp nhằm xử tử Người.",
    eventDetails: "Nhờ sự giúp đỡ nhiệt thành của luật sư tiến bộ Francis Henry Loseby và phong trào bảo vệ tự do, Người được trắng án và rời khỏi Hương Cảng an toàn, sang Liên Xô tiếp tục học tập và nghiên cứu.",
    significance: "Minh chứng cho ý chí gang thép, nhân cách mẫu mực và khả năng vận dụng luật pháp, công lý quốc tế để vượt qua những hiểm nguy sinh tử.",
    relatedInfluenceIds: ["inf_ll_pt", "inf_cq_pc"],
    sourceId: "src_stage_4"
  },
  evt_4_ve_nuoc: {
    id: "evt_4_ve_nuoc",
    stageId: "stage_4",
    dateDisplay: "Ngày 28 tháng 1 năm 1941",
    exactDate: "1941-01-28",
    title: "Trở về Tổ quốc sau 30 năm bôn ba (Cột mốc 108, Pác Bó, Cao Bằng)",
    tag: "Trở về đất Mẹ",
    context: "Chiến tranh thế giới thứ hai bùng nổ, phát xít Đức chiếm đóng nước Pháp; ở Đông Dương, Nhật nhảy vào cấu kết với Pháp áp bức nhân dân.",
    eventDetails: "Nguyễn Ái Quốc cùng các đồng chí vượt qua mốc 108 biên giới Việt - Trung trở về Pác Bó (Hà Quảng, Cao Bằng) để trực tiếp lãnh đạo phong trào giải phóng dân tộc.",
    significance: "Hiện thực hóa khát vọng cháy bỏng suốt 30 năm: Đem chân lý cách mạng đã tôi luyện qua thực tiễn thế giới về soi rọi trực tiếp cho cuộc đấu tranh giành độc lập của đồng bào.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_ll_tt", "inf_cq_pc"],
    sourceId: "src_stage_4"
  },
  evt_5_hn_trung_uong_8: {
    id: "evt_5_hn_trung_uong_8",
    stageId: "stage_5",
    dateDisplay: "Tháng 5 năm 1941 (10/5 – 19/5/1941)",
    title: "Chủ trì Hội nghị Trung ương 8 và thành lập Mặt trận Việt Minh",
    tag: "Chuyển hướng chiến lược",
    context: "Phong trào cách mạng trong nước đòi hỏi sự chuyển hướng chỉ đạo chiến lược quyết định trước thời cơ quốc tế đang chuyển biến mau lẹ.",
    eventDetails: "Hội nghị quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu; tạm gác khẩu hiệu cách mạng ruộng đất; thành lập Việt Nam Độc lập Đồng minh (Mặt trận Việt Minh) ngày 19/5/1941.",
    significance: "Hoàn chỉnh đường lối cách mạng giải phóng dân tộc của tư tưởng Hồ Chí Minh: Quyền lợi của bộ phận, của giai cấp phải đặt dưới sự sinh tử, tồn vong của quốc gia, của dân tộc.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_5"
  },
  evt_5_cach_mang_t8: {
    id: "evt_5_cach_mang_t8",
    stageId: "stage_5",
    dateDisplay: "Tháng 8 – Tháng 9 năm 1945",
    exactDate: "1945-09-02",
    title: "Tổng khởi nghĩa Tháng Tám & Tuyên ngôn Độc lập (2/9/1945)",
    tag: "Thẻ phụ: Đỉnh cao 1945",
    context: "Phát xít Nhật đầu hàng Đồng minh, thời cơ 'nghìn năm có một' xuất hiện.",
    eventDetails: "Lãnh đạo toàn dân tổng khởi nghĩa giành chính quyền. Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    significance: "Hiện thực hóa sinh động tư tưởng giải phóng dân tộc: Độc lập dân tộc gắn liền với chính thể Dân chủ Cộng hòa - Nhà nước của nhân dân, do nhân dân, vì nhân dân.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_ll_pt", "inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_5"
  },
  evt_5_khang_chien_chong_phap: {
    id: "evt_5_khang_chien_chong_phap",
    stageId: "stage_5",
    dateDisplay: "Giai đoạn 1946 – 1954",
    title: "Kháng chiến toàn dân, toàn diện và Chiến thắng Điện Biên Phủ",
    tag: "Thẻ phụ: Giai đoạn 1946–1954",
    context: "Thực dân Pháp dã tâm quay lại xâm lược nước ta một lần nữa.",
    eventDetails: "Ra Lời kêu gọi Toàn quốc kháng chiến (19/12/1946); hoàn thiện đường lối chiến tranh nhân dân: toàn dân, toàn diện, trường kỳ, tự lực cánh sinh; lãnh đạo làm nên chiến thắng Điện Biên Phủ lừng lẫy năm châu (1954).",
    significance: "Phát triển lý luận chiến tranh cách mạng nhân dân của một nước nhỏ chống lại đế quốc to; khẳng định chân lý 'Không có gì quý hơn độc lập, tự do'.",
    relatedInfluenceIds: ["inf_ll_tt", "inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_5"
  },
  evt_5_hai_nhiem_vu_chien_luoc: {
    id: "evt_5_hai_nhiem_vu_chien_luoc",
    stageId: "stage_5",
    dateDisplay: "Giai đoạn 1954 – 1969",
    title: "Tiến hành đồng thời hai chiến lược cách mạng ở hai miền",
    tag: "Thẻ phụ: Giai đoạn 1954–1969",
    context: "Hiệp định Giơ-ne-vơ bị đế quốc Mỹ phá hoại, đất nước tạm thời bị chia cắt làm hai miền.",
    eventDetails: "Xác lập đường lối sáng tạo: Xây dựng CNXH ở miền Bắc làm hậu phương lớn; tiến hành cách mạng dân tộc dân chủ nhân dân ở miền Nam làm tiền tuyến lớn; kết hợp sức mạnh dân tộc với sức mạnh thời đại.",
    significance: "Sáng tạo lớn trong kho tàng lý luận Mác - Lênin về việc tiến hành đồng thời hai nhiệm vụ chiến lược cách mạng khác nhau trên hai miền của một quốc gia.",
    relatedInfluenceIds: ["inf_tt_tg", "inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_5"
  },
  evt_5_di_chuc: {
    id: "evt_5_di_chuc",
    stageId: "stage_5",
    dateDisplay: "Năm 1965 – 1969",
    exactDate: "1969-09-02",
    title: "Bản Di chúc thiêng liêng và những tư tưởng căn cốt truyền đời",
    tag: "Di sản trường tồn",
    context: "Những năm tháng cuối đời, Người dồn trăn trở tâm huyết để căn dặn toàn Đảng, toàn quân và toàn dân cho mai sau.",
    eventDetails: "Căn dặn sâu sắc về xây dựng, chỉnh đốn Đảng; chăm lo đời sống nhân dân ('đầu tiên là công việc đối với con người'); đào tạo bồi dưỡng thế hệ cách mạng cho đời sau; giữ gìn tình đoàn kết quốc tế trong sáng.",
    significance: "Bản tổng kết kết tinh toàn bộ tư tưởng đạo đức, nhân văn và chiến lược cách mạng của Hồ Chí Minh; là ngọn cờ dẫn dắt cách mạng Việt Nam đi tới thắng lợi trọn vẹn giải phóng miền Nam thống nhất đất nước.",
    relatedInfluenceIds: ["inf_ll_tt", "inf_ll_pd", "inf_ll_ml", "inf_cq_pc"],
    sourceId: "src_stage_5"
  }
};
