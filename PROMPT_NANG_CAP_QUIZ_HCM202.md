# PROMPT NÂNG CẤP QUIZ WEBSITE HCM202

Sao chép toàn bộ nội dung từ dòng **BẮT ĐẦU PROMPT** đến **KẾT THÚC PROMPT** và đưa cho công cụ hỗ trợ code trong VS Code.

---

## BẮT ĐẦU PROMPT

Bạn đang chỉnh sửa một website học thuật đã có sẵn, xây dựng bằng **Next.js + React + TypeScript + Tailwind CSS**. Website có chủ đề **“Bản đồ hình thành tư tưởng Hồ Chí Minh”** và đang được deploy tại `https://hcm202-steel.vercel.app/`.

Hãy đọc cấu trúc source code hiện tại trước khi sửa. Tìm section có `id="quiz"` hoặc tiêu đề **“Thử hiểu đúng về Tư tưởng Hồ Chí Minh”**. Nâng cấp section này thành một mini-game hoàn chỉnh. Giữ nguyên các section timeline, story map, kết luận và nguồn tài liệu. Không thay đổi hệ thống màu, typography và phong cách triển lãm lịch sử số đang có.

### 1. Mục tiêu

- Tạo hoạt động tương tác dùng được ngay khi thuyết trình trước lớp.
- Kiểm tra khả năng hiểu quan hệ giữa bối cảnh, cơ sở lý luận, nhân tố chủ quan và các giai đoạn hình thành tư tưởng Hồ Chí Minh.
- Hạn chế câu hỏi ghi nhớ vụn vặt; sau mỗi câu phải giải thích vì sao đáp án đúng.
- Dùng đúng nội dung Chương II, Giáo trình Tư tưởng Hồ Chí Minh 2019.
- Không biến phần quiz thành một trang riêng; tích hợp tự nhiên vào section hiện tại.

### 2. Hai chế độ chơi

#### Chế độ “Tự khám phá”

- Một người chơi trên máy tính hoặc điện thoại.
- Cho phép chọn:
  - `Chơi đầy đủ`: 12 câu.
  - `Chơi nhanh`: 8 câu được lấy từ cả ba vòng; luôn giữ câu 12 làm câu cuối.
- Mỗi câu có 15 giây.
- Đúng nhận 100 điểm, cộng tối đa 50 điểm thưởng theo thời gian còn lại.
- Hiển thị chuỗi trả lời đúng liên tiếp.
- Lưu điểm cao nhất bằng `localStorage`.
- Cuối lượt hiện tổng điểm, số câu đúng, nhận xét và các nút `Chơi lại`, `Làm lại câu sai`.

#### Chế độ “Đấu đội trên lớp”

- Có hai đội: `Đội A` và `Đội B`.
- Bảng điểm của hai đội luôn hiện ở đầu section trong lúc chơi.
- Ở mỗi câu, người thuyết trình chọn phương án mà từng đội trả lời.
- Chỉ sau khi bấm `Công bố đáp án` mới hiện đúng/sai và giải thích.
- Mỗi đội trả lời đúng nhận 100 điểm; câu 12 nhận 200 điểm.
- Có nút `Hoàn tác điểm vừa cộng` để xử lý trường hợp người dẫn bấm nhầm.
- Sau mỗi vòng hiện bảng điểm tạm thời.
- Kết thúc hiện đội thắng hoặc kết quả hòa.
- Không cần backend và không tạo leaderboard trực tuyến.

### 3. Cấu trúc 3 vòng

- **Vòng 1 – Những nền móng:** câu 1–4.
- **Vòng 2 – Con đường được xác lập:** câu 5–8.
- **Vòng 3 – Làm chủ bản đồ:** câu 9–12.
- Mỗi vòng có màn hình giới thiệu ngắn và màn hình kết quả tạm thời.
- Thanh trạng thái hiển thị dạng: `Vòng 2/3 · Câu 6/12`.
- Câu 12 là câu quyết định và được nhân đôi điểm trong chế độ đấu đội.

### 4. Trải nghiệm từng câu

- Mỗi màn hình chỉ hiện một câu hỏi.
- Có progress bar và vòng đếm ngược 15 giây.
- Bốn đáp án A/B/C/D phải là button lớn, dễ bấm khi dùng điện thoại.
- Sau khi người chơi chọn, khóa các đáp án.
- Đáp án đúng chuyển xanh; đáp án sai đã chọn chuyển đỏ.
- Hiện nhãn `Chính xác` hoặc `Chưa chính xác` bằng `aria-live`.
- Hiện phần `Giải thích` và `Đối chiếu giáo trình` sau khi trả lời.
- Có nút `Câu tiếp theo`; hỗ trợ phím Enter.
- Hỗ trợ phím 1–4 để chọn A–D.
- Khi hết giờ, xem như chưa trả lời và vẫn phải hiện đáp án cùng giải thích.
- Có hiệu ứng ăn mừng nhẹ khi đạt ít nhất 9/12 hoặc thắng chế độ đấu đội.
- Tôn trọng `prefers-reduced-motion`.

### 5. Hai thử thách bonus

Sau phần 12 câu, thêm khu vực `Thử thách bonus`. Bonus không tính vào 12 câu chính.

#### Bonus 1: Sắp xếp dòng thời gian

Sắp xếp đúng năm giai đoạn:

1. Trước ngày 5/6/1911.
2. Từ 6/6/1911 đến 30/12/1920.
3. Từ 31/12/1920 đến 3/2/1930.
4. Từ 4/2/1930 đến 28/1/1941.
5. Từ 29/1/1941 đến 2/9/1969.

Có thể dùng kéo thả, nhưng phải có nút mũi tên lên/xuống làm phương án thay thế trên mobile và hỗ trợ bàn phím.

#### Bonus 2: Ghép cơ sở với vai trò

- Thực tiễn Việt Nam → Đặt ra yêu cầu phải tìm con đường cứu nước mới.
- Truyền thống dân tộc → Cội nguồn và động lực yêu nước.
- Tinh hoa văn hóa Đông–Tây → Bồi đắp giá trị nhân văn và tri thức.
- Chủ nghĩa Mác–Lênin → Tiền đề lý luận quyết định.
- Nhân tố chủ quan Hồ Chí Minh → Tiếp thu, chọn lọc, chuyển hóa và phát triển sáng tạo.

### 6. Cấu trúc code

- Tách dữ liệu vào `data/quizQuestions.ts` hoặc vị trí tương đương với cấu trúc dự án.
- Tạo hoặc tách các component hợp lý:
  - `QuizGame`
  - `QuizModeSelector`
  - `QuizQuestion`
  - `QuizProgress`
  - `TeamScoreboard`
  - `RoundSummary`
  - `QuizFinalResult`
  - `TimelineOrderGame`
  - `InfluenceMatchGame`
- Dùng TypeScript type rõ ràng; không dùng `any`.
- Không cài thư viện nặng. Nếu dự án chưa có thư viện confetti, dùng CSS animation nhẹ.
- Không thêm database, API route, đăng nhập hoặc dịch vụ bên thứ ba.
- Không làm hỏng server rendering/hydration của Next.js. Chỉ truy cập `localStorage` phía client.
- Responsive từ 360px đến màn hình máy chiếu.
- Đảm bảo độ tương phản, focus state và điều khiển bằng bàn phím.

### 7. Kiểu dữ liệu gợi ý

```ts
export type QuizQuestion = {
  id: number;
  round: 1 | 2 | 3;
  category: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  source: string;
  doublePoints?: boolean;
};
```

### 8. Ngân hàng 12 câu hỏi bắt buộc

```ts
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    round: 1,
    category: "Thực tiễn Việt Nam",
    question: "Vì sao đầu thế kỷ XX Việt Nam cần tìm một con đường cứu nước mới?",
    options: [
      "Vì nhân dân Việt Nam chưa có lòng yêu nước.",
      "Vì các phong trào yêu nước theo những khuynh hướng cũ chưa giải quyết được cuộc khủng hoảng đường lối.",
      "Vì Việt Nam chưa từng có phong trào chống Pháp.",
      "Vì phong trào công nhân thế giới yêu cầu Việt Nam thay đổi."
    ],
    correctIndex: 1,
    explanation: "Thực tiễn Việt Nam đặt ra yêu cầu phải tìm một con đường mới. Nó giải thích nhu cầu lịch sử nhưng chưa tự cung cấp lời giải về con đường cách mạng phù hợp.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 19–21."
  },
  {
    id: 2,
    round: 1,
    category: "Truyền thống dân tộc",
    question: "Truyền thống yêu nước giữ vai trò nào trong quá trình hình thành tư tưởng Hồ Chí Minh?",
    options: [
      "Cung cấp toàn bộ đường lối cách mạng vô sản.",
      "Là cội nguồn và động lực thôi thúc Người tìm đường cứu nước.",
      "Thay thế hoàn toàn chủ nghĩa Mác–Lênin.",
      "Chỉ ảnh hưởng đến đời sống cá nhân."
    ],
    correctIndex: 1,
    explanation: "Chủ nghĩa yêu nước là điểm xuất phát và động lực lớn, nhưng chưa đủ để xác định con đường cách mạng phù hợp với thời đại mới.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 22–23."
  },
  {
    id: 3,
    round: 1,
    category: "Tinh hoa văn hóa nhân loại",
    question: "Hồ Chí Minh tiếp thu tinh hoa văn hóa phương Đông và phương Tây theo cách nào?",
    options: [
      "Tiếp nhận nguyên vẹn mọi tư tưởng.",
      "Chỉ tiếp nhận văn hóa phương Đông.",
      "Chọn lọc giá trị tiến bộ, phê phán hạn chế và vận dụng phù hợp với Việt Nam.",
      "Loại bỏ toàn bộ tư tưởng truyền thống."
    ],
    correctIndex: 2,
    explanation: "Quá trình tiếp thu có chọn lọc cho thấy vai trò chủ động của Hồ Chí Minh, không phải sự sao chép các học thuyết.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 23–25."
  },
  {
    id: 4,
    round: 1,
    category: "Văn hóa phương Đông",
    question: "Hồ Chí Minh tiếp thu yếu tố tích cực nào từ Nho giáo?",
    options: [
      "Tư tưởng phân chia đẳng cấp.",
      "Tư tưởng trọng nam khinh nữ.",
      "Triết lý hành động, tu dưỡng đạo đức và tinh thần nhập thế.",
      "Quan niệm bảo vệ tuyệt đối trật tự phong kiến."
    ],
    correctIndex: 2,
    explanation: "Người tiếp thu những yếu tố tích cực như tu dưỡng đạo đức và tinh thần hành động, đồng thời loại bỏ những yếu tố bảo thủ, duy tâm và phân biệt đẳng cấp.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 23–24."
  },
  {
    id: 5,
    round: 2,
    category: "Chủ nghĩa Mác–Lênin",
    question: "Vì sao chủ nghĩa Mác–Lênin được xác định là tiền đề lý luận quyết định?",
    options: [
      "Vì đây là nguồn ảnh hưởng duy nhất.",
      "Vì cung cấp thế giới quan và phương pháp luận khoa học để xác định con đường giải phóng dân tộc.",
      "Vì phủ nhận mọi giá trị truyền thống Việt Nam.",
      "Vì có thể áp dụng nguyên xi vào mọi quốc gia."
    ],
    correctIndex: 1,
    explanation: "Quyết định không có nghĩa là duy nhất. Hồ Chí Minh vận dụng sáng tạo lý luận vào hoàn cảnh cụ thể của Việt Nam.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 25–26."
  },
  {
    id: 6,
    round: 2,
    category: "Bước ngoặt năm 1920",
    question: "Vì sao năm 1920 là bước ngoặt trong quá trình hình thành tư tưởng Hồ Chí Minh?",
    options: [
      "Người bắt đầu cuộc hành trình tìm đường cứu nước.",
      "Người tìm thấy con đường giải phóng dân tộc theo cách mạng vô sản và chuyển biến từ người yêu nước thành người cộng sản.",
      "Toàn bộ tư tưởng Hồ Chí Minh đã hoàn chỉnh ngay trong năm đó.",
      "Cách mạng Tháng Tám giành thắng lợi."
    ],
    correctIndex: 1,
    explanation: "Năm 1920 xác lập phương hướng cơ bản. Các quan điểm cụ thể tiếp tục được hình thành, kiểm nghiệm và phát triển trong những giai đoạn sau.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 28–29."
  },
  {
    id: 7,
    round: 2,
    category: "Giai đoạn 1920–1930",
    question: "Ý nghĩa nổi bật của giai đoạn 1920–1930 là gì?",
    options: [
      "Hình thành tư tưởng yêu nước ban đầu.",
      "Hình thành những nội dung cơ bản của tư tưởng về cách mạng Việt Nam.",
      "Hoàn thành sự nghiệp giải phóng dân tộc.",
      "Tư tưởng cách mạng tạm thời ngừng phát triển."
    ],
    correctIndex: 1,
    explanation: "Qua hoạt động lý luận, tổ chức và thực tiễn, những quan điểm cơ bản về cách mạng Việt Nam dần được xác lập.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 29–31."
  },
  {
    id: 8,
    round: 2,
    category: "Giai đoạn 1930–1941",
    question: "Điểm nổi bật của giai đoạn 1930–1941 là gì?",
    options: [
      "Hồ Chí Minh từ bỏ đường lối đã lựa chọn.",
      "Người vượt qua thử thách, giữ vững đường lối và phương pháp cách mạng đúng đắn, sáng tạo.",
      "Người mới bắt đầu tiếp xúc với chủ nghĩa yêu nước.",
      "Cách mạng Việt Nam đã hoàn thành mọi mục tiêu."
    ],
    correctIndex: 1,
    explanation: "Giai đoạn này thể hiện tính độc lập, đúng đắn và sáng tạo của tư tưởng Hồ Chí Minh trước những thử thách thực tiễn.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 31–33."
  },
  {
    id: 9,
    round: 3,
    category: "Bối cảnh thế giới",
    question: "Sự kiện nào tạo ảnh hưởng lớn đến việc Hồ Chí Minh lựa chọn con đường cách mạng vô sản?",
    options: [
      "Chiến tranh thế giới thứ hai kết thúc.",
      "Cách mạng Tháng Mười Nga năm 1917 thắng lợi.",
      "Liên hợp quốc được thành lập.",
      "Phong trào Đông Du bắt đầu."
    ],
    correctIndex: 1,
    explanation: "Cách mạng Tháng Mười Nga mở ra thời đại mới và cho thấy khả năng giải phóng các dân tộc bị áp bức bằng con đường cách mạng.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 21–22."
  },
  {
    id: 10,
    round: 3,
    category: "Nhân tố chủ quan",
    question: "Nhân tố chủ quan Hồ Chí Minh có vai trò gì trong quá trình hình thành tư tưởng của Người?",
    options: [
      "Giúp Người tiếp thu nguyên vẹn mọi học thuyết đã gặp.",
      "Giúp Người tư duy độc lập, chọn lọc, chuyển hóa và phát triển các nguồn ảnh hưởng.",
      "Thay thế hoàn toàn những điều kiện lịch sử khách quan.",
      "Chỉ giúp Người học được nhiều ngoại ngữ."
    ],
    correctIndex: 1,
    explanation: "Phẩm chất, tư duy độc lập và năng lực tổng kết thực tiễn giải thích vì sao Hồ Chí Minh có thể chuyển hóa các nguồn ảnh hưởng thành hệ thống tư tưởng phù hợp với Việt Nam.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 26–27."
  },
  {
    id: 11,
    round: 3,
    category: "Vai trò các cơ sở",
    question: "Nhiều cơ sở cùng tham gia hình thành tư tưởng Hồ Chí Minh có nghĩa chúng giữ vai trò ngang nhau không?",
    options: [
      "Có, mỗi cơ sở đóng góp một tỷ lệ bằng nhau.",
      "Có, vì tư tưởng Hồ Chí Minh là phép cộng các học thuyết.",
      "Không; mỗi cơ sở giữ một vai trò khác nhau và được Hồ Chí Minh chủ động tiếp thu, chọn lọc, chuyển hóa.",
      "Không; chỉ chủ nghĩa Mác–Lênin có vai trò, các yếu tố khác không có ý nghĩa."
    ],
    correctIndex: 2,
    explanation: "Thực tiễn, truyền thống, văn hóa nhân loại, chủ nghĩa Mác–Lênin và nhân tố chủ quan cùng tham gia nhưng giữ những chức năng khác nhau.",
    source: "Giáo trình Tư tưởng Hồ Chí Minh 2019, tr. 19–27."
  },
  {
    id: 12,
    round: 3,
    category: "Nhận diện cách hiểu sai",
    question: "Nhận định nào biểu hiện cách hiểu máy móc về sự hình thành tư tưởng Hồ Chí Minh?",
    options: [
      "Các nguồn ảnh hưởng giữ những vai trò khác nhau.",
      "Hồ Chí Minh tiếp thu văn hóa nhân loại có chọn lọc.",
      "Tư tưởng Hồ Chí Minh là phép cộng nguyên vẹn giữa truyền thống dân tộc, văn hóa Đông–Tây và chủ nghĩa Mác–Lênin.",
      "Thực tiễn cách mạng góp phần kiểm nghiệm và phát triển tư tưởng."
    ],
    correctIndex: 2,
    explanation: "Tư tưởng Hồ Chí Minh không phải phép cộng cơ học. Các giá trị được Người chủ động lựa chọn, chuyển hóa, vận dụng và phát triển trong thực tiễn.",
    source: "Tổng hợp Giáo trình Tư tưởng Hồ Chí Minh 2019, Chương II, tr. 19–35.",
    doublePoints: true
  }
];
```

### 9. Quy tắc nội dung

- Giữ nguyên câu hỏi, đáp án đúng, giải thích và số trang trong dữ liệu trên, trừ khi source code yêu cầu sửa dấu câu hoặc escape ký tự.
- Không tự thêm câu trích dẫn được gán cho Hồ Chí Minh.
- Không tạo phần trăm ảnh hưởng của các nguồn.
- Không diễn đạt tư tưởng Hồ Chí Minh như phép cộng máy móc.
- Không dùng câu hỏi “Hồ Chí Minh đã đi gần 30 quốc gia” vì đây là chi tiết trivia, không phục vụ luận điểm trung tâm.
- Không đưa nội dung giá trị của tư tưởng Hồ Chí Minh ở Chương III vào 12 câu chính.

### 10. Yêu cầu hoàn thành

1. Trước khi sửa, tóm tắt ngắn cấu trúc quiz hiện tại và liệt kê các file sẽ thay đổi.
2. Thực hiện đầy đủ thay đổi trong source code, không chỉ đưa ví dụ hoặc pseudocode.
3. Giữ tương thích với conventions và dependencies hiện tại của dự án.
4. Chạy lint nếu dự án có script lint.
5. Chạy `npm run build` và sửa toàn bộ lỗi phát sinh.
6. Sau khi hoàn tất, báo cáo:
   - Các file đã sửa hoặc tạo.
   - Các tính năng đã hoàn thành.
   - Kết quả lint/build.
   - Cách người thuyết trình sử dụng chế độ đấu đội.
7. Không tự deploy nếu chưa được yêu cầu; chỉ chuẩn bị source code ở trạng thái build thành công.

## KẾT THÚC PROMPT

