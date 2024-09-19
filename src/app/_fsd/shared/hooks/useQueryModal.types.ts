export interface useQueryModalOptions {
  overlay?: React.RefObject<HTMLDivElement> | null;
  wrapper?: React.RefObject<HTMLDivElement> | null;
  modalQuery: string;
}

export interface useQueryModalReturn {
  isOpen: boolean;
  openModal: () => void;
  onClick: (event: React.MouseEvent<Element, MouseEvent>) => void;
  onDismiss: () => void;
}
