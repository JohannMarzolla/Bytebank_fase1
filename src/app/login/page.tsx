import Footer from "../components/footer";
import HeaderInicial from "../components/HeaderInicial";
import LoginForm from "./LoginForm";

export default async function Page() {
  return (
    <main className="flex flex-col overflow-hidden h-screen w-screen bg-gradient-to-b from-fiap-navy-blue to-white">
      <HeaderInicial />
      <div className="flex flex-col justify-between h-full w-full overflow-x-hidden overflow-y-scroll">
        <div className="flex flex-col">
          <div className="flex justify-center w-full h-full sm:p-10 max-sm:py-5">
            <LoginForm />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
