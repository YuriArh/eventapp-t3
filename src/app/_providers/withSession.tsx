import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export function withSession({
  children,
  session,
}: {
  children: JSX.Element;
  session?: Session;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
