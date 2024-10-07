"use client";

import { useTransacoesContext } from "../../context/TransacoesContext";
import { useSessionContext } from "../../context/SessionContext";
import { formatarData, formatarMoeda } from "@/shared/utils/Formatters";
import { FormatoData } from "@/shared/types/FormatoData";
import Image from "next/image";

export default function Saldo() {
  const session = useSessionContext();
  const { saldo } = useTransacoesContext();
  const date: string = formatarData(new Date(), FormatoData.DIA_SEMANA_DIA_MES_ANO);

  const saldoFormato = saldo ? formatarMoeda(saldo) : "Saldo indisponível no momento";

  return (
    <div className="flex relative justify-between w-full h-[400px] mb-8 text-white bg-[#004D61] rounded-[8px]">
      <div className="flex flex-col pl-8 pt-8">
        <span className="pb-5 text-[25px] font-semibold"> Olá, {session?.user?.name}!</span>
        <span className="text-sm">{date}</span>
        <Image
          className="z-10 pt-12"
          src="/ilustracao1-saldo-home.png"
          width={280}
          height={228}
          alt="ilustracao1-saldo"
        />
      </div>

      <div className="flex flex-col pt-24 pr-32 text-xl">
        <h2 className="text-lg font-bold pb-2 border-b-2 border-white">Saldo</h2>
        <span className="text-base pt-4">Conta Corrente</span>
        <span className="text-3xl pt-1">{saldoFormato}</span>
      </div>

      <Image className="absolute top-0 right-0" src="/pixels.svg" width={180} height={177} alt="pixels" />
      <Image className="absolute bottom-0" src="/pixels.svg" width={180} height={177} alt="pixels" />
    </div>
  );
}
