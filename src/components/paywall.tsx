'use client';

import { useState, useEffect } from 'react';
import { Lock, CheckCircle, Shield, Award, TrendingUp, CreditCard, Clock } from 'lucide-react';

interface PaywallProps {
  onPaymentSuccess: () => void;
}

export function Paywall({ onPaymentSuccess }: PaywallProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handlePayment = () => {
    setIsProcessing(true);

    // Simula processamento de pagamento
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header com desconto */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-semibold">🔥 50% OFF POR TEMPO LIMITADO</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">OBTER O MEU RELATÓRIO</h2>
            <p className="text-white/90">
              Descubra seu QI verdadeiro e receba um relatório profissional completo
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">
                Oferta expira em: {minutes}:{seconds.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Resultado Completo de QI</h3>
                <p className="text-sm text-gray-600">
                  Seu QI normalizado calculado com precisão científica, incluindo percentil e comparação populacional
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Análise Detalhada por Dificuldade</h3>
                <p className="text-sm text-gray-600">
                  Desempenho completo em questões fáceis, médias e difíceis com acurácia ponderada
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-purple-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Relatório Profissional para Download</h3>
                <p className="text-sm text-gray-600">
                  Documento completo em formato texto com todas as métricas e comparações com gênios históricos
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-orange-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Acesso Vitalício</h3>
                <p className="text-sm text-gray-600">
                  Pagamento único, sem mensalidades. Acesse seu resultado sempre que quiser
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6 mb-6 border-2 border-slate-200 shadow-lg">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Plano Completo</h3>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">R$ 39,90</span>
                <span className="text-5xl font-bold text-slate-900">R$ 19,90</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Pagamento único • Sem renovação automática</p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-900 font-medium">
                  🎯 Economia de R$ 20,00 (50% de desconto)
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-5 rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processando pagamento...
              </>
            ) : (
              <>
                <Lock className="w-5 h-5" />
                OBTER O MEU RELATÓRIO
              </>
            )}
          </button>

          {/* Payment Methods */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-3">Métodos de pagamento aceitos:</p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-lg">
                <CreditCard className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">Visa</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-lg">
                <CreditCard className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">Mastercard</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-2 rounded-lg">
                <CreditCard className="w-4 h-4 text-gray-600" />
                <span className="text-xs font-medium text-gray-700">PayPal</span>
              </div>
            </div>
          </div>

          {/* Security & Guarantee */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Pagamento 100% seguro e criptografado</span>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-sm text-green-900">
                <span className="font-semibold">✓ Garantia de 7 dias:</span> Se não ficar satisfeito, devolvemos 100% do seu investimento
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}