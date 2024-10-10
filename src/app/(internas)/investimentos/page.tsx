// app/(internas)/transacoes/page.js
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Aside from "../../components/Aside";
import Extrato from "../../components/Extrato";

export default async function transferencias() {
  const session = await getServerSession();

  
  if (!session) {
    redirect("/login");
    return null;
  }

  return (
    <div>
      <p>Bem-vindo à página de investimentos!</p>
      <Aside />
      <Extrato />
    </div>
  );
}
