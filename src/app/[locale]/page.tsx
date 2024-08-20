import { AnimatePresence, LayoutGroup } from "framer-motion";
import { unstable_setRequestLocale } from "next-intl/server";
import { MainTools } from "~/widgets/MainTools";
import { CustomMap } from "~/widgets/Map";
import { EventModal } from "~/widgets/EventModal";
import { HydrateClient } from "~/trpc/server";

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
          <EventModal />
        </div>
      </main>
    </HydrateClient>
  );
}
