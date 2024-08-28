"use client";

import { type UseDisclosureReturn } from "@nextui-org/use-disclosure";
import { useTranslations } from "next-intl";
import React from "react";
import { ModalLayout } from "~/shared/ui";

export const NewEventModal = (props: Partial<UseDisclosureReturn>) => {
  const { isOpen, onOpenChange } = props;

  const t = useTranslations();

  return (
    <ModalLayout
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isKeyboardDismissDisabled={true}
      title=""
    >
      <div></div>
    </ModalLayout>
  );
};
