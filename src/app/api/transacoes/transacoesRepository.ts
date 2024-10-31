import { PrismaClient, Transacao } from "@prisma/client";
import SaldoRepository from "../saldo/saldoRepository";

export default class TransacoesRepository {
  private db: PrismaClient = new PrismaClient();
  private saldoRepository = new SaldoRepository();

  async getTransacoesByUserId(userId: number): Promise<Transacao[] | null> {
    return this.db.transacao.findMany({
      where: { contaId: userId },
    });
  }

  async getTransacoesById(transacaoId: number) {
    return this.db.transacao.findUnique({
      where: { id: transacaoId },
    });
  }

  async updateTransacao(transacaoId: number, tipoTransacao: string, valor: number, date: Date) {
    const transacao = await this.getTransacoesById(transacaoId);

    if (transacao !== null) {
      const saldo = await this.saldoRepository.findByUserId(transacao.contaId);

      if (saldo != null) {
        let newSaldo =
          transacao.tipoTransacao === "transferencia"
            ? saldo.total + (transacao.valor ?? 0)
            : saldo.total - (transacao.valor ?? 0);

        newSaldo =
          tipoTransacao === "transferencia"
            ? saldo.total - (transacao.valor ?? 0)
            : saldo.total + (transacao.valor ?? 0);

        await this.saldoRepository.updateSaldo(transacao.contaId, newSaldo);
      }
    }

    return this.db.transacao.update({
      where: { id: transacaoId },
      data: {
        tipoTransacao,
        valor,
        date,
      },
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

  async DeletarTransacao(transacaoId: number) {
    const transacao = await this.getTransacoesById(transacaoId);

    if (transacao !== null) {
      const saldo = await this.saldoRepository.findByUserId(transacao.contaId);

      if (saldo != null) {
        const newSaldo =
          transacao.tipoTransacao === "transferencia"
            ? saldo.total + (transacao.valor ?? 0)
            : saldo.total - (transacao.valor ?? 0);

        await this.saldoRepository.updateSaldo(transacao.contaId, newSaldo);
      }
    }

    return this.db.transacao.delete({
      where: {
        id: transacaoId,
      },
    });
  }
}
