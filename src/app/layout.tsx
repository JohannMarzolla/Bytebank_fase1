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
        <body>
          <Header />

          <div>{children}</div>
        </body>
      </html>
    </TransacoesProvider>
  );
}
