"use client"; 

import { useState, useEffect } from "react";
import Aside from "../Aside";
import Saldo from "../Saldo";
import CardNovaTransacao from "../CardNovaTransacao";
import Extrato from "../Extrato";
import { Transacao } from "@/app/context/TransacoesContext";

interface ContainerProps {
  saldoInicial: number;
  transacoesIniciais: Transacao[];
}

export default function Container({ saldoInicial, transacoesIniciais }: ContainerProps) {
  const [saldo, setSaldo] = useState(saldoInicial);
  const [transacoes, setTransacoes] = useState(transacoesIniciais);


  return (
    <div className="flex flex-col lg:flex-row lg:justify-center overflow-auto max-w-[1024px] mx-auto max-sm:px-6 max-md:px-[3.75rem] p-6 pb-8 w-full h-full gap-8 lg:gap-4">
      <Aside removeOnMobile={true} />
      <div className="flex flex-col w-full lg:max-w-[690px] h-max gap-8">
        <Saldo saldo={saldo} />
        <CardNovaTransacao />
      </div>
      <Extrato transacoesIniciais={transacoes} />
    </div>
  );
}
