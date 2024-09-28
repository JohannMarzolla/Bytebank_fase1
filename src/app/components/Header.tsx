"use client";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function navegarLogin() {
    router.push("/login");
  }

  return (
    <header className="w-full bg-black h-24 flex justify-between items-center pl-20 pr-20 ">
      <div>
        <Image src={logo} alt="Logo" />
      </div>

      <div className="flex gap-6">
        <button
          className="btn bg-[#47A138] border-[#47A138] text-white hover:bg-[#47A138]"
          onClick={() => router.push("/nova-conta")}
        >
          Abrir minha conta
        </button>
        <button className="btn btn-outline text-[#47A138] hover:bg-[#47A138]" onClick={() => router.push("/login")}>
          Já tenho conta
        </button>
      </div>
    </header>
  );
}
