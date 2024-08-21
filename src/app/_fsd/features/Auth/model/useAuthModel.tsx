import { useDisclosure } from "@nextui-org/react";

export const useAuthModel = () => {
  const methods = useDisclosure();

  return methods;
};
