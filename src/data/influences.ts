export type InfluenceGroup = "thuc-tien" | "ly-luan" | "chu-quan";

export interface InfluenceNode {
  id: string;
  name: string;
  shortLabel: string;
  group: InfluenceGroup;
  groupName: string;
  role: string;
  contribution: string;
  assimilation: string;
  evidence: string;
  limitations: string;
  relatedStageIds: string[];
  sourceId: string;
  isDecisive?: boolean;
  orientalDetails?: {
    school: string;
    content: string;
  }[];
}

export const INFLUENCE_NODES: Record<string, InfluenceNode> = {
  inf_tt_vn: {
    id: "inf_tt_vn",
    name: "Thực tiễn Việt Nam cuối thế kỷ XIX – đầu thế kỷ XX",
    shortLabel: "Thực tiễn Việt Nam",
    group: "thuc-tien",
    groupName: "Cơ sở thực tiễn",
    role: "Cơ sở thực tiễn trực tiếp đặt ra yêu cầu lịch sử sống còn về độc lập dân tộc và giải phóng giai cấp.",
    contribution: "Cung cấp hiện thực xã hội thuộc địa nửa phong kiến với mâu thuẫn dân tộc và giai cấp sâu sắc. Thất bại của phong trào Cần Vương, Đông Du, Duy Tân, khởi nghĩa Yên Thế... chứng minh sự bế tắc của các hệ tư tưởng phong kiến và tư sản.",
    assimilation: "Hồ Chí Minh đúc rút bài học sâu sắc từ sự thất bại của các bậc tiền bối để hình thành tư duy độc lập: không lặp lại con đường cũ mà quyết tâm tìm kiếm một hướng đi hoàn toàn mới.",
    evidence: "Hồ Chí Minh nhận xét: Cụ Phan Bội Châu đưa hổ cửa trước rước beo cửa sau; cụ Phan Chu Trinh xin giặc rủ lòng thương; cụ Hoàng Hoa Thám còn nặng cốt cách phong kiến.",
    limitations: "Nếu chỉ dựa vào thực tiễn Việt Nam mà thiếu lý luận soi đường và tầm nhìn quốc tế, người yêu nước dễ rơi vào bế tắc, manh động hoặc duy ý chí như các phong trào trước đó.",
    relatedStageIds: ["stage_1", "stage_4", "stage_5"],
    sourceId: "src_tt_vn"
  },
  inf_tt_tg: {
    id: "inf_tt_tg",
    name: "Thực tiễn thế giới cuối thế kỷ XIX – đầu thế kỷ XX",
    shortLabel: "Thực tiễn thế giới",
    group: "thuc-tien",
    groupName: "Cơ sở thực tiễn",
    role: "Bối cảnh thời đại mở ra không gian nhận thức toàn cầu và chỉ ra xu thế tất yếu của cách mạng thời đại mới.",
    contribution: "Chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa, bóc lột thuộc địa trên quy mô toàn cầu. Cách mạng Tháng Mười Nga (1917) thành công mở ra thời đại quá độ lên CNXH. Quốc tế III ra đời hỗ trợ các dân tộc bị áp bức.",
    assimilation: "Người trực tiếp khảo sát các nước tư bản phát triển và các thuộc địa, nhận thức bản chất tàn bạo của chủ nghĩa thực dân và sức mạnh của khối liên minh công nông quốc tế.",
    evidence: "Hồ Chí Minh khẳng định trong Đường Kách mệnh: 'Trong thế giới bây giờ chỉ có Cách mệnh Nga là đã thành công và thành công đến nơi...'",
    limitations: "Nếu chỉ nhìn nhận thế giới mà không thấu hiểu cụ thể mâu thuẫn và tâm lý dân tộc thuộc địa ở Việt Nam, phong trào sẽ dễ rơi vào giáo điều, xa rời thực tế bản xứ.",
    relatedStageIds: ["stage_2", "stage_3"],
    sourceId: "src_tt_tg"
  },
  inf_ll_tt: {
    id: "inf_ll_tt",
    name: "Giá trị truyền thống tốt đẹp của dân tộc Việt Nam",
    shortLabel: "Truyền thống dân tộc",
    group: "ly-luan",
    groupName: "Cơ sở lý luận",
    role: "Cội nguồn tư tưởng - tình cảm sâu xa, cái nôi nuôi dưỡng động lực cách mạng và giá trị nhân văn cốt lõi.",
    contribution: "Chủ nghĩa yêu nước là dòng chủ lưu xuyên suốt lịch sử; tinh thần bất khuất chống ngoại xâm; tinh thần đoàn kết cộng đồng ('lá lành đùm lá rách'); lòng nhân ái, khoan dung; tinh thần tự lực tự cường.",
    assimilation: "Hồ Chí Minh kế thừa chủ nghĩa yêu nước truyền thống, nâng lên tầm cao mới thành chủ nghĩa yêu nước gắn liền với chủ nghĩa xã hội và tinh thần quốc tế vô sản trong sáng.",
    evidence: "Hồ Chí Minh đúc kết: 'Dân ta có một lòng nồng nàn yêu nước. Đó là một truyền thống quý báu của ta... Mỗi khi Tổ quốc bị xâm lăng, thì tinh thần ấy lại sôi nổi...'",
    limitations: "Lòng yêu nước truyền thống là điều kiện cần thiết nhưng tự thân nó chưa đủ vũ khí lý luận khoa học để giải quyết vấn đề giành độc lập và xây dựng chế độ mới bền vững.",
    relatedStageIds: ["stage_1", "stage_3", "stage_5"],
    sourceId: "src_ll_tt"
  },
  inf_ll_pd: {
    id: "inf_ll_pd",
    name: "Tinh hoa văn hóa phương Đông",
    shortLabel: "Văn hóa phương Đông",
    group: "ly-luan",
    groupName: "Cơ sở lý luận",
    role: "Cung cấp nền tảng đạo đức, triết lý nhân sinh, tinh thần hành động vì dân và phương thức tu dưỡng bản thân.",
    contribution: "Nho giáo đề cao tu dưỡng đạo đức, trật tự xã hội, 'thế giới đại đồng'. Phật giáo đề cao lòng từ bi bác ái, bình đẳng, nhập thế cứu khổ. Lão giáo hướng tới lối sống giản dị, hòa hợp thiên nhiên. Tư tưởng Tôn Trung Sơn với Chủ nghĩa Tam Dân (Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc).",
    assimilation: "Người gạn đục khơi trong: phê phán yếu tố đẳng cấp, bảo thủ, khinh lao động; tiếp thu tinh thần hành đạo, coi trọng đạo đức, lòng thương người và lý tưởng phục vụ nhân dân.",
    evidence: "Hồ Chí Minh từng viết: 'Khổng Tử, Giê-su, Các Mác, Tôn Dật Tiên chẳng phải có những điểm chung đó sao? Họ đều muốn mưu hạnh phúc cho loài người...'",
    orientalDetails: [
      {
        school: "Nho giáo",
        content: "Tiếp thu triết lý hành động, tu thân tề gia, trọng dân, chuộng hòa hiếu; lọc bỏ tư tưởng đẳng cấp 'tam cương ngũ thường', coi khinh phụ nữ và lao động chân tay."
      },
      {
        school: "Phật giáo",
        content: "Kế thừa tư tưởng từ bi, hỉ xả, vô ngã vị tha, bình đẳng chống áp bức, gắn bó tinh thần 'hộ quốc an dân' hòa đồng cùng dân tộc."
      },
      {
        school: "Lão giáo",
        content: "Hấp thụ lối sống thanh bạch, giản dị, ít ham muốn vật chất, hòa mình với thiên nhiên và đạo lý ứng xử nhân hòa."
      },
      {
        school: "Chủ nghĩa Tam Dân (Tôn Trung Sơn)",
        content: "Kế thừa hạt nhân hợp lý: Dân tộc độc lập, Dân quyền tự do, Dân sinh hạnh phúc - xem đây là điều rất thích hợp với điều kiện nước ta."
      }
    ],
    limitations: "Các học thuyết phương Đông cổ trung đại không có cơ sở kinh tế - xã hội hiện đại, thiếu phương pháp luận duy vật biện chứng để phân tích quy luật vận động của lịch sử.",
    relatedStageIds: ["stage_1", "stage_3", "stage_5"],
    sourceId: "src_ll_pd"
  },
  inf_ll_pt: {
    id: "inf_ll_pt",
    name: "Tinh hoa văn hóa phương Tây",
    shortLabel: "Văn hóa phương Tây",
    group: "ly-luan",
    groupName: "Cơ sở lý luận",
    role: "Trang bị tư duy dân chủ, tinh thần pháp quyền, quyền con người và phương pháp làm việc khoa học.",
    contribution: "Tư tưởng 'Tự do - Bình đẳng - Bác ái' của triết học Khai sáng Pháp; các giá trị về nhân quyền và dân quyền trong Tuyên ngôn Độc lập Hoa Kỳ (1776) và Tuyên ngôn Nhân quyền và Dân quyền Pháp (1789).",
    assimilation: "Người hấp thụ các giá trị tiến bộ về quyền sống, tự do, mưu cầu hạnh phúc; đồng thời sớm nhận rõ sự giả dối của nền dân chủ tư sản: tự do cho thiểu số bóc lột, nô dịch đa số lao động và các dân tộc thuộc địa.",
    evidence: "Mở đầu Tuyên ngôn Độc lập năm 1945, Hồ Chí Minh đã viện dẫn trang trọng lời bất hủ từ Tuyên ngôn của Mỹ (1776) và Pháp (1789), rồi khái quát phát triển thành quyền tự quyết thiêng liêng của mọi dân tộc.",
    limitations: "Hệ tư tưởng tư sản gắn liền với chế độ chiếm hữu tư nhân tư bản chủ nghĩa, không thể mang lại giải phóng triệt để cho quần chúng lao động cùng khổ.",
    relatedStageIds: ["stage_1", "stage_2", "stage_5"],
    sourceId: "src_ll_pt"
  },
  inf_ll_ml: {
    id: "inf_ll_ml",
    name: "Chủ nghĩa Mác – Lênin",
    shortLabel: "Chủ nghĩa Mác – Lênin",
    group: "ly-luan",
    groupName: "Cơ sở lý luận",
    isDecisive: true,
    role: "TIỀN ĐỀ LÝ LUẬN QUAN TRỌNG NHẤT, CƠ SỞ QUYẾT ĐỊNH bản chất cách mạng và khoa học của tư tưởng Hồ Chí Minh.",
    contribution: "Cung cấp thế giới quan duy vật biện chứng và phương pháp luận duy vật lịch sử; chỉ ra quy luật phát triển của xã hội loài người; xác định sứ mệnh lịch sử của giai cấp công nhân; vạch ra con đường cách mạng vô sản gắn độc lập dân tộc với chủ nghĩa xã hội.",
    assimilation: "Hồ Chí Minh tiếp thu Chủ nghĩa Mác - Lênin theo tinh thần 'nắm lấy cái tinh thần, cái bản chất', vận dụng sáng tạo chứ không rập khuôn kinh viện giáo điều; bổ sung lý luận về cách mạng thuộc địa có thể nổ ra và thắng lợi trước cách mạng ở chính quốc.",
    evidence: "Tháng 7/1920 đọc Luận cương của Lênin, Hồ Chí Minh reo lên: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!'.",
    limitations: "Chủ nghĩa Mác – Lênin sinh ra từ thực tiễn Tây Âu phát triển. Nếu không được Hồ Chí Minh vận dụng và phát triển sáng tạo vào thực tiễn một nước thuộc địa nửa phong kiến phương Đông thì lý luận không thể tự phát thành hành động giải phóng dân tộc Việt Nam.",
    relatedStageIds: ["stage_2", "stage_3", "stage_4", "stage_5"],
    sourceId: "src_ll_ml"
  },
  inf_cq_pc: {
    id: "inf_cq_pc",
    name: "Phẩm chất cá nhân Hồ Chí Minh",
    shortLabel: "Phẩm chất Hồ Chí Minh",
    group: "chu-quan",
    groupName: "Nhân tố chủ quan",
    role: "Động lực nội sinh mãnh liệt, bản lĩnh kiên cường giúp vượt qua mọi gian nguy, giữ vững mục tiêu lý tưởng.",
    contribution: "Lòng yêu nước nồng nàn và thương dân sâu sắc; hoài bão cứu nước cháy bỏng; ý chí sắt đá, nghị lực phi thường vượt qua ngục tù đày ải; phong cách mẫu mực giản dị, liêm khiết, khiêm tốn; niềm tin vô hạn vào sức mạnh của nhân dân.",
    assimilation: "Biến tình cảm thiêng liêng với đồng bào thành trách nhiệm chính trị cao cả; suốt đời hy sinh quyền lợi riêng tư vì hạnh phúc của dân tộc và nhân loại.",
    evidence: "Hồ Chí Minh khẳng định: 'Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành'.",
    limitations: "Nếu chỉ có phẩm chất đạo đức và ý chí đơn thuần mà không có năng lực tư duy lý luận khoa học thì không thể định hình đường lối cứu nước đúng đắn.",
    relatedStageIds: ["stage_1", "stage_4", "stage_5"],
    sourceId: "src_cq_pc"
  },
  inf_cq_nl: {
    id: "inf_cq_nl",
    name: "Năng lực hoạt động thực tiễn và phát triển lý luận",
    shortLabel: "Năng lực tư duy & Thực tiễn",
    group: "chu-quan",
    groupName: "Nhân tố chủ quan",
    role: "Nhân tố chủ quan quyết định khả năng chuyển hóa tri thức nhân loại thành đường lối cách mạng sáng tạo và hiện thực sinh động.",
    contribution: "Tư duy độc lập, tự chủ, sáng tạo, giàu tính phê phán; thấu hiểu bản chất thời đại; năng lực tổng kết thực tiễn phong phú của phong trào công nhân và phong trào thuộc địa; khả năng cụ thể hóa lý luận trừu tượng thành phương châm giản dị, dễ nhớ, dễ làm cho quần chúng.",
    assimilation: "Người kết hợp nhuần nhuyễn giữa 'học' và 'hành', khảo sát thực tế qua nhiều nước, không giáo điều rập khuôn; dám bảo vệ chân lý đúng đắn trước những lệch lạc tả khuynh trong phong trào cộng sản quốc tế.",
    evidence: "Đường lối thành lập Mặt trận Việt Minh (1941), đặt quyền lợi dân tộc lên trên hết, vận dụng sáng tạo chủ nghĩa Mác - Lênin phù hợp với đặc thù nước ta để tiến tới Tổng khởi nghĩa tháng Tám năm 1945.",
    limitations: "Năng lực cá nhân dù xuất chúng đến đâu cũng chỉ phát huy hiệu quả khi bắt rễ sâu sắc vào phong trào cách mạng của quần chúng nhân dân và được soi sáng bởi thế giới quan Mác - Lênin.",
    relatedStageIds: ["stage_3", "stage_4", "stage_5"],
    sourceId: "src_cq_nl"
  }
};
