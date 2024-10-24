"use client";

import Button from "@/components/ui/Button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const { data: session } = useSession();

  function toHome() {
    const path = !session ? "/" : "/home";
    router.push(path);
  }

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center text-black gap-6">
        <span className="text-2xl font-bold"> Ops! Não encontramos a página... </span>
        <p className="text-center leading-5">
          E olha que exploramos o universo procurando por ela!
          <br /> Que tal voltar e tentar novamente?
        </p>
        <Button text="Voltar ao início" color="orange" onClick={() => toHome()} />
      </div>
      <Image className="pt-8" src="/ilustracao-404.png" width={400} height={300} alt="Imagem 404" />
    </div>
  );
}
