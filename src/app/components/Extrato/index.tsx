import { useFiltrosTransacoesContext } from "@/app/context/FiltroTransacoesContext";
import ListaTransacoes from "../ListaTransacoes";
import IconButton from "@/components/ui/IconButton";
import { useRouter } from "next/navigation";
import { Transacao } from "@/app/context/TransacoesContext";

interface ExtratoProps {
  transacoesIniciais: Transacao[];
}

export default function Extrato({ transacoesIniciais }: ExtratoProps) {
  const router = useRouter();
  const { transacoesFiltradas } = useFiltrosTransacoesContext();
  const transacoesExibidas = (transacoesFiltradas.length > 0 ? transacoesFiltradas : transacoesIniciais)
    .slice(-5)
    .reverse();

  function onEditClicked() {
    router.push("/transferencias");
  }

  return (
    <div className="bg-gray-100 lg:w-[282px] h-[900px] rounded-lg p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-black font-bold text-[25px] text-left">Extrato</h2>
        <IconButton icon="edit" color="blue" onClick={onEditClicked} />
      </div>

      <ListaTransacoes transacoes={transacoesExibidas} showActions={false} />
    </div>
  );
}
