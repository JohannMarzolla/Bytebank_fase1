"use client";

import { useTransacoesContext } from "../../context/TransacoesContext";



export default function Saldo() {
  const { saldo } = useTransacoesContext();

  return (
    <>
      {saldo ? <p>Saldo: {saldo}</p> : <p>Saldo indisponível no momento</p>}
    </>
  );
}
