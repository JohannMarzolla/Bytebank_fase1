"use client";

import { useTransacoesContext } from "../../context/TransacoesContext";


export default function Extrato() {
  const { transacoes } = useTransacoesContext();

  return (
    <div style={{ width: 300, height: 500, padding: 10, display: "flex", flexDirection: 'column' }}>
      <h2 style={{ alignSelf: "center" , fontWeight:'bold'}}>Extrato</h2>
      <ul>
        {transacoes.length > 0 ? (
          transacoes.map((tran) => (
            <li key={tran.id}>{tran.tipoDeposito} - {tran.valor} - {tran.date}</li>
          ))
        ) : (
          <li>Nenhuma transação encontrada</li>
        )}
      </ul>
    </div>
  );
}
