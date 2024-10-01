// app/api/transacoes/route.ts
import { NextResponse } from 'next/server';

// Dados mockados de transações
const transacoes: any[] = [
  {
    id: 1,
    tipoDeposito: 'deposito',
    valor: 200,
    date: '10/10/2010',
  },
  {
    id: 2,
    tipoDeposito: 'deposito',
    valor: 200,
    date: '10/11/2010',
  },
];

// Método GET para retornar todas as transações
export async function GET() {
  return NextResponse.json(transacoes); // Retorna as transações mockadas como JSON
}

// Tipo de parâmetros que você espera receber no POST
interface NovaTransacaoParams {
  tipoDeposito: string;
  valor: number;
  date: string;
}

// Método POST para adicionar uma nova transação
export async function POST(req: Request) {
  try {
    // Recebe os dados da requisição POST (corpo da requisição)
    const { tipoDeposito, valor, date }: NovaTransacaoParams = await req.json();

    // Cria uma nova transação
    const novaTransacao = {
      id: transacoes.length + 1, // Gera o ID automaticamente com base na quantidade atual de transações
      tipoDeposito,
      valor,
      date,
    };

    // Adiciona a nova transação ao array de transações
    transacoes.push(novaTransacao);

    // Retorna a nova transação como resposta
    return NextResponse.json(novaTransacao);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao adicionar a transação' }, { status: 400 });
  }
}
