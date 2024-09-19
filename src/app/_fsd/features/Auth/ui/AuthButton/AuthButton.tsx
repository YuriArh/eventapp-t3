'use client'

import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { SIGN_IN_MODAL } from "~/shared/constants/AuthConstants";
import { useQueryModal } from "~/shared/hooks/useQueryModal";


export const AuthButton = () => {
  const {openModal} = useQueryModal({ modalQuery: SIGN_IN_MODAL });

  const t = useTranslations("Auth");

  return (
    <Button color="secondary" size="sm" onPress={openModal}>
      {t("Sign in")}
    </Button>
  );
};
