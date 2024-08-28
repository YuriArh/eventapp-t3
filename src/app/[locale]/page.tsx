import { unstable_setRequestLocale } from "next-intl/server";
import { HydrateClient } from "~/trpc/server";
import { MainTools } from "~/widgets/MainTools";
import { CustomMap } from "~/features/Map/";

type Props = {
  params: { locale: string };
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ params: { locale }, searchParams }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <HydrateClient>
      <main>
        <div className="relative flex h-screen w-screen">
          <MainTools />
          <CustomMap />
        </div>
      </main>
    </HydrateClient>
  );
}
