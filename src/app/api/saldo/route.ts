import { NextRequest } from "next/server";
import SaldoRepository from "./saldoRepository";

const saldoRepository = new SaldoRepository(); 

export async function GET(req: NextRequest) {
  const userId = parseInt(req.nextUrl.searchParams.get('userId') || '0', 10); 
  
  if (!userId) {
    return Response.json({ error: "userId não fornecido." }, { status: 400 });
  }

  try {
    const saldo = await saldoRepository.findByUserId(userId); 
    
    if (!saldo) {
      return Response.json({ error: "Saldo não encontrado." }, { status: 404 }); 
    }

    return Response.json(saldo); 
  } catch (error) {
    console.error('Erro ao buscar saldo:', error);
    return Response.json({ error: "Erro ao buscar saldo." }, { status: 500 }); 
  }
}

export async function POST(req: Request) {
  try {
    const { userId, initialBalance } = await req.json(); 
    
    if (typeof userId !== 'number' || typeof initialBalance !== 'number') {
      return Response.json({ error: "userId e initialBalance devem ser números." }, { status: 400 });
    }
    const novoSaldo = await saldoRepository.createSaldo(userId, initialBalance);

    return Response.json(novoSaldo, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar saldo:', error);
    return Response.json({ error: "Erro ao criar saldo." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json(); 
    const { userId, newBalance } = body;

    if (typeof userId !== 'number' || typeof newBalance !== 'number') {
      return new Response(JSON.stringify({ error: "userId e newBalance devem ser números." }), { status: 400 });
    }
    if(newBalance < 0){
      return new Response(JSON.stringify({ error: " e newBalance deve ser maior que zero." }), { status: 400 });
    }

    const saldoRepository = new SaldoRepository();
    const updatedSaldo = await saldoRepository.updateSaldo(userId, newBalance);
    
    return new Response(JSON.stringify(updatedSaldo), { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar saldo:', error);
    return new Response(JSON.stringify({ error: "Erro ao atualizar saldo." }), { status: 500 });
  }
}