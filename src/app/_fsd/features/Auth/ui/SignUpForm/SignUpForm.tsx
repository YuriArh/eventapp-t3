'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { type ISignUp, signUpSchema } from "~/server/api/schemas/authSchema";
import { api } from "~/trpc/react";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const { mutateAsync } = api.signUp.signUp.useMutation({
    onSuccess: () => {
      console.log("work");
    },
  });

  const onSubmit = useCallback(
    async (data: ISignUp) => {
      console.log("work");
      const result = await mutateAsync(data);

      console.log(result);
    },
    [mutateAsync],
  );

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
      <Input fullWidth placeholder={"name"} isClearable {...register("name")} />
      {errors.name?.message}
      <Input
        fullWidth
        placeholder={"name"}
        isClearable
        {...register("password")}
      />
      {errors.password?.message}

      <Button type="submit">Sign Up</Button>
    </form>
  );
};
