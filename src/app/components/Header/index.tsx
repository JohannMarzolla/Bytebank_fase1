"use client";

import HeaderLogado from "./HeaderLogado";
import HeaderInicial from "./HeaderInicial";
import { useSession } from "next-auth/react";

export default  function Header() {
  const { data: session } = useSession();
  console.log('session header',session )

  return <>{!session ? <HeaderInicial /> : <HeaderLogado session={session} />}</>;
}
