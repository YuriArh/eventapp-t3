import { useDisclosure } from "@nextui-org/react";
import { useSession } from "next-auth/react";

export const useAuthModel = () => {
  const { status } = useSession();
  const methods = useDisclosure();

  return { ...methods, status };
};
