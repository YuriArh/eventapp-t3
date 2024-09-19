"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useQueryModal } from "~/shared/hooks/useQueryModal";
import { NEW_EVENT_MODAL_QUERY } from "../../constants";

/**
 * Returns a button component that triggers the opening of a new event modal.
 *
 * @return {ReactNode} The button component.
 */

export function NewEventButton() {
  const { openModal } = useQueryModal({modalQuery: NEW_EVENT_MODAL_QUERY});
  const t = useTranslations();

  return (
    <Button color="primary" size="sm" onPress={openModal}>
      {t("LocaleLayout.newEvent")}
    </Button>
  );
}
