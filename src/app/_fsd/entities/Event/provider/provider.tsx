"use client";

import { useDisclosure } from "@nextui-org/react";
import { EventModalContext } from "./context";

interface IProps {
  children: JSX.Element;
}

export const EventModalProvider = ({ children }: IProps) => {
  const disclosure = useDisclosure();

  return (
    <EventModalContext.Provider value={disclosure}>
      {children}
    </EventModalContext.Provider>
  );
};
