import Button from "@/components/ui/Button";
import Link from "next/link";
import Footer from "./components/footer";
import HeaderInicial from "./components/HeaderInicial";

export default async function Home() {
  return (
    <main className="flex flex-col overflow-hidden h-screen w-screen bg-gradient-to-b from-fiap-navy-blue to-white">
      <HeaderInicial />
      <div className="flex flex-col justify-between h-full w-full overflow-x-hidden overflow-y-scroll">
        <div className="flex flex-col">
          <div className="bg-bottom  md:bg-cover sm:bg-contain md:min-h-screen">
            <div className="flex flex-col items-center lg:flex-row justify-between max-w-6xl mx-auto w-full mt-10">
              <h1 className="text-2xl font-bold text-black text-center lg:text-left mb-4 lg:mb-0 lg:w-1/2">
                Experimente mais liberdade no <br /> controle da sua vida financeira. <br /> Crie sua conta com a gente!
              </h1>
              <img src="/ilustracao-banner.svg" alt="" className="w-full lg:w-1/2 max-w-xs lg:max-w-none mx-auto" />
            </div>
            <div className="md:hidden flex justify-center mt-3 gap-6">
              <Link href="/nova-conta">
                <Button color="black" text="Abrir minha conta" />
              </Link>
              <Link href="/login">
                <Button color="transparent" text="Já tenho conta" outlined={true} />
              </Link>
            </div>
            <div className="flex flex-wrap justify-between max-w-6xl mx-auto w-full mt-10 mb-10">
              <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                <img src="/icon-gift.svg" alt="Conta e cartão gratuitos" className="mb-2" />
                <h2 className="text-lg font-bold text-fiap-green font-inter text-[20px] flex items-center mb-1">
                  Conta e cartão gratuitos
                </h2>
                <p className="text-center text-fiap-gray w-[280px] h-[57px] font-inter font-normal text-[16px] leading-[120%] flex items-center">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                <img src="/icon-money.svg" alt="Saques sem custo" className="mb-2" />
                <h2 className="text-lg font-bold text-fiap-green font-inter text-[20px] flex items-center mb-1">
                  Saques sem custo
                </h2>
                <p className="text-center text-fiap-gray w-[280px] h-[57px] font-inter font-normal text-[16px] leading-[120%] flex items-center">
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
                </p>
              </div>
              <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                <img src="/icon-star.svg" alt="Programa de pontos" className="mb-2" />
                <h2 className="text-lg font-bold text-fiap-green font-inter text-[20px] flex items-center mb-1">
                  Programa de pontos
                </h2>
                <p className="text-center text-fiap-gray w-[280px] h-[57px] font-inter font-normal text-[16px] leading-[120%] flex items-center">
                  Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!
                </p>
              </div>
              <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 p-4">
                <img src="/icon-devices.svg" alt="Seguro Dispositivos" className="mb-2" />
                <h2 className="text-lg font-bold text-fiap-green font-inter text-[20px] flex items-center mb-1">
                  Seguro Dispositivos
                </h2>
                <p className="text-center text-fiap-gray w-[280px] h-[57px] font-inter font-normal text-[16px] leading-[120%] flex items-center">
                  Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
