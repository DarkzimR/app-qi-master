// Tipos do QI Master

export interface Question {
  id: number;
  grid: (string | null)[][];
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface TestResult {
  id: string;
  score: number;
  iqScore: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  date: string;
  mode: 'quick' | 'complete';
}

export interface UserProfile {
  id: string;
  name: string;
  totalTests: number;
  bestIQ: number;
  level: number;
  xp: number;
  medals: Medal[];
  isPremium: boolean;
}

export interface Medal {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: string;
}

export interface Celebrity {
  name: string;
  iq: number;
  category: 'celebrity' | 'billionaire' | 'genius' | 'artist';
  image?: string;
}

export interface Battle {
  id: string;
  player1: {
    name: string;
    score: number;
  };
  player2?: {
    name: string;
    score: number;
  };
  inviteLink: string;
  status: 'waiting' | 'active' | 'completed';
  createdAt: string;
}
