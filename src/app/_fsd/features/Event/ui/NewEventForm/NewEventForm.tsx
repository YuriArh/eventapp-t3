import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

/**
 * A functional component for rendering a new event form, handling user input, and form submission.
 *
 * @return {JSX.Element} The JSX element representing the new event form.
 */
export const NewEventForm = () => {
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

    setLoading(false);
  }, []);

  const langs = useTranslations("NewEvent");

  return (
    <form
      className="flex w-full flex-col gap-y-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        fullWidth
        isClearable
        placeholder={langs("Email")}
        {...register("email")}
      />
      {errors.email?.message}
      <Input
        fullWidth
        isClearable
        placeholder="password"
        {...register("password")}
      />
      {errors.password?.message}
      {error}

      <Button isLoading={loading} type="submit">
        {langs("Sign in")}
      </Button>
    </form>
  );
};
