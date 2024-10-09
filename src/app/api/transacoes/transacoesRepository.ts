import { Transacao } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import { DateTime } from "next-auth/providers/kakao";

export default class TransacoesRepository{

    private db : PrismaClient = new PrismaClient();
    async getTransacoesByUserId(userId: number): Promise<Transacao[] | null> { // Retorna um array
        return this.db.transacao.findMany({
            where: { contaId: userId } // Isso retornará todas as transações relacionadas ao userId
        });
    }

    async createTransacao(userId:number,tipoDeposito: string , valor: number, date: DateTime){
        return this.db.transacao.create({
            data:{
                contaId : userId,
                tipoDeposito,
                valor,
                date
            }
        })

    }
}