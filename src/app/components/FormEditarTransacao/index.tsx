"use client";
import { useTransacoesContext } from "@/app/context/TransacoesContext";
import Input from "@/components/forms/Input";
import InputSelect, { InputSelectOption } from "@/components/forms/InputSelect";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormEditarTransacaoProps {
  transacaoId: number;
}

export default function FormEditarTransacao({
  transacaoId,
}: FormEditarTransacaoProps) {
  const { atualizarTransacao } = useTransacoesContext();
  const router = useRouter();
  const [formData, setFormData] = useState({
    tipoTransacao: "",
    valor: 0,
    date: "",
  });

  const [showModal, setShowModal] = useState(false); 
  const [submitting, setSubmitting] = useState(false); 

  const tiposTransacao: InputSelectOption[] = [
    { value: "", label: "Selecione o Tipo" },
    { value: "transferencia", label: "Transferência" },
    { value: "deposito", label: "Depósito" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Dados inválidos! Verifique os campos.");
      return;
    }
    setShowModal(true);
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const confirmarTransacao = () => {
    setSubmitting(true);
    const { tipoTransacao, valor, date } = formData;
    atualizarTransacao(transacaoId, tipoTransacao, valor, date);
    setShowModal(false);

    setTimeout(() => {
      router.push("/transferencias");
    }, 1000); 
  };

  const isFormValid = () => {
    const { tipoTransacao, valor, date } = formData;

    if (!tipoTransacao || tipoTransacao.trim() === "") {
      console.log("Falha na validação: Tipo de transação inválido.");
      return false;
    }
    if (valor <= 0 || isNaN(valor)) {
      console.log("Falha na validação: Valor inválido.");
      return false;
    }
    if (!date || isNaN(new Date(date).getTime())) {
      console.log("Falha na validação: Data inválida.");
      return false;
    }

    console.log("Formulário é válido.");
    return true;
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <InputSelect
          name="tipoTransacao"
          label="Tipo"
          options={tiposTransacao}
          style="dark"
          value={formData.tipoTransacao}
          onValueChanged={(value) => handleChange("tipoTransacao", value)}
        />
        <Input
          name="valor"
          type="number"
          label="Valor"
          style="dark"
          value={formData.valor}
          onValueChanged={(value) => handleChange("valor", value)}
        />
        <Input
          name="date"
          type="date"
          label="Data"
          style="dark"
          value={formData.date}
          onValueChanged={(value) => handleChange("date", value)}
        />

        <Button type="submit" text="Atualizar Transação" color="blue" />
      </form>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirmar Alterações</h3>
            <p><strong>Tipo de Transação:</strong> {formData.tipoTransacao}</p>
            <p><strong>Valor:</strong> R$ {formData.valor}</p>
            <p><strong>Data:</strong> {new Date(formData.date).toLocaleDateString()}</p>

            <div className="mt-6 flex justify-between">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={confirmarTransacao}
                disabled={submitting}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
