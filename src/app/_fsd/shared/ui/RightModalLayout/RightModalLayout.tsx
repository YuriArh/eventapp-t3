import { AnimatePresence, motion } from "framer-motion";
import { forwardRef } from "react";
import { MdClose } from "react-icons/md";
import { type RightModalLayoutProps } from "./RightModalLayout.types";

/**
 * A right modal layout component that animates in and out of view.
 *
 * @param props - The component props, including onClick, children, and isOpen.
 * @param ref - A reference to the component's DOM node.
 * @returns A JSX element representing the modal layout.
 */
export const RightModalLayout = forwardRef<
  HTMLDivElement,
  RightModalLayoutProps
>((props, ref) => {
  const { onClick, children, isOpen } = props;

  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          className="absolute bottom-0 right-0 top-0 z-10 flex w-1/4 flex-1 flex-col rounded-l-lg bg-content2 shadow-[-10px_0_50px_-15px_rgba(0,0,0,0.3)]"
          exit={{ x: "100%", opacity: 0 }}
          initial={{ x: "100%", opacity: 0 }}
          ref={ref}
          transition={{ duration: 0.3 }}
        >
          <div className="m-3 flex justify-end">
            <MdClose className="cursor-pointer" onClick={onClick} />
          </div>
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
});

RightModalLayout.displayName = "RightModalLayout";
