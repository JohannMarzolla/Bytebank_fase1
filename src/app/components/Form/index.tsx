import { useState } from "react";
import { TipoTransacao } from "../../../shared/types/TipoTransacao";
import { Session } from "next-auth";

type FormularioProps = {
  deposito: (valor: number) => void;
  transferencia: (valor: number) => void;
  novaTransacao: (tipo: string, valor: number, date: string, userId : number) => void;
  userId : number 
};

export default function Form({ deposito, transferencia, novaTransacao ,userId  }: FormularioProps) {
  const [formData, setFormData] = useState({
    tipoDeposito: "",
    valor: 0,
    date: "",
  });

  console.log('user id formulario',userId)  


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Dados inválidos!");
      return;
    }

    processarTransacao();
    setFormData({ tipoDeposito: "", valor: 0, date: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const processarTransacao = () => {
    const { tipoDeposito, valor, date } = formData;

    novaTransacao(tipoDeposito, valor, date, userId);

    if (tipoDeposito === TipoTransacao.DEPOSITO) {
      deposito(valor);
    } else if (tipoDeposito === TipoTransacao.TRANSFERENCIA) {
      transferencia(valor);
    } else {
      throw new Error("Tipo de Transação é inválido!");
    }
  };

  const isFormValid = () => {
    if (!formData.tipoDeposito || formData.valor <= 0 || !formData.date) return false;
    return true;
  };

  return (
    <>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <select
          name="tipoDeposito"
          value={formData.tipoDeposito}
          onChange={handleChange}
          className="border border-gray-300 rounded p-2"
        >
          <option value="" disabled>
            Selecione o tipo de transação
          </option>
          <option value="transferencia">transferência</option>
          <option value="deposito">deposito</option>
        </select>
        <input
          name="valor"
          type="number"
          value={formData.valor}
          onChange={handleChange}
          placeholder="Valor"
          className="border border-gray-300 rounded p-2"
        />
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Data"
          className="border border-gray-300 rounded p-2"
        />
        <button type="submit" className="btn bg-[#47A138] text-white rounded p-2 hover:bg-blue-600 transition">
          Adicionar Transação
        </button>
      </form>
    </>
  );
}
