'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Brain } from 'lucide-react';

export default function PagamentoPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Verificar se há dados do teste
    const savedAnswers = localStorage.getItem('testAnswers');
    const savedTime = localStorage.getItem('testTime');

    if (!savedAnswers || !savedTime) {
      // Se não há dados do teste, redirecionar para início
      router.push('/');
      return;
    }
  }, [router]);

  const handlePaymentSuccess = () => {
    localStorage.setItem('qimaster_payment', 'completed');
    router.push('/resultado');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Brain className="w-12 h-12 text-slate-700 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-slate-800" />
            <span className="font-semibold text-gray-900">QI MASTER</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Finalizar Compra
            </h1>
            <p className="text-gray-600">
              Complete seu pagamento para acessar os resultados completos do teste de QI
            </p>
          </div>

          <div className="w-full">
            <iframe
              src="https://checkout.keoto.com/7460d24d-d11f-4aec-a733-3ab708175c70"
              className="w-full h-[600px] border-0 rounded-lg"
              title="Checkout Keoto"
              allow="payment"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Após completar o pagamento, você será redirecionado automaticamente para seus resultados.
            </p>
            <button
              onClick={() => router.push('/resultado')}
              className="text-slate-600 hover:text-slate-800 underline text-sm"
            >
              Já pagou? Acessar resultados
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}