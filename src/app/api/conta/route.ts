import validaEmail from "@/app/shared/utils/validaEmail";
import { NextResponse } from "next/server";
import ContaRepository from "./ContaRepository";

export interface NovaContaDTO {
  nome: string;
  email: string;
  senha: string;
}

export async function POST(request: Request) {
  const dto: NovaContaDTO = await request.json();

  if (!dto || !dto?.email || !dto.nome || !dto.senha) {
    return NextResponse.json(null, { statusText: "Requisicao incompleta", status: 400 });
  }
  if (!validaEmail(dto.email)) {
    return NextResponse.json(null, { statusText: "Email invalido", status: 422 });
  }

  const contaRepository = new ContaRepository();
  const conta = await contaRepository.findByEmail(dto.email);
  if (conta) {
    return NextResponse.json(null, { statusText: "Ja existe uma conta com este email", status: 422 });
  }

  await contaRepository.criar(dto.email, dto.nome, dto.senha);
  return NextResponse.json(null, { status: 200 });
}
