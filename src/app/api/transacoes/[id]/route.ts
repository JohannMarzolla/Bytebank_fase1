import { NextRequest, NextResponse } from "next/server";
import TransacoesRepository from "../transacoesRepository";

const transacoesRepository = new TransacoesRepository();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const transacaoId = parseInt(params.id, 10);  
    
    if (isNaN(transacaoId) || transacaoId <= 0) {
        return NextResponse.json({ error: "transacaoId não fornecido ou inválido." }, { status: 400 });
    }

    try {
    
        const transacao = await transacoesRepository.getTransacoesById(transacaoId);

        if (!transacao) {
            return NextResponse.json({ error: "Transação não encontrada." }, { status: 404 });
        }

        return NextResponse.json(transacao, { status: 200 });

    } catch (error) {
        console.error("Erro ao buscar transação:", error);
        return NextResponse.json({ error: "Erro ao buscar transação." }, { status: 500 });
    }
}


export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const transacaoId = parseInt(params.id, 10); 
  const body = await req.json();
  const { tipoTransacao, valor, date } = body;


  if (isNaN(transacaoId) || transacaoId <= 0) {
    return NextResponse.json({ error: "transacaoId não fornecido ou inválido." }, { status: 400 });
  }

  try {
   
    const transacaoExistente = await transacoesRepository.getTransacoesById(transacaoId);

    if (!transacaoExistente) {
      return NextResponse.json({ error: "Transação não encontrada." }, { status: 404 });
    }

 
    const transacaoAtualizada = await transacoesRepository.updateTransacao(
      transacaoId,
      tipoTransacao,
      valor,
      new Date(date) 
    );

    return NextResponse.json(transacaoAtualizada, { status: 200 });

  } catch (error) {
    console.error("Erro ao atualizar transação:", error);
    return NextResponse.json({ error: "Erro ao atualizar transação." }, { status: 500 });
  }
}
