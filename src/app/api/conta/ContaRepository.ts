import { Conta } from "@/shared/models/Conta";
import { PrismaClient } from "@prisma/client";

export default class ContaRepository {
  private db: PrismaClient = new PrismaClient();

  async criar(email: string, nome: string, senha: string): Promise<Conta> {
    const novaConta = await this.db.conta.create({
      data: {
        email,
        nome,
        senha,
      },
    });

   
    await this.db.saldo.create({
      data: {
        contaId: novaConta.id,
        total: 0,  
      },
    });

    return novaConta;
  }
    
  async findByEmail(email: string): Promise<Conta> {
    return (await this.db.conta.findFirst({ where: { email } })) as Conta;
  }
}
