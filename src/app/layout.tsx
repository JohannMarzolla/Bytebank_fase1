import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { TransacoesProvider } from "./context/TransacoesContext";
import Footer from "./components/footer";
import { SessionProvider } from "./context/SessionProvider";


export const metadata: Metadata = {
  title: "Bytebank",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <head>
        <link 
        href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        rel="stylesheet" />
      </head>
      <SessionProvider>
      <TransacoesProvider >

      <body className="flex flex-col overflow-hidden h-screen w-screen bg-[#E4EDE3]">   
        <Header/>
          <main className="flex flex-col h-full w-full overflow-hidden">{children}</main>
        <Footer/>
      </body>

      </TransacoesProvider>
      </SessionProvider>
    </html>
  );
}