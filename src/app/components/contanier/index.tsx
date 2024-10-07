"use client";

import { useTransacoesContext } from "../../context/TransacoesContext";
import Aside from "../Aside";
import Extrato from "../Extrato";
import Form from "../Form";
import Saldo from "../Saldo";

export default function Container() {
  const { deposito, transferencia, novaTransacao } = useTransacoesContext();

  return (
    <div className="flex flex-col md:flex-row justify-center">
      <Aside />
      <div className="flex-1 p-4 max-w-[690px]">
        <Saldo />
        <Form deposito={deposito} transferencia={transferencia} novaTransacao={novaTransacao} />
      </div>
      <Extrato />
    </div>
  );
}
