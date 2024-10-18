"use client"
import FormEditarTransacao from "@/app/components/FormEditarTransacao";
import { redirect, useParams } from "next/navigation";

export default async function editarTransacoes() {
  
    const {id} = useParams();
    const transacaId = Number(id)
    
  return (

    
    <div className="flex relative w-full h-[400px] mb-8 text-white bg-[#CBCBCB] rounded-[8px]">
        
        <div className="z-10 p-8">
       
       <FormEditarTransacao  transacaoId={transacaId}/>
       </div>

        
    </div>

    )
}