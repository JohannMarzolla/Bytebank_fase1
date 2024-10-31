import Modal from "@/components/ui/Modal";
import React from "react";
import FormEditarTransacao from "@/app/components/FormEditarTransacao";
import { Transacao } from "@/app/context/TransacoesContext";

interface TransacaoEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  transacao: Transacao;
}

export default function TransacaoEditModal(options: TransacaoEditModalProps) {
  return (
    <Modal isOpen={options.isOpen}>
      <h3 className="text-lg font-semibold mb-4">Editar transação</h3>
      <FormEditarTransacao
        transacao={options.transacao}
        showCancel={true}
        onCancelClicked={options.onClose}
        onConfirmClicked={options.onConfirm}
      />
    </Modal>
  );
}
