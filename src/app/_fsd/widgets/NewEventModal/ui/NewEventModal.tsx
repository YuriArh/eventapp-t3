"use client";
import React, { useRef } from "react";
import { useNewEventModal } from "~/features/Event";
import { RightModalLayout } from "~/shared/ui";

export const NewEventModal = () => {
  const overlay = useRef(null);
  const { onClick, isNewEventModalOpened } = useNewEventModal({ overlay });
  return (
    <RightModalLayout
      ref={overlay}
      onClick={onClick}
      isOpen={isNewEventModalOpened}
    >
      <div></div>
    </RightModalLayout>
  );
};
