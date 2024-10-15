import { useState } from "react";
import { TipoTransacao } from "../../../shared/types/TipoTransacao";
import InputSelect, { InputSelectOption } from "@/components/forms/InputSelect";
import Input from "@/components/forms/Input";

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
    { value: "deposito", label: "deposito" },
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
    <>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <InputSelect
          name="tipoTransacao"
          label="Nova transação"
          placeholder="Selecione o tipo de transação"
          options={tiposTransacao}
          onValueChanged={(value) => handleChange("tipoTransacao", value)}
        />
        <Input name="valor" type="number" label="Valor" onValueChanged={(value) => handleChange("valor", value)} />
        <Input name="date" type="date" label="Data" onValueChanged={(value) => handleChange("date", value)} />

        <button type="submit" className="btn bg-[#47A138] text-white rounded p-2 hover:bg-blue-600 transition">
          Adicionar Transação
        </button>
      </form>
    </>
  );
}
