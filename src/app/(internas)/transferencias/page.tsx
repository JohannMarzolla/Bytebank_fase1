import Aside from "../../components/Aside";
import Saldo from "../../components/Saldo";

export default async function transferencias() {
  return (
    <div>
      <Aside removeOnMobile={true} />
      <p>Bem-vindo à página de transferencias</p>
      <Saldo />
    </div>
  );
}
