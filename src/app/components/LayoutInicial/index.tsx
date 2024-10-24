"use client";

import { useSession } from "next-auth/react";
import Footer from "../footer";
import Loading from "@/components/ui/Loading";
import HeaderInicial from "../HeaderInicial";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LayoutInicial({ children }: Readonly<{ children: React.ReactNode }>) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen bg-[#E4EDE3]">
        <Loading />
      </div>
    );
  }

  if (status === "authenticated") {
    return <main className="flex flex-col">{children}</main>;
  }

  return (
    <div className="flex flex-col overflow-hidden h-screen w-screen bg-gradient-to-b from-[#004D61] to-[#FFFFFF]">
      <HeaderInicial />
      <div className="flex flex-col justify-between h-full w-full overflow-x-hidden overflow-y-scroll">
        <main className="flex flex-col">{children}</main>
        <Footer session={session} />
      </div>
    </div>
  );
}
