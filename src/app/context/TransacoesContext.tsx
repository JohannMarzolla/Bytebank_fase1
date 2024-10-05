"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { getSaldo, postSaldo, getTransacoes, postTransacao } from "../services/transacoesServices";

interface Transacao {
  id: number;
  tipoDeposito: string;
  valor: number;
  date: string;
}

interface TransacoesContextData {
  transacoes: Transacao[];
  saldo: number;
  deposito: (number: number) => Promise<void>;
  transferencia: (number: number) => Promise<void>;
  novaTransacao: (tipoDeposito: string, valor: number, date: string) => Promise<void>;
}

interface TransacoesProviderProps {
  children: ReactNode;
}

const TransacoesContext = createContext<TransacoesContextData | undefined>(undefined);

export function TransacoesProvider({ children }: TransacoesProviderProps) {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [saldo, setSaldo] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [saldo, transacoes] = await Promise.all([getSaldo(), getTransacoes()]);
        setSaldo(saldo);
        setTransacoes(transacoes);
      } catch (error) {
        console.error("Erro ao buscar dados no servidor:", error);
      }
    };

    fetchData();
  }, []);

  const atualizarSaldo = async () => {
    try {
      const saldoAtualizado = await getSaldo();
      setSaldo(saldoAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar saldo:", error);
    }
  };

  const deposito = async (valor: number) => {
    try {
      const novoSaldo = saldo + valor;
      await postSaldo(novoSaldo);
      await atualizarSaldo();
    } catch (error) {
      console.error("Erro ao realizar depósito:", error);
    }
  };

  const transferencia = async (valor: number) => {
    try {
      const novoSaldo = saldo - valor;
      await postSaldo(novoSaldo);
      await atualizarSaldo();
    } catch (error) {
      console.error("Erro ao realizar transferência:", error);
    }
  };

  const novaTransacao = async (tipoDeposito: string, valor: number, date: string) => {
    const transacao: Transacao = {
      id: transacoes.length + 1,
      tipoDeposito,
      valor,
      date,
    };
    await postTransacao(transacao);
    setTransacoes((prevTransacoes) => [...prevTransacoes, transacao]);
  };

  return (
    <TransacoesContext.Provider value={{ transacoes, saldo, deposito, transferencia, novaTransacao }}>
      {children}
    </TransacoesContext.Provider>
  );
}

export function useTransacoesContext() {
  const context = useContext(TransacoesContext);
  if (!context) {
    throw new Error("useTransacoesContext deve ser usado dentro de um TransacoesProvider");
  }
  return context;
}
