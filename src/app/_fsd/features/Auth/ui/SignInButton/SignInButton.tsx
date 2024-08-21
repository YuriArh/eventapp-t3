import { Button, type ButtonProps } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import type { SignInButtonProps } from "./SignInButton.props";

export const SignInButton = (props: SignInButtonProps) => {
  const { onPress } = props;

  const t = useTranslations("Auth");

  return (
    <Button color="secondary" size="sm" onPress={onPress}>
      {t("Sign in")}
    </Button>
  );
};
