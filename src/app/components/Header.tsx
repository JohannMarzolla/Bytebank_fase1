"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full bg-black h-24 flex justify-between items-center px-20">
      <div>
        <Image src="/logo.svg" width={150} height={80} alt="Logo" />
      </div>

      <div className="flex gap-6">
        <Button color="green" text="Abrir minha conta" onClick={() => router.push("/nova-conta")} />
        <Button color="green" text="Já tenho conta" outlined={true} onClick={() => router.push("/login")} />
      </div>
    </header>
  );
}
