"use client";

import Aside from "../Aside";
import CardNovaTransacao from "../CardNovaTransacao";
import Extrato from "../Extrato";
import Saldo from "../Saldo";

export default function Container() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center overflow-auto max-sm:px-6 max-md:px-[3.75rem] p-6 pb-8 w-full h-full gap-8 lg:gap-4">
      <Aside removeOnMobile={true} />
      <div className="flex flex-col w-full lg:max-w-[690px] h-max gap-8">
        <Saldo />
        <CardNovaTransacao />
      </div>
      <Extrato />
    </div>
  );
}
