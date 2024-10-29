'use client'
import React, { useState } from "react";
import { useTransacoesContext } from "@/app/context/TransacoesContext";
import Link from "next/link";
import ModalConfirmacao from "../Modal";


export default function ListaTransacoes() {
  const { transacoes, deletarTransacao } = useTransacoesContext();
  const transacoesExibidas = transacoes.slice(-5).reverse();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transacaoSelecionada, setTransacaoSelecionada] = useState<{
    id: number;
    tipoTransacao: string;
    valor: number;
    date: string;
  } | null>(null);

  function handleDelete(transacao: { id: number; tipoTransacao: string; valor: number; date: string }) {
    setTransacaoSelecionada(transacao);
    setModalIsOpen(true);
  }

  function confirmarDelete() {
    if (transacaoSelecionada) {
      deletarTransacao(transacaoSelecionada.id);
      fecharModal();
    }
  }

  function fecharModal() {
    setModalIsOpen(false);
    setTransacaoSelecionada(null);
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
              <p className="text-green-600 font-semibold text-sm">novembro</p>
              <div className="flex items-center justify-between">
                <h3 className="text-black text-base font-normal">{tran.tipoTransacao}</h3>
                <p className="text-gray-600 text-sm font-normal">{new Date(tran.date).toLocaleDateString()}</p>
              </div>

              <div>
                <p className="text-black font-semibold text-lg">R$ {tran.valor}</p>
              </div>

              <Link href={`/editarTransacao/${tran.id}`}>
                <button className="mt-2 px-2 py-1 bg-blue-600 text-white rounded transition-colors duration-300 cursor-pointer mr-1 hover:bg-blue-500 text-xs">
                  Editar
                </button>
              </Link>

              <button
                className="mt-2 px-2 py-1 bg-red-600 text-white rounded transition-colors duration-300 cursor-pointer text-xs hover:bg-red-500"
                onClick={() => handleDelete(tran)}
              >
                Deletar
              </button>
            </li>
          ))
        ) : (
          <li className="text-gray-600 text-center">Nenhuma transação encontrada</li>
        )}
      </ul>

      {transacaoSelecionada && (
        <ModalConfirmacao
          isOpen={modalIsOpen}
          onClose={fecharModal}
          onConfirm={confirmarDelete}
          tipoTransacao={transacaoSelecionada.tipoTransacao}
          valor={transacaoSelecionada.valor}
          date={transacaoSelecionada.date}
          placeholder="Excluir Transação?"
        />
      )}
    </div>
  );
}
