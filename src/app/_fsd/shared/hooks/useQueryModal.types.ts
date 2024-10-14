export interface UseQueryModalOptions {
  /**
   *
   */
  overlay?: React.RefObject<HTMLDivElement> | null;
  /**
   *
   */
  wrapper?: React.RefObject<HTMLDivElement> | null;
  /**
   *
   */
  modalQuery: string;
}

export interface UseQueryModalReturn {
  /**
   *
   */
  isOpen: boolean;
  /**
   *
   */
  openModal: () => void;
  /**
   *
   */
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
  /**
   *
   */
  onDismiss: () => void;
}
