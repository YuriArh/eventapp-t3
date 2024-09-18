import { AnimatePresence, motion } from "framer-motion";
import { forwardRef } from "react";
import { type RightModalLayoutProps } from "./RightModalLayout.types";

export const RightModalLayout = forwardRef<
  HTMLDivElement,
  RightModalLayoutProps
>((props, ref) => {
  const { onClick, children, isOpen } = props;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          ref={ref}
          className="absolute bottom-0 right-0 top-0 z-10 w-1/4 rounded-l-lg bg-content2 shadow-[-10px_0_50px_-15px_rgba(0,0,0,0.3)]"
          onClick={onClick}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

RightModalLayout.displayName = "RightModalLayout";
