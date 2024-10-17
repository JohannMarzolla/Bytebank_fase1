"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import Input from "@/components/forms/Input";
import validaEmail from "@/shared/utils/validaEmail";
import Button from "@/components/ui/Button";

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
  const router = useRouter();

  function handleOnChange(field: string, value: any) {
    setFormValues({ ...formValues, [field]: value });
  }

  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = Validation(formValues);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const result = await signIn("credentials", {
        ...formValues,
        redirect: false,
      });

      if (result?.ok) {
        router.push("/home");
      } else {
        alert("Login falhou");
      }
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
    <div className="max-w-[93%] overflow-hidden h-auto">
      <form
        className="flex justify-center items-center flex-col bg-[#F8F8F8] p-12 rounded-lg w-96 max-w-full gap-6"
        onSubmit={login}
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

        <Button type="submit" color="orange" text="Acessar" />

        {error === "CredentialsSignin" && <div className="text-red-500">Erro no login</div>}
      </form>
    </div>
  );
}
