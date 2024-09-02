"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, Input, Tab, Tabs } from "@nextui-org/react";
import { type UseDisclosureReturn } from "@nextui-org/use-disclosure";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { type ISignUp, signUpSchema } from "~/server/api/schemas/authSchema";
import { api } from "~/trpc/react";
import { ModalLayout, PasswordInput } from "~/shared/ui";
import { SignInForm } from "../SignInForm";
import { SignUpForm } from "../SignUpForm";

export const AuthModal = (props: Partial<UseDisclosureReturn>) => {
  const { isOpen, onOpenChange } = props;

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

  return (
    <ModalLayout
      isOpen={isOpen}
      onOpenChange={onOpenChange}
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
