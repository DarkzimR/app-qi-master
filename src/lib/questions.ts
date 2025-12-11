import { Question } from './types';

// Banco de questões de QI - Alta complexidade cognitiva (40 questões)
export const questions: Question[] = [
  // Questões 1-8 (Médias - Progressões e Padrões Complexos)
  {
    id: 1,
    grid: [
      ['2', '3', '5'],
      ['7', '11', '13'],
      ['17', '19', '?']
    ],
    options: ['23', '21', '22', '20'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 2,
    grid: [
      ['1', '1', '2'],
      ['3', '5', '8'],
      ['13', '21', '?']
    ],
    options: ['34', '33', '35', '32'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 3,
    grid: [
      ['2', '4', '8'],
      ['16', '32', '64'],
      ['128', '256', '?']
    ],
    options: ['512', '384', '480', '500'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 4,
    grid: [
      ['A1', 'B2', 'C3'],
      ['D4', 'E5', 'F6'],
      ['G7', 'H8', '?']
    ],
    options: ['I9', 'J9', 'I10', 'H9'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 5,
    grid: [
      ['3', '9', '27'],
      ['81', '243', '729'],
      ['2187', '6561', '?']
    ],
    options: ['19683', '18000', '20000', '15000'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 6,
    grid: [
      ['○●', '●○', '○●'],
      ['●○', '○●', '●○'],
      ['○●', '●○', '?']
    ],
    options: ['○●', '●○', '○○', '●●'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 7,
    grid: [
      ['1', '4', '9'],
      ['16', '25', '36'],
      ['49', '64', '?']
    ],
    options: ['81', '80', '85', '72'],
    correctAnswer: 0,
    difficulty: 'medium'
  },
  {
    id: 8,
    grid: [
      ['Z', 'Y', 'X'],
      ['W', 'V', 'U'],
      ['T', 'S', '?']
    ],
    options: ['R', 'Q', 'P', 'S'],
    correctAnswer: 0,
    difficulty: 'medium'
  },

  // Questões 9-24 (Difíceis - Padrões Avançados e Lógica Profunda)
  {
    id: 9,
    grid: [
      ['1!', '2!', '6!'],
      ['24!', '120!', '720!'],
      ['5040!', '40320!', '?']
    ],
    options: ['362880!', '300000!', '400000!', '350000!'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 10,
    grid: [
      ['▲', '▲▼', '▲▼▲'],
      ['▼▲▼', '▲▼▲▼', '▼▲▼▲▼'],
      ['▲▼▲▼▲▼', '▼▲▼▲▼▲▼', '?']
    ],
    options: ['▲▼▲▼▲▼▲▼', '▼▲▼▲▼▲▼▲', '▲▼▲▼▲▼▲', '▼▲▼▲▼▲'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 11,
    grid: [
      ['2²', '3²', '5²'],
      ['7²', '11²', '13²'],
      ['17²', '19²', '?']
    ],
    options: ['23²', '21²', '22²', '20²'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 12,
    grid: [
      ['■□', '□■', '■□'],
      ['□■□', '■□■', '□■□'],
      ['■□■□', '□■□■', '?']
    ],
    options: ['■□■□■', '□■□■□', '■□■□', '□■□■'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 13,
    grid: [
      ['1×2', '2×3', '3×4'],
      ['4×5', '5×6', '6×7'],
      ['7×8', '8×9', '?']
    ],
    options: ['9×10', '10×11', '9×11', '8×10'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 14,
    grid: [
      ['A', 'C', 'F'],
      ['J', 'O', 'U'],
      ['B', 'D', '?']
    ],
    options: ['G', 'H', 'E', 'F'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 15,
    grid: [
      ['◆', '◆◆◆', '◆◆◆◆◆'],
      ['◆◆◆◆◆◆◆', '◆◆◆◆◆◆◆◆◆', '◆◆◆◆◆◆◆◆◆◆◆'],
      ['◆◆◆◆◆◆◆◆◆◆◆◆◆', '◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆', '?']
    ],
    options: ['◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆', '◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆', '◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆', '◆◆◆◆◆◆◆◆◆◆◆◆◆◆'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 16,
    grid: [
      ['3+5', '5+7', '7+11'],
      ['11+13', '13+17', '17+19'],
      ['19+23', '23+29', '?']
    ],
    options: ['29+31', '29+33', '31+37', '27+31'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 17,
    grid: [
      ['●○●', '○●○', '●○●'],
      ['○●○●', '●○●○', '○●○●'],
      ['●○●○●', '○●○●○', '?']
    ],
    options: ['●○●○●○', '○●○●○●', '●○●○●', '○●○●○'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 18,
    grid: [
      ['2³', '3³', '4³'],
      ['5³', '6³', '7³'],
      ['8³', '9³', '?']
    ],
    options: ['10³', '11³', '9³', '12³'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 19,
    grid: [
      ['AB', 'CD', 'EF'],
      ['GH', 'IJ', 'KL'],
      ['MN', 'OP', '?']
    ],
    options: ['QR', 'PQ', 'RS', 'QS'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 20,
    grid: [
      ['1+2', '2+3', '3+5'],
      ['5+8', '8+13', '13+21'],
      ['21+34', '34+55', '?']
    ],
    options: ['55+89', '55+90', '56+89', '54+89'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 21,
    grid: [
      ['▲▼', '▼▲', '▲▼'],
      ['▼▲▼', '▲▼▲', '▼▲▼'],
      ['▲▼▲▼', '▼▲▼▲', '?']
    ],
    options: ['▲▼▲▼▲', '▼▲▼▲▼', '▲▼▲▼', '▼▲▼▲'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 22,
    grid: [
      ['2⁴', '3⁴', '4⁴'],
      ['5⁴', '6⁴', '7⁴'],
      ['8⁴', '9⁴', '?']
    ],
    options: ['10⁴', '11⁴', '12⁴', '9⁴'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 23,
    grid: [
      ['◉', '◉◉◉', '◉◉◉◉◉'],
      ['◉◉◉◉◉◉◉', '◉◉◉◉◉◉◉◉◉', '◉◉◉◉◉◉◉◉◉◉◉'],
      ['◉◉◉◉◉◉◉◉◉◉◉◉◉', '◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉', '?']
    ],
    options: ['◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉', '◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉', '◉◉◉◉◉◉◉◉◉◉◉◉◉◉◉', '◉◉◉◉◉◉◉◉◉◉◉◉◉◉'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 24,
    grid: [
      ['1²+1', '2²+2', '3²+3'],
      ['4²+4', '5²+5', '6²+6'],
      ['7²+7', '8²+8', '?']
    ],
    options: ['9²+9', '10²+10', '9²+10', '8²+9'],
    correctAnswer: 0,
    difficulty: 'hard'
  },

  // Questões 25-40 (Muito Difíceis - Máxima Complexidade Cognitiva)
  {
    id: 25,
    grid: [
      ['2!+1', '3!+2', '4!+3'],
      ['5!+4', '6!+5', '7!+6'],
      ['8!+7', '9!+8', '?']
    ],
    options: ['10!+9', '11!+10', '10!+10', '9!+9'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 26,
    grid: [
      ['■□■', '□■□', '■□■'],
      ['□■□■', '■□■□', '□■□■'],
      ['■□■□■', '□■□■□', '?']
    ],
    options: ['■□■□■□', '□■□■□■', '■□■□■', '□■□■□'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 27,
    grid: [
      ['A²', 'B³', 'C⁴'],
      ['D⁵', 'E⁶', 'F⁷'],
      ['G⁸', 'H⁹', '?']
    ],
    options: ['I¹⁰', 'J¹⁰', 'I¹¹', 'H¹⁰'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 28,
    grid: [
      ['1×1!', '2×2!', '3×3!'],
      ['4×4!', '5×5!', '6×6!'],
      ['7×7!', '8×8!', '?']
    ],
    options: ['9×9!', '10×10!', '9×10!', '8×9!'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 29,
    grid: [
      ['◆◇', '◇◆', '◆◇'],
      ['◇◆◇', '◆◇◆', '◇◆◇'],
      ['◆◇◆◇', '◇◆◇◆', '?']
    ],
    options: ['◆◇◆◇◆', '◇◆◇◆◇', '◆◇◆◇', '◇◆◇◆'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 30,
    grid: [
      ['2²×2', '3²×3', '4²×4'],
      ['5²×5', '6²×6', '7²×7'],
      ['8²×8', '9²×9', '?']
    ],
    options: ['10²×10', '11²×11', '10²×11', '9²×10'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 31,
    grid: [
      ['▲●', '●▲', '▲●'],
      ['●▲●', '▲●▲', '●▲●'],
      ['▲●▲●', '●▲●▲', '?']
    ],
    options: ['▲●▲●▲', '●▲●▲●', '▲●▲●', '●▲●▲'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 32,
    grid: [
      ['1³+1²', '2³+2²', '3³+3²'],
      ['4³+4²', '5³+5²', '6³+6²'],
      ['7³+7²', '8³+8²', '?']
    ],
    options: ['9³+9²', '10³+10²', '9³+10²', '8³+9²'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 33,
    grid: [
      ['AB1', 'CD2', 'EF3'],
      ['GH4', 'IJ5', 'KL6'],
      ['MN7', 'OP8', '?']
    ],
    options: ['QR9', 'PQ9', 'QS9', 'RS9'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 34,
    grid: [
      ['2!×2', '3!×3', '4!×4'],
      ['5!×5', '6!×6', '7!×7'],
      ['8!×8', '9!×9', '?']
    ],
    options: ['10!×10', '11!×11', '10!×11', '9!×10'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 35,
    grid: [
      ['■●▲', '●▲■', '▲■●'],
      ['●▲■●', '▲■●▲', '■●▲■'],
      ['▲■●▲■', '■●▲■●', '?']
    ],
    options: ['●▲■●▲', '▲■●▲■', '■●▲■●', '●▲■●'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 36,
    grid: [
      ['1²×2³', '2²×3³', '3²×4³'],
      ['4²×5³', '5²×6³', '6²×7³'],
      ['7²×8³', '8²×9³', '?']
    ],
    options: ['9²×10³', '10²×11³', '9²×11³', '8²×10³'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 37,
    grid: [
      ['A!B', 'B!C', 'C!D'],
      ['D!E', 'E!F', 'F!G'],
      ['G!H', 'H!I', '?']
    ],
    options: ['I!J', 'J!K', 'I!K', 'H!J'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 38,
    grid: [
      ['2³+3²', '3³+4²', '4³+5²'],
      ['5³+6²', '6³+7²', '7³+8²'],
      ['8³+9²', '9³+10²', '?']
    ],
    options: ['10³+11²', '11³+12²', '10³+12²', '9³+11²'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 39,
    grid: [
      ['◉■▲', '■▲◉', '▲◉■'],
      ['■▲◉■', '▲◉■▲', '◉■▲◉'],
      ['▲◉■▲◉', '◉■▲◉■', '?']
    ],
    options: ['■▲◉■▲', '▲◉■▲◉', '◉■▲◉■', '■▲◉■'],
    correctAnswer: 0,
    difficulty: 'hard'
  },
  {
    id: 40,
    grid: [
      ['1!²+2!³', '2!²+3!³', '3!²+4!³'],
      ['4!²+5!³', '5!²+6!³', '6!²+7!³'],
      ['7!²+8!³', '8!²+9!³', '?']
    ],
    options: ['9!²+10!³', '10!²+11!³', '9!²+11!³', '8!²+10!³'],
    correctAnswer: 0,
    difficulty: 'hard'
  }
];

// Celebridades e gênios para comparação
export const celebrities = [
  { name: 'Albert Einstein', iq: 160, category: 'genius' as const },
  { name: 'Nikola Tesla', iq: 160, category: 'genius' as const },
  { name: 'Stephen Hawking', iq: 160, category: 'genius' as const },
  { name: 'Leonardo da Vinci', iq: 180, category: 'genius' as const },
  { name: 'Isaac Newton', iq: 190, category: 'genius' as const },
  { name: 'Marie Curie', iq: 180, category: 'genius' as const },
  { name: 'Bill Gates', iq: 160, category: 'billionaire' as const },
  { name: 'Elon Musk', iq: 155, category: 'billionaire' as const },
  { name: 'Mark Zuckerberg', iq: 152, category: 'billionaire' as const },
  { name: 'Jeff Bezos', iq: 145, category: 'billionaire' as const },
  { name: 'Warren Buffett', iq: 150, category: 'billionaire' as const },
  { name: 'Shakira', iq: 140, category: 'artist' as const },
  { name: 'Michael Jackson', iq: 159, category: 'artist' as const },
  { name: 'Jô Soares', iq: 142, category: 'artist' as const },
  { name: 'Whindersson Nunes', iq: 135, category: 'artist' as const },
];

// Pesos por dificuldade ajustados para refletir o desafio real
const DIFFICULTY_WEIGHTS = {
  easy: 1.0,
  medium: 2.0,
  hard: 3.5
};

// Calcular pontuação ponderada baseada nas respostas do usuário
export function calculateWeightedScore(userAnswers: Record<number, number>): {
  totalWeight: number;
  earnedWeight: number;
  correctByDifficulty: { easy: number; medium: number; hard: number };
  totalByDifficulty: { easy: number; medium: number; hard: number };
} {
  let totalWeight = 0;
  let earnedWeight = 0;
  const correctByDifficulty = { easy: 0, medium: 0, hard: 0 };
  const totalByDifficulty = { easy: 0, medium: 0, hard: 0 };

  questions.forEach((question) => {
    const weight = DIFFICULTY_WEIGHTS[question.difficulty];
    totalWeight += weight;
    totalByDifficulty[question.difficulty]++;

    const userAnswer = userAnswers[question.id];
    if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
      earnedWeight += weight;
      correctByDifficulty[question.difficulty]++;
    }
  });

  return { totalWeight, earnedWeight, correctByDifficulty, totalByDifficulty };
}

// Calcular QI normalizado com sistema mais rigoroso (média 100, desvio padrão 15)
export function calculateNormalizedIQ(
  userAnswers: Record<number, number>,
  timeSpent: number
): {
  iq: number;
  percentile: number;
  accuracy: number;
  weightedAccuracy: number;
  breakdown: {
    easy: { correct: number; total: number; accuracy: number };
    medium: { correct: number; total: number; accuracy: number };
    hard: { correct: number; total: number; accuracy: number };
  };
} {
  const { totalWeight, earnedWeight, correctByDifficulty, totalByDifficulty } =
    calculateWeightedScore(userAnswers);

  // Acurácia ponderada (0 a 1)
  const weightedAccuracy = earnedWeight / totalWeight;

  // Acurácia simples
  const totalQuestions = questions.length;
  const correctAnswers = Object.values(correctByDifficulty).reduce((a, b) => a + b, 0);
  const accuracy = correctAnswers / totalQuestions;

  // Fator de tempo mais rigoroso (penaliza mais se muito lento, bônus maior se rápido)
  // Tempo esperado: 30 segundos por questão (20 minutos / 40 questões)
  const expectedTime = totalQuestions * 30; // 1200 segundos (20 minutos)
  const timeFactor = Math.max(0.7, Math.min(1.3, expectedTime / timeSpent));

  // Calcular z-score baseado na acurácia ponderada e tempo
  // Sistema mais rigoroso: média 0.4, desvio 0.18 (reflete maior dificuldade)
  const performanceScore = weightedAccuracy * timeFactor;
  const zScore = (performanceScore - 0.4) / 0.18;

  // Converter z-score para QI (média 100, desvio 15)
  let iq = Math.round(100 + zScore * 15);

  // Limitar entre 70 e 160
  iq = Math.max(70, Math.min(160, iq));

  // Calcular percentil baseado no z-score
  const percentile = calculatePercentile(zScore);

  // Breakdown por dificuldade
  const breakdown = {
    easy: {
      correct: correctByDifficulty.easy,
      total: totalByDifficulty.easy,
      accuracy: totalByDifficulty.easy > 0 
        ? Math.round((correctByDifficulty.easy / totalByDifficulty.easy) * 100) 
        : 0
    },
    medium: {
      correct: correctByDifficulty.medium,
      total: totalByDifficulty.medium,
      accuracy: totalByDifficulty.medium > 0 
        ? Math.round((correctByDifficulty.medium / totalByDifficulty.medium) * 100) 
        : 0
    },
    hard: {
      correct: correctByDifficulty.hard,
      total: totalByDifficulty.hard,
      accuracy: totalByDifficulty.hard > 0 
        ? Math.round((correctByDifficulty.hard / totalByDifficulty.hard) * 100) 
        : 0
    }
  };

  return {
    iq,
    percentile,
    accuracy: Math.round(accuracy * 100),
    weightedAccuracy: Math.round(weightedAccuracy * 100),
    breakdown
  };
}

// Calcular percentil a partir do z-score (aproximação usando função de distribuição cumulativa)
function calculatePercentile(zScore: number): number {
  // Aproximação da função de distribuição cumulativa normal padrão
  const t = 1 / (1 + 0.2316419 * Math.abs(zScore));
  const d = 0.3989423 * Math.exp(-zScore * zScore / 2);
  const probability =
    d *
    t *
    (0.3193815 +
      t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));

  let percentile = zScore >= 0 ? 1 - probability : probability;
  percentile = Math.max(0.01, Math.min(0.99, percentile)); // Limitar entre 1% e 99%

  return Math.round(percentile * 100);
}

// Função legada para compatibilidade (agora usa a nova lógica)
export function calculateIQ(correctAnswers: number, totalQuestions: number, timeSpent: number): number {
  // Criar objeto de respostas simulado baseado na taxa de acerto
  const userAnswers: Record<number, number> = {};
  const correctRate = correctAnswers / totalQuestions;
  
  questions.forEach((question, index) => {
    // Simular respostas baseadas na taxa de acerto
    if (index < correctAnswers) {
      userAnswers[question.id] = question.correctAnswer;
    } else {
      userAnswers[question.id] = (question.correctAnswer + 1) % 4; // Resposta errada
    }
  });

  const result = calculateNormalizedIQ(userAnswers, timeSpent);
  return result.iq;
}

// Encontrar celebridades próximas ao QI
export function findSimilarCelebrities(iq: number, count: number = 3) {
  return celebrities
    .map(celeb => ({
      ...celeb,
      difference: Math.abs(celeb.iq - iq)
    }))
    .sort((a, b) => a.difference - b.difference)
    .slice(0, count);
}

// Gerar mensagem motivacional baseada no QI e percentil
export function getMotivationalMessage(iq: number, percentile?: number): string {
  if (iq >= 145) {
    return `Excepcional! Você está entre os ${percentile ? (100 - percentile).toFixed(1) : '0.1'}% mais inteligentes do mundo!`;
  }
  if (iq >= 130) {
    return `Muito superior! Você superou ${percentile || 98}% da população!`;
  }
  if (iq >= 120) {
    return `Superior! Seu desempenho está acima de ${percentile || 91}% das pessoas!`;
  }
  if (iq >= 110) {
    return `Acima da média! Você está melhor que ${percentile || 75}% da população!`;
  }
  if (iq >= 90) {
    return `Na média! Continue praticando para alcançar resultados ainda melhores!`;
  }
  return 'Continue treinando! Seu potencial é ilimitado!';
}

// Gerar relatório detalhado em português
export function generateDetailedReport(
  userAnswers: Record<number, number>,
  timeSpent: number,
  userName?: string
): string {
  const result = calculateNormalizedIQ(userAnswers, timeSpent);
  const { iq, percentile, accuracy, weightedAccuracy, breakdown } = result;

  const totalQuestions = questions.length;
  const correctAnswers = Object.values(breakdown).reduce((sum, d) => sum + d.correct, 0);

  const timeMinutes = Math.floor(timeSpent / 60);
  const timeSeconds = timeSpent % 60;

  let report = `═══════════════════════════════════════════════════════\n`;
  report += `           RELATÓRIO COMPLETO DE QI - QI MASTER\n`;
  report += `═══════════════════════════════════════════════════════\n\n`;

  if (userName) {
    report += `👤 Candidato: ${userName}\n`;
  }
  report += `📅 Data: ${new Date().toLocaleDateString('pt-BR', { 
    day: '2-digit', 
    month: 'long', 
    year: 'numeric' 
  })}\n`;
  report += `⏱️  Tempo Total: ${timeMinutes}min ${timeSeconds}s\n\n`;

  report += `═══════════════════════════════════════════════════════\n`;
  report += `                    RESULTADO FINAL\n`;
  report += `═══════════════════════════════════════════════════════\n\n`;

  report += `🧠 QI NORMALIZADO: ${iq} pontos\n`;
  report += `📊 PERCENTIL: ${percentile}º (superior a ${percentile}% da população)\n`;
  report += `✓ ACURÁCIA GERAL: ${accuracy}% (${correctAnswers}/${totalQuestions} questões)\n`;
  report += `⚖️  ACURÁCIA PONDERADA: ${weightedAccuracy}%\n\n`;

  report += `${getMotivationalMessage(iq, percentile)}\n\n`;

  report += `═══════════════════════════════════════════════════════\n`;
  report += `              DESEMPENHO POR DIFICULDADE\n`;
  report += `═══════════════════════════════════════════════════════\n\n`;

  report += `📗 FÁCIL (Peso 1.0):\n`;
  report += `   Acertos: ${breakdown.easy.correct}/${breakdown.easy.total}\n`;
  report += `   Precisão: ${breakdown.easy.accuracy}%\n\n`;

  report += `📙 MÉDIO (Peso 2.0):\n`;
  report += `   Acertos: ${breakdown.medium.correct}/${breakdown.medium.total}\n`;
  report += `   Precisão: ${breakdown.medium.accuracy}%\n\n`;

  report += `📕 DIFÍCIL (Peso 3.5):\n`;
  report += `   Acertos: ${breakdown.hard.correct}/${breakdown.hard.total}\n`;
  report += `   Precisão: ${breakdown.hard.accuracy}%\n\n`;

  report += `═══════════════════════════════════════════════════════\n`;
  report += `                  ANÁLISE COGNITIVA\n`;
  report += `═══════════════════════════════════════════════════════\n\n`;

  // Análise de pontos fortes e fracos
  const strengths: string[] = [];
  const improvements: string[] = [];

  if (breakdown.easy.accuracy >= 80) {
    strengths.push('✓ Excelente reconhecimento de padrões básicos');
  } else {
    improvements.push('• Pratique mais questões de padrões simples');
  }

  if (breakdown.medium.accuracy >= 70) {
    strengths.push('✓ Boa capacidade de raciocínio lógico intermediário');
  } else {
    improvements.push('• Desenvolva habilidades de análise de padrões complexos');
  }

  if (breakdown.hard.accuracy >= 60) {
    strengths.push('✓ Forte habilidade em resolução de problemas complexos');
  } else {
    improvements.push('• Treine com questões de alta dificuldade regularmente');
  }

  const avgTimePerQuestion = timeSpent / totalQuestions;
  if (avgTimePerQuestion <= 30) {
    strengths.push('✓ Excelente velocidade de processamento cognitivo');
  } else if (avgTimePerQuestion > 45) {
    improvements.push('• Trabalhe na velocidade de raciocínio sob pressão');
  }

  report += `🌟 PONTOS FORTES:\n`;
  strengths.forEach(s => report += `   ${s}\n`);
  report += `\n`;

  if (improvements.length > 0) {
    report += `💡 ÁREAS PARA DESENVOLVIMENTO:\n`;
    improvements.forEach(i => report += `   ${i}\n`);
    report += `\n`;
  }

  report += `═══════════════════════════════════════════════════════\n`;
  report += `                COMPARAÇÃO COM GÊNIOS\n`;
  report += `═══════════════════════════════════════════════════════\n\n`;

  const similarCelebs = findSimilarCelebrities(iq, 3);
  similarCelebs.forEach((celeb, index) => {
    const diff = celeb.iq - iq;
    const comparison = diff > 0 
      ? `(${diff} pontos acima)` 
      : diff < 0 
      ? `(${Math.abs(diff)} pontos abaixo)` 
      : '(mesmo nível)';
    
    report += `${index + 1}. ${celeb.name}: ${celeb.iq} QI ${comparison}\n`;
  });

  report += `\n═══════════════════════════════════════════════════════\n`;
  report += `  Relatório gerado por QI MASTER - Teste de QI Online\n`;
  report += `═══════════════════════════════════════════════════════\n`;

  return report;
}
