import { HydrateClient } from "~/trpc/server";
import { MainTools } from "~/widgets/MainTools";
import { NewEventModal } from "~/widgets/NewEventModal";
import { CustomMap } from "~/features/Map/";

type Props = {
  params: { locale: string };
  searchParams: Record<string, string> | null | undefined;
};

export default function HomePage({ params: { locale }, searchParams }: Props) {
  return (
    <HydrateClient>
      <main>
        <div className="relative flex h-screen w-screen overflow-hidden">
          <MainTools />
          <CustomMap />
          <NewEventModal />
        </div>
      </main>
    </HydrateClient>
  );
}
