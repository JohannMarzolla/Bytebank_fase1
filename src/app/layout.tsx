import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { SessionProvider } from "./context/SessionContext";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { TransacoesProvider } from "./context/TransacoesContext";

export const metadata: Metadata = {
  title: "Tech challenger",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);


  if (!session) {
    redirect("/login");
    return null;
  }

  return (
    <html lang="pt-br">
      <head>
        <link 
        href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        rel="stylesheet" />
      </head>
      <SessionProvider session={session}>
      <TransacoesProvider session={session}>
      <body className="flex flex-col overflow-hidden h-screen w-screen bg-[#E4EDE3]">
        <Header />
       
          <main className="flex flex-col h-full w-full overflow-scroll">{children}</main>
       
      </body>
      </TransacoesProvider>
      </SessionProvider>
    </html>
  );
}