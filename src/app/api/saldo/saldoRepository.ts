import { PrismaClient, Saldo } from "@prisma/client";

export default class SaldoRepository {
  private db: PrismaClient = new PrismaClient();

  async findByUserId(userId: number): Promise<Saldo | null> {
    return this.db.saldo.findUnique({
      where: { contaId: userId },
    });
  }

  async updateSaldo(userId: number, novoSaldo: number): Promise<Saldo> {
    const exist = await this.findByUserId(userId);
    if (exist) {
      return this.db.saldo.update({
        where: { contaId: userId },
        data: { total: novoSaldo },
      });
    }

    return this.createSaldo(userId, novoSaldo);
  }

  async createSaldo(userId: number, initialBalance: number = 0): Promise<Saldo> {
    return this.db.saldo.create({
      data: {
        contaId: userId,
        total: initialBalance,
      },
    });
  }
}
