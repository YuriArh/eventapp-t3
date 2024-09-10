"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useNewEventModal } from "../../model";

/**
 *
 * @returns {ReactNode} button to create a new event
 */

export function NewEventButton() {
  const { openNewEventModal } = useNewEventModal();
  const t = useTranslations();

  return (
    <Button color="primary" size="sm" onPress={openNewEventModal}>
      {t("LocaleLayout.newEvent")}
    </Button>
  );
}
