"use client"
import { useTransacoesContext } from "@/app/context/TransacoesContext";
import { useState } from "react"


interface FormEditarTransacaoProps {
  transacaoId:  number;
}

  export default function FormEditarTransacao({ transacaoId }: FormEditarTransacaoProps){

 const {atualizarTransacao} = useTransacoesContext();

    const [formData , setFormData] = useState({
        tipoTransacao : '',
        valor : 0,
        date : ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!isFormValid()) {
          alert("Dados inválidos!");
          return;
        }
    
        editarTransacao();
        setFormData({ tipoTransacao: "", valor: 0, date: "" });
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const editarTransacao = () => {
      const { tipoTransacao, valor, date } = formData;
      atualizarTransacao(transacaoId, tipoTransacao, valor,date)
        
      }
    
      const isFormValid = () => {
        if (!formData.tipoTransacao || formData.valor <= 0 || !formData.date) return false;
        return true;
      };
    

    return (
        <>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="tipoTransacao" className="text-sm font-bold">
              Nova transação
            </label>
            <select
              name="tipoTransacao"
              value={formData.tipoTransacao}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2"
            >
              <option value="" disabled>
                Selecione o tipo de transação
              </option>
              <option value="transferencia">transferência</option>
              <option value="deposito">deposito</option>
            </select>
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="valor" className="text-sm font-bold">
              Valor
            </label>
            <input
              name="valor"
              type="number"
              value={formData.valor}
              onChange={handleChange}
              placeholder="Valor"
              className="border border-gray-300 rounded p-2"
            />
          </div>
  
          <div className="flex flex-col">
            <label htmlFor="date" className="text-sm font-bold">
              Data
            </label>
            <input
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Data"
              className="border border-gray-300 rounded p-2"
            />
          </div>
  
          <button type="submit" className="btn bg-[#47A138] text-white rounded p-2 hover:bg-blue-600 transition">
            Adicionar Transação
          </button>
        </form>
      </>
        
    ) 
}