// src/data/lessons.ts
import { Lesson } from "../types";

export const lessons: Lesson[] = [
  // ==========================================
  // PHẦN 1: NHẬP MÔN & NỀN TẢNG (1-3)
  // ==========================================
  {
    id: "lesson-1",
    title: "Giới thiệu về Cờ Tướng & Bàn Cờ",
    description:
      "Khám phá lịch sử, ý nghĩa triết lý và cấu trúc cơ bản của bàn cờ Tướng.",
    level: "beginner",
    order: 1,
    content: `
# Cờ Tướng: Hơn Cả Một Trò Chơi

> "Cờ Tướng không chỉ là một trò chơi trí tuệ, mà còn là một bức tranh thu nhỏ của nghệ thuật cầm quân đánh trận, ẩn chứa triết lý âm dương sâu sắc."

## 1. Nguồn gốc và Lịch sử
Cờ tướng (象棋 - Xiangqi) là một trò chơi chiến lược có nguồn gốc từ Trung Quốc, đã có lịch sử phát triển rực rỡ hơn 1000 năm. Trò chơi mô phỏng lại các cuộc chiến tranh cổ đại, tiêu biểu là cuộc chiến Hán - Sở tranh hùng.

## 2. Cấu trúc Bàn cờ
Bàn cờ tướng là một hình chữ nhật gồm 9 đường dọc và 10 đường ngang cắt nhau, tạo thành 90 điểm giao cắt. Các quân cờ sẽ được đặt và di chuyển trên các **điểm giao cắt** này, không phải trong ô vuông.

### Các khu vực đặc biệt:
* **Sở Hà Hán Giới (Sông):** Khoảng trống chia đôi bàn cờ, tượng trưng cho ranh giới hai quốc gia. Sông ảnh hưởng trực tiếp đến quy tắc di chuyển của Tượng (không được qua sông) và Tốt (qua sông được đi ngang).
* **Cửu Cung (Cung Tướng):** Khu vực hình vuông 3x3 có hai đường chéo chữ X ở mỗi bên. Đây là "hoàng cung", nơi Tướng và Sĩ không bao giờ được phép rời khỏi.

## 3. Lực lượng hai bên
Mỗi bên bắt đầu với 16 quân cờ, chia làm 7 loại binh chủng:
* **1 Tướng (Soái):** Trái tim của đạo quân. Mất Tướng là thua ván cờ.
* **2 Sĩ & 2 Tượng:** Lực lượng phòng ngự trung kiên, bảo vệ hoàng cung.
* **2 Xe, 2 Pháo, 2 Mã:** Lực lượng tấn công chủ lực, mỗi quân có một ưu/nhược điểm riêng.
* **5 Tốt (Binh):** Lực lượng tiên phong, đông đảo nhưng ban đầu khả năng hạn chế.
    `,
    duration: "15 phút",
    tags: ["cơ bản", "lịch sử", "bàn cờ", "luật chơi"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Cờ tướng có nguồn gốc từ đâu và lịch sử phát triển rực rỡ hơn bao nhiêu năm?",
        options: [
          "Trung Quốc, 500 năm",
          "Ấn Độ, 1000 năm",
          "Trung Quốc, 1000 năm",
          "Việt Nam, 2000 năm",
        ],
        correctAnswer: "Trung Quốc, 1000 năm",
      },
      {
        question: "Bàn cờ tướng có tổng cộng bao nhiêu điểm giao cắt?",
        options: ["64", "81", "90", "100"],
        correctAnswer: "90",
      },
      {
        question:
          "Khu vực nào trên bàn cờ ảnh hưởng trực tiếp đến quy tắc di chuyển của Tượng và Tốt?",
        options: ["Cửu Cung", "Lộ 5", "Sở Hà Hán Giới (Sông)", "Điểm giao cắt"],
        correctAnswer: "Sở Hà Hán Giới (Sông)",
      },
      {
        question:
          "Quân cờ nào tuyệt đối không bao giờ được phép rời khỏi Cửu Cung?",
        options: ["Sĩ và Tượng", "Tướng và Sĩ", "Tướng và Tượng", "Xe và Mã"],
        correctAnswer: "Tướng và Sĩ",
      },
      {
        question: "Mỗi bên bắt đầu ván cờ với bao nhiêu quân cờ?",
        options: ["15", "16", "18", "32"],
        correctAnswer: "16",
      },
    ],
  },
  {
    id: "lesson-2",
    title: "Luật Hành Quân: Cách Di Chuyển",
    description:
      "Nắm vững nguyên tắc di chuyển và các quy luật giới hạn của 7 binh chủng.",
    level: "beginner",
    order: 2,
    content: `
# Luật Hành Quân Trong Cờ Tướng

Mỗi quân cờ có một quy tắc di chuyển nghiêm ngặt, phản ánh đúng vai trò của chúng trên chiến trường cổ đại.

## Lực lượng Tuẫn Tiết (Chỉ phòng thủ)

### Tướng (King)
* **Cách đi:** Đi từng bước một, dọc hoặc ngang.
* **Giới hạn:** Tuyệt đối không được ra khỏi Cửu Cung.
* **Luật lộ mặt:** Hai Tướng không được nằm trên cùng một cột dọc mà không có quân nào che chắn ở giữa. Trực diện Tướng là "Sát thủ tàng hình".

### Sĩ (Advisor)
* **Cách đi:** Đi chéo từng ô một.
* **Giới hạn:** Chỉ được đi theo các đường chéo bên trong Cửu Cung.

### Tượng (Elephant)
* **Cách đi:** Đi chéo 2 ô (tạo thành góc vuông 2x2).
* **Giới hạn:** Tuyệt đối **không được qua sông**.
* **Luật cản mắt:** Nếu có một quân cờ nằm ngay giữa đường chéo đi của Tượng, Tượng sẽ không thể nhảy qua.

---

## Lực lượng Tấn Công (Di chuyển tự do)

### Xe (Chariot)
* **Cách đi:** Đi dọc hoặc ngang bao nhiêu ô tùy ý, miễn là không bị chặn.
* **Sức mạnh:** Là quân cờ uy dũng và giá trị nhất trên bàn cờ.

### Pháo (Cannon)
* **Cách đi:** Đi dọc hoặc ngang giống như Xe.
* **Luật ăn quân (Nhảy ngòi):** Khi muốn ăn quân đối phương, Pháo bắt buộc phải nhảy qua đúng **một quân cờ khác** (bất kể là quân ta hay địch).

### Mã (Horse)
* **Cách đi:** Đi theo hình chữ L (tiến/lùi 2 ô dọc rồi sang ngang 1 ô, hoặc tiến/lùi 2 ô ngang rồi lên/xuống 1 ô).
* **Luật cản chân:** Nếu có quân nằm ngay sát Mã trên hướng đi thẳng ban đầu, Mã sẽ bị "cản chân" và không thể đi hướng đó.

### Tốt (Pawn)
* **Chưa qua sông:** Chỉ được tiến thẳng lên phía trước 1 bước.
* **Đã qua sông:** Có thể tiến thẳng hoặc đi ngang 1 bước.
* **Giới hạn:** Tốt không bao giờ được đi lùi.
    `,
    duration: "20 phút",
    tags: ["cơ bản", "di chuyển", "binh chủng", "luật chơi"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Quân Tướng di chuyển như thế nào?",
        options: [
          "Đi chéo từng ô một",
          "Đi từng bước một, dọc hoặc ngang",
          "Đi dọc tùy ý",
          "Đi chéo 2 ô",
        ],
        correctAnswer: "Đi từng bước một, dọc hoặc ngang",
      },
      {
        question: "Quân Tượng bị cản mắt khi nào?",
        options: [
          "Khi có quân đứng sát bên cạnh",
          "Khi có quân nằm ngay giữa đường chéo đi của nó",
          "Khi chưa qua sông",
          "Khi đứng ở biên",
        ],
        correctAnswer: "Khi có quân nằm ngay giữa đường chéo đi của nó",
      },
      {
        question:
          "Khi muốn ăn quân đối phương, quân Pháo bắt buộc phải làm gì?",
        options: [
          "Đi chéo",
          "Đâm thẳng",
          "Nhảy qua đúng một quân cờ khác",
          "Đứng sát quân địch",
        ],
        correctAnswer: "Nhảy qua đúng một quân cờ khác",
      },
      {
        question: "Mã bị 'cản chân' trong trường hợp nào?",
        options: [
          "Có quân cờ nằm ngay giữa đường chéo",
          "Có quân nằm ngay sát Mã trên hướng đi thẳng ban đầu",
          "Khi Mã đi lùi",
          "Khi qua sông",
        ],
        correctAnswer: "Có quân nằm ngay sát Mã trên hướng đi thẳng ban đầu",
      },
      {
        question: "Tốt chưa qua sông di chuyển như thế nào?",
        options: [
          "Đi ngang 1 bước",
          "Tiến thẳng lên phía trước 1 bước",
          "Lùi 1 bước",
          "Tiến hoặc ngang 1 bước",
        ],
        correctAnswer: "Tiến thẳng lên phía trước 1 bước",
      },
    ],
  },
  {
    id: "lesson-3",
    title: "Đánh Giá Lực Lượng: Giá Trị Quân Cờ & Đổi Quân",
    description:
      "Hiểu rõ sức mạnh tương đối của từng binh chủng để đưa ra quyết định trao đổi có lợi.",
    level: "beginner",
    order: 3,
    content: `
# Thước Đo Sức Mạnh: Giá Trị Quân Cờ

Để ra quyết định xem có nên dùng quân này để ăn quân kia hay không, người chơi cờ quy ước một thang điểm sức mạnh (tương đối) cho từng binh chủng.

## Thang Điểm Tham Khảo
* **Xe (9 điểm):** Quân cờ mạnh nhất. Tầm hoạt động rộng, tốc độ cao. Mất Xe sớm thường dẫn đến thua cuộc.
* **Pháo (4.5 điểm):** Ở đầu ván cờ, Pháo rất mạnh vì có nhiều "ngòi" để nhảy. Cuối ván cờ, Pháo yếu dần đi.
* **Mã (4 điểm):** Ngược lại với Pháo, Mã đầu ván cờ dễ bị cản chân. Cuối ván cờ khi bàn cờ trống trải, Mã trở nên cực kỳ nguy hiểm.
* **Sĩ / Tượng (2 điểm):** Vai trò phòng ngự thuần túy.
* **Tốt (1 điểm / 2 điểm):** Tốt chưa qua sông trị giá 1 điểm. Tốt đã qua sông trị giá tương đương 2 điểm (thậm chí cao hơn ở cờ tàn).

## Nghệ Thuật Đổi Quân
Trao đổi quân (Trade) là khi hai bên ăn quân qua lại lẫn nhau. 

1. **Đổi ngang giá (Ngang quân):** Dùng Mã đổi Pháo, hoặc Mã đổi Mã. Nên làm khi việc này giúp bạn phá vỡ cấu trúc phòng ngự của địch.
2. **Đổi lời quân:** Dùng một quân giá trị thấp (Tốt) ăn một quân giá trị cao (Mã). Luôn luôn tìm kiếm cơ hội này!
3. **Phế quân (Hy sinh):** Cố tình để đối phương ăn quân lớn của mình nhằm đổi lấy cơ hội **chiếu hết** ngay lập tức. Đây là đỉnh cao của nghệ thuật chiến thuật.
    `,
    duration: "20 phút",
    tags: ["cơ bản", "tư duy", "lực lượng", "đổi quân"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Quân cờ nào được đánh giá mạnh nhất với 9 điểm?",
        options: ["Mã", "Pháo", "Xe", "Tướng"],
        correctAnswer: "Xe",
      },
      {
        question:
          "Quân Pháo được định giá bao nhiêu điểm theo thang điểm tham khảo?",
        options: ["4 điểm", "4.5 điểm", "2 điểm", "5 điểm"],
        correctAnswer: "4.5 điểm",
      },
      {
        question: "Quân Mã trở nên cực kỳ nguy hiểm vào thời điểm nào?",
        options: [
          "Đầu ván cờ",
          "Khi chưa qua sông",
          "Cuối ván cờ khi bàn cờ trống trải",
          "Khi bị cản chân",
        ],
        correctAnswer: "Cuối ván cờ khi bàn cờ trống trải",
      },
      {
        question: "Tốt đã qua sông có giá trị tương đương bao nhiêu điểm?",
        options: ["1 điểm", "1.5 điểm", "2 điểm", "3 điểm"],
        correctAnswer: "2 điểm",
      },
      {
        question:
          "Hành động dùng Tốt để ăn quân Mã của đối phương được gọi là gì?",
        options: ["Đổi ngang giá", "Phế quân", "Đổi lời quân", "Hy sinh"],
        correctAnswer: "Đổi lời quân",
      },
    ],
  },

  // ==========================================
  // PHẦN 2: KHAI CUỘC NỀN TẢNG (4-6)
  // ==========================================
  {
    id: "lesson-4",
    title: "Nguyên Tắc Khai Cuộc Trận Pháp",
    description:
      "Những quy tắc sống còn trong 10-15 nước đi đầu tiên của ván đấu.",
    level: "intermediate",
    order: 4,
    content: `
# Khai Cuộc: Xây Dựng Nền Móng Chiến Thắng

> "Khai cuộc sai lầm, trung cuộc chật vật, tàn cuộc thảm bại."

## 4 Nguyên Tắc Vàng Trong Khai Cuộc

1. **Nhanh chóng xuất động chủ lực (Xe, Pháo, Mã):** "Tam bộ bất xuất Xa, tất hữu bại cục" (3 nước không ra Xe, ắt sẽ thua).
2. **Tranh giành quyền kiểm soát trung tâm:** Lộ 5 (cột giữa) là trục xương sống của bàn cờ. 
3. **Không di chuyển một quân quá nhiều lần:** Tránh lãng phí "nhịp" (tempo) để đối phương có thời gian dàn quân.
4. **Bảo đảm an toàn cho Tướng:** Lên Sĩ, Tượng đúng lúc để chống lại các đòn đánh phủ đầu.

## Các Nước Đi Khai Cuộc Phổ Biến
* **Pháo Đầu (Pháo 2 bình 5):** Cương mãnh, ép sân ngay từ nước đầu.
* **Tiến Binh (Tốt 3 tiến 1):** Nhu cương tùy lúc, linh hoạt biến hóa.
* **Phi Tượng (Tượng 3 tiến 5):** Thâm trầm, phòng ngự phản công.
    `,
    duration: "25 phút",
    tags: ["trung cấp", "khai cuộc", "chiến lược", "nguyên tắc"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Câu 'Tam bộ bất xuất Xa, tất hữu bại cục' khuyên người chơi điều gì?",
        options: [
          "Phải lên Tốt ở 3 nước đầu",
          "Phải xuất Xe nhanh chóng",
          "Không được đi Xe 3 lần",
          "Phải lên Tượng",
        ],
        correctAnswer: "Phải xuất Xe nhanh chóng",
      },
      {
        question: "Trục xương sống của bàn cờ là lộ nào?",
        options: ["Lộ 3", "Lộ 5", "Lộ 7", "Lộ 9"],
        correctAnswer: "Lộ 5",
      },
      {
        question:
          "Tại sao trong khai cuộc không nên di chuyển một quân quá nhiều lần?",
        options: [
          "Để tránh mất Xe",
          "Để bảo vệ Tướng",
          "Tránh lãng phí nhịp (tempo) để đối phương dàn quân",
          "Để dễ đổi quân",
        ],
        correctAnswer: "Tránh lãng phí nhịp (tempo) để đối phương dàn quân",
      },
      {
        question: "Nước đi Pháo Đầu (Pháo 2 bình 5) mang tính chất gì?",
        options: ["Thâm trầm", "Dò xét", "Cương mãnh, ép sân", "Nhường sân"],
        correctAnswer: "Cương mãnh, ép sân",
      },
      {
        question: "Nước đi Tốt 3 tiến 1 được gọi là gì?",
        options: ["Pháo Đầu", "Phi Tượng", "Bình Phong Mã", "Tiến Binh"],
        correctAnswer: "Tiến Binh",
      },
    ],
  },
  {
    id: "lesson-5",
    title: "Trận Pháp: Thuận Pháo & Nghịch Pháo",
    description:
      "Phân tích hai hệ thống khai cuộc đôi công rực lửa và sát phạt bậc nhất.",
    level: "intermediate",
    order: 5,
    content: `
# Trận Cấp Tiến: Lấy Công Làm Thủ

Khi cả hai bên đều chọn chơi Pháo Đầu (đưa Pháo vào lộ 5), ván cờ lập tức trở thành một chiến trường đẫm máu.

## 1. Thuận Pháo (Cùng hướng)
Pháo đầu của hai bên nằm cùng một phía.
* **Triết lý:** Mắt đền mắt, răng đền răng. Bên đi sau chấp nhận chịu trận ở trung lộ để tìm cách phản công nhanh ở hai cánh.
* **Cạm bẫy thường gặp:** Bên đi sau vội vàng ăn chốt đầu của bên đi trước, dẫn đến việc bị Xe đối phương dồn ép nhịp độ.

## 2. Nghịch Pháo (Ngược hướng)
Pháo đầu nằm ở hai phía ngược nhau.
* **Triết lý:** Trận pháp này mang tính chất sát phạt cực cao, thường kết thúc nhanh chóng nếu một bên đi sai lầm. Cấu trúc phòng thủ bị xé toạc ngay từ những nước đầu tiên.
    `,
    duration: "30 phút",
    tags: ["trung cấp", "khai cuộc", "trận pháp", "đôi công"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Trận Thuận Pháo và Nghịch Pháo xảy ra khi cả hai bên đều chọn chơi nước đi nào đầu tiên?",
        options: [
          "Tiến Binh",
          "Phi Tượng",
          "Lên Mã",
          "Pháo Đầu (đưa Pháo vào lộ 5)",
        ],
        correctAnswer: "Pháo Đầu (đưa Pháo vào lộ 5)",
      },
      {
        question:
          "Trong trận Thuận Pháo, Pháo đầu của hai bên nằm ở vị trí nào?",
        options: [
          "Nằm cùng một phía",
          "Nằm ngược phía",
          "Nằm ở biên",
          "Nằm ở lộ 3 và lộ 7",
        ],
        correctAnswer: "Nằm cùng một phía",
      },
      {
        question: "Cạm bẫy thường gặp của bên đi sau trong Thuận Pháo là gì?",
        options: [
          "Đổi Xe sớm",
          "Lên Tượng muộn",
          "Vội vàng ăn chốt đầu của bên đi trước",
          "Không ra Xe",
        ],
        correctAnswer: "Vội vàng ăn chốt đầu của bên đi trước",
      },
      {
        question: "Đặc điểm nổi bật của trận Nghịch Pháo là gì?",
        options: [
          "Rất vững chắc",
          "Mang tính chất sát phạt cực cao",
          "Thường hòa cờ",
          "Tấn công chậm",
        ],
        correctAnswer: "Mang tính chất sát phạt cực cao",
      },
      {
        question:
          "Trận cấp tiến lấy công làm thủ đòi hỏi triết lý thi đấu nào ở Thuận Pháo?",
        options: [
          "Chờ thời cơ",
          "Phòng ngự phản công",
          "Mắt đền mắt, răng đền răng",
          "Phế Xe đoạt Mã",
        ],
        correctAnswer: "Mắt đền mắt, răng đền răng",
      },
    ],
  },
  {
    id: "lesson-6",
    title: "Trận Pháp: Bình Phong Mã Tuyệt Học",
    description:
      "Khám phá 'Vua của các loại phòng thủ' và cách hóa giải thế công của Pháo Đầu.",
    level: "intermediate",
    order: 6,
    content: `
# Bình Phong Mã: Tấm Khiên Bất Bại

> "Muốn công phá Bình Phong Mã, cần một sức lực bằng ba lần bình thường."

## 1. Cấu Trúc Cơ Bản
Đưa cả hai Mã lên giữ Tốt đầu (Mã 2 tiến 3 và Mã 8 tiến 7).
* **Đặc điểm:** Hình thành một bức tường vững chắc như bình phong che chắn trước cung Tướng. Hai Mã bảo vệ lẫn nhau, đồng thời khóa chặt trung lộ.

## 2. Các Biến Thể Của Bình Phong Mã
* **Bình Phong Mã Tả Tượng (Lên Tượng trái):** Phổ biến nhất, cực kỳ vững chắc, hướng tới một ván cờ dài hơi.
* **Bình Phong Mã Pháo Quá Hà (Pháo qua sông):** Biến thể mang tính phản công mạnh, dùng Pháo đè Mã đối phương ngay trên phần sân địch.
* **Bình Phong Mã Phế Mã (Khí Mã Hãm Xa):** Cố tình dụ Xe địch ăn Mã để khóa chết Xe địch ở một góc hẹp. Đây là cạm bẫy kinh điển mọi kỳ thủ phải biết!
    `,
    duration: "30 phút",
    tags: ["trung cấp", "khai cuộc", "phòng thủ", "bình phong mã"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Bình Phong Mã được mệnh danh là gì?",
        options: [
          "Vua của các loại tấn công",
          "Vua của các loại phòng thủ",
          "Khai cuộc mạo hiểm nhất",
          "Khai cuộc yếu nhất",
        ],
        correctAnswer: "Vua của các loại phòng thủ",
      },
      {
        question: "Cấu trúc cơ bản của Bình Phong Mã là gì?",
        options: [
          "Hai Pháo giữ Tốt đầu",
          "Đưa cả hai Mã lên giữ Tốt đầu",
          "Hai Xe giữ Tốt đầu",
          "Một Mã lên giữ Tốt đầu, một Mã ra biên",
        ],
        correctAnswer: "Đưa cả hai Mã lên giữ Tốt đầu",
      },
      {
        question:
          "Biến thể nào của Bình Phong Mã được coi là phổ biến nhất và hướng tới ván cờ dài hơi?",
        options: [
          "Bình Phong Mã Tả Tượng",
          "Bình Phong Mã Pháo Quá Hà",
          "Khí Mã Hãm Xa",
          "Phản Cung Mã",
        ],
        correctAnswer: "Bình Phong Mã Tả Tượng",
      },
      {
        question: "'Bình Phong Mã Pháo Quá Hà' mang tính chất gì?",
        options: [
          "Phòng ngự thụ động",
          "Phản công mạnh, dùng Pháo đè Mã đối phương",
          "Thí Pháo",
          "Cầu hòa",
        ],
        correctAnswer: "Phản công mạnh, dùng Pháo đè Mã đối phương",
      },
      {
        question: "Khí Mã Hãm Xa là cạm bẫy nhằm mục đích gì?",
        options: [
          "Dụ Pháo ăn Tượng",
          "Dụ Xe địch ăn Mã để khóa chết Xe địch ở một góc hẹp",
          "Dụ Mã địch ăn Xe",
          "Thí Tốt đổi Mã",
        ],
        correctAnswer: "Dụ Xe địch ăn Mã để khóa chết Xe địch ở một góc hẹp",
      },
    ],
  },

  // ==========================================
  // PHẦN 3: KHAI CUỘC CHUYÊN SÂU (7-11)
  // ==========================================
  {
    id: "lesson-7",
    title: "Khai Cuộc: Quá Cung Pháo",
    description: "Kéo Pháo qua cung Tướng để tập trung hỏa lực vào một cánh.",
    level: "intermediate",
    order: 7,
    content: `
# Quá Cung Pháo: Cương Nhu Phối Triển

Quá Cung Pháo (Pháo 2 bình 6 hoặc Pháo 8 bình 4) là thế trận đưa Pháo đi ngang qua Cửu Cung, nhắm vào Sĩ của đối phương.

## Đặc Điểm Chiến Thuật
* **Bảo vệ Cửu Cung:** Pháo nằm phía trên Tướng, che chắn trực tiếp cho trung lộ và sẵn sàng bảo vệ Tượng.
* **Tập trung hỏa lực:** Đưa 2 Pháo cùng dồn về một cánh (lộ 4 và lộ 6), tạo sức ép cực lớn lên một điểm yếu duy nhất của địch.

## Mẹo Ứng Phó
Khi gặp đối thủ chơi Quá Cung Pháo, đừng vội vã tấn công cánh họ đang tập trung quân. Hãy phản công bằng cách xuất Xe nhanh và khoét vào cánh đang bị "rỗng" của họ do Pháo vừa rời đi.
    `,
    duration: "25 phút",
    tags: ["trung cấp", "khai cuộc", "quá cung pháo", "chiến lược"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Nước đi nào đại diện cho Quá Cung Pháo?",
        options: [
          "Pháo 2 bình 5",
          "Pháo 2 bình 6 hoặc Pháo 8 bình 4",
          "Pháo 8 bình 9",
          "Tốt 3 tiến 1",
        ],
        correctAnswer: "Pháo 2 bình 6 hoặc Pháo 8 bình 4",
      },
      {
        question: "Trong Quá Cung Pháo, Pháo nhắm vào quân nào của đối phương?",
        options: ["Xe", "Tượng", "Mã", "Sĩ"],
        correctAnswer: "Sĩ",
      },
      {
        question: "Một đặc điểm chiến thuật của Quá Cung Pháo là gì?",
        options: [
          "Bảo vệ hai cánh đều nhau",
          "Đưa 2 Pháo cùng dồn về một cánh để tập trung hỏa lực",
          "Đưa Tướng ra ngoài",
          "Lên Xe nhanh nhất",
        ],
        correctAnswer: "Đưa 2 Pháo cùng dồn về một cánh để tập trung hỏa lực",
      },
      {
        question:
          "Vị trí của Pháo trong thế Quá Cung Pháo có tác dụng gì với Cửu Cung?",
        options: [
          "Cản trở Tướng di chuyển",
          "Che chắn trực tiếp cho trung lộ và sẵn sàng bảo vệ Tượng",
          "Ép Sĩ không thể tiến lên",
          "Bỏ trống trung lộ",
        ],
        correctAnswer:
          "Che chắn trực tiếp cho trung lộ và sẵn sàng bảo vệ Tượng",
      },
      {
        question: "Mẹo ứng phó khi gặp Quá Cung Pháo là gì?",
        options: [
          "Tấn công ngay vào cánh họ đang tập trung quân",
          "Đổi Xe sớm",
          "Xuất Xe nhanh và khoét vào cánh đang bị 'rỗng' của họ",
          "Chơi Thuận Pháo",
        ],
        correctAnswer: "Xuất Xe nhanh và khoét vào cánh đang bị 'rỗng' của họ",
      },
    ],
  },
  {
    id: "lesson-8",
    title: "Khai Cuộc: Sĩ Giác Pháo",
    description:
      "Đưa Pháo vắt lên góc Sĩ, một khai cuộc dịu dàng nhưng tiềm ẩn bão táp.",
    level: "advanced",
    order: 8,
    content: `
# Sĩ Giác Pháo: Nước Mờ Đầu Tinh Tế

Sĩ Giác Pháo (Pháo 2 bình 4 hoặc Pháo 8 bình 6) đưa Pháo lên ngay điểm góc của Cửu Cung (đầu Sĩ). Đây là lối chơi mang đậm phong cách cờ tàn chuyển hóa sớm.

## Lợi Thế
1. **Tránh mũi nhọn:** Không trực tiếp đối đầu Pháo đầu, tránh lối chơi đôi công đẫm máu sớm.
2. **Hỗ trợ Mã:** Pháo nằm ở góc Sĩ là bệ phóng tuyệt vời để Mã tiến lên không sợ bị cản chân.
3. **Phòng thủ đa tầng:** Pháo bảo vệ Mã, Mã bảo vệ trung lộ. Đội hình gắn kết thành một khối liên hoàn rắn chắc.

## Điểm Yếu
Tiến độ triển khai quân thường chậm hơn một nhịp so với các thế trận tấn công trung lộ. Người chơi cần tính kiên nhẫn cực cao.
    `,
    duration: "25 phút",
    tags: ["nâng cao", "khai cuộc", "sĩ giác pháo", "chiến lược"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Vị trí Sĩ Giác Pháo (Pháo 2 bình 4) nằm ở đâu trên bàn cờ?",
        options: [
          "Lộ 5",
          "Ngay điểm góc của Cửu Cung (đầu Sĩ)",
          "Lộ 9",
          "Đáy bàn cờ",
        ],
        correctAnswer: "Ngay điểm góc của Cửu Cung (đầu Sĩ)",
      },
      {
        question: "Sĩ Giác Pháo mang đậm phong cách nào?",
        options: [
          "Cờ tàn chuyển hóa sớm",
          "Đôi công sát phạt",
          "Chớp nhoáng",
          "Hy sinh quân",
        ],
        correctAnswer: "Cờ tàn chuyển hóa sớm",
      },
      {
        question: "Lợi thế của Sĩ Giác Pháo trong việc phát triển Mã là gì?",
        options: [
          "Ngăn Mã đối phương tiến lên",
          "Là bệ phóng tuyệt vời để Mã tiến lên không sợ bị cản chân",
          "Dụ Mã địch ăn Pháo",
          "Giúp Mã nhảy ra biên",
        ],
        correctAnswer:
          "Là bệ phóng tuyệt vời để Mã tiến lên không sợ bị cản chân",
      },
      {
        question:
          "Sĩ Giác Pháo giúp người chơi tránh đối đầu trực tiếp với thế trận nào?",
        options: ["Bình Phong Mã", "Phi Tượng", "Pháo Đầu", "Uyên Ương Pháo"],
        correctAnswer: "Pháo Đầu",
      },
      {
        question: "Điểm yếu của Sĩ Giác Pháo là gì?",
        options: [
          "Dễ mất Pháo",
          "Tướng bị lộ mặt",
          "Tiến độ triển khai quân chậm hơn một nhịp so với thế trận tấn công trung lộ",
          "Không thể xuất Xe",
        ],
        correctAnswer:
          "Tiến độ triển khai quân chậm hơn một nhịp so với thế trận tấn công trung lộ",
      },
    ],
  },
  {
    id: "lesson-9",
    title: "Khai Cuộc: Khởi Mã Cuộc & Phi Tượng Cuộc",
    description: "Cách chơi nhường sân, thủ vững phản công nhanh.",
    level: "advanced",
    order: 9,
    content: `
# Khởi Mã & Phi Tượng: Hậu Phát Chế Nhân

Khởi Mã Cuộc (Mã 2 tiến 3) hoặc Phi Tượng Cuộc (Tượng 3 tiến 5) là những khai cuộc tĩnh lặng, không để lộ ý đồ sớm.

## Khởi Mã Cuộc
* Mang tính dò xét. Đưa Mã lên bảo vệ tốt đầu, sau đó tùy theo nước đi của đối phương để quyết định bình Pháo hay phi Tượng. Rất khó bị bắt bài.

## Phi Tượng Cuộc
* Củng cố trung lộ vững như bàn thạch ngay từ nước đầu tiên. Đây là "bảo bối" của kỳ vương Hồ Vinh Hoa. 
* Lối chơi này phù hợp với những người có tư duy cờ tàn xuất sắc: Họ đẩy trận đấu về thế giằng co, chờ đối thủ tấn công bế tắc và sai lầm rồi mới tung đòn.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "khai cuộc", "phòng thủ", "hồ vinh hoa"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Nước đi Mã 2 tiến 3 được gọi là gì?",
        options: ["Phi Tượng Cuộc", "Tiến Binh", "Khởi Mã Cuộc", "Pháo Đầu"],
        correctAnswer: "Khởi Mã Cuộc",
      },
      {
        question: "Đặc điểm của Khởi Mã Cuộc là gì?",
        options: [
          "Tấn công chớp nhoáng",
          "Mang tính dò xét, rất khó bị bắt bài",
          "Yếu ở trung lộ",
          "Ép đối thủ đổi quân",
        ],
        correctAnswer: "Mang tính dò xét, rất khó bị bắt bài",
      },
      {
        question:
          "Phi Tượng Cuộc (Tượng 3 tiến 5) là 'bảo bối' của kỳ vương nào?",
        options: [
          "Dương Quan Lân",
          "Vương Thiên Nhất",
          "Hứa Ngân Xuyên",
          "Hồ Vinh Hoa",
        ],
        correctAnswer: "Hồ Vinh Hoa",
      },
      {
        question: "Mục đích của Phi Tượng Cuộc ở nước đầu tiên là gì?",
        options: [
          "Bắt Xe đối phương",
          "Mở đường cho Mã",
          "Củng cố trung lộ vững như bàn thạch",
          "Thăm dò hai cánh",
        ],
        correctAnswer: "Củng cố trung lộ vững như bàn thạch",
      },
      {
        question:
          "Lối chơi Phi Tượng Cuộc phù hợp với những người có tư duy gì?",
        options: [
          "Đôi công cờ chớp",
          "Cờ tàn xuất sắc, đẩy trận đấu về thế giằng co",
          "Phế quân cầu sát",
          "Khai cuộc thuộc lòng",
        ],
        correctAnswer: "Cờ tàn xuất sắc, đẩy trận đấu về thế giằng co",
      },
    ],
  },
  {
    id: "lesson-10",
    title: "Khai Cuộc: Tiên Nhân Chỉ Lộ (Sâu hơn)",
    description:
      "Sự linh hoạt tột độ của nước cờ Tiến Binh (Tốt 3 hoặc Tốt 7).",
    level: "advanced",
    order: 10,
    content: `
# Tiên Nhân Chỉ Lộ: Ngón Tay Chỉ Đường

Tiên Nhân Chỉ Lộ (Tốt 3 tiến 1 hoặc Tốt 7 tiến 1) là khai cuộc hiện đại được sử dụng nhiều nhất ở các giải đấu chuyên nghiệp hiện nay.

## Sự Đa Biến
Bằng cách đẩy Tốt lên, bạn mở đường cho Mã phát triển an toàn, đồng thời thăm dò phản ứng của đối phương:
* Nếu đối phương chơi Pháo Đầu: Bạn chuyển về Bình Phong Mã.
* Nếu đối phương chơi Phi Tượng: Bạn có thể đưa Pháo sang chiếm lộ hoặc tiến Xe dồn ép.

## Cạm bẫy: Tốt Đổi Mã
Một cái bẫy tinh vi trong Tiên Nhân Chỉ Lộ là dụ đối phương nhảy Mã lên ăn Tốt, sau đó dùng Pháo hoặc Xe "bắt nguội" Mã đối phương khi nó đã lạc sâu vào trận địa.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "khai cuộc", "tiên nhân chỉ lộ", "hiện đại"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Tiên Nhân Chỉ Lộ mở đầu bằng nước cờ nào?",
        options: [
          "Pháo 2 bình 5",
          "Mã 8 tiến 7",
          "Tốt 3 tiến 1 hoặc Tốt 7 tiến 1",
          "Tượng 7 tiến 5",
        ],
        correctAnswer: "Tốt 3 tiến 1 hoặc Tốt 7 tiến 1",
      },
      {
        question:
          "Tiên Nhân Chỉ Lộ có độ phổ biến như thế nào ở các giải đấu chuyên nghiệp hiện nay?",
        options: [
          "Rất hiếm khi sử dụng",
          "Bị cấm sử dụng",
          "Chỉ dùng ở giải phong trào",
          "Được sử dụng nhiều nhất",
        ],
        correctAnswer: "Được sử dụng nhiều nhất",
      },
      {
        question:
          "Trong Tiên Nhân Chỉ Lộ, nếu đối phương chơi Pháo Đầu, người chơi thường chuyển về trận nào?",
        options: [
          "Nghịch Pháo",
          "Bình Phong Mã",
          "Phi Tượng Cuộc",
          "Uyên Ương Pháo",
        ],
        correctAnswer: "Bình Phong Mã",
      },
      {
        question: "Mục đích của việc đẩy Tốt lên trong Tiên Nhân Chỉ Lộ là gì?",
        options: [
          "Chiếu Tướng sớm",
          "Đổi Xe sớm",
          "Mở đường cho Mã phát triển an toàn và thăm dò phản ứng",
          "Thí Tốt lấy Sĩ",
        ],
        correctAnswer: "Mở đường cho Mã phát triển an toàn và thăm dò phản ứng",
      },
      {
        question:
          "Cạm bẫy 'Tốt Đổi Mã' trong Tiên Nhân Chỉ Lộ hoạt động như thế nào?",
        options: [
          "Dụ Mã địch ăn Tốt rồi dùng Pháo/Xe bắt nguội Mã",
          "Dùng Tốt ép Mã địch chạy ra biên",
          "Đổi Tốt lấy Sĩ địch",
          "Dụ Mã nhảy xuống đáy",
        ],
        correctAnswer: "Dụ Mã địch ăn Tốt rồi dùng Pháo/Xe bắt nguội Mã",
      },
    ],
  },
  {
    id: "lesson-11",
    title: "Khai Cuộc: Uyên Ương Pháo",
    description:
      "Khai cuộc cổ điển, dồn hỏa lực Pháo lên cùng một cánh để yểm trợ.",
    level: "intermediate",
    order: 11,
    content: `
# Uyên Ương Pháo: Cặp Đôi Sát Thủ

Uyên Ương Pháo đưa một Pháo tiến lên hai nấc (giữ Tốt), Pháo còn lại vòng qua lưng Tướng sang cùng một cánh với Pháo kia. Hai Pháo nằm sóng đôi cùng một bên chiến tuyến.

## Sức Mạnh Của Uyên Ương Pháo
* **Tập trung hỏa lực:** Cả hai Pháo cùng uy hiếp một lộ Xe của đối phương, khiến Xe đối phương không thể xuất kích.
* **Bảo vệ liên hoàn:** Hai Pháo hỗ trợ cho nhau, tạo thành một cụm phòng ngự kiên cố che chở cho cánh mỏng.

## Lời Khuyên 
Đây là khai cuộc khá "dị", đòi hỏi sự luyện tập chuyên sâu vì cấu trúc đội hình dễ bị méo mó nếu gặp đối phương xuất Xe quá tốc độ.
    `,
    duration: "25 phút",
    tags: ["trung cấp", "khai cuộc", "uyên ương pháo", "chiến lược"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Thế trận Uyên Ương Pháo đưa hai Pháo vào vị trí nào?",
        options: [
          "Nằm ở trung tâm lộ 5",
          "Hai Pháo nằm sóng đôi cùng một bên chiến tuyến",
          "Ở hai góc Cửu Cung",
          "Ở đáy bàn cờ",
        ],
        correctAnswer: "Hai Pháo nằm sóng đôi cùng một bên chiến tuyến",
      },
      {
        question:
          "Hai Pháo trong Uyên Ương Pháo cùng uy hiếp quân nào của đối phương khiến quân này không thể xuất kích?",
        options: ["Tướng", "Mã", "Xe", "Sĩ"],
        correctAnswer: "Xe",
      },
      {
        question: "Sức mạnh phòng thủ của Uyên Ương Pháo đến từ đâu?",
        options: [
          "Pháo cản Xe",
          "Hai Pháo hỗ trợ cho nhau tạo thành cụm phòng ngự kiên cố",
          "Tượng liên kết sớm",
          "Xe giữ hai Pháo",
        ],
        correctAnswer:
          "Hai Pháo hỗ trợ cho nhau tạo thành cụm phòng ngự kiên cố",
      },
      {
        question: "Đặc thù của cấu trúc đội hình Uyên Ương Pháo là gì?",
        options: [
          "Rất dễ triển khai",
          "Dễ bị méo mó nếu gặp đối phương xuất Xe quá tốc độ",
          "Tự động chuyển thành Bình Phong Mã",
          "Phù hợp cho người mới bắt đầu",
        ],
        correctAnswer: "Dễ bị méo mó nếu gặp đối phương xuất Xe quá tốc độ",
      },
      {
        question:
          "Một Pháo trong Uyên Ương Pháo tiến lên hai nấc để làm nhiệm vụ gì?",
        options: ["Chiếu Tướng", "Giữ Tốt", "Cản Tượng", "Thí quân"],
        correctAnswer: "Giữ Tốt",
      },
    ],
  },

  // ==========================================
  // PHẦN 4: CHIẾN THUẬT CƠ BẢN (12-16)
  // ==========================================
  {
    id: "lesson-12",
    title: "Chiến Thuật Bắt Quân Cơ Bản",
    description:
      "Làm quen với các đòn chiến thuật: Bắt đôi, Kiềm chế (Ghim), và Xuyên tâm.",
    level: "intermediate",
    order: 12,
    content: `
# Chiến Thuật: Nghệ Thuật Lấy Mạng Binh

Chiến thuật (Tactics) là những chuỗi nước đi ngắn nhằm đoạt lợi thế vật chất (ăn quân) hoặc vị trí. 

## 1. Đòn Bắt Đôi (Fork)
Dùng một quân của ta cùng lúc tấn công hai quân không được bảo vệ của đối phương. Đối phương chỉ có thể cứu một quân.
* **Vũ khí:** Mã (nhảy chữ L tạo song sát) và Xe.

## 2. Kỹ Thuật Kiềm Chế (Ghim/Pin)
Tình huống bạn dùng Xe hoặc Pháo tấn công một quân địch, nhưng quân địch đó **không thể di chuyển** vì sau lưng nó là Tướng hoặc quân lớn hơn.
* **Khẩu quyết:** Kẻ bị ghim là kẻ đã chết, đừng vội ăn, hãy dùng quân khác bồi thêm đòn.

## 3. Đòn Xuyên Tâm (Skewer)
Tấn công một quân có giá trị cao (Tướng, Xe) buộc nó phải chạy, qua đó làm lộ ra và "hiến tế" quân đứng ngay phía sau.
    `,
    duration: "30 phút",
    tags: ["trung cấp", "chiến thuật", "bắt quân", "kỹ năng"],
    fen: "4kab2/4a4/4b4/9/9/9/9/9/9/4K4 r",
    questions: [
      {
        question: "Đòn Bắt Đôi (Fork) là kỹ thuật gì?",
        options: [
          "Dùng hai quân tấn công một quân địch",
          "Dùng một quân của ta cùng lúc tấn công hai quân địch",
          "Bắt hai Tốt cùng lúc",
          "Chiếu Tướng hai lần",
        ],
        correctAnswer: "Dùng một quân của ta cùng lúc tấn công hai quân địch",
      },
      {
        question:
          "Quân nào thường xuyên tạo ra những cú 'song sát' bất ngờ nhất nhờ khả năng nhảy chữ L?",
        options: ["Xe", "Pháo", "Mã", "Tượng"],
        correctAnswer: "Mã",
      },
      {
        question:
          "Kỹ thuật Kiềm Chế (Ghim/Pin) khiến quân địch rơi vào trạng thái nào?",
        options: [
          "Bị tiêu diệt lập tức",
          "Không thể di chuyển vì sau lưng là Tướng hoặc quân lớn hơn",
          "Bắt buộc phải chiếu Tướng",
          "Chạy ra biên",
        ],
        correctAnswer:
          "Không thể di chuyển vì sau lưng là Tướng hoặc quân lớn hơn",
      },
      {
        question: "Khẩu quyết khi đối phương bị ghim là gì?",
        options: [
          "Ăn ngay lập tức",
          "Bỏ qua để đi quân khác",
          "Đừng vội ăn, hãy dùng quân khác bồi thêm đòn",
          "Đổi Xe lấy quân bị ghim",
        ],
        correctAnswer: "Đừng vội ăn, hãy dùng quân khác bồi thêm đòn",
      },
      {
        question: "Đòn Xuyên Tâm (Skewer) có mục đích gì?",
        options: [
          "Tấn công quân lớn buộc nó phải chạy để lộ ra quân phía sau",
          "Ghim chặt quân địch tại chỗ",
          "Nhảy Mã vào trung tâm",
          "Chiếu hết ngay lập tức",
        ],
        correctAnswer:
          "Tấn công quân lớn buộc nó phải chạy để lộ ra quân phía sau",
      },
    ],
  },
  {
    id: "lesson-13",
    title: "Đòn Thu Hút (Attraction)",
    description: "Nhử quân địch vào những ô vuông tử địa bằng mồi nhử tinh vi.",
    level: "advanced",
    order: 13,
    content: `
# Thu Hút: Cái Bẫy Mật Ngọt

Đòn thu hút (Attraction) là kỹ thuật ép buộc một quân quan trọng của đối phương (thường là Tướng hoặc Xe) đi vào một vị trí cụ thể bằng cách cống nạp (phế) quân.

## Cơ Chế Hoạt Động
Bạn cố tình hiến một Mã hoặc Xe ngay trước mặt Tướng địch. Nếu Tướng địch không ăn thì bị chiếu hết. Khi Tướng địch bắt buộc phải "ăn" mồi nhử, họ đã tự bước vào đúng tọa độ tử thần để Pháo hoặc Xe còn lại của bạn giáng đòn quyết định.

> "Người chơi cờ giỏi không cầu mong đối thủ đi sai, họ ép đối thủ phải đi vào ô sai."
    `,
    duration: "30 phút",
    tags: ["nâng cao", "chiến thuật", "thu hút", "phế quân"],
    fen: "4kab2/4a4/4b4/9/9/9/9/9/9/4K4 r",
    questions: [
      {
        question:
          "Đòn Thu Hút ép buộc quân địch đi vào vị trí tử địa bằng cách nào?",
        options: [
          "Dùng Xe đuổi",
          "Cống nạp (phế) quân làm mồi nhử",
          "Cản chân Mã",
          "Ghim Pháo",
        ],
        correctAnswer: "Cống nạp (phế) quân làm mồi nhử",
      },
      {
        question: "Quân nào của địch thường là mục tiêu bị thu hút nhất?",
        options: [
          "Tốt hoặc Sĩ",
          "Tượng hoặc Sĩ",
          "Tướng hoặc Xe",
          "Mã hoặc Pháo",
        ],
        correctAnswer: "Tướng hoặc Xe",
      },
      {
        question:
          "Nếu Tướng địch bắt buộc phải 'ăn' mồi nhử, hệ quả tiếp theo thường là gì?",
        options: [
          "Tướng được an toàn",
          "Họ tự bước vào tọa độ tử thần để Pháo/Xe giáng đòn quyết định",
          "Ta bị mất quân vô ích",
          "Trận đấu kết thúc Hòa",
        ],
        correctAnswer:
          "Họ tự bước vào tọa độ tử thần để Pháo/Xe giáng đòn quyết định",
      },
      {
        question:
          "'Người chơi cờ giỏi không cầu mong đối thủ đi sai', mà họ làm gì?",
        options: [
          "Chờ đối thủ hết giờ",
          "Ép đối thủ phải đi vào ô sai",
          "Luôn đi Xe đầu tiên",
          "Phòng thủ chặt",
        ],
        correctAnswer: "Ép đối thủ phải đi vào ô sai",
      },
      {
        question: "Tình huống nào sau đây là ví dụ của đòn thu hút?",
        options: [
          "Giấu Xe sau Tượng",
          "Dùng Tốt cản Mã",
          "Hiến một Mã hoặc Xe ngay trước mặt Tướng địch",
          "Rút Pháo về góc",
        ],
        correctAnswer: "Hiến một Mã hoặc Xe ngay trước mặt Tướng địch",
      },
    ],
  },
  {
    id: "lesson-14",
    title: "Đòn Đánh Lạc Hướng (Deflection)",
    description:
      "Ép quân cản đường của đối thủ phải rời khỏi vị trí phòng thủ quan trọng.",
    level: "advanced",
    order: 14,
    content: `
# Đánh Lạc Hướng: Dương Đông Kích Tây

Trong khi đòn Thu Hút kéo địch vào tử địa, thì đòn Đánh Lạc Hướng (Deflection) lại nhằm mục đích **đuổi** quân phòng vệ chủ lực của địch đi chỗ khác.

## Cách Thực Hiện
Xác định quân cờ nào của địch đang là "bức tường" ngăn cản bạn chiếu hết. Thay vì đánh bức tường đó, bạn dùng một quân khác tấn công vào một mục tiêu thứ hai cực kỳ quan trọng (ví dụ đe dọa bắt Xe địch). 

Để cứu Xe, bức tường phòng thủ buộc phải di chuyển. Ngay khi bức tường sụp đổ, lộ tuyến tấn công vào Tướng địch sẽ mở toang.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "chiến thuật", "lạc hướng", "kỹ năng"],
    fen: "4kab2/4a4/4b4/9/9/9/9/9/9/4K4 r",
    questions: [
      {
        question: "Mục đích của đòn Đánh Lạc Hướng là gì?",
        options: [
          "Chiếu Tướng liên tục",
          "Đuổi quân phòng vệ chủ lực của địch đi chỗ khác",
          "Dụ Tướng địch ra khỏi cung",
          "Bắt Xe địch",
        ],
        correctAnswer: "Đuổi quân phòng vệ chủ lực của địch đi chỗ khác",
      },
      {
        question:
          "Cách thực hiện đòn Đánh Lạc Hướng bắt đầu bằng việc xác định điều gì?",
        options: [
          "Tọa độ của Xe địch",
          "Tướng địch đang ở lộ nào",
          "Quân cờ nào của địch đang là 'bức tường' cản bạn chiếu hết",
          "Điểm yếu của mình",
        ],
        correctAnswer:
          "Quân cờ nào của địch đang là 'bức tường' cản bạn chiếu hết",
      },
      {
        question:
          "Thay vì đánh trực tiếp vào 'bức tường' phòng thủ, bạn sẽ làm gì?",
        options: [
          "Dùng quân khác tấn công vào mục tiêu thứ hai cực kỳ quan trọng",
          "Lùi quân về phòng ngự",
          "Đổi Xe",
          "Đưa Tướng ra ngoài",
        ],
        correctAnswer:
          "Dùng quân khác tấn công vào mục tiêu thứ hai cực kỳ quan trọng",
      },
      {
        question:
          "Khi 'bức tường' phòng thủ phải di chuyển để cứu mục tiêu thứ hai, hệ quả là gì?",
        options: [
          "Quân ta bị bắt",
          "Lộ tuyến tấn công vào Tướng địch sẽ mở toang",
          "Ván cờ hòa",
          "Địch phản công nhanh",
        ],
        correctAnswer: "Lộ tuyến tấn công vào Tướng địch sẽ mở toang",
      },
      {
        question: "Đòn Đánh Lạc Hướng mang triết lý chiến thuật nào?",
        options: [
          "Mắt đền mắt",
          "Nhu thắng cương",
          "Dương Đông Kích Tây",
          "Khí Tử Định Giang Sơn",
        ],
        correctAnswer: "Dương Đông Kích Tây",
      },
    ],
  },
  {
    id: "lesson-15",
    title: "Đòn Ngăn Chặn (Interference)",
    description: "Cắt đứt sợi dây liên kết bảo vệ giữa các quân cờ của địch.",
    level: "intermediate",
    order: 15,
    content: `
# Ngăn Chặn: Chặt Đứt Cầu Nối

Khi hai quân địch đang bảo vệ lẫn nhau (ví dụ: Pháo giữ Xe, hoặc Xe giữ Mã), bạn không thể trực tiếp ăn chúng. Đòn ngăn chặn sẽ giải quyết việc này.

## Tự Sát Để Ngăn Cách
Bạn ném một quân giá trị thấp (như Tốt) hoặc hy sinh Mã vào ngay giữa đường nối của hai quân địch. 
* Lúc này sợi dây bảo vệ bị đứt.
* Nếu địch ăn quân ngăn chặn, trận hình của họ sẽ bị nhiễu loạn và làm mất nhịp.
* Nếu địch bỏ qua, bạn trực tiếp ăn quân chủ lực đã mất liên kết của họ.
    `,
    duration: "25 phút",
    tags: ["trung cấp", "chiến thuật", "ngăn chặn", "tư duy"],
    fen: "4kab2/4a4/4b4/9/9/9/9/9/9/4K4 r",
    questions: [
      {
        question: "Đòn Ngăn Chặn được sử dụng khi nào?",
        options: [
          "Khi hai quân địch đang bảo vệ lẫn nhau",
          "Khi Tướng địch bị chiếu",
          "Khi Mã bị cản chân",
          "Khi Xe hết đường đi",
        ],
        correctAnswer: "Khi hai quân địch đang bảo vệ lẫn nhau",
      },
      {
        question: "Cách cắt đứt sợi dây liên kết bảo vệ của địch là gì?",
        options: [
          "Dùng Xe chiếu Tướng",
          "Ném một quân giá trị thấp (Tốt) hoặc hy sinh Mã vào ngay giữa đường nối",
          "Rút Pháo về phòng thủ",
          "Lên Sĩ Tượng",
        ],
        correctAnswer:
          "Ném một quân giá trị thấp (Tốt) hoặc hy sinh Mã vào ngay giữa đường nối",
      },
      {
        question: "Nếu địch ăn quân ngăn chặn của bạn, điều gì sẽ xảy ra?",
        options: [
          "Họ chiến thắng",
          "Trận hình của họ sẽ bị nhiễu loạn và làm mất nhịp",
          "Họ chiếu hết bạn",
          "Quân họ mạnh lên",
        ],
        correctAnswer: "Trận hình của họ sẽ bị nhiễu loạn và làm mất nhịp",
      },
      {
        question: "Nếu địch bỏ qua không ăn quân ngăn chặn, bạn có thể làm gì?",
        options: [
          "Lùi quân về",
          "Cầu hòa",
          "Trực tiếp ăn quân chủ lực đã mất liên kết của họ",
          "Chiếu Tướng",
        ],
        correctAnswer: "Trực tiếp ăn quân chủ lực đã mất liên kết của họ",
      },
      {
        question:
          "Hành động ném quân vào giữa đường đạn để cắt liên kết còn được miêu tả như thế nào trong bài học?",
        options: [
          "Tự sát để ngăn cách",
          "Đổi Xe đoạt Mã",
          "Nhị quỷ vỗ môn",
          "Lão tốt khám cung",
        ],
        correctAnswer: "Tự sát để ngăn cách",
      },
    ],
  },
  {
    id: "lesson-16",
    title: "Nghệ Thuật Tính Toán (Calculation)",
    description: "Làm thế nào để tính trước 3-5 nước cờ mà không bị loạn trí?",
    level: "advanced",
    order: 16,
    content: `
# Tính Toán: Tầm Nhìn Của Kiện Tướng

Tính toán (Calculation) là khả năng hình dung các biến thể trong đầu trước khi chạm tay vào quân cờ.

## Cây Quyết Định (Mỗi Nước Đi Là Một Nhánh)
Khi tính toán, đừng tính lan man. Hãy tuân thủ các bước:
1. **Nước đi ép buộc:** Trước tiên, luôn xem xét các nước CHIẾU TƯỚNG, sau đó là BẮT QUÂN. Đây là những nước buộc địch phải đáp trả, dễ tính toán nhất.
2. **Loại trừ nhánh cụt:** Nếu tính đến nước thứ 2 thấy mình bị mất Xe vô cớ, dừng ngay nhánh đó lại, không tính tiếp.
3. **Chốt lại hình ảnh:** Cố gắng ghim hình ảnh bàn cờ ở cuối nhánh tính toán vào đầu, đánh giá xem ở hình ảnh cuối cùng đó mình LỜI hay LỖ.

> Luyện tập giải Bài Tập Cờ Tướng (Puzzles) mỗi ngày là cách duy nhất để tăng cấp độ tính toán.
    `,
    duration: "35 phút",
    tags: ["nâng cao", "tính toán", "tư duy", "puzzles"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Tính toán (Calculation) trong cờ tướng là khả năng gì?",
        options: [
          "Thuộc lòng khai cuộc",
          "Hình dung các biến thể trong đầu trước khi chạm tay vào quân cờ",
          "Đoán tâm lý đối thủ",
          "Tự động đi quân nhanh",
        ],
        correctAnswer:
          "Hình dung các biến thể trong đầu trước khi chạm tay vào quân cờ",
      },
      {
        question:
          "Khi phân tích cây quyết định, loại nước đi nào nên được ưu tiên xem xét trước tiên?",
        options: [
          "Tiến Tốt",
          "Phi Tượng",
          "CHIẾU TƯỚNG và BẮT QUÂN",
          "Chờ nhịp",
        ],
        correctAnswer: "CHIẾU TƯỚNG và BẮT QUÂN",
      },
      {
        question:
          "Tại sao các nước CHIẾU TƯỚNG và BẮT QUÂN lại dễ tính toán nhất?",
        options: [
          "Vì chúng ép buộc địch phải đáp trả",
          "Vì chúng không mất điểm",
          "Vì chúng kết thúc ván cờ ngay",
          "Vì đối thủ không nhìn thấy",
        ],
        correctAnswer: "Vì chúng ép buộc địch phải đáp trả",
      },
      {
        question:
          "Khi đang tính toán mà thấy một nhánh dẫn đến mất Xe vô cớ, bạn nên làm gì?",
        options: [
          "Tiếp tục tính thêm 3 nước nữa",
          "Dừng ngay nhánh đó lại, không tính tiếp",
          "Đi thử luôn trên bàn cờ",
          "Chấp nhận mất Xe",
        ],
        correctAnswer: "Dừng ngay nhánh đó lại, không tính tiếp",
      },
      {
        question: "Cách duy nhất để tăng cấp độ tính toán theo bài học là gì?",
        options: [
          "Chơi cờ chớp",
          "Luyện tập giải Bài Tập Cờ Tướng (Puzzles) mỗi ngày",
          "Đọc sách lịch sử cờ",
          "Dùng phần mềm đánh hộ",
        ],
        correctAnswer: "Luyện tập giải Bài Tập Cờ Tướng (Puzzles) mỗi ngày",
      },
    ],
  },

  // ==========================================
  // PHẦN 5: SÁT PHÁP - NGHỆ THUẬT CHIẾU BÍ (17-23)
  // ==========================================
  {
    id: "lesson-17",
    title: "Các Thế Sát Pháp Nhập Môn",
    description:
      "Nhận diện những mô hình chiếu hết kinh điển nhất trong Cờ Tướng.",
    level: "beginner",
    order: 17,
    content: `
# Sát Pháp: Tung Đòn Kết Liễu

Sát pháp là những đòn phối hợp đánh thẳng vào Tướng địch, không cho đường lui.

## 1. Pháo Trùng (Song Pháo Tướng)
Phối hợp hai quân Pháo cùng nằm trên một cột (hoặc hàng) nhắm thẳng vào Tướng địch. Pháo 1 làm "ngòi" cho Pháo 2. Tướng không thể chạy ngang vì cả đường thẳng đã bị phong tỏa.

## 2. Mã Ngọa Tào
Là một trong những đòn sát cục uy lực nhất. Mã nhảy vào các điểm ở góc Cửu Cung (điểm giao giữa lộ 4/6 và hàng ngang thứ 8 của địch). Vừa chiếu Tướng, vừa kiểm soát đường thoát.

## 3. Muộn Cung (Chiếu ngạt)
Sử dụng Pháo (đôi khi là Xe) chiếu Tướng, nhưng chính các quân Sĩ, Tượng của địch lại làm "tắc đường" không cho Tướng thoát thân.
    `,
    duration: "25 phút",
    tags: ["cơ bản", "sát pháp", "chiếu bí", "tấn công"],
    fen: "3a1a3/4k4/4b4/9/9/9/9/9/9/4K4 r",
    questions: [
      {
        question: "Sát pháp là những đòn phối hợp nhằm mục đích gì?",
        options: [
          "Đánh thẳng vào Tướng địch, không cho đường lui",
          "Bắt Xe đối phương",
          "Đổi ngang quân",
          "Câu giờ",
        ],
        correctAnswer: "Đánh thẳng vào Tướng địch, không cho đường lui",
      },
      {
        question: "Pháo Trùng (Song Pháo Tướng) hoạt động dựa trên cơ chế nào?",
        options: [
          "Pháo 1 cản Mã, Pháo 2 chiếu Tướng",
          "Pháo 1 làm 'ngòi' cho Pháo 2 chiếu Tướng trên cùng một đường thẳng",
          "Hai Pháo nằm ở 2 cánh",
          "Pháo kẹp Tướng ở 2 mặt",
        ],
        correctAnswer:
          "Pháo 1 làm 'ngòi' cho Pháo 2 chiếu Tướng trên cùng một đường thẳng",
      },
      {
        question: "Trong thế Mã Ngọa Tào, Mã nhảy vào vị trí nào?",
        options: [
          "Tâm bàn cờ",
          "Góc Cửu Cung (điểm giao lộ 4/6 và hàng ngang số 8 của địch)",
          "Vị trí mắt Tượng",
          "Xuống đáy lộ 1",
        ],
        correctAnswer:
          "Góc Cửu Cung (điểm giao lộ 4/6 và hàng ngang số 8 của địch)",
      },
      {
        question: "Sức mạnh của Mã Ngọa Tào nằm ở đâu?",
        options: [
          "Đổi được Xe",
          "Vừa chiếu Tướng, vừa kiểm soát đường thoát",
          "Khóa chặt 2 Mã địch",
          "Chặn Sĩ",
        ],
        correctAnswer: "Vừa chiếu Tướng, vừa kiểm soát đường thoát",
      },
      {
        question: "Đặc điểm của sát cục 'Muộn Cung' (Chiếu ngạt) là gì?",
        options: [
          "Tướng chết ở ngoài cung",
          "Sĩ, Tượng của địch lại làm 'tắc đường' không cho Tướng thoát thân",
          "Dùng Mã ép Tướng",
          "Phế Xe chiếu đáy",
        ],
        correctAnswer:
          "Sĩ, Tượng của địch lại làm 'tắc đường' không cho Tướng thoát thân",
      },
    ],
  },
  {
    id: "lesson-18",
    title: "Sát Cục Nâng Cao: Thiết Môn Hãn & Thiên Địa Pháo",
    description:
      "Khám phá các đòn phối hợp liên hoàn tuyệt mỹ để phá nát cung Tướng.",
    level: "advanced",
    order: 18,
    content: `
# Tinh Hoa Tấn Công: Mạng Lưới Tử Thần

Khi Tướng địch được bảo vệ quá kỹ, bạn cần những bộ combo sát thủ.

## 1. Thiết Môn Hãn (Cửa Sắt Đóng Chặt)
Dùng Pháo hoặc Xe chặn đường lùi duy nhất của Tướng địch (tạo thành một "cánh cửa sắt" đóng sập lại), sau đó dùng một quân khác đưa nhát dao quyết định. Địch thấy rõ mà không thể đỡ.

## 2. Thiên Địa Pháo (Pháo Kẹp Tướng)
Một Pháo ghim ở trục dọc trung tâm (Pháo Đầu) khống chế không cho Tướng di chuyển hai bên, một Pháo khác luồn xuống hàng ngang dưới cùng (Pháo Giác) đánh mặt Tướng. Tướng địch bị kẹp giữa "Trời" và "Đất".

## 3. Đòn Song Chiếu (Double Check)
Một nước đi làm lộ ra cùng lúc HAI quân của ta đang chiếu Tướng địch. Địch **bắt buộc** phải di chuyển Tướng. Không thể dùng quân khác che đỡ vì không thể che hai đường đạn cùng lúc.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "sát pháp", "tấn công", "chiến thuật"],
    fen: "3ak4/9/3a5/9/9/9/9/9/9/3AK4 r",
    questions: [
      {
        question:
          "Sát cục 'Thiết Môn Hãn' (Cửa Sắt Đóng Chặt) sử dụng Pháo hoặc Xe để làm gì?",
        options: [
          "Ăn Sĩ giữa",
          "Chặn đường lùi duy nhất của Tướng địch",
          "Ép Tướng ngoi lên",
          "Cản Mã địch",
        ],
        correctAnswer: "Chặn đường lùi duy nhất của Tướng địch",
      },
      {
        question: "Trong sát cục Thiên Địa Pháo, Pháo Đầu đóng vai trò gì?",
        options: [
          "Khống chế không cho Tướng di chuyển hai bên",
          "Đánh thẳng mặt Tướng",
          "Ăn Tượng giữa",
          "Bắt Xe",
        ],
        correctAnswer: "Khống chế không cho Tướng di chuyển hai bên",
      },
      {
        question: "Pháo Giác trong Thiên Địa Pháo làm nhiệm vụ gì?",
        options: [
          "Chặn đường lùi",
          "Luồn xuống hàng ngang dưới cùng đánh mặt Tướng",
          "Bảo vệ Mã",
          "Phế vào tâm",
        ],
        correctAnswer: "Luồn xuống hàng ngang dưới cùng đánh mặt Tướng",
      },
      {
        question: "Đòn Song Chiếu (Double Check) có sức mạnh như thế nào?",
        options: [
          "Địch có thể dùng quân che đỡ",
          "Địch bắt buộc phải di chuyển Tướng",
          "Địch có thể ăn quân chiếu",
          "Không ép buộc địch di chuyển",
        ],
        correctAnswer: "Địch bắt buộc phải di chuyển Tướng",
      },
      {
        question: "Tại sao địch không thể che đỡ trong đòn Song Chiếu?",
        options: [
          "Vì Tướng bị ghim",
          "Vì không thể che hai đường đạn cùng lúc",
          "Vì đã mất hết Sĩ Tượng",
          "Vì hết thời gian",
        ],
        correctAnswer: "Vì không thể che hai đường đạn cùng lúc",
      },
    ],
  },
  {
    id: "lesson-19",
    title: "Sát Cục: Nhị Quỷ Vỗ Môn",
    description: "Uy lực khủng khiếp của Song Xe ép sát hai bên sườn Cửu Cung.",
    level: "advanced",
    order: 19,
    content: `
# Nhị Quỷ Vỗ Môn: Song Xe Xé Lưới

"Nhị Quỷ Vỗ Môn" (Hai con quỷ đập cửa) là thế sát cục kinh điển khi bạn có cả hai Xe kiểm soát lộ 4 và lộ 6 (hai đường sườn sát Cửu Cung).

## Sức Ép Tuyệt Đối
* Khi hai Xe đã khóa chặt hai nách của Tướng địch, Tướng không thể nhúc nhích sang ngang.
* Lúc này, chỉ cần một con Tốt tiến xuống trung lộ, hoặc một con Mã nhô lên chiếu là Tướng địch tắc thở.
* Thậm chí, một Xe có thể trực tiếp ăn thẳng Sĩ giữa (phế Xe) để dọn đường cho Xe còn lại đâm xuống đáy kết liễu.
    `,
    duration: "25 phút",
    tags: ["nâng cao", "sát cục", "song xe", "tấn công"],
    fen: "3ak4/9/3a5/9/9/9/9/9/9/3AK4 r",
    questions: [
      {
        question:
          "Thế sát cục 'Nhị Quỷ Vỗ Môn' yêu cầu sự hiện diện của quân nào?",
        options: [
          "Song Mã",
          "Song Pháo",
          "Song Xe kiểm soát lộ 4 và lộ 6",
          "Xe và Tốt",
        ],
        correctAnswer: "Song Xe kiểm soát lộ 4 và lộ 6",
      },
      {
        question:
          "Khi hai Xe đã khóa chặt hai nách của Cửu Cung, Tướng địch bị giới hạn như thế nào?",
        options: [
          "Không thể tiến lên",
          "Không thể lùi xuống",
          "Không thể nhúc nhích sang ngang",
          "Phải chạy ra biên",
        ],
        correctAnswer: "Không thể nhúc nhích sang ngang",
      },
      {
        question:
          "Để kết liễu trong thế Nhị Quỷ Vỗ Môn, bạn có thể dùng quân gì đánh vào trung lộ?",
        options: [
          "Tượng",
          "Tốt tiến xuống hoặc Mã nhô lên",
          "Sĩ",
          "Pháo rút về",
        ],
        correctAnswer: "Tốt tiến xuống hoặc Mã nhô lên",
      },
      {
        question:
          "Trong Nhị Quỷ Vỗ Môn, một Xe có thể thực hiện đòn hy sinh nào để dọn đường?",
        options: [
          "Trực tiếp ăn thẳng Sĩ giữa (phế Xe)",
          "Phế Xe ăn Pháo địch",
          "Ăn Tốt biên",
          "Ăn Tượng",
        ],
        correctAnswer: "Trực tiếp ăn thẳng Sĩ giữa (phế Xe)",
      },
      {
        question: "Tên gọi 'Nhị Quỷ Vỗ Môn' mang ý nghĩa gì?",
        options: [
          "Hai Xe đóng chặt ở góc",
          "Hai con quỷ đập cửa Cửu Cung",
          "Hai Mã đá chéo",
          "Pháo gõ đầu Tướng",
        ],
        correctAnswer: "Hai con quỷ đập cửa Cửu Cung",
      },
    ],
  },
  {
    id: "lesson-20",
    title: "Sát Cục: Khảm Để Xa & Bạch Báo Lộ Tỉ",
    description: "Đòn chém Xe xuống đáy và cạm bẫy Báo Trắng xé xác địch.",
    level: "advanced",
    order: 20,
    content: `
# Nghệ Thuật Phá Đáy Cửu Cung

## Khảm Để Xa (Xe Chém Đáy)
Lợi dụng đối phương chưa kịp dàn Sĩ Tượng phòng thủ kín kẽ, Xe tiến thẳng xuống hàng cuối cùng chiếu Tướng. Đòn này ép Tướng phải ngoi lên tầng 2 hoặc tầng 3, tạo điều kiện cho Pháo, Mã hoặc Tốt ở tuyến trên đâm chém.

## Bạch Báo Lộ Tỉ (Báo Trắng Xé Xác)
Một đòn sát cục hoa mỹ thường dùng Xe phế thẳng vào Tượng giữa, làm sập hệ thống phòng ngự Sĩ Tượng của địch, sau đó các quân khác (Mã, Pháo) ùa vào như một bầy báo cắn xé Cửu Cung đã mất nóc.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "sát cục", "phế xe", "đáy"],
    fen: "3ak4/9/3a5/9/9/9/9/9/9/3AK4 r",
    questions: [
      {
        question: "Khảm Để Xa là kỹ thuật đâm Xe xuống vị trí nào?",
        options: [
          "Trung lộ",
          "Hàng ngang cuối cùng chiếu Tướng (chém đáy)",
          "Góc Sĩ",
          "Trước mặt Mã địch",
        ],
        correctAnswer: "Hàng ngang cuối cùng chiếu Tướng (chém đáy)",
      },
      {
        question: "Đòn Khảm Để Xa ép Tướng địch phải làm gì?",
        options: [
          "Chạy sang ngang",
          "Ngoi lên tầng 2 hoặc tầng 3",
          "Ăn Xe",
          "Rút vào góc",
        ],
        correctAnswer: "Ngoi lên tầng 2 hoặc tầng 3",
      },
      {
        question:
          "Đòn Khảm Để Xa tạo điều kiện cho các quân nào đâm chém ở tuyến trên?",
        options: ["Pháo, Mã hoặc Tốt", "Sĩ, Tượng", "Tướng", "Hai Xe"],
        correctAnswer: "Pháo, Mã hoặc Tốt",
      },
      {
        question:
          "Trong thế 'Bạch Báo Lộ Tỉ' (Báo Trắng Xé Xác), đòn đánh mở màn thường là gì?",
        options: [
          "Phế Mã vào Sĩ",
          "Xe phế thẳng vào Tượng giữa",
          "Tốt ăn Mã",
          "Pháo nổ chiếu",
        ],
        correctAnswer: "Xe phế thẳng vào Tượng giữa",
      },
      {
        question:
          "Hệ quả của việc phế Xe vào Tượng giữa trong Bạch Báo Lộ Tỉ là gì?",
        options: [
          "Mất Xe vô ích",
          "Làm sập hệ thống phòng ngự Sĩ Tượng, Cửu Cung mất nóc",
          "Ép đối phương hòa cờ",
          "Mở đường cho Tướng thoát hiểm",
        ],
        correctAnswer: "Làm sập hệ thống phòng ngự Sĩ Tượng, Cửu Cung mất nóc",
      },
    ],
  },
  {
    id: "lesson-21",
    title: "Sát Cục Tuyệt Mệnh: Khí Tử Định Giang Sơn",
    description: "Cảnh giới tối cao của sát cục: Phế Xe chiếu bí.",
    level: "advanced",
    order: 21,
    content: `
# Cảnh Giới Tối Cao: Phế Quân Tạo Sát

Vẻ đẹp lớn nhất của Cờ Tướng nằm ở những đòn "thí mạng" bất ngờ, đập nát mọi logic toán học về giá trị quân cờ.

## 1. Đại Giác Mã (Mã Sừng Trâu)
Khác với Mã Ngọa Tào, Đại Giác Mã nhảy thẳng vào vị trí mắt Tượng (giao điểm chữ X trong Cửu Cung). Thường đi kèm với việc phế Xe vào tâm để kéo Tướng địch lên, sau đó Mã từ trên cao giáng đòn sấm sét.

## 2. Sát Cục Điếu Ngư Mã (Mã Câu Cá)
Mã nằm ở vị trí lộ 3 hoặc lộ 7, hàng ngang số 8 (phần sân địch), phối hợp cùng Xe kiểm soát toàn bộ cửa tử của Tướng. Tên gọi gợi hình ảnh Mã ngồi ung dung thả câu, chờ Tướng địch sập bẫy.

## 3. Khí Xa (Phế Xe)
Bạn đẩy chiếc Xe quý giá vào miệng Tướng hoặc Sĩ địch. Địch ăn Xe thì Tướng bị kéo ra khỏi hang an toàn, ngay lập tức Pháo hoặc Mã của bạn từ phía sau ập tới chiếu hết.
    `,
    duration: "35 phút",
    tags: ["nâng cao", "sát pháp", "phế quân", "nghệ thuật"],
    fen: "3ak4/9/3a5/9/9/9/9/9/9/3AK4 r",
    questions: [
      {
        question:
          "'Khí Tử Định Giang Sơn' nói về nghệ thuật gì trong Cờ Tướng?",
        options: [
          "Phòng thủ nhiều lớp",
          "Đổi quân ngang giá",
          "Phế quân tạo sát đập nát logic giá trị quân cờ",
          "Dùng thời gian ép đối phương",
        ],
        correctAnswer: "Phế quân tạo sát đập nát logic giá trị quân cờ",
      },
      {
        question: "Điểm đến của Đại Giác Mã (Mã Sừng Trâu) là vị trí nào?",
        options: [
          "Góc Cửu Cung",
          "Điểm giao giữa lộ 3 và hàng 5",
          "Vị trí mắt Tượng (giao điểm chữ X trong Cửu Cung)",
          "Đáy biên",
        ],
        correctAnswer: "Vị trí mắt Tượng (giao điểm chữ X trong Cửu Cung)",
      },
      {
        question:
          "Để thi triển Đại Giác Mã, người chơi thường đi kèm với hành động gì?",
        options: [
          "Tiến Tốt đổi Mã",
          "Phế Xe vào tâm để kéo Tướng địch lên",
          "Giấu Pháo ở góc",
          "Rút Tượng về",
        ],
        correctAnswer: "Phế Xe vào tâm để kéo Tướng địch lên",
      },
      {
        question:
          "Sát Cục Điếu Ngư Mã (Mã Câu Cá) kiểm soát toàn bộ cửa tử của Tướng bằng cách phối hợp với quân nào?",
        options: ["Pháo", "Tốt", "Sĩ", "Xe"],
        correctAnswer: "Xe",
      },
      {
        question:
          "Khi bạn phế Xe vào miệng Tướng hoặc Sĩ địch (Khí Xa), mục đích trực tiếp là gì?",
        options: [
          "Cầu hòa",
          "Kéo Tướng ra khỏi hang an toàn để Pháo/Mã phía sau ập tới chiếu hết",
          "Tránh bị bắt Mã",
          "Đổi lấy 2 Sĩ",
        ],
        correctAnswer:
          "Kéo Tướng ra khỏi hang an toàn để Pháo/Mã phía sau ập tới chiếu hết",
      },
    ],
  },
  {
    id: "lesson-22",
    title: "Sát Cục: Thiết Tỏa Trùng Lâu",
    description: "Đòn khóa chặt lầu cao, ép Tướng địch chết ở tầng ba.",
    level: "advanced",
    order: 22,
    content: `
# Thiết Tỏa Trùng Lâu: Tử Chiến Tầng Ba

Cửu Cung có 3 tầng. Khi Tướng địch bị ép ngoi lên tầng cao nhất (tầng 3), không gian di chuyển của Tướng bị thu hẹp đáng kể.

## Kỹ Thuật Thực Hiện
1. **Ép Tướng ngoi lên:** Dùng Tốt hoặc Xe chiếu đáy liên tục.
2. **Khóa Lầu Cao:** Khi Tướng đã lên tầng 3, dùng Xe hoặc Pháo chốt chặn ở tầng 2, ngăn không cho Tướng lùi về.
3. **Kết Liễu:** Đưa thêm Mã hoặc Pháo thứ hai lên giáng đòn quyết định. Tướng địch đứng trên đỉnh lầu không có đường chạy, chịu chết ngạt.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "sát cục", "tầng ba", "tấn công"],
    fen: "3ak4/9/3a5/9/9/9/9/9/9/3AK4 r",
    questions: [
      {
        question: "Theo bài học, Cửu Cung của bàn cờ Tướng có bao nhiêu tầng?",
        options: ["1 tầng", "2 tầng", "3 tầng", "4 tầng"],
        correctAnswer: "3 tầng",
      },
      {
        question:
          "Sát cục 'Thiết Tỏa Trùng Lâu' xoay quanh việc tấn công khi Tướng địch ở vị trí nào?",
        options: [
          "Ở đáy Cửu Cung",
          "Ở bên ngoài Cửu Cung",
          "Ngoi lên tầng cao nhất (tầng 3)",
          "Ở lộ biên",
        ],
        correctAnswer: "Ngoi lên tầng cao nhất (tầng 3)",
      },
      {
        question: "Bước đầu tiên trong kỹ thuật 'Thiết Tỏa Trùng Lâu' là gì?",
        options: [
          "Đổi Xe",
          "Dùng Tốt hoặc Xe chiếu đáy liên tục để ép Tướng ngoi lên",
          "Lên Sĩ Tượng phòng thủ",
          "Di chuyển Tướng của mình",
        ],
        correctAnswer:
          "Dùng Tốt hoặc Xe chiếu đáy liên tục để ép Tướng ngoi lên",
      },
      {
        question: "'Khóa Lầu Cao' được thực hiện bằng cách nào?",
        options: [
          "Dùng Xe hoặc Pháo chốt chặn ở tầng 2, ngăn không cho Tướng lùi về",
          "Dùng Mã cản mắt Tượng",
          "Dùng Tốt khóa góc Cửu Cung",
          "Phế quân để ép địch ăn",
        ],
        correctAnswer:
          "Dùng Xe hoặc Pháo chốt chặn ở tầng 2, ngăn không cho Tướng lùi về",
      },
      {
        question: "Ở bước kết liễu, Tướng địch chết do đâu?",
        options: [
          "Bị đổi mất Xe",
          "Hết thời gian",
          "Đứng trên đỉnh lầu không có đường chạy, chịu chết ngạt",
          "Tự nguyện xin thua",
        ],
        correctAnswer: "Đứng trên đỉnh lầu không có đường chạy, chịu chết ngạt",
      },
    ],
  },
  {
    id: "lesson-23",
    title: "Sát Cục: Lão Tốt Khám Cung",
    description:
      "Sức mạnh khủng khiếp của một con Tốt già nằm sâu trong tử huyệt Cửu Cung.",
    level: "intermediate",
    order: 23,
    content: `
# Lão Tốt Khám Cung: Kẻ Gác Cổng Tử Thần

Một con Tốt lọt được vào trung tâm Cửu Cung (lộ 5, hàng 8) gọi là Tốt Tâm, hoặc Tốt chui vào góc Sĩ gọi là Lão Tốt.

## Uy Lực Của Tốt Đáy Cung
Dù chỉ đi mỗi bước 1 ô, nhưng khi Tốt nằm ngay mặt Tướng địch, nó có tác dụng ghim chặt Tướng không cho ngoi lên. Phối hợp với Xe nằm ngang mặt ngoài, bộ đôi Xe - Tốt có thể dễ dàng xé nát 2 Sĩ 2 Tượng của đối phương mà không tốn nhiều công sức tính toán.
    `,
    duration: "25 phút",
    tags: ["trung cấp", "sát cục", "tốt", "cửu cung"],
    fen: "3ak4/9/3a5/9/9/9/9/9/9/3AK4 r",
    questions: [
      {
        question:
          "'Lão Tốt' hoặc 'Tốt Tâm' là khái niệm chỉ quân Tốt nằm ở vị trí nào?",
        options: [
          "Mới qua sông",
          "Nằm ở biên",
          "Lọt vào trung tâm Cửu Cung (lộ 5, hàng 8) hoặc chui vào góc Sĩ",
          "Tốt chưa di chuyển",
        ],
        correctAnswer:
          "Lọt vào trung tâm Cửu Cung (lộ 5, hàng 8) hoặc chui vào góc Sĩ",
      },
      {
        question: "Khi Tốt nằm ngay mặt Tướng địch, nó có tác dụng gì?",
        options: [
          "Ăn được Tướng ngay",
          "Nhảy chéo như Sĩ",
          "Đi lùi được",
          "Ghim chặt Tướng không cho ngoi lên",
        ],
        correctAnswer: "Ghim chặt Tướng không cho ngoi lên",
      },
      {
        question:
          "Sát cục Lão Tốt Khám Cung thường yêu cầu sự phối hợp của Tốt với quân nào nằm ngang mặt ngoài?",
        options: ["Xe", "Mã", "Tượng", "Sĩ"],
        correctAnswer: "Xe",
      },
      {
        question:
          "Bộ đôi Xe - Tốt Tâm có thể dễ dàng làm gì đối với hàng phòng ngự của địch?",
        options: [
          "Đổi lấy 1 Mã",
          "Xé nát 2 Sĩ 2 Tượng của đối phương mà không tốn nhiều công sức",
          "Rút về phòng thủ",
          "Cản trở Xe địch",
        ],
        correctAnswer:
          "Xé nát 2 Sĩ 2 Tượng của đối phương mà không tốn nhiều công sức",
      },
      {
        question:
          "Một điểm yếu của Tốt lọt vào cung mà không có sự trợ giúp là gì?",
        options: [
          "Nó di chuyển rất nhanh",
          "Dù uy lực nhưng chỉ đi mỗi bước 1 ô, cần quân hỗ trợ",
          "Bị cấm ăn Sĩ",
          "Không bị cản trở",
        ],
        correctAnswer: "Dù uy lực nhưng chỉ đi mỗi bước 1 ô, cần quân hỗ trợ",
      },
    ],
  },

  // ==========================================
  // PHẦN 6: TRUNG CUỘC - TƯ DUY CHIẾN LƯỢC (24-29)
  // ==========================================
  {
    id: "lesson-24",
    title: "Khái Niệm Tiên Thủ (Tempo)",
    description:
      "Bí mật của các đại cao thủ: Sự chênh lệch nhịp độ và quyền chủ động.",
    level: "advanced",
    order: 24,
    content: `
# Tiên Thủ: Quyền Lực Vô Hình

Trong cờ tướng, "Tiên" (Nhịp/Tempo) đôi khi còn quý giá hơn cả một quân Xe. 

## Tiên Thủ Là Gì?
Tiên thủ là quyền chủ động tấn công, buộc đối phương phải đi những nước phòng ngự bị động. Một nước đi vừa đe dọa ăn quân địch, vừa phát triển được quân mình gọi là nước "Tranh Tiên".

## Các Mức Độ Của "Tiên"
1. **Mất Tiên:** Đi một nước cờ vô nghĩa, hoặc phải lùi quân về vì bị đuổi.
2. **Cân Tiên:** Hai bên đổi quân hoặc dàn trận ngang ngửa.
3. **Đoạt Tiên:** Hy sinh Tốt hoặc Mã để khiến đội hình địch rối loạn, qua đó giành quyền kiểm soát ván cờ.

## Luật "Bắt Xé" Liên Tục
Để tránh việc một người lợi dụng Tiên thủ lặp lại một nước chiếu hoặc đuổi quân mãi mãi, luật cờ Tướng quy định: Không được phép "Nhất chiếu nhất tróc" (Một chiếu một đuổi) liên tục quá 3 lần. Người vi phạm sẽ bị xử thua.
    `,
    duration: "25 phút",
    tags: ["nâng cao", "trung cuộc", "tiên thủ", "tư duy"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "'Tiên' (Nhịp/Tempo) trong cờ tướng đôi khi có giá trị hơn cả quân cờ nào?",
        options: ["Mã", "Pháo", "Xe", "Tốt"],
        correctAnswer: "Xe",
      },
      {
        question: "Nước cờ 'Tranh Tiên' có đặc điểm gì?",
        options: [
          "Là nước đi vô nghĩa",
          "Bắt buộc phải phế quân",
          "Vừa đe dọa ăn quân địch, vừa phát triển được quân mình",
          "Chỉ để lên Sĩ",
        ],
        correctAnswer: "Vừa đe dọa ăn quân địch, vừa phát triển được quân mình",
      },
      {
        question:
          "Việc phải lùi quân về vì bị đuổi thể hiện mức độ Tiên thủ nào?",
        options: ["Đoạt Tiên", "Cân Tiên", "Mất Tiên", "Tranh Tiên"],
        correctAnswer: "Mất Tiên",
      },
      {
        question:
          "Việc hy sinh Tốt hoặc Mã để khiến đội hình địch rối loạn, giành quyền kiểm soát được gọi là gì?",
        options: ["Cân Tiên", "Mất Tiên", "Đoạt Tiên", "Chiếu Bí"],
        correctAnswer: "Đoạt Tiên",
      },
      {
        question:
          "Luật cờ Tướng quy định không được phép 'Nhất chiếu nhất tróc' liên tục quá bao nhiêu lần?",
        options: ["1 lần", "2 lần", "3 lần", "5 lần"],
        correctAnswer: "3 lần",
      },
    ],
  },
  {
    id: "lesson-25",
    title: "Tư Duy Cấu Trúc Binh (Tốt)",
    description:
      "Cách sử dụng Tốt để kiểm soát không gian, cản trở địch và tạo ưu thế tàn cuộc.",
    level: "advanced",
    order: 25,
    content: `
# Sức Mạnh Của Những Kẻ Tiên Phong

Người mới chơi thường coi thường Tốt vì chúng di chuyển chậm chạp. Các đại kiện tướng lại coi điều khiển Tốt là đỉnh cao chiến lược.

## 1. Vai Trò Kiềm Chế (Chặn Mã)
Bằng cách tiến Tốt 3 hoặc Tốt 7 một cách hợp lý, bạn khóa chặt không gian hoạt động của Mã địch, biến Mã địch thành một bức tượng vô dụng.

## 2. Đột Phá Không Gian (Thí Tốt Mở Đường)
Bàn cờ tướng chật chội. Thí một con Tốt đúng lúc sẽ "mở thông" trục đường cho Xe và Mã của bạn tràn sang sông.

## 3. Tốt Qua Sông Khấu Đồ
Khi Tốt lọt qua sông, nó mang sức mạnh ngang một con Mã. 
* **Tốt anh hùng:** Tốt kẹp hai bên nách Cửu Cung (lộ 4 hoặc lộ 6) tạo ra áp lực khủng khiếp.
* **Lưu ý "Lụt":** Tốt xuống tận hàng ngang cuối cùng của đối phương (hàng 9). Lúc này Tốt mất 80% sức mạnh vì không thể lùi.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "cấu trúc", "không gian", "chiến lược"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Tiến Tốt 3 hoặc Tốt 7 một cách hợp lý có vai trò kiềm chế quân nào của địch?",
        options: ["Pháo", "Tượng", "Mã", "Sĩ"],
        correctAnswer: "Mã",
      },
      {
        question:
          "Thí một con Tốt đúng lúc sẽ mang lại lợi ích gì trong bàn cờ chật chội?",
        options: [
          "Chiếu Tướng",
          "Đổi được Tượng",
          "'Mở thông' trục đường cho Xe và Mã tràn sang sông",
          "Ép đối phương hòa",
        ],
        correctAnswer: "'Mở thông' trục đường cho Xe và Mã tràn sang sông",
      },
      {
        question:
          "Khi Tốt lọt qua sông, nó mang sức mạnh ngang ngửa với quân cờ nào?",
        options: ["Xe", "Mã", "Pháo", "Tượng"],
        correctAnswer: "Mã",
      },
      {
        question:
          "Tốt kẹp hai bên nách Cửu Cung (lộ 4 hoặc lộ 6) được gọi là gì?",
        options: ["Tốt lụt", "Tốt anh hùng", "Lão Tốt", "Tốt biên"],
        correctAnswer: "Tốt anh hùng",
      },
      {
        question: "'Tốt lụt' mất đi 80% sức mạnh vì lý do gì?",
        options: [
          "Bị Sĩ ăn mất",
          "Bị Tướng địch ăn",
          "Nó xuống tận hàng 9 và không thể lùi",
          "Nó không thể đi ngang",
        ],
        correctAnswer: "Nó xuống tận hàng 9 và không thể lùi",
      },
    ],
  },
  {
    id: "lesson-26",
    title: "Đánh Giá Điểm Yếu: Hai Cánh Sườn & Trục Lộ",
    description:
      "Cách đọc vị một thế cờ: Tìm ra tử huyệt của đối phương ở lộ 4, lộ 6 và trục giữa.",
    level: "advanced",
    order: 26,
    content: `
# Bản Đồ Điểm Yếu Của Bàn Cờ

Một vị tướng giỏi không đánh bừa, họ đánh vào nơi kẻ địch yếu nhất.

## 1. Sườn (Lộ 4 và Lộ 6)
Đây là hai trục dọc nằm ngay sát Cửu Cung. Việc kiểm soát được một trong hai sườn bằng Xe là chìa khóa để xé toạc hàng thủ. Đòn "Nhị Quỷ Vỗ Môn" (Hai Xe ép sườn) là minh chứng cho sức mạnh của việc chiếm lộ 4/6.

## 2. Trục Trung Tâm (Lộ 5)
Bảo vệ Tướng thì lộ 5 là lõi. Tấn công thì lộ 5 là tim. Nếu đối phương vỡ Tượng giữa, hãy dồn hỏa lực Pháo, Mã vào đánh trực diện lộ 5.

## 3. Tốt Biên (Lộ 1 và Lộ 9)
Nhiều kỳ thủ bỏ quên hai cánh biên. Đẩy Tốt biên thành công giúp Xe dễ dàng thông đường vươn lên, tạo những đòn đánh lén sắc lẹm từ góc khuất.
    `,
    duration: "25 phút",
    tags: ["nâng cao", "đánh giá", "chiến lược", "vị trí"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Lộ 4 và lộ 6 được gọi là khu vực nào trên bàn cờ?",
        options: [
          "Trục trung tâm",
          "Sườn (ngay sát Cửu Cung)",
          "Biên",
          "Cửa tử",
        ],
        correctAnswer: "Sườn (ngay sát Cửu Cung)",
      },
      {
        question:
          "Đòn 'Nhị Quỷ Vỗ Môn' là minh chứng cho sức mạnh của việc kiểm soát khu vực nào?",
        options: [
          "Lộ 5",
          "Biên 1 và 9",
          "Sườn lộ 4 và lộ 6 bằng Xe",
          "Góc bàn cờ",
        ],
        correctAnswer: "Sườn lộ 4 và lộ 6 bằng Xe",
      },
      {
        question:
          "Lõi của hệ thống bảo vệ Tướng và là tim của hệ thống tấn công là vị trí nào?",
        options: ["Lộ biên", "Trục Trung Tâm (Lộ 5)", "Lộ 3", "Đáy Cửu Cung"],
        correctAnswer: "Trục Trung Tâm (Lộ 5)",
      },
      {
        question:
          "Nếu đối phương vỡ Tượng giữa, hành động tấn công hiệu quả nhất là gì?",
        options: [
          "Xuất Xe đi biên",
          "Đổi Mã",
          "Dồn hỏa lực Pháo, Mã đánh trực diện lộ 5",
          "Đi Tốt lụt",
        ],
        correctAnswer: "Dồn hỏa lực Pháo, Mã đánh trực diện lộ 5",
      },
      {
        question:
          "Tác dụng của việc đẩy Tốt biên (lộ 1 và 9) thành công là gì?",
        options: [
          "Giữ được Tượng",
          "Chiếu Tướng sớm",
          "Cản Pháo địch",
          "Giúp Xe dễ dàng thông đường vươn lên, tạo đòn đánh lén",
        ],
        correctAnswer: "Giúp Xe dễ dàng thông đường vươn lên, tạo đòn đánh lén",
      },
    ],
  },
  {
    id: "lesson-27",
    title: "Nghệ Thuật Phòng Thủ: Tường Đồng Vách Sắt",
    description:
      "Biết cách chống đỡ sức ép, hóa giải đòn tấn công và bảo vệ an toàn cho Tướng.",
    level: "intermediate",
    order: 27,
    content: `
# Cẩm Nang Sống Còn: Nghệ Thuật Phòng Ngự

> "Tấn công mang lại chiến thắng trong một ván đấu, nhưng phòng thủ mang lại chức vô địch."

## 1. Kết Cấu Sĩ Tượng: Tấm Khiên Của Vua
Sĩ và Tượng phải luôn tương trợ lẫn nhau. 
* **Lên Sĩ đúng hướng:** Nếu đối phương tấn công cánh trái, hãy treo Sĩ cánh phải lên để mở đường cho Tướng di chuyển thoát hiểm sang trái.
* **Bảo vệ Trung Lộ:** Tượng 5 (Tượng ở giữa) là trụ cột. Mất Tượng giữa, Cửu Cung sẽ sụp đổ trước đòn Pháo Đầu.

## 2. Nghệ Thuật Phá Ngòi (Giải Sát)
Khi đối phương dùng Pháo chiếu, hãy di chuyển hoặc tiêu diệt "ngòi" của Pháo. Hoặc chủ động chen một quân của mình vào giữa đường đạn để làm "dày" lớp bảo vệ.

## 3. Thí Quân Giải Vây
Đôi khi, để chặn một đòn chiếu hết không thể cản phá, bạn phải hy sinh một quân Pháo hoặc Mã. "Mất quân còn hơn mất Tướng."
    `,
    duration: "25 phút",
    tags: ["trung cấp", "phòng thủ", "kỹ năng", "tư duy"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Nếu đối phương tấn công cánh trái, nguyên tắc lên Sĩ đúng hướng là gì?",
        options: [
          "Lên Sĩ cánh trái để cản trực tiếp",
          "Treo Sĩ cánh phải lên để mở đường cho Tướng di chuyển thoát hiểm sang trái",
          "Không lên Sĩ",
          "Rút Tượng về",
        ],
        correctAnswer:
          "Treo Sĩ cánh phải lên để mở đường cho Tướng di chuyển thoát hiểm sang trái",
      },
      {
        question: "Trụ cột của hệ thống phòng ngự Cửu Cung là quân nào?",
        options: ["Sĩ trái", "Sĩ phải", "Tượng 5 (Tượng ở giữa)", "Tốt giữa"],
        correctAnswer: "Tượng 5 (Tượng ở giữa)",
      },
      {
        question:
          "Mất Tượng giữa sẽ khiến Cửu Cung dễ bị sụp đổ trước thế tấn công nào?",
        options: [
          "Xe đâm biên",
          "Đòn Pháo Đầu",
          "Mã Ngọa Tào",
          "Thiết Môn Hãn",
        ],
        correctAnswer: "Đòn Pháo Đầu",
      },
      {
        question: "Để hóa giải đòn Pháo chiếu (Giải Sát), bạn có thể làm gì?",
        options: [
          "Di chuyển hoặc tiêu diệt 'ngòi' của Pháo",
          "Lên Tướng tầng 3",
          "Xuất Xe",
          "Lên cả hai Sĩ",
        ],
        correctAnswer: "Di chuyển hoặc tiêu diệt 'ngòi' của Pháo",
      },
      {
        question:
          "Khẩu quyết khi phải đối mặt với một đòn chiếu hết không thể cản phá là gì?",
        options: [
          "Chờ đối thủ đi sai",
          "Mất quân còn hơn mất Tướng (Thí quân giải vây)",
          "Đầu hàng ngay",
          "Rút Tướng ra lộ 4",
        ],
        correctAnswer: "Mất quân còn hơn mất Tướng (Thí quân giải vây)",
      },
    ],
  },
  {
    id: "lesson-28",
    title: "Nhược Điểm Cấu Trúc Sĩ Tượng",
    description:
      "Cách khoét sâu vào đội hình phòng thủ đã mất Sĩ hoặc mất Tượng.",
    level: "advanced",
    order: 28,
    content: `
# Khai Thác Điểm Khuyết Phòng Thủ

Sĩ Tượng là hàng rào vững chắc, nhưng khi mất một mắt xích, hàng rào đó lập tức lộ ra hàng loạt điểm chết.

## Khi Đối Phương Mất Sĩ
* Tướng bị gió lùa trực diện.
* **Chiến thuật:** Dồn Xe tấn công mặt trước. Dùng Mã nhảy sát Cửu Cung để chiếu Tướng (Mã cực kỳ đáng sợ khi địch khuyết Sĩ).

## Khi Đối Phương Mất Tượng
* Trung lộ trở nên mỏng manh. Sức mạnh của Pháo Đầu tăng gấp đôi.
* **Chiến thuật:** Dùng Pháo đè chặt lộ 5. Vận dụng Pháo Giác (Pháo góc) để bắn phá chéo vào Cửu Cung.
    `,
    duration: "25 phút",
    tags: ["nâng cao", "chiến lược", "sĩ tượng", "khoét góc"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Khi đối phương bị mất một Sĩ, Tướng của họ gặp phải nguy hiểm gì?",
        options: [
          "Bị Pháo bắn từ xa",
          "Tướng bị gió lùa trực diện",
          "Bị đè trung lộ",
          "Không thể xuất cung",
        ],
        correctAnswer: "Tướng bị gió lùa trực diện",
      },
      {
        question:
          "Quân cờ nào trở nên cực kỳ đáng sợ, thường dùng để nhảy sát Cửu Cung chiếu Tướng khi địch khuyết Sĩ?",
        options: ["Xe", "Tốt", "Mã", "Pháo"],
        correctAnswer: "Mã",
      },
      {
        question:
          "Khi đối phương mất Tượng giữa, trục nào trở nên mỏng manh nhất?",
        options: ["Lộ 4", "Lộ 6", "Trung lộ (Lộ 5)", "Lộ biên"],
        correctAnswer: "Trung lộ (Lộ 5)",
      },
      {
        question:
          "Khi địch khuyết Tượng, sức mạnh của quân cờ nào tăng gấp đôi?",
        options: ["Xe", "Mã", "Pháo Đầu", "Sĩ"],
        correctAnswer: "Pháo Đầu",
      },
      {
        question:
          "Ngoài việc đè Pháo vào lộ 5 khi địch mất Tượng, bạn có thể vận dụng quân cờ nào để bắn phá chéo vào Cửu Cung?",
        options: ["Pháo Giác (Pháo góc)", "Tốt biên", "Mã quỳ", "Tượng 3"],
        correctAnswer: "Pháo Giác (Pháo góc)",
      },
    ],
  },
  {
    id: "lesson-29",
    title: "Chiến Lược: Mở Mặt Tướng (Trợ Công)",
    description:
      "Quy tắc 'Tướng trợ oai': Sử dụng Tướng như một vũ khí tấn công từ xa.",
    level: "advanced",
    order: 29,
    content: `
# Tướng Xuất Cung: Mũi Tên Tàng Hình

Luật Cờ Tướng quy định hai Tướng không được nhìn thấy nhau. Đây là điểm khác biệt cốt lõi biến Tướng thành một thứ vũ khí tấn công đáng sợ ở trung và tàn cuộc.

## Cách Ứng Dụng
* Khi hai bên đang giao tranh ở giữa bàn cờ, việc đưa Tướng của mình ra lộ 4 hoặc 6 sẽ khóa chặt không cho Tướng địch di chuyển ra lộ tương ứng.
* Kết hợp với một quân Xe, bạn có thể tạo ra đòn "Xe nhốt Tướng", chiếu hết mà không cần thêm bất kỳ quân nào khác.
* **Cảnh báo:** Xuất Tướng là con dao hai lưỡi. Đảm bảo sườn của bạn không bị Xe/Pháo địch rình rập trước khi "mở mặt".
    `,
    duration: "20 phút",
    tags: ["nâng cao", "tướng", "lộ mặt", "trợ công"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Luật Cờ Tướng quy định gì về hai Tướng trên bàn cờ?",
        options: [
          "Có thể gặp nhau ở giữa sân",
          "Phải luôn đứng ở đáy Cửu Cung",
          "Hai Tướng không được nhìn thấy nhau",
          "Tướng có thể nhảy qua quân khác",
        ],
        correctAnswer: "Hai Tướng không được nhìn thấy nhau",
      },
      {
        question:
          "Tính chất không được nhìn thấy nhau biến Tướng thành một thứ vũ khí gì ở trung và tàn cuộc?",
        options: [
          "Phòng ngự thụ động",
          "Vũ khí tấn công đáng sợ từ xa",
          "Mồi nhử để đổi Xe",
          "Không có tác dụng thực tế",
        ],
        correctAnswer: "Vũ khí tấn công đáng sợ từ xa",
      },
      {
        question:
          "Việc đưa Tướng của mình ra lộ 4 hoặc 6 sẽ khóa chặt Tướng địch như thế nào?",
        options: [
          "Tướng địch phải lùi về tầng 1",
          "Không cho Tướng địch di chuyển ra lộ tương ứng",
          "Tướng địch phải ăn Xe",
          "Tướng địch không được lên Sĩ",
        ],
        correctAnswer: "Không cho Tướng địch di chuyển ra lộ tương ứng",
      },
      {
        question:
          "Đòn 'Xe nhốt Tướng' tạo ra chiếu hết dựa trên sự hỗ trợ của quân nào?",
        options: ["Mã", "Pháo", "Tướng (Tướng trợ oai)", "Tốt"],
        correctAnswer: "Tướng (Tướng trợ oai)",
      },
      {
        question: "Cảnh báo quan trọng trước khi xuất Tướng ('mở mặt') là gì?",
        options: [
          "Đảm bảo Sĩ đã được ăn",
          "Đảm bảo sườn không bị Xe/Pháo địch rình rập",
          "Tướng phải lên tầng 3",
          "Phải có 2 Tốt qua sông",
        ],
        correctAnswer: "Đảm bảo sườn không bị Xe/Pháo địch rình rập",
      },
    ],
  },

  // ==========================================
  // PHẦN 7: CỜ TÀN (ENDGAME) NGHỆ THUẬT (30-38)
  // ==========================================
  {
    id: "lesson-30",
    title: "Cờ Tàn Cơ Bản: Đơn Xe Diệt Khuyết Sĩ Tượng",
    description:
      "Thuật toán chiến thắng chắc chắn khi bạn chỉ còn một Xe đối đầu với hàng thủ khuyết.",
    level: "intermediate",
    order: 30,
    content: `
# Cờ Tàn Thực Dụng: Bài Tập Bắt Buộc

> Khi chỉ còn ít quân, một sai lầm nhỏ sẽ không có cơ hội sửa chữa.

## Đơn Xe thắng Khuyết Sĩ (hoặc Khuyết Tượng)
Một Xe mạnh hơn một bộ Sĩ Tượng bị khuyết (nghĩa là đối phương đã mất 1 Sĩ hoặc 1 Tượng). 
* **Công thức:** Dùng Xe ép Tướng địch rời khỏi vị trí trung tâm, sau đó dùng thủ thuật "chờ nhịp" (đi một nước Xe ngắn) để ép các quân Sĩ/Tượng của địch phải di chuyển ra khỏi vị trí bảo vệ nhau.
* **Nguyên lý cốt lõi:** "Xe nhốt Tướng, Tướng trợ oai". Bạn **bắt buộc** phải đưa Tướng của mình xuất cung (ra lộ 4 hoặc lộ 6) để giúp Xe khống chế thế trận. Một mình Xe không thể chiếu hết nếu không có Tướng hỗ trợ.
    `,
    duration: "30 phút",
    tags: ["trung cấp", "cờ tàn", "thực dụng", "xe"],
    fen: "4kab2/4a4/4b4/9/9/9/9/9/9/3R1K3 r",
    questions: [
      {
        question: "Khái niệm cờ tàn 'thực dụng' nghĩa là gì?",
        options: [
          "Phụ thuộc vào may mắn",
          "Các thế cờ đã được chứng minh là chắc chắn Thắng hoặc chắc chắn Hòa",
          "Cần sự sáng tạo bất ngờ",
          "Không thể học thuộc",
        ],
        correctAnswer:
          "Các thế cờ đã được chứng minh là chắc chắn Thắng hoặc chắc chắn Hòa",
      },
      {
        question:
          "Một quân Xe đối đầu với một bộ Sĩ Tượng bị khuyết (mất 1 Sĩ hoặc 1 Tượng) thì kết quả chắc chắn sẽ ra sao nếu đi đúng?",
        options: [
          "Cầu hòa",
          "Xe yếu thế hơn",
          "Xe mạnh hơn và chắc thắng",
          "Phụ thuộc vào Tốt",
        ],
        correctAnswer: "Xe mạnh hơn và chắc thắng",
      },
      {
        question:
          "Trong cờ tàn Đơn Xe, thủ thuật 'chờ nhịp' (đi một nước Xe ngắn) dùng để làm gì?",
        options: [
          "Kéo dài thời gian",
          "Cho Tướng đối phương chạy",
          "Ép các quân Sĩ/Tượng địch phải di chuyển ra khỏi vị trí bảo vệ nhau",
          "Thí Xe",
        ],
        correctAnswer:
          "Ép các quân Sĩ/Tượng địch phải di chuyển ra khỏi vị trí bảo vệ nhau",
      },
      {
        question:
          "Nguyên lý cốt lõi 'Tướng trợ oai' trong cờ tàn Đơn Xe yêu cầu bạn phải làm gì?",
        options: [
          "Giữ Tướng ở góc an toàn",
          "Đưa Tướng xuất cung ra lộ 4 hoặc 6 để hỗ trợ Xe",
          "Lấy Tướng che đạn",
          "Đưa Tướng lên qua sông",
        ],
        correctAnswer: "Đưa Tướng xuất cung ra lộ 4 hoặc 6 để hỗ trợ Xe",
      },
      {
        question:
          "Trong thế cờ này, một mình Xe có thể chiếu hết được Tướng địch không?",
        options: [
          "Có, chỉ cần Xe di chuyển nhanh",
          "Có, nếu đối thủ mất hết Sĩ Tượng",
          "Không thể chiếu hết nếu không có Tướng hỗ trợ",
          "Tùy vào vị trí đứng",
        ],
        correctAnswer: "Không thể chiếu hết nếu không có Tướng hỗ trợ",
      },
    ],
  },
  {
    id: "lesson-31",
    title: "Cờ Tàn Cơ Bản: Đơn Xe Thắng Song Sĩ",
    description: "Cách điều phối Xe khéo léo để bẻ gãy 2 Sĩ bảo vệ Tướng.",
    level: "intermediate",
    order: 31,
    content: `
# Đơn Xe Thắng Song Sĩ: Công Thức Toán Học

Một Xe luôn luôn thắng hai Sĩ (nếu bạn biết cách đi). Đây là bài cờ tàn cơ bản nhất bạn phải học thuộc.

## 3 Bước Chiến Thắng
1. **Kiểm soát trung lộ:** Đưa Tướng của mình ra chiếm lộ 5 (trung tâm) nếu có thể, hoặc dùng mặt Tướng khóa một bên sườn.
2. **Ghim Sĩ:** Chuyển Xe sang cánh ngang với Sĩ của địch. Lợi dụng bước di chuyển bắt buộc của Tướng địch để ghim không cho Sĩ địch về trung tâm.
3. **Chờ nhịp bắt Sĩ:** Đi một nước Xe vô thưởng vô phạt (nhịp chờ) buộc Tướng hoặc Sĩ địch phải di chuyển sai vị trí, từ đó vồ lấy Sĩ và giành phần thắng.
    `,
    duration: "30 phút",
    tags: ["trung cấp", "cờ tàn", "đơn xe", "song sĩ"],
    fen: "5k3/4a4/4a4/9/9/9/9/9/4R4/4K4 r",
    questions: [
      {
        question:
          "Để Đơn Xe thắng được Song Sĩ, bước đầu tiên là kiểm soát khu vực nào?",
        options: [
          "Cánh phải",
          "Đáy bàn cờ",
          "Trung lộ (lộ 5) hoặc khóa một bên sườn bằng Tướng",
          "Sông",
        ],
        correctAnswer: "Trung lộ (lộ 5) hoặc khóa một bên sườn bằng Tướng",
      },
      {
        question: "Bước thứ hai 'Ghim Sĩ' được thực hiện bằng cách nào?",
        options: [
          "Đưa Xe vào trung tâm",
          "Chuyển Xe sang cánh ngang với Sĩ của địch",
          "Dùng Tướng đè Sĩ",
          "Rút Xe về giữ Tướng",
        ],
        correctAnswer: "Chuyển Xe sang cánh ngang với Sĩ của địch",
      },
      {
        question: "Tác dụng của việc Ghim Sĩ ở bước 2 là gì?",
        options: [
          "Ép địch đầu hàng",
          "Ăn được Sĩ ngay lập tức",
          "Không cho Sĩ địch về trung tâm",
          "Ép Tướng ngoi lên",
        ],
        correctAnswer: "Không cho Sĩ địch về trung tâm",
      },
      {
        question:
          "Mục đích của 'nhịp chờ' (đi một nước Xe vô thưởng vô phạt) ở bước 3 là gì?",
        options: [
          "Buộc Tướng hoặc Sĩ địch phải di chuyển sai vị trí",
          "Kéo giãn thời gian",
          "Mở đường cho Tướng mình",
          "Chặn Tượng",
        ],
        correctAnswer: "Buộc Tướng hoặc Sĩ địch phải di chuyển sai vị trí",
      },
      {
        question:
          "Kết quả của việc địch di chuyển sai vị trí do nhịp chờ là gì?",
        options: [
          "Ván cờ hòa",
          "Địch chiếu lại mình",
          "Bạn vồ lấy Sĩ và giành phần thắng",
          "Bạn mất Xe",
        ],
        correctAnswer: "Bạn vồ lấy Sĩ và giành phần thắng",
      },
    ],
  },
  {
    id: "lesson-32",
    title: "Cờ Tàn Cơ Bản: Đơn Xe Thắng Song Tượng",
    description: "Phá vỡ lá chắn Tượng bằng kỹ thuật ép cung.",
    level: "intermediate",
    order: 32,
    content: `
# Đơn Xe Thắng Song Tượng: Dễ Hơn Song Sĩ

Ngược với Sĩ, Tượng bay chéo rất rộng nhưng lại có điểm mù. Một Xe luôn thắng dễ hai Tượng.

## Cách Bẻ Tượng
Tượng chỉ bảo vệ được Tướng từ xa. Nhiệm vụ của bạn là:
* Luôn giữ Tướng của bạn ở trục giữa (lộ 5).
* Dùng Xe đuổi bắt Tượng. Tượng sẽ phải bay ra biên.
* Khi Tượng ra biên, lập tức điều Xe đè vào "Mắt Tượng" (điểm giao chéo) để cản Tượng bay về. Sau đó chậm rãi tiến Xe vào Cửu Cung để chiếu bí Tướng địch (lúc này Tướng đã mất đi sự che chở của Tượng).
    `,
    duration: "25 phút",
    tags: ["trung cấp", "cờ tàn", "đơn xe", "song tượng"],
    fen: "4k4/9/4b4/9/8b/9/9/9/4R4/4K4 r",
    questions: [
      {
        question:
          "Tại sao Đơn Xe thắng Song Tượng lại được đánh giá là dễ hơn thắng Song Sĩ?",
        options: [
          "Tượng đi chậm hơn Sĩ",
          "Tượng bay chéo rất rộng nhưng lại có điểm mù",
          "Tượng không được bảo vệ Tướng",
          "Xe có thể đi chéo",
        ],
        correctAnswer: "Tượng bay chéo rất rộng nhưng lại có điểm mù",
      },
      {
        question:
          "Nhiệm vụ đầu tiên của bạn khi cầm Xe đánh Song Tượng là giữ Tướng của mình ở đâu?",
        options: ["Lộ 4", "Lộ 6", "Trục giữa (lộ 5)", "Biên"],
        correctAnswer: "Trục giữa (lộ 5)",
      },
      {
        question:
          "Khi dùng Xe đuổi bắt Tượng, Tượng địch thường sẽ phải bay đi đâu?",
        options: [
          "Sang sông",
          "Lên đỉnh Cửu Cung",
          "Bay ra biên",
          "Bay vào trung tâm",
        ],
        correctAnswer: "Bay ra biên",
      },
      {
        question:
          "Khi Tượng địch đã ra biên, lập tức điều Xe đè vào vị trí nào?",
        options: [
          "Sau lưng Tướng",
          "Lộ 4",
          "'Mắt Tượng' (điểm giao chéo) để cản Tượng bay về",
          "Giữ mặt Tướng mình",
        ],
        correctAnswer: "'Mắt Tượng' (điểm giao chéo) để cản Tượng bay về",
      },
      {
        question:
          "Khi Tượng không thể bay về, bạn sẽ làm gì tiếp theo để kết thúc ván cờ?",
        options: [
          "Chờ Tượng chạy chỗ khác",
          "Chậm rãi tiến Xe vào Cửu Cung chiếu bí Tướng địch đã mất che chở",
          "Lùi Xe về phòng thủ",
          "Xuất Tướng",
        ],
        correctAnswer:
          "Chậm rãi tiến Xe vào Cửu Cung chiếu bí Tướng địch đã mất che chở",
      },
    ],
  },
  {
    id: "lesson-33",
    title: "Cờ Tàn Nâng Cao: Xe Pháo vs Xe Mã",
    description: "Đánh giá thế trận tàn cuộc kinh điển của các đại sư.",
    level: "advanced",
    order: 33,
    content: `
# Xe Pháo vs Xe Mã: Cặp Kỳ Phùng Địch Thủ

Ở cờ tàn, người ta thường tranh luận Xe Pháo hay Xe Mã mạnh hơn. Câu trả lời phụ thuộc vào Sĩ Tượng và Tốt.

## Xe Mã Mạnh Khi Nào?
* Khi bàn cờ trống trải, ít Tốt cản đường. Mã sẽ thi triển những bước nhảy "Bát giác Mã" đáng sợ.
* Xe Mã kết hợp cực tốt trong việc bẻ gãy hệ thống Sĩ Tượng lẻ tẻ.

## Xe Pháo Mạnh Khi Nào?
* Xe Pháo có sức mạnh phòng thủ từ xa tuyệt vời.
* Nếu Pháo có Sĩ Tượng của mình làm ngòi, Xe Pháo có thể thi triển "Pháo khống" (đè nghẹt Tướng địch). 
* **Kết luận:** Nếu còn Sĩ Tượng để làm ngòi, Xe Pháo ưu thế. Nếu Sĩ Tượng nát, Xe Mã chiếm thượng phong.
    `,
    duration: "35 phút",
    tags: ["nâng cao", "cờ tàn", "xe pháo", "xe mã"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Ở cờ tàn Xe Pháo vs Xe Mã, yếu tố nào quyết định phe nào mạnh hơn?",
        options: [
          "Việc ai đi trước",
          "Việc ai có thời gian nhiều hơn",
          "Sự hiện diện của Sĩ Tượng và Tốt",
          "Không có yếu tố nào, luôn luôn hòa",
        ],
        correctAnswer: "Sự hiện diện của Sĩ Tượng và Tốt",
      },
      {
        question: "Xe Mã trở nên đặc biệt mạnh mẽ khi nào?",
        options: [
          "Khi bàn cờ đông đúc",
          "Khi đối thủ còn đầy đủ Sĩ Tượng",
          "Khi bàn cờ trống trải, ít Tốt cản đường",
          "Khi Mã chưa qua sông",
        ],
        correctAnswer: "Khi bàn cờ trống trải, ít Tốt cản đường",
      },
      {
        question: "Xe Pháo chiếm lợi thế trong trường hợp nào?",
        options: [
          "Khi không còn Sĩ Tượng",
          "Khi có Sĩ Tượng của mình làm ngòi để thi triển 'Pháo khống'",
          "Khi bàn cờ trống trơn",
          "Khi Pháo bị ghim",
        ],
        correctAnswer:
          "Khi có Sĩ Tượng của mình làm ngòi để thi triển 'Pháo khống'",
      },
      {
        question: "Pháo khống là đòn phối hợp có tác dụng gì?",
        options: [
          "Đè nghẹt Tướng địch từ xa",
          "Ăn nhanh Xe đối phương",
          "Thí Pháo",
          "Bắt chết Mã",
        ],
        correctAnswer: "Đè nghẹt Tướng địch từ xa",
      },
      {
        question:
          "Kết luận chung của bài học về cặp kỳ phùng địch thủ này là gì?",
        options: [
          "Xe Pháo luôn thắng",
          "Xe Mã luôn thắng",
          "Nếu còn Sĩ Tượng làm ngòi thì Xe Pháo ưu thế; nếu Sĩ Tượng nát thì Xe Mã chiếm thượng phong",
          "Thế cờ luôn hòa",
        ],
        correctAnswer:
          "Nếu còn Sĩ Tượng làm ngòi thì Xe Pháo ưu thế; nếu Sĩ Tượng nát thì Xe Mã chiếm thượng phong",
      },
    ],
  },
  {
    id: "lesson-34",
    title: "Cờ Tàn Mã: Bước Nhảy Diệu Kỳ",
    description:
      "Sức mạnh của Mã ở tàn cuộc: Phối hợp Tốt, và cách Đơn Mã thắng Đơn Tượng/Sĩ.",
    level: "advanced",
    order: 34,
    content: `
# Mã Tàn Cuộc: Bóng Ma Trên Bàn Cờ Trống

Trái ngược với Pháo cần "ngòi" và đông đúc, Mã yêu thích không gian rộng mở của cờ tàn.

## 1. Đơn Mã Thắng Đơn Sĩ / Đơn Tượng
Một con Mã (nếu biết cách đi) luôn chiến thắng một Sĩ hoặc một Tượng lẻ loi của đối phương. Bí quyết là dùng Tướng của mình khóa chặt lối thoát của Tướng địch, sau đó dùng Mã vừa chiếu vừa bắt chết Sĩ/Tượng.

## 2. Cờ Tàn Mã - Tốt
Mã rất giỏi trong việc bảo vệ Tốt tiến lên. Khi Tốt đã sang sông và kẹp vào Cửu Cung, Mã sẽ đóng vai trò nhảy vòng quanh tạo các đòn chiếu bất ngờ, không cho Tướng địch cơ hội thở.
    `,
    duration: "35 phút",
    tags: ["nâng cao", "cờ tàn", "mã", "kết cục"],
    fen: "5k3/9/9/9/9/9/9/9/4N4/4K4 r",
    questions: [
      {
        question:
          "Trái ngược với Pháo, quân Mã thích hợp với loại không gian nào trong cờ tàn?",
        options: [
          "Không gian đông đúc có ngòi",
          "Không gian chật chội",
          "Không gian rộng mở của cờ tàn trống trải",
          "Bị giới hạn trong Cửu Cung",
        ],
        correctAnswer: "Không gian rộng mở của cờ tàn trống trải",
      },
      {
        question:
          "Đơn Mã có thể giành chiến thắng trước quân phòng ngự nào nếu biết cách đi?",
        options: [
          "Song Sĩ",
          "Song Tượng",
          "Một Sĩ hoặc một Tượng lẻ loi",
          "Một Mã khác",
        ],
        correctAnswer: "Một Sĩ hoặc một Tượng lẻ loi",
      },
      {
        question: "Bí quyết để Đơn Mã thắng Đơn Sĩ / Đơn Tượng là gì?",
        options: [
          "Mã chạy liên tục chờ thời gian",
          "Dùng Tướng của mình khóa chặt lối thoát Tướng địch, dùng Mã vừa chiếu vừa bắt Sĩ/Tượng",
          "Mã đổi Sĩ cầu hòa",
          "Ép Tướng địch vào tâm",
        ],
        correctAnswer:
          "Dùng Tướng của mình khóa chặt lối thoát Tướng địch, dùng Mã vừa chiếu vừa bắt Sĩ/Tượng",
      },
      {
        question:
          "Mã rất giỏi trong việc kết hợp với quân nào để tạo lợi thế cờ tàn?",
        options: ["Tượng", "Pháo", "Tốt tiến lên", "Sĩ"],
        correctAnswer: "Tốt tiến lên",
      },
      {
        question:
          "Khi Tốt đã sang sông và kẹp vào Cửu Cung, vai trò của Mã là gì?",
        options: [
          "Bảo vệ Tướng nhà",
          "Đứng yên cản đường",
          "Nhảy vòng quanh tạo các đòn chiếu bất ngờ",
          "Nhảy về đổi Tốt địch",
        ],
        correctAnswer: "Nhảy vòng quanh tạo các đòn chiếu bất ngờ",
      },
    ],
  },
  {
    id: "lesson-35",
    title: "Cờ Tàn Mã: Mã Tốt Thắng Khuyết Sĩ",
    description: "Công thức dồn ép và xé nát hàng thủ bị thủng bằng Mã Tốt.",
    level: "advanced",
    order: 35,
    content: `
# Mã Tốt: Bộ Đôi Sát Thủ Bầm Dập

Một Mã và một Tốt (đã qua sông) dư sức đánh sập hàng phòng thủ đã mất 1 Sĩ của đối phương.

## Cách Vận Hành
1. **Dùng Tốt áp sát:** Tiến Tốt xuống hàng 7 hoặc 8, kẹp vào hông Cửu Cung. Không vội vã ăn Tượng địch.
2. **Mã tạo sức ép:** Mã vòng vèo nhảy vào các góc độ mà Sĩ còn lại của địch không thể bắt được, đồng thời bảo vệ Tốt.
3. **Thí Tốt bẻ Sĩ:** Ở thời cơ quyết định, dùng Tốt chém thẳng vào Sĩ cuối cùng của địch. Chấp nhận mất Tốt để Tướng địch lòi ra ngoài. Trận đấu kết thúc bằng Mã và mặt Tướng của ta chiếu bí.
    `,
    duration: "30 phút",
    tags: ["nâng cao", "cờ tàn", "mã tốt", "khuyết sĩ"],
    fen: "5k3/9/9/9/9/9/9/9/4N4/4K4 r",
    questions: [
      {
        question:
          "Một Mã và một Tốt qua sông có đủ sức phá vỡ hàng phòng thủ nào của địch?",
        options: [
          "Sĩ Tượng Toàn",
          "Xe và Pháo",
          "Hàng phòng thủ đã mất 1 Sĩ",
          "Hai Xe",
        ],
        correctAnswer: "Hàng phòng thủ đã mất 1 Sĩ",
      },
      {
        question: "Bước đầu tiên (Dùng Tốt áp sát) yêu cầu bạn làm gì?",
        options: [
          "Lấy Tốt ăn Tượng địch ngay lập tức",
          "Tiến Tốt xuống hàng 7 hoặc 8 kẹp vào hông Cửu Cung, không vội ăn Tượng",
          "Đi Tốt lụt",
          "Đổi Tốt lấy Sĩ",
        ],
        correctAnswer:
          "Tiến Tốt xuống hàng 7 hoặc 8 kẹp vào hông Cửu Cung, không vội ăn Tượng",
      },
      {
        question: "Trong khi Tốt áp sát, Mã thực hiện nhiệm vụ gì?",
        options: [
          "Rút về giữ Tướng",
          "Cản Xe địch",
          "Nhảy vào góc độ Sĩ địch không bắt được và bảo vệ Tốt",
          "Hy sinh ngay lập tức",
        ],
        correctAnswer: "Nhảy vào góc độ Sĩ địch không bắt được và bảo vệ Tốt",
      },
      {
        question:
          "Thời cơ quyết định để kết thúc ván cờ Mã Tốt thắng Khuyết Sĩ là gì?",
        options: [
          "Thí Mã",
          "Đưa Tướng sang biên",
          "Dùng Tốt chém thẳng vào Sĩ cuối cùng của địch",
          "Rút Tốt về",
        ],
        correctAnswer: "Dùng Tốt chém thẳng vào Sĩ cuối cùng của địch",
      },
      {
        question: "Sự hy sinh Tốt chém Sĩ mang lại hệ quả gì?",
        options: [
          "Mất Tốt dẫn đến hòa cờ",
          "Tướng địch lòi ra ngoài để Mã và mặt Tướng ta chiếu bí",
          "Bị địch phản công ăn Mã",
          "Tướng địch trốn được vào góc",
        ],
        correctAnswer: "Tướng địch lòi ra ngoài để Mã và mặt Tướng ta chiếu bí",
      },
    ],
  },
  {
    id: "lesson-36",
    title: "Cờ Tàn Pháo: Sức Mạnh Suy Giảm?",
    description:
      "Cách điều khiển Pháo khi bàn cờ trống rỗng: Nghệ thuật dùng Tướng làm ngòi.",
    level: "advanced",
    order: 36,
    content: `
# Khéo Thắng Cờ Tàn Pháo

Pháo ở tàn cuộc rất yếu vì thiếu ngòi. Một con Pháo lẻ loi không thể làm gì một Tướng trơ trọi (Hòa cờ).

## 1. Pháo Tốt Thắng Sĩ Tượng Toàn
Đây là một giáo trình cờ tàn kinh điển. Để Pháo và Tốt có thể phá vỡ hệ thống 2 Sĩ 2 Tượng, bạn phải:
* Giữ Tốt ở vị trí cao (không được lụt).
* Luân chuyển Pháo sang hai cánh liên tục.
* Dùng Tướng của chính mình, hoặc Sĩ/Tượng của mình làm "ngòi" cho Pháo nã đạn vào trung lộ địch.

## 2. Nghệ Thuật Giấu Quân
Trong cờ tàn Pháo, đôi khi bạn cố tình "giấu" Sĩ của mình đi, chỉ dựng lên khi cần tạo ngòi chiếu đột ngột. Sự tính toán nhịp độ là cực kỳ khắt khe.
    `,
    duration: "35 phút",
    tags: ["nâng cao", "cờ tàn", "pháo", "kết cục"],
    fen: "4kab2/4a4/4b4/9/9/9/4p4/9/4C4/4K4 r",
    questions: [
      {
        question: "Tại sao Pháo ở tàn cuộc lại được coi là rất yếu?",
        options: [
          "Vì nó đi chậm",
          "Vì nó không có ngòi",
          "Vì nó bị cản bởi Mã",
          "Vì không có Xe bảo vệ",
        ],
        correctAnswer: "Vì nó không có ngòi",
      },
      {
        question:
          "Nếu chỉ có một con Pháo trơ trọi đối đầu với một Tướng địch lẻ loi, kết quả sẽ là gì?",
        options: [
          "Pháo thắng",
          "Hòa cờ",
          "Tướng địch thắng",
          "Pháo bị ăn ngay",
        ],
        correctAnswer: "Hòa cờ",
      },
      {
        question:
          "Để Pháo Tốt phá vỡ Sĩ Tượng Toàn, nguyên tắc đặt vị trí Tốt là gì?",
        options: [
          "Tiến Tốt lụt",
          "Giữ Tốt ở vị trí cao (không được lụt)",
          "Để Tốt ở sân nhà",
          "Cho Tốt che Tướng",
        ],
        correctAnswer: "Giữ Tốt ở vị trí cao (không được lụt)",
      },
      {
        question:
          "Làm thế nào để Pháo có thể nã đạn vào trung lộ địch trong cờ tàn?",
        options: [
          "Dùng Sĩ/Tượng của địch",
          "Đặt Pháo sau Tốt địch",
          "Dùng Tướng, hoặc Sĩ/Tượng của chính mình làm 'ngòi'",
          "Bắn không cần ngòi",
        ],
        correctAnswer: "Dùng Tướng, hoặc Sĩ/Tượng của chính mình làm 'ngòi'",
      },
      {
        question:
          "'Nghệ thuật giấu quân' trong cờ tàn Pháo ám chỉ kỹ thuật gì?",
        options: [
          "Giấu Tốt đi để địch không thấy",
          "Giấu Tướng ra biên",
          "Cố tình 'giấu' Sĩ của mình, chỉ dựng lên khi cần tạo ngòi chiếu đột ngột",
          "Dấu Pháo sau lưng Tướng",
        ],
        correctAnswer:
          "Cố tình 'giấu' Sĩ của mình, chỉ dựng lên khi cần tạo ngòi chiếu đột ngột",
      },
    ],
  },
  {
    id: "lesson-37",
    title: "Cờ Tàn Xe Tốt: Tuyệt Đối Ưu Thế",
    description: "Sử dụng Xe Tốt để ép chết Xe trơ trọi của địch.",
    level: "advanced",
    order: 37,
    content: `
# Xe Tốt: Uy Lực Không Thể Cản Phá

Cờ tàn Xe Tốt (Xe và 1 Tốt qua sông) đối đầu với Đơn Xe là thế cờ chắc thắng nếu bạn không đi sai.

## Nguyên Tắc Khóa Xe
Địch sẽ dùng Xe của họ để chốt chặn hàng ngang, không cho Tướng của bạn ló mặt hoặc không cho Tốt của bạn tiến xuống.
* **Nhiệm vụ:** Dùng Xe của mình che chắn cho Tốt tiến lên từng bước.
* **Tuyệt kỹ:** Đổi Xe. Bất cứ khi nào có cơ hội ép đối phương đổi Xe, hãy thực hiện ngay. Vì khi 2 Xe triệt tiêu nhau, Tốt của bạn đi thẳng xuống Cửu Cung đâm Tướng địch sẽ giành phần thắng.
    `,
    duration: "35 phút",
    tags: ["nâng cao", "cờ tàn", "xe tốt", "kết thúc"],
    fen: "4k4/9/9/9/9/9/9/9/4R4/4K4 r",
    questions: [
      {
        question:
          "Cờ tàn Xe Tốt (Xe và 1 Tốt qua sông) đối đầu với Đơn Xe có kết quả như thế nào nếu đi đúng?",
        options: [
          "Chắc chắn hòa",
          "Chắc chắn thua",
          "Chắc chắn thắng",
          "Thắng nếu có thêm Mã",
        ],
        correctAnswer: "Chắc chắn thắng",
      },
      {
        question: "Chiến thuật phòng thủ của Đơn Xe địch là gì?",
        options: [
          "Chốt chặn hàng ngang, không cho Tướng bạn ló mặt hoặc Tốt tiến xuống",
          "Chiếu Tướng liên tục",
          "Đổi Xe sớm",
          "Trốn góc",
        ],
        correctAnswer:
          "Chốt chặn hàng ngang, không cho Tướng bạn ló mặt hoặc Tốt tiến xuống",
      },
      {
        question: "Nhiệm vụ của bạn khi cầm Xe Tốt là gì?",
        options: [
          "Dùng Tốt bảo vệ Tướng",
          "Đuổi Xe địch vòng quanh",
          "Dùng Xe che chắn cho Tốt tiến lên từng bước",
          "Cho Tốt lụt",
        ],
        correctAnswer: "Dùng Xe che chắn cho Tốt tiến lên từng bước",
      },
      {
        question:
          "'Tuyệt kỹ' nhanh nhất để giành chiến thắng trong cờ tàn Xe Tốt đối Đơn Xe là gì?",
        options: ["Thí Tốt", "Đổi Xe", "Lên Sĩ Tượng", "Trốn Tướng"],
        correctAnswer: "Đổi Xe",
      },
      {
        question: "Tại sao ép đổi Xe lại dẫn đến chiến thắng?",
        options: [
          "Vì đối phương hết quân cờ",
          "Vì 2 Xe triệt tiêu nhau, Tốt đi thẳng xuống Cửu Cung đâm Tướng địch",
          "Vì bạn có Sĩ",
          "Vì luật quy định hòa",
        ],
        correctAnswer:
          "Vì 2 Xe triệt tiêu nhau, Tốt đi thẳng xuống Cửu Cung đâm Tướng địch",
      },
    ],
  },
  {
    id: "lesson-38",
    title: "Pháo Cao Tốt Thắng Sĩ Tượng Toàn",
    description:
      "Bài kiểm tra trình độ cờ tàn mà mọi kỳ thủ chuyên nghiệp phải vượt qua.",
    level: "advanced",
    order: 38,
    content: `
# Bài Thi Khắc Nghiệt Nhất

Nhiều người cầm Pháo và 1 Tốt cao (chưa lụt) không biết cách nào xuyên phá Sĩ Tượng Toàn của địch, cuối cùng bị ép Hòa. 

## Thuật Toán Chiến Thắng
1. **Kiểm Soát Tướng:** Tướng của bạn phải chiếm lộ 5.
2. **Khống Chế Sĩ Tượng:** Đưa Pháo đè vào Tượng giữa, ghim không cho Sĩ Tượng địch liên kết mượt mà.
3. **Đẩy Tốt Tinh Tế:** Tốt từ từ áp sát Cửu Cung. 
4. **Phá Khóa:** Dùng Pháo bắt Sĩ, hoặc Tốt đổi Sĩ đúng thời điểm. Mất đi 1 Sĩ, hàng thủ đối phương sẽ như tờ giấy vụn trước hỏa lực Pháo nòng dài.
    `,
    duration: "40 phút",
    tags: ["nâng cao", "cờ tàn", "pháo tốt", "kinh điển"],
    fen: "4kab2/4a4/4b4/9/9/9/4p4/9/4C4/4K4 r",
    questions: [
      {
        question:
          "Thế cờ Pháo Tốt cao (chưa lụt) thắng Sĩ Tượng Toàn được coi là gì trong cờ tàn?",
        options: [
          "Rất dễ, ai cũng biết",
          "Luôn luôn hòa",
          "Bài kiểm tra trình độ mà mọi kỳ thủ chuyên nghiệp phải vượt qua",
          "Không thể thắng",
        ],
        correctAnswer:
          "Bài kiểm tra trình độ mà mọi kỳ thủ chuyên nghiệp phải vượt qua",
      },
      {
        question:
          "Thuật toán chiến thắng đầu tiên là Tướng của bạn phải ở vị trí nào?",
        options: ["Chiếm lộ 5", "Lộ 4", "Lộ 6", "Chui vào góc"],
        correctAnswer: "Chiếm lộ 5",
      },
      {
        question: "Làm thế nào để khống chế Sĩ Tượng địch?",
        options: [
          "Lấy Tốt chém thẳng",
          "Dùng Tướng giữ mặt",
          "Đưa Pháo đè vào Tượng giữa, ghim liên kết Sĩ Tượng",
          "Thí Pháo",
        ],
        correctAnswer: "Đưa Pháo đè vào Tượng giữa, ghim liên kết Sĩ Tượng",
      },
      {
        question:
          "Khi Tốt từ từ áp sát Cửu Cung, đòn 'Phá Khóa' cuối cùng là gì?",
        options: [
          "Pháo bắt Tượng",
          "Tốt đi lụt chiếu Tướng",
          "Dùng Pháo bắt Sĩ, hoặc Tốt đổi Sĩ đúng thời điểm",
          "Dùng Tướng ăn Sĩ",
        ],
        correctAnswer: "Dùng Pháo bắt Sĩ, hoặc Tốt đổi Sĩ đúng thời điểm",
      },
      {
        question:
          "Khi hàng thủ Sĩ Tượng Toàn mất đi 1 Sĩ, nó sẽ trở nên như thế nào trước hỏa lực Pháo?",
        options: [
          "Vẫn phòng thủ tốt",
          "Mạnh hơn",
          "Như tờ giấy vụn",
          "Hóa giải được Pháo",
        ],
        correctAnswer: "Như tờ giấy vụn",
      },
    ],
  },

  // ==========================================
  // PHẦN 8: TÂM LÝ, ĐẠI CỤC & TỰ HỌC (39-42)
  // ==========================================
  {
    id: "lesson-39",
    title: "Tâm Lý Học Trong Cờ Tướng",
    description:
      "Rèn luyện bản lĩnh thi đấu, cách giữ bình tĩnh và đọc vị đối thủ.",
    level: "advanced",
    order: 39,
    content: `
# Tâm Lý Chiến: Vũ Khí Vô Hình

Giữa hai kỳ thủ có trình độ tương đương, người chiến thắng là người có tinh thần thép. 

## 1. Hội Chứng "Mù Tạm Thời" (Chess Blindness)
Là hiện tượng bạn đột nhiên không nhìn thấy một nước đi hiển nhiên. 
* **Cách khắc phục:** Luôn tuân thủ quy trình kiểm tra an toàn trước mỗi nước cờ: *"Nước đi vừa rồi của họ đe dọa điều gì?"*

## 2. Tâm Lý "Tham Thực Cực Thâm"
Thấy quân đối phương sơ hở là lao vào ăn ngay. Miếng phomat miễn phí chỉ nằm trong bẫy chuột. Khi một kỳ thủ giỏi bỗng nhiên "tặng" bạn một quân cờ lớn, hãy dừng lại suy nghĩ thật kỹ.

## 3. Nghệ Thuật Giấu Ý Đồ
Đừng để mắt bạn dán chặt vào khu vực bạn định tấn công trên bàn cờ. "Nhìn chỗ này, đánh chỗ kia".
    `,
    duration: "20 phút",
    tags: ["nâng cao", "tâm lý", "kỹ năng mềm", "chiến lược"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Giữa hai kỳ thủ trình độ tương đương, yếu tố nào quyết định chiến thắng?",
        options: [
          "Đi trước",
          "Tinh thần thép và sự điềm tĩnh vượt trội",
          "May mắn",
          "Sở hữu Xe",
        ],
        correctAnswer: "Tinh thần thép và sự điềm tĩnh vượt trội",
      },
      {
        question: "Hội chứng 'Mù Tạm Thời' (Chess Blindness) là gì?",
        options: [
          "Bị lóa mắt vì màn hình",
          "Hiện tượng đột nhiên không nhìn thấy một nước đi hiển nhiên",
          "Không thấy quân đối phương",
          "Quên mất luật chơi",
        ],
        correctAnswer:
          "Hiện tượng đột nhiên không nhìn thấy một nước đi hiển nhiên",
      },
      {
        question:
          "Cách khắc phục 'Mù Tạm Thời' là luôn tự hỏi câu gì trước mỗi nước cờ?",
        options: [
          "'Mình sẽ ăn được quân gì?'",
          "'Địch có bao nhiêu điểm?'",
          "'Nước đi vừa rồi của họ đe dọa điều gì?'",
          "'Khi nào hết giờ?'",
        ],
        correctAnswer: "'Nước đi vừa rồi của họ đe dọa điều gì?'",
      },
      {
        question: "Tâm lý 'Tham Thực Cực Thâm' là cạm bẫy gì?",
        options: [
          "Lao vào ăn ngay khi thấy đối phương sơ hở mà không tính toán bẫy",
          "Tham ăn cờ hòa",
          "Sợ mất quân nên không dám đổi",
          "Tham thời gian",
        ],
        correctAnswer:
          "Lao vào ăn ngay khi thấy đối phương sơ hở mà không tính toán bẫy",
      },
      {
        question:
          "Nghệ thuật giấu ý đồ (Nhìn chỗ này, đánh chỗ kia) giúp kỳ thủ đạt được điều gì?",
        options: [
          "Đổi ngang quân",
          "Làm đối phương hết giờ",
          "Tố cáo mục đích tấn công",
          "Đừng để mắt dán chặt vào khu vực tấn công để che giấu mục đích",
        ],
        correctAnswer:
          "Đừng để mắt dán chặt vào khu vực tấn công để che giấu mục đích",
      },
    ],
  },
  {
    id: "lesson-40",
    title: "Xử Lý Khủng Hoảng & Quản Lý Thời Gian",
    description: "Cách vươn lên từ nghịch cảnh và sử dụng đồng hồ cờ hợp lý.",
    level: "advanced",
    order: 40,
    content: `
# Nghệ Thuật Sinh Tồn & Chạy Đua

## Trộn Bùn (Làm Phức Tạp Hóa)
Khi bạn đang thua về chất lượng quân, nếu chơi một ván cờ đơn giản và gọn gàng, bạn chắc chắn chết chậm. Hãy tạo ra các tình huống lộn xộn, hy sinh thêm quân để tấn công rát vào Tướng địch, ép đối thủ vấp váp tâm lý.

## Cầu Hòa (Draw/Stalemate)
Bạn có thể thiết lập các hình đồ "Tàn cuộc Hòa chắc" (Ví dụ: 1 Xe không thể thắng 1 Pháo 2 Sĩ). Dẫn dắt đối thủ vào các thế cờ đó để thoát hiểm.

## Kẻ Thù Thứ Ba: Đồng Hồ
* **Khai cuộc (Đi nhanh):** Học thuộc các bài học khai cuộc để đi 15 nước đầu tiên trong chưa đầy 2 phút. 
* **Trung cuộc phức tạp (Nghĩ sâu):** Đây là lúc bạn dùng 70% lượng thời gian của mình. 
* **Tàn cuộc (Chớp nhoáng & Chuẩn xác):** Ở giai đoạn này dựa vào trực giác và các thế cờ tàn cơ bản đã học.
    `,
    duration: "25 phút",
    tags: ["nâng cao", "tâm lý", "khủng hoảng", "thời gian"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Hành động 'Trộn bùn' (Làm phức tạp hóa) được sử dụng khi nào?",
        options: [
          "Khi đang có ưu thế tuyệt đối",
          "Khi đang thua về chất lượng quân",
          "Khi bắt đầu khai cuộc",
          "Khi muốn hòa nhanh",
        ],
        correctAnswer: "Khi đang thua về chất lượng quân",
      },
      {
        question:
          "Mục đích của việc hy sinh thêm quân để tấn công rát vào Tướng địch khi đang 'trộn bùn' là gì?",
        options: [
          "Bỏ cuộc cho nhanh",
          "Đổi lấy Xe",
          "Ép đối thủ vấp váp tâm lý",
          "Dọn trống bàn cờ",
        ],
        correctAnswer: "Ép đối thủ vấp váp tâm lý",
      },
      {
        question:
          "Nếu cản trở đối phương không còn nước đi hợp lệ nào (Hết nước đi), bạn sẽ nhận kết quả gì theo luật Cờ Tướng?",
        options: ["Thắng tuyệt đối", "Hòa cờ", "Xử thua", "Thi đấu lại"],
        correctAnswer: "Hòa cờ",
      },
      {
        question:
          "Để quản lý thời gian hiệu quả ở giai đoạn Khai cuộc, bạn nên làm gì?",
        options: [
          "Suy nghĩ thật kỹ từng nước",
          "Dùng 70% thời gian",
          "Học thuộc các bài học khai cuộc để đi nhanh (15 nước trong <2 phút)",
          "Đợi đối thủ đi",
        ],
        correctAnswer:
          "Học thuộc các bài học khai cuộc để đi nhanh (15 nước trong <2 phút)",
      },
      {
        question:
          "Giai đoạn trung cuộc phức tạp yêu cầu bạn phải phân bổ bao nhiêu phần trăm thời gian?",
        options: ["10%", "30%", "50%", "70%"],
        correctAnswer: "70%",
      },
    ],
  },
  {
    id: "lesson-41",
    title: "Ứng Dụng Software (Engine) Để Học Tập",
    description:
      "Sử dụng trí tuệ nhân tạo để phân tích ván đấu và tìm ra tử huyệt.",
    level: "intermediate",
    order: 41,
    content: `
# Học Cờ Cùng Trí Tuệ Nhân Tạo

Ngày nay, với sự phát triển của AI (như XQMS, Cyclone, hay Pikafish), bất kỳ ai cũng có thể có một "Đại Kiện Tướng" trong máy tính để chỉ bài.

## Cách Dùng Engine Hiệu Quả
1. **Tuyệt đối không dùng để gian lận:** Chơi online dùng phần mềm sẽ triệt tiêu tư duy của chính bạn.
2. **Phân tích ván thua:** Sau mỗi ván cờ (đặc biệt là ván thua), hãy nạp biên bản (PGN) vào phần mềm. Engine sẽ chỉ ra biểu đồ điểm số: Bạn đã mắc sai lầm ngớ ngẩn (blunder) ở nước thứ mấy.
3. **Thử nghiệm biến thể mới:** Gặp một thế cờ khai cuộc lạ, hãy xếp nó vào máy tính để xem máy móc phản đòn như thế nào. Học thuộc tư duy đó để áp dụng cho lần sau.
    `,
    duration: "25 phút",
    tags: ["trung cấp", "tự học", "engine", "ai"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question:
          "Engine cờ tướng (như XQMS, Cyclone, Pikafish) đóng vai trò gì cho người học?",
        options: [
          "Thay thế người chơi đấu online",
          "Gian lận giải đấu",
          "Đóng vai trò như một 'Đại Kiện Tướng' trong máy tính để chỉ bài",
          "Vẽ giao diện",
        ],
        correctAnswer:
          "Đóng vai trò như một 'Đại Kiện Tướng' trong máy tính để chỉ bài",
      },
      {
        question: "Bài học khuyến cáo KHÔNG nên sử dụng Engine để làm gì?",
        options: [
          "Phân tích ván thua",
          "Chơi online dùng phần mềm (gian lận)",
          "Thử nghiệm biến thể mới",
          "Lưu trữ biên bản PGN",
        ],
        correctAnswer: "Chơi online dùng phần mềm (gian lận)",
      },
      {
        question:
          "Việc sử dụng phần mềm chơi online có tác hại gì với bản thân người chơi?",
        options: [
          "Máy tính bị virus",
          "Mất điểm xếp hạng",
          "Triệt tiêu tư duy của chính bạn",
          "Không có tác hại",
        ],
        correctAnswer: "Triệt tiêu tư duy của chính bạn",
      },
      {
        question:
          "Tính năng nào của Engine giúp bạn phân tích ván thua hiệu quả nhất?",
        options: [
          "Tự đi quân",
          "Thay đổi màu bàn cờ",
          "Chỉ ra biểu đồ điểm số để tìm sai lầm ngớ ngẩn (blunder)",
          "Điều chỉnh thời gian",
        ],
        correctAnswer:
          "Chỉ ra biểu đồ điểm số để tìm sai lầm ngớ ngẩn (blunder)",
      },
      {
        question: "Khi gặp một thế cờ khai cuộc lạ, bạn nên làm gì với Engine?",
        options: [
          "Bỏ qua",
          "Xếp nó vào máy tính xem máy móc phản đòn thế nào rồi học thuộc tư duy đó",
          "Nhờ máy chơi hộ ván đó",
          "Xóa đi chơi ván khác",
        ],
        correctAnswer:
          "Xếp nó vào máy tính xem máy móc phản đòn thế nào rồi học thuộc tư duy đó",
      },
    ],
  },
  {
    id: "lesson-42",
    title: "Tổng Kết Khóa Học: Đạo Cờ Tướng",
    description:
      "Những lời khuyên cuối cùng về tinh thần thể thao và con đường rèn luyện vô tận.",
    level: "beginner",
    order: 42,
    content: `
# Chặng Cuối Của Một Khởi Đầu Mới

Chúc mừng bạn đã hoàn thành 41 bài học chuyên sâu của khóa học. Bạn đã trang bị đủ lý thuyết từ những bước đi chập chững của Tốt cho đến các đòn phế Xe đoạt mệnh.

## Đạo Cờ (Kỳ Đạo)
Cờ Tướng không chỉ rèn luyện trí tuệ mà còn mài giũa nhân cách:
1. **Thắng không kiêu, Bại không nản:** Mọi ván thua đều là một bài học đắt giá. 
2. **Tôn trọng đối thủ:** Bàn cờ là chiến trường, nhưng người ngồi đối diện là bạn cờ. Một cái bắt tay sau ván đấu thể hiện khí chất của người quân tử.
3. **Cờ như cuộc đời:** Đôi khi bạn phải lùi một bước để tiến ba bước. Sự kiên nhẫn và tầm nhìn dài hạn trên bàn cờ sẽ phản ánh cách bạn xử lý các quyết định trong cuộc sống.

> "Bàn cờ vuông vức, đất trời mênh mông. 32 quân cờ biến hóa vô cùng. Con đường học cờ không có điểm dừng, hãy luôn giữ cho mình một tâm thế của người mới bắt đầu."
    `,
    duration: "15 phút",
    tags: ["cơ bản", "tổng kết", "triết lý", "kỳ đạo"],
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r",
    questions: [
      {
        question: "Đạo cờ (Kỳ đạo) dạy người chơi bài học gì khi thua ván cờ?",
        options: [
          "Bỏ chơi cờ",
          "Nổi cáu với đối thủ",
          "Thắng không kiêu, bại không nản, coi ván thua là bài học đắt giá",
          "Đổi lỗi cho xui xẻo",
        ],
        correctAnswer:
          "Thắng không kiêu, bại không nản, coi ván thua là bài học đắt giá",
      },
      {
        question: "Việc bắt tay đối thủ sau ván cờ thể hiện điều gì?",
        options: [
          "Khí chất của người quân tử và tôn trọng đối thủ",
          "Luật bắt buộc",
          "Sợ bị phạt",
          "Khoe khoang chiến thắng",
        ],
        correctAnswer: "Khí chất của người quân tử và tôn trọng đối thủ",
      },
      {
        question:
          "Triết lý 'Cờ như cuộc đời' khuyên chúng ta đôi khi phải làm gì?",
        options: [
          "Ăn hết quân của đối phương",
          "Lùi một bước để tiến ba bước",
          "Không bao giờ phòng thủ",
          "Phế Xe liên tục",
        ],
        correctAnswer: "Lùi một bước để tiến ba bước",
      },
      {
        question:
          "Sự kiên nhẫn và tầm nhìn dài hạn trên bàn cờ phản ánh điều gì?",
        options: [
          "Sự nhút nhát",
          "Sự thiếu quyết đoán",
          "Cách bạn xử lý các quyết định trong cuộc sống",
          "Việc thiếu thời gian",
        ],
        correctAnswer: "Cách bạn xử lý các quyết định trong cuộc sống",
      },
      {
        question:
          "Câu trích dẫn cuối cùng: 'Con đường học cờ không có điểm dừng', nhắc nhở kỳ thủ phải giữ tâm thế gì?",
        options: [
          "Tâm thế của đại kiện tướng",
          "Tâm thế của người chiến thắng",
          "Tâm thế của kẻ bất bại",
          "Tâm thế của người mới bắt đầu",
        ],
        correctAnswer: "Tâm thế của người mới bắt đầu",
      },
    ],
  },
];

export const getLessonById = (id: string): Lesson | undefined => {
  return lessons.find((lesson) => lesson.id === id);
};
