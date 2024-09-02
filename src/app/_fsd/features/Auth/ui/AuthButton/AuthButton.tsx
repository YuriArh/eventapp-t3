import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import type { AuthButtonProps } from "./AuthButton.props";

export const AuthButton = (props: AuthButtonProps) => {
  const { onPress } = props;

  const t = useTranslations("Auth");

  return (
    <Button color="secondary" size="sm" onPress={onPress}>
      {t("Sign in")}
    </Button>
  );
};
