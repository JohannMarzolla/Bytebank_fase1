import validaEmail from "@/app/shared/utils/validaEmail";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import ContaRepository from "../../conta/ContaRepository";

declare module "next-auth" {
  interface User {
    id: number;
  }
}

const handler = NextAuth({
  pages: { signIn: "/login" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        senha: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials?.email || !credentials?.senha || !validaEmail(credentials?.email)) return null;

        const contaRepository = new ContaRepository();
        const conta = await contaRepository.findByEmail(credentials.email);

        if (conta?.senha === credentials.senha) {
          return { id: conta.id, email: conta.email, name: conta.nome };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
