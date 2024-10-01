// /app/page.js
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Container from "../components/contanier";
import { getSaldo, getTransacoes } from "@/app/services/transacoesServices";

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }


  return (
    <Container />
  );
}
