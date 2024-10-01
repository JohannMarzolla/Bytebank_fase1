"use client";

import { useState } from "react";
import { useTransacoesContext } from "../../context/TransacoesContext";
import Aside from "../Aside";
import Saldo from "../Saldo";
import Extrato from "../Extrato";
import Form from "../Form";

export default function Container() {
  const { deposito, transferencia, novaTransacao } = useTransacoesContext();
 
  return (
    <main className="flex flex-col md:flex-row">
      <Aside />
      <div className="flex-1 p-4">
       <Form deposito={deposito} transferencia={transferencia} novaTransacao={novaTransacao} />

        <div className="mt-10">
          <h2 className="text-lg font-bold">Saldo</h2>
          <Saldo/>
        </div>

      </div>
      <Extrato/>
    </main>
  );
}
