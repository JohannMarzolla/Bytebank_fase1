'use client'

import { useTransacoesContext } from "@/app/context/TransacoesContext";
import Link from "next/link";
import { useState } from "react";

export default function ListaTransacoes() {
  const { transacoes } = useTransacoesContext();
  const transacoesExibidas = transacoes.slice(-5).reverse();

  function handleDelete() {
    alert("transação deletada");
  }

  return (
    <div className="bg-gray-100 w-72 h-[900px] rounded-lg p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-black font-bold text-xl text-left">Transações</h2>
      </div>

      <ul className="flex flex-col gap-5 pl-0 mt-4 text-left">
        {transacoesExibidas.length > 0 ? (
          transacoesExibidas.map((tran, index) => (
            <li key={tran.id || index} className="list-none">
              <p className="text-green-600 font-semibold text-xs">novembro</p>
              <div className="flex items-center justify-between">
                <h3 className="text-black text-lg font-normal">{tran.tipoTransacao}</h3>
                <p className="text-gray-400 text-xs font-normal">
                  {new Date(tran.date).toLocaleDateString()}
                </p>
              </div>

              <div className="border-b border-green-600 border-opacity-50 w-3/4 mt-2">
                <p className="text-black font-semibold text-lg">R$ {tran.valor}</p>
              </div>

              <Link href={`/editarTransacao/${tran.id}`}>
                <button
                  className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-lg transition-colors duration-300 cursor-pointer mr-1 text-xs hover:bg-blue-600"
                >
                  Editar
                </button>
              </Link>

              <button
                className="mt-2 px-2 py-1 bg-red-500 text-white rounded-lg transition-colors duration-300 cursor-pointer text-xs hover:bg-red-600"
                onClick={() => handleDelete(tran.id)}
              >
                Deletar
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-400 text-center">Nenhuma transação encontrada</li>
        )}
      </ul>
    </div>
  );
}
