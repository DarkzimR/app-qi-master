import { TestResult, UserProfile } from './types';

// Gerenciamento de localStorage

export const storage = {
  // Usuário
  getUser: (): UserProfile | null => {
    if (typeof window === 'undefined') return null;
    const data = localStorage.getItem('qi_master_user');
    return data ? JSON.parse(data) : null;
  },

  setUser: (user: UserProfile) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('qi_master_user', JSON.stringify(user));
  },

  // Resultados
  getResults: (): TestResult[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem('qi_master_results');
    return data ? JSON.parse(data) : [];
  },

  addResult: (result: TestResult) => {
    if (typeof window === 'undefined') return;
    const results = storage.getResults();
    results.push(result);
    localStorage.setItem('qi_master_results', JSON.stringify(results));
  },

  // Criar usuário inicial
  createUser: (name: string): UserProfile => {
    const user: UserProfile = {
      id: Date.now().toString(),
      name,
      totalTests: 0,
      bestIQ: 0,
      level: 1,
      xp: 0,
      medals: [],
      isPremium: false
    };
    storage.setUser(user);
    return user;
  },

  // Atualizar após teste
  updateAfterTest: (result: TestResult) => {
    const user = storage.getUser();
    if (!user) return;

    user.totalTests += 1;
    user.bestIQ = Math.max(user.bestIQ, result.iqScore);
    user.xp += result.correctAnswers * 10;
    user.level = Math.floor(user.xp / 100) + 1;

    storage.setUser(user);
    storage.addResult(result);
  },

  // Premium
  setPremium: (isPremium: boolean) => {
    const user = storage.getUser();
    if (!user) return;
    user.isPremium = isPremium;
    storage.setUser(user);
  }
};
