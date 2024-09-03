import { Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import React from "react";

export const ProfileLink = () => {
  const { data } = useSession();

  return <Link>{data?.user.name}</Link>;
};
