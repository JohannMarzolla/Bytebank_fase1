"use client";

import Aside from "../Aside";
import CardNovaTransacao from "../CardNovaTransacao";
import Extrato from "../Extrato";
import Saldo from "../Saldo";

export default function Container() {
  return (
    <div className="flex flex-col lg:flex-row justify-center max-sm:px-6 max-md:px-[3.75rem] w-full">
      <Aside />
      <div className="flex flex-col w-full lg:p-4 lg:max-w-[690px]">
        <Saldo />
        <CardNovaTransacao />
      </div>
      <Extrato />
    </div>
  );
}
