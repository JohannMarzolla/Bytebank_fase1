"use client";

import { FormEvent, useState } from "react";
import Input from "@/components/forms/Input";
import InputCheckbox from "@/components/forms/InputCheckbox";
import validaEmail from "@/shared/utils/validaEmail";

interface NovaContaDTO {
  nome: string;
  email: string;
  senha: string;
}

interface NovaContaForm {
  nome: string;
  email: string;
  senha: string;
  termoAceito: boolean;
}

interface NovaContaFormErrors {
  nome?: string;
  email?: string;
  senha?: string;
  termoAceito?: string;
}

export default function NovaContaForm() {
  const [errors, setErrors] = useState<NovaContaFormErrors>({});
  const [showToast, setShowToast] = useState<boolean>(false);
  const [httpError, setHttpError] = useState<string>();
  const [formValues, setFormValues] = useState<NovaContaForm>({ email: "", nome: "", senha: "", termoAceito: false });

  function handleOnChange(field: string, value: any) {
    setFormValues({ ...formValues, [field]: value });
  }

  async function criarConta(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowToast(false);
    setHttpError(undefined);

    const errors = Validation(formValues);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const data: NovaContaDTO = {
        nome: formValues.nome,
        email: formValues.email,
        senha: formValues.senha,
      };

      await fetch("http://localhost:3000/api/conta", {
        method: "POST",
        body: JSON.stringify(data),
      }).then((result: Response) => {
        if (result.status === 200) {
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 2000);
        } else {
          setHttpError(result.statusText);
        }
      });
    }
  }

  function Validation(value: NovaContaForm) {
    const error: NovaContaFormErrors = {};

    if (!value.email) {
      error.email = "Email é obrigatório";
    } else if (!validaEmail(value.email)) {
      error.email = "Email inválido";
    }

    if (!value.nome) error.nome = "Nome é obrigatório";
    if (!value.senha) error.senha = "Senha é obrigatório";
    if (!value.termoAceito) error.termoAceito = "Necessário aceitar os termos";

    return error;
  }

  return (
    <div className="bg-white h-full max-w-[93%]  overflow-hidden">
      <form
        className="bg-white p-12 rounded-lg lg:w-[650px] max-w-full flex justify-center items-center flex-col gap-6"
        onSubmit={criarConta}
        autoComplete="off"
      >
        <h2 className="font-bold text-xl mb-3">Preencha os campos abaixo para criar sua conta corrente!</h2>

        <Input
          name="nome"
          type="text"
          label="Nome"
          placeholder="Digite seu nome completo"
          error={errors.nome}
          onValueChanged={(value) => handleOnChange("nome", value)}
        />

        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          error={errors.email}
          onValueChanged={(value) => handleOnChange("email", value)}
        />

        <Input
          name="senha"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          error={errors.senha}
          onValueChanged={(value) => handleOnChange("senha", value)}
        />

        <InputCheckbox
          name="termoAceito"
          label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de
              Privacidade do banco."
          error={errors.termoAceito}
          onValueChanged={(value) => handleOnChange("termoAceito", value)}
        />

        <button className="btn bg-[#FF5031] text-white pl-7 pr-7" type="submit">
          Criar conta
        </button>
      </form>

      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>Conta cadastrada com sucesso</span>
          </div>
        </div>
      )}
      {httpError && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error">
            <span>{httpError}</span>
          </div>
        </div>
      )}
    </div>
  );
}
