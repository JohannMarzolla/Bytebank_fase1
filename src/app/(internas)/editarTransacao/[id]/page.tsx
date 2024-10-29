"use client"
import FormEditarTransacao from "@/app/components/FormEditarTransacao";
import { redirect, useParams } from "next/navigation";

export default function editarTransacoes() {
  
    const {id} = useParams();
    const transacaId = Number(id)
    


    return (
      <div className="flex justify-center items-center w-full h-[100vh] bg-gray-100">
        <div className="relative w-full max-w-lg p-6 bg-fiap-light-gray rounded-[8px] shadow-lg">
          <FormEditarTransacao transacaoId={transacaId} />
        </div>
      </div>
    );
  }
    
