"use client";

import { useSessionContext } from "@/app/context/SessionContext";
import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function HeaderLogado({session} : any) {


  return (
    <header className="flex justify-between items-center w-full bg-[#004D61] text-white h-24 px-20">
      <Button text="Sair" color="green" onClick={() => signOut({ callbackUrl: "/" })}></Button>
      <div className="flex items-center">
        <span className="pr-4">{session?.user.name}</span>
        <Image className="" src="/avatar-header.png" width={40} height={40} alt="Imagem da conta" />
      </div>
    </header>
  );
}
