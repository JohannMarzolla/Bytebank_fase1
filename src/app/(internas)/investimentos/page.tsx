// app/(internas)/transacoes/page.js
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Aside from "../../components/Aside";
import Extrato from "../../components/Extrato";

export default  function investimentos() {
 
  return (
    <div>
      <Aside />
      <p>Bem-vindo à página de investimentos!</p>
      <Extrato />
    </div>
  );
}
