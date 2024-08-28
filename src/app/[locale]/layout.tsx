import clsx from "clsx";
import _ from "lodash";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import { locales } from "../../i18n";
import { Providers } from "../_providers";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={clsx(inter.className, "flex h-full flex-col")}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
