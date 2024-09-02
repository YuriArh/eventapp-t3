"use client";

import { ProfileLink } from "~/features/Profile";
import { useAuthModel } from "../../model";
import { AuthButton } from "../AuthButton";
import { AuthModal } from "../AuthModal";

export const Auth = () => {
  const { onOpen, isOpen, onOpenChange, status } = useAuthModel();

  if (status === "authenticated") {
    return <ProfileLink />;
  }

  return (
    <>
      <AuthButton onPress={onOpen} />
      <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
