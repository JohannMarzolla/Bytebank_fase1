import { Conta } from "@/shared/models/Conta";
import { PrismaClient } from "@prisma/client";

export default class ContaRepository {
  private db: PrismaClient = new PrismaClient();

  async criar(email: string, nome: string, senha: string): Promise<Conta> {
    return await this.db.conta.create({
      data: {
        senha,
        email,
        nome,
      },
    });
  }

  async findByEmail(email: string): Promise<Conta> {
    return (await this.db.conta.findFirst({ where: { email } })) as Conta;
  }
}
