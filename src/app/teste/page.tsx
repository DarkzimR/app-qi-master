'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, Clock, CheckCircle } from 'lucide-react';
import { questions } from '@/lib/questions';
import { storage } from '@/lib/storage';

export default function TestePage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(1200);
  const [startTime] = useState(Date.now());
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [testFinished, setTestFinished] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  const question = questions[currentQuestion];

  // Embaralhar opções apenas no cliente após montagem
  useEffect(() => {
    setIsMounted(true);
    const shuffled = [...question.options];
    // Algoritmo Fisher-Yates para embaralhamento
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledOptions(shuffled);
  }, [question.id, question.options]);

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      window.history.pushState(null, '', window.location.pathname);
      
      const confirmExit = window.confirm(
        'Tem certeza que deseja sair do teste? Seu progresso será perdido.'
      );
      
      if (confirmExit) {
        router.push('/');
      }
    };

    window.history.pushState(null, '', window.location.pathname);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [router]);

  useEffect(() => {
    if (Object.keys(userAnswers).length > 0) {
      localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
      localStorage.setItem('testTime', Math.floor((Date.now() - startTime) / 1000).toString());
    }
  }, [userAnswers, startTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTestFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (testFinished) {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      localStorage.setItem('testAnswers', JSON.stringify(userAnswers));
      localStorage.setItem('testTime', timeSpent.toString());
      router.push('/pagamento');
    }
  }, [testFinished, userAnswers, startTime, router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    setSelectedAnswer(answerIndex);

    setTimeout(() => {
      // Mapear o índice embaralhado de volta ao índice original
      const originalIndex = question.options.indexOf(shuffledOptions[answerIndex]);
      
      const newAnswers = {
        ...userAnswers,
        [question.id]: originalIndex
      };
      
      setUserAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsProcessing(false);
      } else {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        localStorage.setItem('testAnswers', JSON.stringify(newAnswers));
        localStorage.setItem('testTime', timeSpent.toString());
        setTestFinished(true);
      }
    }, 300);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Renderizar opções não embaralhadas no servidor, embaralhadas no cliente
  const displayOptions = isMounted ? shuffledOptions : question.options;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-slate-800" />
              <span className="font-semibold text-gray-900">QI MASTER</span>
            </div>

            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 ${timeLeft < 60 ? 'text-red-600' : 'text-slate-700'}`}>
                <Clock className="w-5 h-5" />
                <span className="font-mono font-semibold text-lg">{formatTime(timeLeft)}</span>
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {currentQuestion + 1}/{questions.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-slate-800 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Brain className="w-5 h-5" />
              <span className="text-sm">Identifique o padrão</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Qual elemento completa a sequência?
            </h2>
          </div>

          {/* Grid 3x3 */}
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-8 border border-gray-200">
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto">
              {question.grid.flat().map((cell, idx) => (
                <div
                  key={idx}
                  className={`aspect-square rounded-lg flex items-center justify-center text-2xl md:text-4xl font-semibold ${
                    cell === '?'
                      ? 'bg-slate-100 text-slate-700 border-2 border-slate-300'
                      : 'bg-white border-2 border-gray-200'
                  }`}
                >
                  {cell}
                </div>
              ))}
            </div>
          </div>

          {/* Options */}
          <div>
            <p className="text-sm text-gray-600 mb-4">Toque na resposta correta:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {displayOptions.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(idx)}
                  disabled={isProcessing}
                  className={`aspect-square rounded-lg text-2xl md:text-3xl font-semibold transition-all duration-300 ${
                    selectedAnswer === idx
                      ? 'bg-slate-800 text-white shadow-lg scale-105 ring-4 ring-slate-300'
                      : 'bg-white border-2 border-gray-300 hover:border-slate-400 hover:shadow-md hover:scale-105 active:scale-95'
                  } ${isProcessing ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Feedback */}
          {selectedAnswer !== null && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Resposta registrada</span>
              </div>
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            💡 <span className="font-medium">Dica:</span> Observe os padrões nas linhas e colunas. 
            Cada elemento segue uma sequência lógica.
          </p>
        </div>

        {/* Auto-save indicator */}
        {Object.keys(userAnswers).length > 0 && (
          <div className="mt-4 text-center text-xs text-gray-500">
            ✓ Progresso salvo automaticamente
          </div>
        )}
      </main>
    </div>
  );
}
