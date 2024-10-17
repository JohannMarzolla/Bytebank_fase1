import { useState } from "react";
import { TipoTransacao } from "../../../shared/types/TipoTransacao";
import InputSelect, { InputSelectOption } from "@/components/forms/InputSelect";
import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";

type FormularioProps = {
  deposito: (valor: number) => void;
  transferencia: (valor: number) => void;
  novaTransacao: (tipo: string, valor: number, date: string, userId: number) => void;
  userId: number;
};

export default function FormNovaTransacao({ deposito, transferencia, novaTransacao, userId }: FormularioProps) {
  const [formData, setFormData] = useState({
    tipoTransacao: "",
    valor: 0,
    date: "",
  });

  const tiposTransacao: InputSelectOption[] = [
    { value: "transferencia", label: "Transferência" },
    { value: "deposito", label: "Depósito" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Dados inválidos!");
      return;
    }

    processarTransacao();
    setFormData({ tipoTransacao: "", valor: 0, date: "" });
  };

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const processarTransacao = () => {
    const { tipoTransacao, valor, date } = formData;

    novaTransacao(tipoTransacao, valor, date, userId);

    if (tipoTransacao === TipoTransacao.DEPOSITO) {
      deposito(valor);
    } else if (tipoTransacao === TipoTransacao.TRANSFERENCIA) {
      transferencia(valor);
    } else {
      throw new Error("Tipo de Transação é inválido!");
    }
  };

  const isFormValid = () => {
    if (!formData.tipoTransacao || formData.valor <= 0 || !formData.date) return false;
    return true;
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputSelect
        name="tipoTransacao"
        label="Tipo"
        placeholder="Selecione o tipo de transação"
        options={tiposTransacao}
        style="dark"
        onValueChanged={(value) => handleChange("tipoTransacao", value)}
      />
      <Input
        name="valor"
        type="number"
        label="Valor"
        style="dark"
        onValueChanged={(value) => handleChange("valor", value)}
      />
      <Input
        name="date"
        type="date"
        label="Data"
        style="dark"
        onValueChanged={(value) => handleChange("date", value)}
      />

      <Button type="submit" text="Adicionar Transação" color="blue" />
    </form>
  );
}
