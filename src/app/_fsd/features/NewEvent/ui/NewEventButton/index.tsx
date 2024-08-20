"use client";
import { Button } from "@nextui-org/react";
import { useMessages, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

/**
 *
 * @returns {ReactNode} button to create a new event
 */

export function NewEventButton() {
  const t = useTranslations();

  return (
    <Button color="primary" size="sm">
      {t("LocaleLayout.newEvent")}
    </Button>
  );
}
