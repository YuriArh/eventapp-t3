"use client";
import { AnimatePresence } from "framer-motion";
import React, { useRef } from "react";
import { useNewEventModal } from "~/features/Event";
import { RightModalLayout } from "~/shared/ui";

export const NewEventModal = () => {
  const overlay = useRef(null);
  const { isNewEventModalOpened, onClick } = useNewEventModal({ overlay });
  return (
    <AnimatePresence>
      {isNewEventModalOpened && (
        <RightModalLayout ref={overlay} onClick={onClick}>
          <div></div>
        </RightModalLayout>
      )}
    </AnimatePresence>
  );
};
