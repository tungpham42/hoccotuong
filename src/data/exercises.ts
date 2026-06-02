// src/data/exercises.ts
import { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    id: "ex-1",
    lessonId: "lesson-1",
    title: "Nhận biết các quân cờ",
    description: "Xác định vị trí các quân cờ trên bàn cờ",
    type: "puzzle",
    difficulty: 1,
    fen: "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w",
    solution: ["e1", "e2"],
    hints: ["Quan sát hàng dưới cùng", "Tướng nằm ở trung tâm hàng cuối"],
    explanation: "Đây là vị trí khởi đầu chuẩn của một ván cờ tướng.",
  },
  {
    id: "ex-2",
    lessonId: "lesson-2",
    title: "Chiếu hết trong 1 nước",
    description: "Tìm nước đi chiếu hết trong 1 nước",
    type: "checkmate",
    difficulty: 2,
    fen: "rnbakabnr/9/1c5c1/p1p1p3p/9/9/P1P1P1P1P/1C5C1/9/RNB1KABNR w",
    solution: ["c1", "e3"],
    hints: ["Sử dụng Pháo", "Nhìn vào vị trí Tướng đen"],
    explanation:
      "Pháo có thể chiếu hết khi có quân làm ngòi và Tướng đen không thể di chuyển.",
  },
  // Thêm nhiều bài tập khác...
];
