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
    <TransacoesProvider>
      <html lang="pt-br">
        <body className="h-screen w-screen bg-[#E4EDE3]">
          <Header />

          <main className="h-full w-full">{children}</main>
        </body>
      </html>
    </TransacoesProvider>
  );
}
