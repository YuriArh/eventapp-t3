"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { setUserLocale } from "~/shared/services/locale";
import { Locale } from "~/i18n/config";
import { routing, usePathname, useRouter } from "~/i18n/routing";

const LangSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const t = useTranslations("LocaleSwitcher");

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value as Locale;

    setUserLocale(selectedLocale);
  };

  return (
    <Select
      labelPlacement="outside-left"
      label={t("label")}
      className="w-max"
      defaultSelectedKeys={[locale]}
      onChange={handleLocaleChange}
      selectedKeys={[locale]}
    >
      {routing.locales.map((cur) => (
        <SelectItem key={cur}>{t("locale", { locale: cur })}</SelectItem>
      ))}
    </Select>
  );
};

export default LangSelector;
