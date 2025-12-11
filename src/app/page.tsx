'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, Zap, Trophy, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { storage } from '@/lib/storage';

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [isReturningUser, setIsReturningUser] = useState(false);

  useEffect(() => {
    const user = storage.getUser();
    if (user) {
      setIsReturningUser(true);
      setUserName(user.name);
    }
  }, []);

  const handleStartTest = () => {
    if (isReturningUser) {
      router.push('/teste');
    } else {
      setShowNameInput(true);
    }
  };

  const handleSubmitName = () => {
    if (userName.trim()) {
      storage.createUser(userName.trim());
      router.push('/teste');
    }
  };

  if (showNameInput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full border border-gray-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
              <Brain className="w-8 h-8 text-slate-700" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Bem-vindo ao QI Master</h2>
            <p className="text-gray-600">Como podemos te chamar?</p>
          </div>

          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmitName()}
            placeholder="Digite seu nome"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-slate-500 focus:ring-2 focus:ring-slate-200 focus:outline-none mb-4 text-gray-900"
            autoFocus
          />

          <button
            onClick={handleSubmitName}
            disabled={!userName.trim()}
            className="w-full bg-slate-800 text-white py-3 rounded-lg font-medium hover:bg-slate-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-slate-800" />
            <span className="text-2xl font-semibold text-slate-900">
              QI MASTER
            </span>
          </div>
          {isReturningUser && (
            <div className="text-sm text-gray-700">
              Olá, <span className="font-medium text-slate-800">{userName}</span>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-4">
            Descubra seu verdadeiro{' '}
            <span className="text-slate-800">QI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-2">em apenas 20 minutos</p>
          <p className="text-gray-500">
            Mais de <span className="font-medium text-slate-800">8 milhões</span> de testes realizados
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-gray-200">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Teste Completo</h3>
            <p className="text-gray-600 text-sm">
              40 questões cuidadosamente elaboradas para medir seu QI com precisão profissional
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-gray-200">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Resultado Detalhado</h3>
            <p className="text-gray-600 text-sm">
              Receba análise completa do seu desempenho e compare com gênios históricos
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition border border-gray-200">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Análise Cognitiva</h3>
            <p className="text-gray-600 text-sm">
              Identifique seus pontos fortes e áreas para desenvolvimento mental
            </p>
          </div>
        </div>

        {/* Instructions Card */}
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Como Funciona</h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-slate-700 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700">
                <span className="font-medium">40 questões</span> de raciocínio lógico e reconhecimento de padrões
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-slate-700 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700">
                <span className="font-medium">20 minutos</span> de duração total do teste
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-slate-700 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700">
                Cada questão apresenta uma <span className="font-medium">matriz 3×3</span> com um padrão lógico
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-slate-700 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700">
                Identifique o padrão e escolha a <span className="font-medium">resposta correta</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-slate-700 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700">
                Quanto mais rápido e preciso, <span className="font-medium">maior seu QI</span>
              </div>
            </li>
          </ul>

          <button
            onClick={handleStartTest}
            className="w-full bg-slate-800 text-white py-4 rounded-lg font-medium text-lg hover:bg-slate-900 transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            {isReturningUser ? 'Fazer Novo Teste' : 'Começar Agora'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
            <Users className="w-5 h-5" />
            <span className="text-sm">Junte-se a milhões de usuários que já descobriram seu QI</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>⭐⭐⭐⭐⭐ 4.9/5.0</span>
            <span>•</span>
            <span>🔒 100% Seguro</span>
            <span>•</span>
            <span>📱 Mobile-First</span>
          </div>
        </div>
      </section>
    </div>
  );
}
