import { env } from 'process';

const KEOTO_API_BASE = 'https://api.keoto.com/v1';

interface KeotoConfig {
  token: string;
}

class KeotoClient {
  private token: string;

  constructor(config: KeotoConfig) {
    this.token = config.token;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${KEOTO_API_BASE}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Keoto API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Criar um checkout
  async createCheckout(data: {
    amount: number;
    currency: string;
    description: string;
    successUrl?: string;
    cancelUrl?: string;
  }) {
    return this.request('/checkouts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // Obter status de um pagamento
  async getPaymentStatus(paymentId: string) {
    return this.request(`/payments/${paymentId}`);
  }

  // Listar pagamentos
  async listPayments(params?: { limit?: number; offset?: number }) {
    const query = params ? `?${new URLSearchParams(params as any)}` : '';
    return this.request(`/payments${query}`);
  }

  // Cancelar um checkout
  async cancelCheckout(checkoutId: string) {
    return this.request(`/checkouts/${checkoutId}/cancel`, {
      method: 'POST',
    });
  }
}

// Instância singleton
let keotoClient: KeotoClient | null = null;

export function getKeotoClient() {
  if (!keotoClient) {
    const token = process.env.KEOTO_TOKEN;
    if (!token) {
      throw new Error('KEOTO_TOKEN environment variable is not set');
    }
    keotoClient = new KeotoClient({ token });
  }
  return keotoClient;
}

// Funções de conveniência
export const keoto = {
  createCheckout: (data: Parameters<KeotoClient['createCheckout']>[0]) =>
    getKeotoClient().createCheckout(data),

  getPaymentStatus: (paymentId: string) =>
    getKeotoClient().getPaymentStatus(paymentId),

  listPayments: (params?: Parameters<KeotoClient['listPayments']>[0]) =>
    getKeotoClient().listPayments(params),

  cancelCheckout: (checkoutId: string) =>
    getKeotoClient().cancelCheckout(checkoutId),
};