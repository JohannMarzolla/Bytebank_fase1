"use client";

import { useSessionContext } from "@/app/context/SessionContext";
import { useTransacoesContext } from "../../context/TransacoesContext";
import Form from "../Form";
import Image from "next/image";

export default function CardNovaTransacao() {
  const { deposito, transferencia, novaTransacao } = useTransacoesContext();
  const session = useSessionContext();
  const userId = Number(session?.user.id);

  return (
    <div className="flex relative w-full h-[400px] mb-8 text-white bg-[#CBCBCB] rounded-[8px]">
      <div className="z-10 p-8">
        <Form deposito={deposito} transferencia={transferencia} novaTransacao={novaTransacao} userId={userId} />
      </div>

      <Image
        className="absolute right-0 bottom-0 pb-6 pr-6"
        src="/nova-transacao-home.png"
        width={327}
        height={230}
        alt="Imagem do card de nova transação"
      />

      <Image
        className="absolute top-0 right-0"
        src="/pixels-nova-transacao.svg"
        width={180}
        height={177}
        alt="pixels"
      />
      <Image className="absolute bottom-0" src="/pixels-nova-transacao.svg" width={180} height={177} alt="pixels" />
    </div>
  );
}
