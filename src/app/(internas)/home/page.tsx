import { redirect } from "next/navigation";
import Container from "../../components/contanier";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { SessionProvider } from "../../context/SessionContext";
import { TransacoesProvider } from "@/app/context/TransacoesContext";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <SessionProvider session={session}>
      <TransacoesProvider session={session}>
        <Container />
      </TransacoesProvider>
     
    </SessionProvider>
  );
}
