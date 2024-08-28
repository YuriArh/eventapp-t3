import _ from "lodash";

import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ru"] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid

  if (!_.includes(locales, locale)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
