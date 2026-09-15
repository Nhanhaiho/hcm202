export interface MapEdge {
  id: string;
  source: string;
  target: string;
  label: string;
  category: "yeu-cau" | "dong-luc" | "ly-luan-quyet-dinh" | "tiep-thu-chon-loc" | "nhan-to-chu-quan" | "chuyen-hoa-thuc-tien";
  description: string;
  academicBasis: string;
  isDecisive?: boolean;
}

export const MAP_RELATIONSHIPS: MapEdge[] = [
  {
    id: "rel_tt_vn_center",
    source: "inf_tt_vn",
    target: "center_hcm",
    label: "Đặt ra yêu cầu lịch sử sống còn",
    category: "yeu-cau",
    description: "Khủng hoảng sâu sắc về đường lối cứu nước tại Việt Nam buộc Người phải chủ động tìm kiếm con đường giải phóng dân tộc mới.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 19–21"
  },
  {
    id: "rel_tt_tg_center",
    source: "inf_tt_tg",
    target: "center_hcm",
    label: "Mở rộng tầm nhìn thời đại và quy luật",
    category: "yeu-cau",
    description: "Hiện thực chủ nghĩa đế quốc toàn cầu và thắng lợi của Cách mạng Tháng Mười Nga chỉ ra quỹ đạo tất yếu của cách mạng thời đại mới.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 21–22"
  },
  {
    id: "rel_ll_tt_center",
    source: "inf_ll_tt",
    target: "center_hcm",
    label: "Nuôi dưỡng cội nguồn động lực",
    category: "dong-luc",
    description: "Chủ nghĩa yêu nước truyền thống và ý thức tự cường dân tộc là xuất phát điểm ban đầu đưa Người đến với lý tưởng giải phóng.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 22–23"
  },
  {
    id: "rel_ll_pd_center",
    source: "inf_ll_pd",
    target: "center_hcm",
    label: "Được tiếp thu, gạn lọc triết lý nhân sinh",
    category: "tiep-thu-chon-loc",
    description: "Kế thừa có chọn lọc lòng nhân ái, tu thân, bình đẳng và lý tưởng dân sinh; loại bỏ yếu tố đẳng cấp, thần bí, bảo thủ.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 23–24"
  },
  {
    id: "rel_ll_pt_center",
    source: "inf_ll_pt",
    target: "center_hcm",
    label: "Tiếp thu tư tưởng dân chủ và pháp quyền",
    category: "tiep-thu-chon-loc",
    description: "Tiếp nhận tinh thần khoa học, nhân quyền, dân quyền tiến bộ; đồng thời nhận thức rõ bản chất hạn hẹp của nền dân chủ tư sản.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 24–25"
  },
  {
    id: "rel_ll_ml_center",
    source: "inf_ll_ml",
    target: "center_hcm",
    label: "Cung cấp thế giới quan & phương pháp luận (QUYẾT ĐỊNH)",
    category: "ly-luan-quyet-dinh",
    isDecisive: true,
    description: "Cơ sở lý luận quyết định bước phát triển về chất; soi sáng con đường cách mạng vô sản và mục tiêu độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 25–26"
  },
  {
    id: "rel_cq_pc_center",
    source: "inf_cq_pc",
    target: "center_hcm",
    label: "Động lực nội sinh & bản lĩnh vượt gian nguy",
    category: "nhan-to-chu-quan",
    description: "Lòng thương dân tha thiết, hoài bão cứu nước cháy bỏng và ý chí phi thường giúp Người kiên định giữ vững mục tiêu cách mạng.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 26–27"
  },
  {
    id: "rel_cq_nl_center",
    source: "inf_cq_nl",
    target: "center_hcm",
    label: "Năng lực chuyển hóa, tổng kết & sáng tạo",
    category: "chuyen-hoa-thuc-tien",
    description: "Trực tiếp biến lý luận thành phương châm hành động thực tiễn; sáng tạo phát triển lý luận Mác - Lênin phù hợp thực tiễn cách mạng Việt Nam.",
    academicBasis: "Giáo trình Tư tưởng Hồ Chí Minh, 2019, tr. 27"
  }
];

export const MAP_CENTER_INFO = {
  title: "Chủ thể Hồ Chí Minh: Tiếp thu, Gạn lọc, Vận dụng sáng tạo & Phát triển",
  subtitle: "Trọng tâm biện chứng kết nối Thực tiễn – Lý luận – Hành động",
  thesis: "Tư tưởng Hồ Chí Minh không phải là phép cộng số học giản đơn của các yếu tố, mà là một công trình sáng tạo khoa học độc đáo thông qua bộ óc vĩ đại và hoạt động thực tiễn bền bỉ của Hồ Chí Minh.",
  corePrinciples: [
    {
      title: "Tiếp thu có chọn lọc và phê phán",
      desc: "Gạn đục khơi trong, không rập khuôn bất kỳ học thuyết nào; chỉ tiếp thu những hạt nhân hợp lý, nhân văn, phục vụ giải phóng dân tộc và con người."
    },
    {
      title: "Chủ nghĩa Mác – Lênin giữ vai trò quyết định",
      desc: "Là kim chỉ nam khoa học biến người yêu nước nhiệt thành thành chiến sĩ cộng sản sáng suốt; tạo nên bước nhảy vọt về chất trong nhận thức."
    },
    {
      title: "Thống nhất biện chứng giữa lý luận và thực tiễn",
      desc: "Thực tiễn kiểm nghiệm lý luận; lý luận được bổ sung, phát triển từ chính hiện thực sinh động của cách mạng Việt Nam và phong trào giải phóng thuộc địa."
    }
  ]
};
