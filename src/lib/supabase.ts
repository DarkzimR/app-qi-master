import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para as tabelas do Supabase
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string;
          email?: string;
          total_tests: number;
          best_iq: number;
          level: number;
          xp: number;
          is_premium: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email?: string;
          total_tests?: number;
          best_iq?: number;
          level?: number;
          xp?: number;
          is_premium?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          total_tests?: number;
          best_iq?: number;
          level?: number;
          xp?: number;
          is_premium?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      test_results: {
        Row: {
          id: string;
          user_id: string;
          iq_score: number;
          percentile: number;
          accuracy: number;
          weighted_accuracy: number;
          time_spent: number;
          correct_answers: number;
          total_questions: number;
          answers: Record<string, number>;
          breakdown: {
            easy: { correct: number; total: number; accuracy: number };
            medium: { correct: number; total: number; accuracy: number };
            hard: { correct: number; total: number; accuracy: number };
          };
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          iq_score: number;
          percentile: number;
          accuracy: number;
          weighted_accuracy: number;
          time_spent: number;
          correct_answers: number;
          total_questions: number;
          answers: Record<string, number>;
          breakdown: {
            easy: { correct: number; total: number; accuracy: number };
            medium: { correct: number; total: number; accuracy: number };
            hard: { correct: number; total: number; accuracy: number };
          };
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          iq_score?: number;
          percentile?: number;
          accuracy?: number;
          weighted_accuracy?: number;
          time_spent?: number;
          correct_answers?: number;
          total_questions?: number;
          answers?: Record<string, number>;
          breakdown?: {
            easy: { correct: number; total: number; accuracy: number };
            medium: { correct: number; total: number; accuracy: number };
            hard: { correct: number; total: number; accuracy: number };
          };
          created_at?: string;
        };
      };
      payments: {
        Row: {
          id: string;
          user_id: string;
          amount: number;
          currency: string;
          status: 'pending' | 'completed' | 'failed' | 'cancelled';
          payment_method: string;
          stripe_payment_id?: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          amount: number;
          currency?: string;
          status?: 'pending' | 'completed' | 'failed' | 'cancelled';
          payment_method: string;
          stripe_payment_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          amount?: number;
          currency?: string;
          status?: 'pending' | 'completed' | 'failed' | 'cancelled';
          payment_method?: string;
          stripe_payment_id?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}