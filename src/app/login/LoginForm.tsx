"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "../components/Input";
import validaEmail from "../shared/utils/validaEmail";

interface LoginForm {
  email?: string;
  senha?: string;
}
interface LoginFormErrors {
  email?: string;
  senha?: string;
}

export default function LoginForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [formValues, setFormValues] = useState<LoginForm>({});
  const [errors, setErrors] = useState<LoginFormErrors>({});

  function handleOnChange(field: string, value: any) {
    setFormValues({ ...formValues, [field]: value });
  }

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = Validation(formValues);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      signIn("credentials", {
        ...formValues,
        callbackUrl: "/home",
      });
    }
  }

  function Validation(value: LoginForm) {
    const error: LoginFormErrors = {};

    if (!value.email) {
      error.email = "Email é obrigatório";
    } else if (!validaEmail(value.email)) {
      error.email = "Email inválido";
    }

    if (!value.senha) error.senha = "Password é obrigatório";

    return error;
  }

  return (
    <div className="bg-white h-full max-w-[93%] overflow-hidden">
      <form
        onSubmit={login}
        className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-6"
      >
        <h2 className="font-bold text-xl mb-3">Login</h2>

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

        <button className="btn bg-[#47A138] text-white w-full" type="submit">
          Acessar
        </button>

        {error === "CredentialsSignin" && <div className="text-red-500">Erro no login</div>}
      </form>
    </div>
  );
}
