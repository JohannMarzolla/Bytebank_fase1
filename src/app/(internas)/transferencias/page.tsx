import Aside from "../../components/Aside";
import TransacoesPage from "@/app/components/TransacoesPage";

export default function transferencias() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center overflow-auto w-full lg:w-[1024px]  mx-auto max-sm:px-6 max-md:px-[3.75rem] p-6 pb-8 h-full gap-8 lg:gap-4">
      <Aside removeOnMobile={true} />
      <div className="flex flex-col w-full h-max gap-8">
        <TransacoesPage />
      </div>
    </div>
  );
}
