import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { type ILogin, loginSchema } from "~/server/api/schemas/authSchema";

export const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined | null>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = useCallback(async (data: ILogin) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      password: data.password,
      email: data.email,
    });
    setError(result?.error);
    setLoading(false);
  }, []);

  const authLangs = useTranslations("Auth");

  return (
    <form
      className="flex w-full flex-col gap-y-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        fullWidth
        placeholder={authLangs("Email")}
        isClearable
        {...register("email")}
      />
      {errors.email?.message}
      <Input
        fullWidth
        placeholder={"password"}
        isClearable
        {...register("password")}
      />
      {errors.password?.message}
      {error}

      <Button type="submit" isLoading={loading}>
        {authLangs("Sign in")}
      </Button>
    </form>
  );
};
