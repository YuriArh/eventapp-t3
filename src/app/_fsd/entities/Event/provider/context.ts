import type { useDisclosure } from "@nextui-org/react";
import { createContext, useContext } from "react";

type UseDisclosureReturn = ReturnType<typeof useDisclosure>;

export const EventModalContext = createContext<null | UseDisclosureReturn>(
  null
);

export const useEventModal = () =>
  useContext(EventModalContext) as UseDisclosureReturn;
