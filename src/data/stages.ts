export interface Stage {
  id: string;
  shortLabel: string; // ví dụ: "Đến 1911", "1911–1920", ...
  exactSpan: string;  // ví dụ: "Đến ngày 5/6/1911"
  title: string;      // Tên chính xác theo giáo trình
  developmentSummary: string; // 1 câu tóm tắt bước phát triển nhận thức
  contextAndProblem: string;  // Bối cảnh hoặc vấn đề đặt ra
  significance: string;        // Ý nghĩa đối với tư tưởng
  relatedInfluenceIds: string[]; // Liên kết sang 8 cơ sở
  sourceId: string;           // Khóa liên kết sang sources.ts
  eventIds: string[];         // Danh sách các mốc sự kiện trực thuộc
}

export const STAGES: Stage[] = [
  {
    id: "stage_1",
    shortLabel: "Đến 1911",
    exactSpan: "Đến ngày 5/6/1911",
    title: "Hình thành tư tưởng yêu nước và chí hướng tìm con đường cứu nước mới",
    developmentSummary: "Từ tình cảm yêu nước ban đầu và sự quan sát sâu sắc thất bại của các bậc tiền bối, hình thành hoài bão xuất dương sang phương Tây tìm con đường cứu nước mới.",
    contextAndProblem: "Việt Nam chìm trong đêm dài nô lệ dưới ách cai trị thực dân Pháp; các phong trào Cần Vương, Đông Du, Duy Tân, Yên Thế đều lần lượt bế tắc và thất bại nặng nề.",
    significance: "Xác định rõ phương hướng hành động: không cầu viện ngoại bang phong kiến hay tư sản châu Á, mà trực tiếp sang Pháp và các nước phương Tây để khảo sát nguồn gốc 'Tự do - Bình đẳng - Bác ái'.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_ll_tt", "inf_ll_pd", "inf_cq_pc"],
    sourceId: "src_stage_1",
    eventIds: ["evt_1_quehuong", "evt_1_xuatduong"]
  },
  {
    id: "stage_2",
    shortLabel: "1911–1920",
    exactSpan: "6/6/1911 – 30/12/1920",
    title: "Hình thành tư tưởng cứu nước, giải phóng dân tộc Việt Nam theo con đường cách mạng vô sản",
    developmentSummary: "Bước ngoặt quyết định về chất: Từ người yêu nước tiến bộ trở thành người chiến sĩ cộng sản, tìm thấy con đường giải phóng dân tộc trong quỹ đạo cách mạng vô sản thế giới.",
    contextAndProblem: "Sống, lao động hòa mình cùng giai cấp cần lao khắp các châu lục; Chiến tranh thế giới thứ nhất bùng nổ; Cách mạng Tháng Mười Nga (1917) thành công; Quốc tế III ra đời.",
    significance: "Giải quyết triệt để cuộc khủng hoảng đường lối cứu nước của dân tộc: Độc lập dân tộc phải gắn liền với chủ nghĩa xã hội, giải phóng dân tộc phải đi đôi với giải phóng giai cấp cần lao.",
    relatedInfluenceIds: ["inf_tt_tg", "inf_ll_pt", "inf_ll_ml"],
    sourceId: "src_stage_2",
    eventIds: ["evt_2_khao_sat", "evt_2_yeu_sach", "evt_2_luan_cuong", "evt_2_tua_dang"]
  },
  {
    id: "stage_3",
    shortLabel: "1920–1930",
    exactSpan: "31/12/1920 – 3/2/1930",
    title: "Hình thành những nội dung cơ bản của tư tưởng về cách mạng Việt Nam",
    developmentSummary: "Xây dựng và hoàn chỉnh hệ thống quan điểm lý luận toàn diện về chiến lược, sách lược và phương pháp cách mạng giải phóng dân tộc thuộc địa; chuẩn bị chu đáo về tư tưởng, chính trị và tổ chức để thành lập Đảng.",
    contextAndProblem: "Phong trào yêu nước và phong trào công nhân Việt Nam phát triển mạnh mẽ nhưng cần một tổ chức tiên phong và đường lối cách mạng đúng đắn lãnh đạo.",
    significance: "Cương lĩnh chính trị đầu tiên do Người soạn thảo khẳng định tính chất, động lực, lực lượng và mối quan hệ quốc tế của cách mạng Việt Nam; chấm dứt hoàn toàn tình trạng khủng hoảng tổ chức lãnh đạo.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_ll_ml", "inf_cq_nl"],
    sourceId: "src_stage_3",
    eventIds: ["evt_3_thanh_nien", "evt_3_duong_kach_menh", "evt_3_thanh_lap_dang"]
  },
  {
    id: "stage_4",
    shortLabel: "1930–1941",
    exactSpan: "4/2/1930 – 28/1/1941",
    title: "Vượt qua thử thách, giữ vững đường lối, phương pháp cách mạng Việt Nam đúng đắn, sáng tạo",
    developmentSummary: "Bản lĩnh kiên định bảo vệ đường lối giải phóng dân tộc và khối đại đoàn kết toàn dân trước những biểu hiện tả khuynh, biệt phái trong Quốc tế Cộng sản; chuẩn bị trực tiếp lãnh đạo phong trào trong nước.",
    contextAndProblem: "Quốc tế Cộng sản thời kỳ này chịu ảnh hưởng của tư tưởng giáo điều tả khuynh, xem nhẹ vấn đề dân tộc; Người bị giam cầm tại Hương Cảng và trải qua nhiều năm hoạt động trong vòng vây hiểm nguy.",
    significance: "Thực tiễn lịch sử đã chứng minh tính chân lý trong đường lối sáng tạo của Hồ Chí Minh; Người về nước trực tiếp lãnh đạo, đưa cách mạng Việt Nam bước vào giai đoạn chuyển hướng chiến lược quyết định.",
    relatedInfluenceIds: ["inf_ll_ml", "inf_cq_pc", "inf_cq_nl"],
    sourceId: "src_stage_4",
    eventIds: ["evt_4_thu_thach", "evt_4_nguc_huong_cang", "evt_4_ve_nuoc"]
  },
  {
    id: "stage_5",
    shortLabel: "1941–1969",
    exactSpan: "29/1/1941 – 2/9/1969",
    title: "Tư tưởng Hồ Chí Minh tiếp tục phát triển, soi đường cho sự nghiệp cách mạng của Đảng và nhân dân ta",
    developmentSummary: "Tư tưởng Hồ Chí Minh đạt tới đỉnh cao phát triển toàn diện: hoàn chỉnh đường lối giải phóng dân tộc, xây dựng chính thể dân chủ cộng hòa, tiến hành kháng chiến và kiến quốc.",
    contextAndProblem: "Đất nước đối mặt với nạn ngoại xâm và ách thống trị tàn bạo của phát xít - thực dân, sau đó là cuộc kháng chiến trường kỳ chống thực dân Pháp và đế quốc Mỹ xâm lược, song song với công cuộc xây dựng CNXH ở miền Bắc.",
    significance: "Tư tưởng Hồ Chí Minh trở thành tài sản tinh thần vô giá, nền tảng tư tưởng và kim chỉ nam dẫn dắt dân tộc đi từ thắng lợi này đến thắng lợi khác.",
    relatedInfluenceIds: ["inf_tt_vn", "inf_ll_tt", "inf_ll_ml", "inf_cq_nl", "inf_cq_pc"],
    sourceId: "src_stage_5",
    eventIds: ["evt_5_hn_trung_uong_8", "evt_5_cach_mang_t8", "evt_5_khang_chien_chong_phap", "evt_5_hai_nhiem_vu_chien_luoc", "evt_5_di_chuc"]
  }
];
