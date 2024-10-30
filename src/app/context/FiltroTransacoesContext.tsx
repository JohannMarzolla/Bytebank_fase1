"use client"

import { createContext, useContext, useState, useMemo, ReactNode, useEffect } from "react";
import { useTransacoesContext } from "./TransacoesContext";

const FiltrosTransacoesContext = createContext<any | undefined>(undefined);

export function FiltrosTransacoesProvider({ children }: { children: ReactNode }) {
  const { transacoes } = useTransacoesContext();
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [tipoFiltroTransacao, setTipoFiltroTransacao] = useState<"todos" | "deposito" | "transferencia">("todos");

  const transacoesFiltradas = useMemo(() => {
    const dataFinal = dataFim ? new Date(dataFim) : new Date(); 

    return transacoes.filter((transacao) => {
      const tipoTransacaoMatch = tipoFiltroTransacao === "todos" || 
      transacao.tipoTransacao === tipoFiltroTransacao;

      const dentroDoIntervalo = 
      (!dataInicio || new Date(transacao.date) >= new Date(dataInicio)) && 
       (!dataFim || new Date(transacao.date) <= dataFinal);

      return tipoTransacaoMatch && dentroDoIntervalo;
    });
  }, [transacoes, tipoFiltroTransacao, dataInicio, dataFim]);

  return (
    <FiltrosTransacoesContext.Provider
      value={{ 
        transacoesFiltradas, 
        setTipoFiltroTransacao,  
        setDataInicio, 
        dataInicio,
        dataFim,
        setDataFim, 
        tipoFiltroTransacao
     }}>
      {children}
    </FiltrosTransacoesContext.Provider>
  );
}

export function useFiltrosTransacoesContext() {
  const context = useContext(FiltrosTransacoesContext);
  if (!context) {
    throw new Error("useFiltrosTransacoesContext deve ser usado dentro de um FiltrosTransacoesProvider");
  }
  return context;
}
