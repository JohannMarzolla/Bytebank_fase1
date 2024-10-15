import { PrismaClient, Transacao } from "@prisma/client";

export default class TransacoesRepository {
  private db: PrismaClient = new PrismaClient();

  async getTransacoesByUserId(userId: number): Promise<Transacao[] | null> {
    return this.db.transacao.findMany({
      where: { contaId: userId },
    });
  }
  async createTransacao(userId: number, tipoTransacao: string, valor: number, date: Date) {
    return this.db.transacao.create({
      data: {
        contaId: userId,
        tipoTransacao,
        valor,
        date,
      },
    });
  }
}
