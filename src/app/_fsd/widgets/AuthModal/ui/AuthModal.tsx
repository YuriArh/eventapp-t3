"use client";

import { Button, Tab, Tabs } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import React from "react";
import { SignInForm, SignUpForm } from "~/features/Auth";
import { SIGN_IN_MODAL } from "~/shared/constants/AuthConstants";
import { useQueryModal } from "~/shared/hooks/useQueryModal";
import { ModalLayout } from "~/shared/ui";

export const AuthModal = () => {
  const { isOpen, onDismiss } = useQueryModal({ modalQuery: SIGN_IN_MODAL });

  const tabs = [
    {
      id: "signIn",
      label: "Sign In",
      content: <SignInForm />,
    },
    {
      id: "signUp",
      label: "Sign Up",
      content: <SignUpForm />,
    },
  ];

  const authLangs = useTranslations("Auth");

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      onDismiss();
    }
  };

  return (
    <ModalLayout
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
      isKeyboardDismissDisabled={true}
      title={authLangs("Sign in")}
    >
      <div className="flex flex-col items-center justify-center gap-y-5">
        <Tabs items={tabs}>
          {(item) => (
            <Tab key={item.id} title={item.label}>
              {item.content}
            </Tab>
          )}
        </Tabs>

        <Button
          color="primary"
          onPress={() => signIn("discord")}
          className="w-2/5"
        >
          discord
        </Button>
      </div>
    </ModalLayout>
  );
};
