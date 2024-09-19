"use client";
import React, { useRef } from "react";
import { NEW_EVENT_MODAL_QUERY } from "~/features/Event/constants";
import { useQueryModal } from "~/shared/hooks/useQueryModal";
import { RightModalLayout } from "~/shared/ui";

export const NewEventModal = () => {
  const overlay = useRef(null);
  const { onClick, isOpen } = useQueryModal({ overlay, modalQuery: NEW_EVENT_MODAL_QUERY });
  return (
    <RightModalLayout
      ref={overlay}
      onClick={onClick}
      isOpen={isOpen}
    >
      <div>
      </div>
    </RightModalLayout>
  );
};
