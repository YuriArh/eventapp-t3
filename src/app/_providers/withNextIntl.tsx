import { NextIntlClientProvider, useMessages } from "next-intl";
import React, { type ReactNode } from "react";

export function withNextIntl({ children }: { children: ReactNode }) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
