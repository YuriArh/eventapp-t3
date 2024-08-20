import { redirect } from "next/navigation";
import { api, HydrateClient } from "~/trpc/server";

export default async function RootPage() {
  redirect("/en");
}
