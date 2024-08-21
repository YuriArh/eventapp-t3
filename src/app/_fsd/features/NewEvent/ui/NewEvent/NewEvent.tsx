import { useDisclosure } from "@nextui-org/react";
import React from "react";
import { useNewEventModal } from "../../model";

import { NewEventButton } from "../NewEventButton";
import { NewEventModal } from "../NewEventModal";

export const NewEvent = () => {
  const { onOpen, isOpen, onOpenChange } = useNewEventModal();

  return (
    <>
      <NewEventButton onPress={onOpen} />
      <NewEventModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};
