"use client";

import { useTransacoesContext } from "@/app/context/TransacoesContext";

export default function Extrato() {
  const { transacoes } = useTransacoesContext();

  return (
    <div style={{ width: 300, height: 500, padding: 10, display: "flex", flexDirection: "column" }}>
      <h2 style={{ alignSelf: "center", fontWeight: "bold" }}>Extrato</h2>
      <ul>
        {transacoes.length > 0 ? (
          transacoes.map((tran) => (
            <ul style={{ display: "flex", flexDirection: "column" }} key={tran.userId}>
              <ul>
                <li> {tran.tipoTransacao}</li>
                <li>
                  {" "}
                  R${tran.valor} {tran.date}{" "}
                </li>
              </ul>
            </ul>
          ))
        ) : (
          <li>Nenhuma transação encontrada</li>
        )}
      </ul>
    </div>
  );
}
