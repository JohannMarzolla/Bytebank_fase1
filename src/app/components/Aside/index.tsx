import Link from "next/link";

export default function Aside() {
  return (
    <ul className="w-[180px] p-8 list-none m-0 text-center">
      <li className="pb-4 mb-4 border-solid border-b-[1px] border-[#47A138] font-bold">
        <Link href="/home" className="text-[#47A138] hover:text-gray-500">
          Início
        </Link>
      </li>
      <li className="pb-4 mb-4 border-solid border-b-[1px] border-black ">
        <Link href="/investimentos" className="text-black hover:text-gray-500">
          Investimentos
        </Link>
      </li>
      <li className="pb-4 mb-4 border-solid border-b-[1px] border-black ">
        <Link href="/transferencias" className="text-black hover:text-gray-500">
          Transferências
        </Link>
      </li>
      <li className="pb-4 mb-4">
        <Link href="/outrosServicos" className="text-black hover:text-gray-500">
          Outros Serviços
        </Link>
      </li>
    </ul>
  );
}
