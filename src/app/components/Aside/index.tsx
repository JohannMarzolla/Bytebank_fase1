import Link from "next/link";

export default function Aside() {
  return (
    <ul className="flex list-none gap-4 lg:bg-[#F8F8F8] pt-8 pb-8 m-0 rounded-lg text-center lg:w-[180px] lg:p-8 lg:flex-col">
      <li className="flex-1 lg:flex-none pb-4 border-solid border-b-[1px] border-[#47A138] font-bold">
        <Link href="/home" className="text-[#47A138] hover:text-gray-500">
          Início
        </Link>
      </li>
      <li className="flex-1 lg:flex-none pb-4 lg:border-solid lg:border-b-[1px] border-black ">
        <Link href="/transferencias" className="text-black hover:text-gray-500">
          Transferências
        </Link>
      </li>
      <li className="flex-1 lg:flex-none pb-4 lg:border-solid lg:border-b-[1px] border-black ">
        <Link href="/investimentos" className="text-black hover:text-gray-500">
          Investimentos
        </Link>
      </li>
      <li className="flex-1 lg:flex-none pb-4">
        <Link href="/outrosServicos" className="text-black hover:text-gray-500">
          Outros Serviços
        </Link>
      </li>
    </ul>
  );
}
