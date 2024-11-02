import { Transacao as BDTransacao } from "@prisma/client";

interface Transacao {
  userId: number;
  tipoTransacao: string;
  valor: number;
  date: string;
}

const API_URL = "http://localhost:3000/api"; // Altere para a URL completa

export const getSaldo = async (userId: number) => {
  const response = await fetch(`${API_URL}/saldo?userId=${userId}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar saldo");
  }
  const data = await response.json();
  const saldo = data.total;
  return saldo;
};
export const postSaldo = async (userId: number, newBalance: number) => {
  const response = await fetch(`${API_URL}/saldo`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, newBalance: Number(newBalance) }),
  });
  if (!response.ok) {
    throw new Error("Erro ao atualizar saldo");
  }
  const data = await response.json();
  return data;
};

export const getTransacoes = async (userId: number) => {
  const response = await fetch(`${API_URL}/transacoes?userId=${userId}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar transações");
  }
  const data = await response.json();
  return data;
};

export const getTransacao = async (id: number): Promise<BDTransacao> => {
  const response = await fetch(`${API_URL}/transacoes/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar transação");
  }
  const data = await response.json();
  return data;
};

export const postTransacao = async (transacao: Transacao) => {
  const { date, tipoTransacao, valor, userId } = transacao;
  const dataObjeto = new Date(date);
  const valorNumerico = Number(valor);

  const response = await fetch(`${API_URL}/transacoes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: dataObjeto.toISOString(),
      tipoTransacao,
      valor: valorNumerico,
      userId,
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao adicionar transação");
  }

  const data = await response.json();
  return data;
};

export const putTransacoes = async (transacaoAtualizada: any) => {
  const { transacaoId, tipoTransacao, valor, date } = transacaoAtualizada;
  const response = await fetch(`/api/transacoes?id=${transacaoId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tipoTransacao,
      valor: Number(valor),
      date: new Date(date).toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar a transação services");
  }

  return await response.json();
};

export const DeleteTransacao = async (transacaoId: number) => {
  const response = await fetch(`/api/transacoes?id=${transacaoId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: transacaoId }),
  });

  if (!response.ok) {
    throw new Error("Erro ao atualizar saldo");
  }

  const data = await response.json();
  return data;
};
