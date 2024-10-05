"use client";

import { createContext, useContext, ReactNode } from "react";
import { Session } from "next-auth";

// Criando o contexto
const SessionContext = createContext<Session | null>(null);

// Hook para usar o contexto
export const useSessionContext = () => {
  return useContext(SessionContext);
};

// Provider do contexto
interface SessionProviderProps {
  session: Session;
  children: ReactNode;
}

export function SessionProvider({ session, children }: SessionProviderProps) {
  return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>;
}
