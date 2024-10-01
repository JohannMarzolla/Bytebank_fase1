// services/transacoesService.ts

interface Transacao {
    id: number;
    tipoDeposito: string;
    valor: number;
    date: string;
  }
  
  const API_URL = '/api'; 
  
  export const getSaldo = async () => {
    const response = await fetch(`${API_URL}/saldo`);
    if (!response.ok) {
      throw new Error('Erro ao buscar saldo');
    }
    const data = await response.json();
    return data.saldo;
  };
  
  export const postSaldo = async (novoSaldo: number) => {
    const response = await fetch(`${API_URL}/saldo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ novoSaldo }),
    });
    if (!response.ok) {
      throw new Error('Erro ao atualizar saldo');
    }
    const data = await response.json();
    return data.saldo;
  };
  
  export const getTransacoes = async () => {
    const response = await fetch(`${API_URL}/transacoes`);
    if (!response.ok) {
      throw new Error('Erro ao buscar transações');
    }
    const data = await response.json();
    return data;
  };
  
  export const postTransacao = async (transacao: Transacao) => {
    const response = await fetch(`${API_URL}/transacoes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transacao),
    });
    if (!response.ok) {
      throw new Error('Erro ao adicionar transação');
    }
    const data = await response.json();
    return data;
  };
  