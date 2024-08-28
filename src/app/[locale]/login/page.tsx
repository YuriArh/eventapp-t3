"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
import { FormEvent, useState } from "react";
import { PageLayout } from "~/shared/ui";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export default function Login() {
  const locale = useLocale();
  const t = useTranslations("Auth");
  const [error, setError] = useState<string>();
  const router = useRouter();

  return (
    <PageLayout title={t("Sign in")}>
      <form
        action="/api/auth/callback/credentials"
        method="post"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: 300,
        }}
      >
        <label style={{ display: "flex" }}>
          <span style={{ display: "inline-block", flexGrow: 1, minWidth: 100 }}>
            {t("username")}
          </span>
          <input name="username" type="text" />
        </label>
        <label style={{ display: "flex" }}>
          <span style={{ display: "inline-block", flexGrow: 1, minWidth: 100 }}>
            {t("password")}
          </span>
          <input name="password" type="password" />
        </label>

        {error && <p>{t("error", { error })}</p>}
        <Button onPress={() => signIn("discord")}>
          api/auth/callback/discord
        </Button>
        <button type="submit">{t("submit")}</button>
      </form>
    </PageLayout>
  );
}
