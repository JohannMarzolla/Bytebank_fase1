"use client";

import Link from "next/link";

export interface AsideOptions {
  removeOnMobile?: boolean;
  onRouteClicked?: { (): void };
}

export default function Aside(options: AsideOptions) {
  function onLinkClicked() {
    if (options?.onRouteClicked) options.onRouteClicked();
  }

  return (
    <ul
      className={`${
        options?.removeOnMobile ? "max-sm:hidden" : ""
      } flex max-sm:flex-col lg:flex-col list-none gap-4 lg:bg-[#F8F8F8]  m-0 rounded-lg text-center lg:w-[180px] lg:p-8`}
    >
      <li className="flex-1 lg:flex-none pb-4 border-solid border-b-[1px] border-[#47A138] font-bold">
        <Link href="/home" className="text-[#47A138] hover:text-gray-500" onClick={() => onLinkClicked()}>
          Início
        </Link>
      </li>
      <li className="flex-1 lg:flex-none md:pb-4 lg:border-solid lg:border-b-[1px] border-black ">
        <Link href="/transferencias" className="text-black hover:text-gray-500" onClick={() => onLinkClicked()}>
          Transferências
        </Link>
      </li>
      <li className="flex-1 lg:flex-none md:pb-4 lg:border-solid lg:border-b-[1px] border-black ">
        <Link href="/investimentos" className="text-black hover:text-gray-500" onClick={() => onLinkClicked()}>
          Investimentos
        </Link>
      </li>
      <li className="flex-1 lg:flex-none md:pb-4">
        <Link href="/outrosServicos" className="text-black hover:text-gray-500" onClick={() => onLinkClicked()}>
          Outros Serviços
        </Link>
      </li>
    </ul>
  );
}
