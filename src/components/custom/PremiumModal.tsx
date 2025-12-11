'use client';

import { X } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: 'monthly' | 'annual' | 'lifetime') => void;
}

export default function PremiumModal({ isOpen, onClose, onSelectPlan }: PremiumModalProps) {
  if (!isOpen) return null;

  const plans = [
    {
      id: 'monthly' as const,
      name: 'Mensal',
      price: 'R$ 19,90',
      period: '/mês',
      discount: null,
      features: ['Testes ilimitados', 'Relatórios detalhados', 'Comparações premium', 'Sem anúncios']
    },
    {
      id: 'annual' as const,
      name: 'Anual',
      price: 'R$ 99,90',
      period: '/ano',
      discount: '58% OFF',
      oldPrice: 'R$ 238,80',
      features: ['Tudo do plano mensal', 'Economia de R$ 138,90', 'Batalhas ilimitadas', 'Suporte prioritário'],
      popular: true
    },
    {
      id: 'lifetime' as const,
      name: 'Vitalício',
      price: 'R$ 299,90',
      period: 'pagamento único',
      discount: 'MELHOR OFERTA',
      oldPrice: 'R$ 2.388,00',
      features: ['Acesso para sempre', 'Todas as funcionalidades', 'Atualizações gratuitas', 'Suporte VIP']
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Desbloqueie Todo o Potencial</h2>
          <p className="text-emerald-50">Escolha o plano ideal para você</p>
        </div>

        {/* Plans */}
        <div className="p-6 grid md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative border-2 rounded-xl p-6 transition hover:shadow-xl ${
                plan.popular
                  ? 'border-emerald-600 bg-emerald-50'
                  : 'border-gray-200 hover:border-emerald-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS POPULAR
                </div>
              )}

              {plan.discount && (
                <div className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-3">
                  {plan.discount}
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-4">
                {plan.oldPrice && (
                  <p className="text-sm text-gray-500 line-through">{plan.oldPrice}</p>
                )}
                <p className="text-3xl font-bold text-emerald-600">
                  {plan.price}
                  <span className="text-sm text-gray-600 font-normal">{plan.period}</span>
                </p>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-emerald-600 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 rounded-b-2xl border-t">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span>🔒 Pagamento 100% seguro</span>
            <span>•</span>
            <span>💳 Cartão, PIX ou Boleto</span>
            <span>•</span>
            <span>↩️ Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </div>
  );
}
