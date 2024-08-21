import { useDisclosure } from "@nextui-org/react";

export const useNewEventModal = () => {
  const methods = useDisclosure();

  return methods;
};
