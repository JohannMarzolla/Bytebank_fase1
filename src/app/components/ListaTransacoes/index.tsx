'use client'

import { useTransacoesContext } from "@/app/context/TransacoesContext";
import Link from "next/link";



export default function ListaTransacoes() {
  const { transacoes, deletarTransacao } = useTransacoesContext();
  const transacoesExibidas = transacoes.slice(-5).reverse();

  function handleDelete(transacaoId: number) {
    const confirmDelete = confirm("Tem certeza que deseja deletar esta transação?");
    if (confirmDelete) {
      deletar(transacaoId);
    }
  }

  function deletar(transacaoId: number) {
    deletarTransacao(transacaoId);
  }
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        width: "282px",
        height: "900px",
        borderRadius: "0.5rem",
        padding: "2rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h2 style={{ color: "#000", fontWeight: "bold", fontSize: "25px", textAlign: "left" }}>
          Transações
        </h2>
      </div>

      <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem", paddingLeft: "0", marginTop: "1rem", textAlign: "left" }}>
        {transacoesExibidas.length > 0 ? (
          transacoesExibidas.map((tran, index) => (
            <li key={tran.id || index} style={{ listStyleType: "none" }}>
              <p style={{ color: "#16a34a", fontWeight: "600", fontSize: "13px" }}>novembro</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h3 style={{ color: "#000", fontSize: "16px", fontWeight: "normal" }}>
                  {tran.tipoTransacao}
                </h3>
                <p style={{ color: "#6b7280", fontSize: "13px", fontWeight: "normal" }}>
                  {new Date(tran.date).toLocaleDateString()}
                </p>
              </div>

              <div style={{ }}>
                <p style={{ color: "#000", fontWeight: "600", fontSize: "16px" }}>
                  R$ {tran.valor}
                </p>
              </div>

              <Link href={`/editarTransacao/${tran.id}`}>
        <button
    style={{
      marginTop: "0.5rem",
      padding: "0.25rem 0.5rem",
      backgroundColor: "#3b82f6",
      color: "#fff",
      borderRadius: "0.5rem",
      transition: "background-color 0.3s",
      cursor: "pointer",
      marginRight: "0.25rem",
      fontSize: "12px",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
  >
    Editar
  </button>
</Link>

<button
  style={{
    marginTop: "0.5rem",
    padding: "0.25rem 0.5rem", 
    backgroundColor: "#ef4444", 
    color: "#fff",
    borderRadius: "0.5rem",
    transition: "background-color 0.3s",
    cursor: "pointer",
    fontSize: "12px", 
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = "#dc2626")}
  onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
  onClick={() => handleDelete(tran.id)} 
>
  Deletar
</button>
            </li>
          ))
        ) : (
          <li style={{ color: "#6b7280", textAlign: "center" }}>Nenhuma transação encontrada</li>
        )}
      </ul>
    </div>
  );
}
