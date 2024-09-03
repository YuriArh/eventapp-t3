"use client";

import { Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import React from "react";

export const SignOutButton = () => {
  const t = useTranslations("Auth");
  const { status } = useSession();
  console.log(status);

  return (
    <Button
      color="danger"
      size="sm"
      onPress={() => signOut()}
      isDisabled={status !== "authenticated"}
      isLoading={status === "loading"}
    >
      {t("Sign out")}
    </Button>
  );
};
