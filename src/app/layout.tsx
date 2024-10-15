import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Tech challenger",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="flex flex-col h-screen w-screen overflow-hidden bg-[#E4EDE3]">
        <Header />
        <main className="flex flex-col h-full w-full overflow-scroll">{children}</main>
      </body>
    </html>
  );
}
