"use client";

import { useTransacoesContext } from "@/app/context/TransacoesContext";
import Link from "next/link";

export default function Extrato() {
  const { transacoes } = useTransacoesContext();
  const transacoesExibidas = transacoes.slice(-5).reverse();

  return (
    <div className="bg-gray-100 w-[282px] h-[900px] rounded-lg p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-black font-bold text-[25px] text-left">
          Extrato
        </h2>
        <div className="flex gap-4">
          <Link href="/transferencias">
            <img 
              src="Editar.png" 
              alt="icone de editar" 
              className="w-10 h-10"
            />
          </Link>
          <Link href="/transferencias">
            <img 
              src="/Deletar.png" 
              alt="icone de deletar" 
              className="w-10 h-10"
            />
          </Link>
        </div>
      </div>

      <ul className="flex flex-col gap-5 pl-0 text-left mt-4">
        {transacoesExibidas.length > 0 ? (
          transacoesExibidas.map((tran, index) => (
            <li key={tran.id || index} className="list-none">
              <p className="text-green-600 font-semibold text-[13px]">
                novembro
              </p>
              <div className="flex items-center justify-between">
                <h3 className="text-black text-[16px] font-normal">
                  {tran.tipoTransacao}
                </h3>
                <p className="text-gray-500 text-[13px] font-normal">
                  {new Date(tran.date).toLocaleDateString()}
                </p>
              </div>

              <div className="border-b border-green-500/50 w-[75%] mt-2">
                <p className="text-black font-semibold text-[16px]">
                  R$ {tran.valor}
                </p>
              </div>
              
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-center">
            Nenhuma transação encontrada
          </li>
        )}
      </ul>
    </div>
  );
}
