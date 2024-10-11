import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { TransacoesProvider } from "./context/TransacoesContext";

export const metadata: Metadata = {
  title: "Tech challenger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <header>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </header>
      <body className="flex flex-col overflow-hidden h-screen w-screen bg-[#E4EDE3]">
        <Header />
        <TransacoesProvider>
          <main className="flex flex-col h-full w-full overflow-scroll">{children}</main>
        </TransacoesProvider>
      </body>
    </html>
  );
}
