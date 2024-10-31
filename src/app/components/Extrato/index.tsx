"use client";

import { useFiltrosTransacoesContext } from "@/app/context/FiltroTransacoesContext";
import ListaTransacoes from "../ListaTransacoes";
import IconButton from "@/components/ui/IconButton";
import { useRouter } from "next/navigation";

export default function Extrato() {
  const router = useRouter();
  const { transacoesFiltradas } = useFiltrosTransacoesContext();
  const transacoesExibidas = transacoesFiltradas.slice(-5).reverse();

  function onEditClicked() {
    router.push("/transferencias");
  }

  return (
    <div className="bg-gray-100 w-[282px] h-[900px] rounded-lg p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-black font-bold text-[25px] text-left">Extrato</h2>
        <IconButton icon="edit" color="blue" onClick={onEditClicked} />
      </div>

      <ListaTransacoes transacoes={transacoesExibidas} showActions={false} />
    </div>
  );
}
