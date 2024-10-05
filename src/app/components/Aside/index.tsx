import Link from "next/link";

export default function Aside() {
    return (
        <ul className="list-none p-0 m-0">
            <li className="mb-2">
                <Link href="/home" className="text-black hover:text-gray-800 font-bold">
                    Início
                </Link>
            </li>
            <li className="mb-2">
                <Link href="/investimentos" className="text-black hover:text-gray-800 font-bold">
                    Investimentos
                </Link>
            </li>
            <li className="mb-2">
                <Link href="/transferencias" className="text-black hover:text-gray-800 font-bold">
                    Transferências
                </Link>
            </li>
            <li className="mb-2">
                <Link href="/outrosServicos" className="text-black hover:text-gray-800 font-bold">
                    Outros Serviços
                </Link>
            </li>
        </ul>
    );
}
