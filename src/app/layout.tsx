import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { SessionProvider } from "./context/SessionContext";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Tech challenger",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="pt-br">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body className="flex flex-col h-screen w-screen overflow-hidden bg-[#E4EDE3]">
        <SessionProvider session={session}>
          <Header />
          <main className="flex flex-col h-full w-full overflow-hidden">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
