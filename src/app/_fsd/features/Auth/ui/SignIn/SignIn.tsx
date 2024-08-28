"use client";

import { useAuthModel } from "../../model";
import { SignInButton } from "../SignInButton";
import { SignInModal } from "../SignInModal";

export const SignIn = () => {
  const { onOpen, isOpen, onOpenChange } = useAuthModel();

  return (
    <>
      <SignInButton onPress={onOpen} />
      <SignInModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
