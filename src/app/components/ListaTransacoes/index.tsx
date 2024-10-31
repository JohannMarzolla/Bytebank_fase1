"use client";

import React, { useState } from "react";
import { Transacao, useTransacoesContext } from "@/app/context/TransacoesContext";
import TransacaoConfirmDelete from "../TransacaoConfirmDelete";
import TransacaoItem from "../TransacaoItem";
import TransacaoEditModal from "../TransacaoEditModal";

export interface ListaTransacoesOptions {
  transacoes: Transacao[];
  showActions: boolean;
}

export default function ListaTransacoes(options: ListaTransacoesOptions) {
  const { deletarTransacao } = useTransacoesContext();
  const [confirmDeleteIsOpen, setConfirmDeleteIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [transacaoSelecionada, setTransacaoSelecionada] = useState<Transacao | null>(null);

  function handleDelete(transacao: Transacao) {
    setTransacaoSelecionada(transacao);
    setConfirmDeleteIsOpen(true);
    setEditIsOpen(false);
  }

  function handleEdit(transacao: Transacao) {
    setTransacaoSelecionada(transacao);
    setConfirmDeleteIsOpen(false);
    setEditIsOpen(true);
  }

  function confirmarDelete() {
    if (transacaoSelecionada) {
      deletarTransacao(transacaoSelecionada.id);
      fecharModal();
    }
  }

  function confirmarEdit() {
    if (transacaoSelecionada) {
      fecharModal();
    }
  }

  function fecharModal() {
    setConfirmDeleteIsOpen(false);
    setEditIsOpen(false);
    setTransacaoSelecionada(null);
  }

  return (
    <>
      <ul className="flex flex-col gap-5 text-left pt-5">
        {options.transacoes.length > 0 ? (
          options.transacoes.map((tran, index) => (
            <TransacaoItem
              key={tran.id || index}
              item={tran}
              showActions={options.showActions}
              onEditClicked={() => handleEdit(tran)}
              onDeleteClicked={() => handleDelete(tran)}
            />
          ))
        ) : (
          <span className="text-gray-500 text-center">Nenhuma transação encontrada</span>
        )}
      </ul>

      {options.showActions && transacaoSelecionada && (
        <>
          <TransacaoConfirmDelete
            isOpen={confirmDeleteIsOpen}
            onClose={fecharModal}
            onConfirm={confirmarDelete}
            tipoTransacao={transacaoSelecionada.tipoTransacao}
            valor={transacaoSelecionada.valor}
            date={transacaoSelecionada.date}
          />
          <TransacaoEditModal
            isOpen={editIsOpen}
            onClose={fecharModal}
            onConfirm={confirmarEdit}
            transacao={transacaoSelecionada}
          />
        </>
      )}
    </>
  );
}
