"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

import type { NewEventButtonProps } from "./SignInButton.props";

/**
 *
 * @returns {ReactNode} button to create a new event
 */

export function NewEventButton(props: NewEventButtonProps) {
  const { onPress } = props;
  const t = useTranslations();

  return (
    <Button color="primary" size="sm" onPress={onPress}>
      {t("LocaleLayout.newEvent")}
    </Button>
  );
}
