import { NextRequest, NextResponse } from 'next/server';
import TransacoesRepository from './transacoesRepository';

const transacoesRepository = new TransacoesRepository();

export async function GET(req: NextRequest) {
  const userId = parseInt(req.nextUrl.searchParams.get('userId') || '0', 10);

  if (isNaN(userId) || userId <= 0) {
    return NextResponse.json({ error: "userId não fornecido ou inválido." }, { status: 400 });
  }

  try {
    const transacoes = await transacoesRepository.getTransacoesByUserId(userId);

    if (!transacoes ) {
      return NextResponse.json({ error: "transação não encontrada." }, { status: 404 });
    }
    return NextResponse.json(transacoes);
    
  } catch (error) {
    console.error("Erro ao buscar transações:", error);
    return NextResponse.json({ error: "Erro ao buscar transação." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json();
  const { userId, tipoTransacao, valor, date } = body; 

  try {
      if (!userId) {
          return NextResponse.json({ error: "userId não fornecido." }, { status: 400 });
      }
      const novaTransacao = await transacoesRepository.createTransacao(userId, tipoTransacao, valor, date);

      return Response.json(novaTransacao, { status: 201 });
  } catch (error) {
      console.error("Erro ao criar transação:", error);
      return NextResponse.json({ error: "Erro ao criar transação." }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const id = parseInt(req.nextUrl.searchParams.get('id') || '0', 10);
  const body = await req.json();
  const { tipoTransacao, valor, date } = body;

  if (isNaN(id) || id <= 0) {
    return NextResponse.json({ error: "id não fornecido ou inválido." }, { status: 400 });
  }

  try {
    const transacaoExistente = await transacoesRepository.getTransacoesById(id);

    if (!transacaoExistente) {
      return NextResponse.json({ error: "Transação não encontrada." }, { status: 404 });
    }

    const transacaoAtualizada = await transacoesRepository.updateTransacao(id, tipoTransacao, valor, date);

    return NextResponse.json(transacaoAtualizada, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar transação:", error);
    return NextResponse.json({ error: "Erro ao atualizar transação." }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest) {
  const id = parseInt(req.nextUrl.searchParams.get('id') || '0', 10);

  if (isNaN(id) || id <= 0) {
    return NextResponse.json({ error: "ID não fornecido ou inválido." }, { status: 400 });
  }

  try {
    const transacaoDeletada = await transacoesRepository.DeletarTransacao(id);

    if (!transacaoDeletada) {
      return NextResponse.json({ error: "Transação não encontrada." }, { status: 404 });
    }

    return NextResponse.json({ message: "Transação deletada com sucesso." }, { status: 200 });

  } catch (error) {
    console.error("Erro ao deletar transação:", error);
    return NextResponse.json({ error: "Erro ao deletar transação." }, { status: 500 });
  }
}
