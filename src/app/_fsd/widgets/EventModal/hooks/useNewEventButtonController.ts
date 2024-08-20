import { useEventModal } from "~/entities/Event";

export function useNewEventButtonController() {
  const { onOpen, onClose, isOpen, onOpenChange } = useEventModal();

  return { onOpen, isOpen, onClose, onOpenChange };
}
