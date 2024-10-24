"use client";

import { useSession } from "next-auth/react";
import Header from "../Header";
import Footer from "../footer";

export default function Body({ children }: Readonly<{ children: React.ReactNode }>) {
  const { data: session } = useSession();

  return (
    <body
      className={`flex flex-col overflow-hidden h-screen w-screen ${
        !session ? "bg-gradient-to-b from-[#004D61] to-[#FFFFFF]" : "bg-[#E4EDE3]"
      } `}
    >
      <Header />
      <div className="flex flex-col justify-between h-full w-full overflow-x-hidden overflow-y-scroll">
        <main className="flex flex-col">{children}</main>
        <Footer />
      </div>
    </body>
  );
}
