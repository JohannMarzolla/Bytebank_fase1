import { PrismaClient, Transacao } from "@prisma/client";

export default class TransacoesRepository {
  private db: PrismaClient = new PrismaClient();

  async getTransacoesByUserId(userId: number): Promise<Transacao[] | null> {
    return this.db.transacao.findMany({
        where: { contaId: userId }
    });
}
async getTransacoesById(transacaoId : number )  {
    return this.db.transacao.findUnique({
        where: { id : transacaoId}
    })
    
}
async updateTransacao(transacaoId: number, tipoTransacao: string, valor: number, date: Date) {
    return this.db.transacao.update({
        where: { id: transacaoId }, 
        data: {
            tipoTransacao,
            valor,
            date
        }
    });
}

async createTransacao(userId: number, tipoTransacao: string, valor: number, date: Date) {
    return this.db.transacao.create({
        data: {
            contaId: userId,
            tipoTransacao, 
            valor,
            date
        }

    });
}

}