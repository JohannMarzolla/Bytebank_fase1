"use client";

import { useTransacoesContext } from "@/app/context/TransacoesContext";
import Link from "next/link";

export default function Extrato() {
  const { transacoes } = useTransacoesContext();

  const transacoesExibidas = transacoes.slice(-5).reverse();

  return (
    <div className="w-full max-w-sm h-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-center text-xl font-bold text-gray-700 mb-4">Extrato</h2>

      <ul className="space-y-4">
        {transacoesExibidas.length > 0 ? (
          transacoesExibidas.map((tran) => (
            <div
              key={tran.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {tran.tipoTransacao}
              </h3>
              <p className="text-gray-600">
                R${tran.valor} - {new Date(tran.date).toLocaleDateString()}
              </p>

              <Link href={`/editarTransacao/${tran.id}`}>
                <button className="mt-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Editar
                </button>
              </Link>
            </div>
          ))
        ) : (
          <li className="text-gray-500 text-center">Nenhuma transação encontrada</li>
        )}
      </ul>
    </div>
  );
}