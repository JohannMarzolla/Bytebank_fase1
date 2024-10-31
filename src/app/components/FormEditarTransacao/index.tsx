"use client";

import { Transacao, useTransacoesContext } from "@/app/context/TransacoesContext";
import Input from "@/components/forms/Input";
import InputSelect, { InputSelectOption } from "@/components/forms/InputSelect";
import Button from "@/components/ui/Button";
import { useState } from "react";

interface FormEditarTransacaoProps {
  transacao: Transacao;
  showCancel?: boolean;
  onCancelClicked?: { (): void };
  onConfirmClicked?: { (): void };
}

export default function FormEditarTransacao(options: FormEditarTransacaoProps) {
  const { atualizarTransacao } = useTransacoesContext();
  const [formData, setFormData] = useState(options.transacao);

  console.log(formData, options);

  const tiposTransacao: InputSelectOption[] = [
    { value: "", label: "Selecione o Tipo" },
    { value: "transferencia", label: "Transferência" },
    { value: "deposito", label: "Depósito" },
  ];

  function onCancelClicked() {
    if (options.onCancelClicked) options.onCancelClicked();
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Dados inválidos! Verifique os campos.");
      return;
    }
    confirmarTransacao();
  };

  const handleChange = (name: string, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const confirmarTransacao = () => {
    const { tipoTransacao, valor, date } = formData;
    atualizarTransacao(options.transacao.id, tipoTransacao, valor, date);

    if (options.onConfirmClicked) options.onConfirmClicked();
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

        <div className="flex gap-4">
          {options.showCancel && <Button type="button" text="Cancelar" color="red" onClick={onCancelClicked} />}
          <Button type="submit" text="Atualizar transação" color="blue" />
        </div>
      </form>
    </>
  );
}
