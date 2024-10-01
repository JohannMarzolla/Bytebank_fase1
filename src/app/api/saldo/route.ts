// app/api/saldo/route.ts
import { NextResponse } from 'next/server';

// Variável para manter o saldo em memória (apenas para fins de exemplo)
let saldo = 1000;

// Método GET para obter o saldo
export async function GET() {
  return NextResponse.json({ saldo });
}

// Método POST para atualizar o saldo
export async function POST(req: Request) {
  const { novoSaldo } = await req.json();
  saldo = novoSaldo;
  return NextResponse.json({ saldo });
}