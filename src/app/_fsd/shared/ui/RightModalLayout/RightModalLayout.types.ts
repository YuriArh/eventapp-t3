export interface RightModalLayoutProps {
  /**
   * The content to be rendered inside the modal.
   */
  children: React.ReactNode;
  /**
   * Optional click event handler for the modal.
   *
   * @param event The mouse event that triggered the click.
   */
  onClick?: (event: React.MouseEvent<Element, MouseEvent>) => void;
  /**
   * Whether the modal is currently open.
   */
  isOpen?: boolean;
}
