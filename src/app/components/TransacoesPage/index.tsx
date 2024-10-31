"use client";

import React from "react";
import { TipoTransacao, useFiltrosTransacoesContext } from "@/app/context/FiltroTransacoesContext";
import Button, { ButtonColors } from "@/components/ui/Button";
import Input from "@/components/forms/Input";
import ListaTransacoes from "../ListaTransacoes";

export default function TransacoesPage() {
  const {
    transacoesFiltradas,
    tipoFiltroTransacao,
    setTipoFiltroTransacao,
    setDataInicio,
    dataInicio,
    dataFim,
    setDataFim,
  } = useFiltrosTransacoesContext();

  function getFiltroTipoButtonColor(tipo: TipoTransacao): ButtonColors {
    return tipo === tipoFiltroTransacao ? "blue" : "gray";
  }

  return (
    <div className="bg-fiap-white shadow-md rounded-lg p-6 w-126 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-lg">Transações</h2>
      </div>

      <div className="flex flex-col bg-white border-[1px] rounded border-fiap-light-blue px-4 pt-3 pb-5">
        <span className="pb-3">Filtros</span>

        <div className="flex gap-2 mb-4">
          <Button
            text="Todos"
            color={getFiltroTipoButtonColor("todos")}
            onClick={() => setTipoFiltroTransacao("todos")}
          />
          <Button
            text="Depósitos"
            color={getFiltroTipoButtonColor("deposito")}
            onClick={() => setTipoFiltroTransacao("deposito")}
          />
          <Button
            text="Transferências"
            color={getFiltroTipoButtonColor("transferencia")}
            onClick={() => setTipoFiltroTransacao("transferencia")}
          />
        </div>

        <div className="flex w-full gap-4">
          <Input
            type="date"
            value={dataInicio}
            label="Data início:"
            labelTextBold={false}
            name="dataInicio"
            onValueChanged={(value) => setDataInicio(value)}
          />
          <Input
            type="date"
            value={dataFim}
            label="Data fim:"
            labelTextBold={false}
            name="dataFim"
            onValueChanged={(value) => setDataFim(value)}
          />
        </div>
      </div>

      <ListaTransacoes transacoes={transacoesFiltradas} showActions={true} />
    </div>
  );
}
