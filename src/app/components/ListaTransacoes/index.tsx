"use client";

import React, { useState } from "react";
import { Transacao, useTransacoesContext } from "@/app/context/TransacoesContext";
import ModalConfirmacao from "../Modal";
import TransacaoItem from "../TransacaoItem";

export interface ListaTransacoesOptions {
  transacoes: Transacao[];
  showActions: boolean;
}

export default function ListaTransacoes(options: ListaTransacoesOptions) {
  const { deletarTransacao } = useTransacoesContext();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transacaoSelecionada, setTransacaoSelecionada] = useState<Transacao | null>(null);

  function handleDelete(transacao: Transacao) {
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
    <>
      <ul className="flex flex-col gap-5 text-left pt-4">
        {options.transacoes.length > 0 ? (
          options.transacoes.map((tran, index) => (
            <TransacaoItem
              key={tran.id || index}
              item={tran}
              showActions={options.showActions}
              onDeleteClicked={() => handleDelete(tran)}
            />
          ))
        ) : (
          <span className="text-gray-500 text-center">Nenhuma transação encontrada</span>
        )}
      </ul>

      {options.showActions && transacaoSelecionada && (
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
    </>
  );
}
