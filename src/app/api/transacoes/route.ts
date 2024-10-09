import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import TransacoesRepository from './transacoesRepository';

const transacoesRepository = new TransacoesRepository();

export async function GET(req : NextRequest) {
  const userId = parseInt(req.nextUrl.searchParams.get('userId') || '0', 10);

  if (!userId) {
    return Response.json({ error: "userId não fornecido." }, { status: 400 });
  }

  try {
    const transacoes =  await transacoesRepository.getTransacoesByUserId(userId)
    
    if(!transacoes){
      
      return Response.json({ error: "transacao não encontrado." }, { status: 404 }); 
    }
    return Response.json(transacoes);
   
    
  } catch (error) {
    console.error("Erro ao buscar transações:", error);
    return Response.json({ error: "Erro ao buscar transacao." }, { status: 500 }); 
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  const {userId , tipoDeposito , valor, date} = body

  try {
    if (!userId) {
      return NextResponse.json({ error: "userId não fornecido." }, { status: 400 });
    }

    const transacoesRepository = new TransacoesRepository();

    const novaTransacao = await transacoesRepository.createTransacao(userId, tipoDeposito, valor, date);

    return Response.json(novaTransacao,{status:201})

  } catch (error) {
    console.error("Erro ao criar transação:", error);
    return NextResponse.json({ error: "Erro ao criar transação." }, { status: 500 });
  }
}
