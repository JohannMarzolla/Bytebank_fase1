"use client";

import Aside from "../Aside";
import CardNovaTransacao from "../CardNovaTransacao";
import Extrato from "../Extrato";
import Saldo from "../Saldo";

export default function Container() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center overflow-auto max-sm:px-6 max-md:px-[3.75rem] p-6 pb-0 w-full h-full">
      <Aside />
      <div className="flex flex-col w-full lg:px-4 lg:max-w-[690px] pb-6 h-max">
        <Saldo />
        <CardNovaTransacao />
      </div>
      <Extrato />
    </div>
  );
}
