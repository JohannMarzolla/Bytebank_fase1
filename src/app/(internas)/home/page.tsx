import { getServerSession } from "next-auth/next"; 
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; 

import { getSaldo, getTransacoes } from '@/app/services/transacoesServices';
import Container from "@/app/components/contanier";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions); 

  if (!session || !session.user) {

    redirect('/login');
    return; 
  }

  const userId = session.user.id;
  const saldoInicial = await getSaldo(userId);
  const transacoesIniciais = await getTransacoes(userId);

  return (
    <Container saldoInicial={saldoInicial} transacoesIniciais={transacoesIniciais}  userId={userId} />
  );
}
