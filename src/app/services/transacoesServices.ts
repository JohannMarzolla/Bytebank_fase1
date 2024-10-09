interface Transacao {
  tipoDeposito: string;
  valor: number;
  date: string;
}

const API_URL = '/api'; 

export const getSaldo = async (userId: number) => {
  const response = await fetch(`${API_URL}/saldo?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar saldo');
  }
  const data = await response.json();
  const saldo = data.total
  return saldo;
};

export const postSaldo = async (userId: number , newBalance: number) => {
  const response = await fetch(`${API_URL}/saldo`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({userId, newBalance : Number(newBalance) }),
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar saldo');
  }
  const data = await response.json();
  return data;
};

export const getTransacoes = async (userId : number ) => {
  const response = await fetch(`${API_URL}/transacoes?userId=${userId}`);
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
    body: JSON.stringify({transacao}),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar transação');
  }
  const data = await response.json();
  return data;
};