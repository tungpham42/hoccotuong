// src/types/index.ts
export interface Lesson {
  id: string;
  title: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  order: number;
  content: string;
  videoUrl?: string;
  duration: string;
  tags: string[];
  fen: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Exercise {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  type: "puzzle" | "checkmate" | "strategy" | "endgame";
  difficulty: 1 | 2 | 3 | 4 | 5;
  fen: string;
  solution: string[];
  hints: string[];
  explanation: string;
}

export interface CourseProgress {
  lessonId: string;
  completed: boolean;
  exerciseResults: {
    exerciseId: string;
    completed: boolean;
    attempts: number;
  }[];
}
