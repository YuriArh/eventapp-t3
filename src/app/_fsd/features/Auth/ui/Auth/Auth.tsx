"use client";

import { User } from "@nextui-org/react";
import { useAuthModel } from "../../model";
import { AuthButton } from "../AuthButton";
import { AuthModal } from "../AuthModal";

export const Auth = () => {
  const { onOpen, isOpen, onOpenChange, status, data } = useAuthModel();

  if (status === "authenticated") {
    return <User name={data?.user.name} />;
  }

  return (
    <>
      <AuthButton onPress={onOpen} />
      <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
