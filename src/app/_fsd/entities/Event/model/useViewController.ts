import { useEventModal } from "../provider";

export function useViewController() {
  const { isOpen, onClose, onOpen } = useEventModal();

  return { isOpen, onClose, onOpen };
}
