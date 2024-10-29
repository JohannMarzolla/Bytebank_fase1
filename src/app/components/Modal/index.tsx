import React, { Children } from "react";

interface ModalConfirmacaoProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  tipoTransacao: string;
  valor: number;
  date: string;
  isSubmitting?: boolean;
  placeholder: string ;
}

const ModalConfirmacao: React.FC<ModalConfirmacaoProps> = ({
  isOpen,
  onClose,
  onConfirm,
  tipoTransacao,
  valor,
  date,
  isSubmitting = false,
  placeholder,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">{placeholder}</h3>
        <p><strong>Tipo de Transação:</strong> {tipoTransacao}</p>
        <p><strong>Valor:</strong> R$ {valor}</p>
        <p><strong>Data:</strong> {new Date(date).toLocaleDateString()}</p>

        <div className="mt-6 flex justify-between">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={onConfirm}
            disabled={isSubmitting}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacao;
