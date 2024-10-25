import ListaTransacoes from "@/app/components/ListaTransacoes";
import Aside from "../../components/Aside";

export default function transferencias() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center overflow-auto max-sm:px-6 max-md:px-[3.75rem] p-6 pb-8 w-full h-full gap-8 lg:gap-4">
      <Aside removeOnMobile={true} />
      <div className="flex flex-col w-full lg:max-w-[690px] h-max gap-8">
        <ListaTransacoes/>
      </div>

    </div>
  );
}
