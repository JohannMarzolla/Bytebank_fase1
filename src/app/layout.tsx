import type { Metadata } from "next";
import "./globals.css";
import { TransacoesProvider } from "./context/TransacoesContext";
import { SessionProvider } from "./context/SessionProvider";
import LayoutInicial from "./components/LayoutInicial";

export const metadata: Metadata = {
  title: "Bytebank",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <SessionProvider>
        <TransacoesProvider>
          <body>
            <LayoutInicial>{children}</LayoutInicial>
          </body>
        </TransacoesProvider>
      </SessionProvider>
    </html>
  );
}
