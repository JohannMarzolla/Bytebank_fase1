"use client";

import HeaderLogado from "./HeaderLogado";
import HeaderInicial from "./HeaderInicial";
import { useSessionContext } from "@/app/context/SessionContext";

export default function Header() {
  const session = useSessionContext();
  return <>{!session ? <HeaderInicial /> : <HeaderLogado />}</>;
}
