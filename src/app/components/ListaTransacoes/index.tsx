'use client'
import React, { useState, useEffect } from "react";
import { useTransacoesContext } from "@/app/context/TransacoesContext";
import Link from "next/link";
import ModalConfirmacao from "../Modal";
import { useFiltrosTransacoesContext } from "@/app/context/FiltroTransacoesContext";

export default function ListaTransacoes() {
  const { deletarTransacao } = useTransacoesContext();
  const { transacoesFiltradas,
     setTipoFiltroTransacao , 
     setDataInicio,
     dataInicio,
     dataFim, 
     setDataFim, } = useFiltrosTransacoesContext();
  
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
    <div className="bg-white shadow-md rounded-lg p-6 w-126 h-[900px] mx-auto">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-gray-800 font-bold text-lg">Transações</h2>
    </div>

    <div className="flex gap-2 mb-4">
      <button
        className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md font-medium transition duration-200 hover:bg-gray-300"
        onClick={() => setTipoFiltroTransacao("todos")}
      >
        Todos
      </button>
      <button
        className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md font-medium transition duration-200 hover:bg-gray-300"
        onClick={() => setTipoFiltroTransacao("deposito")}
      >
        Depósitos
      </button>
      <button
        className="bg-gray-200 text-gray-600 py-2 px-4 rounded-md font-medium transition duration-200 hover:bg-gray-300"
        onClick={() => setTipoFiltroTransacao("transferencia")}
      >
        Transferências
      </button>
    </div>

    <div className="mb-4">
      <label className="text-gray-600 mr-2">Data Início:</label>
      <input
        type="date"
        value={dataInicio}
        onChange={(e) => setDataInicio(e.target.value)}
        className="p-1 rounded border border-gray-300 mr-2 bg-gray-100 text-gray-800 outline-none"
      />
      <label className="text-gray-600 mr-2">Data Fim:</label>
      <input
        type="date"
        value={dataFim}
        onChange={(e) => setDataFim(e.target.value)}
        className="p-1 rounded border border-gray-300 bg-gray-100 text-gray-800 outline-none"
      />
    </div>

    <ul className="flex flex-col gap-5 text-left">
      {transacoesFiltradas.length > 0 ? (
        transacoesFiltradas.map((tran, index) => (
          <li key={tran.id || index} className="list-none p-4 border-b border-green-500/50">
            <p className="text-sm font-semibold text-green-600">Novembro</p>
            <div className="flex items-center justify-between mt-1">
              <h3 className="text-gray-800 text-base font-medium">{tran.tipoTransacao}</h3>
              <p className="text-gray-500 text-sm">{new Date(tran.date).toLocaleDateString()}</p>
            </div>
            <p className="text-gray-800 font-semibold text-lg">R$ {tran.valor.toFixed(2)}</p>
            <div className="flex items-center gap-2 mt-2">
              <Link href={`/editarTransacao/${tran.id}`}>
                <img
                  src="Editar.png"
                  alt="Ícone de editar"
                  className="w-6 h-6 cursor-pointer transition-opacity duration-200 hover:opacity-75"
                />
              </Link>
              <img
                src="Deletar.png"
                alt="Ícone de deletar"
                className="w-6 h-6 cursor-pointer transition-opacity duration-200 hover:opacity-75"
                onClick={() => handleDelete(tran)}
              />
            </div>
          </li>
        ))
      ) : (
        <li className="text-gray-500 text-center">Nenhuma transação encontrada</li>
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
