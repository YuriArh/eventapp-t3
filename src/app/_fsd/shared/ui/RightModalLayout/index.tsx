import { motion } from "framer-motion";
import { forwardRef } from "react";
import { type RightModalLayoutProps } from "./RightModalLayout.types";

export const RightModalLayout = forwardRef<
  HTMLDivElement,
  RightModalLayoutProps
>((props, ref) => {
  const { onClick, children } = props;

  return (
    <motion.div
      ref={ref}
      className="z-10 flex w-1/4 flex-initial rounded-l-lg bg-content2 shadow-[-10px_0_50px_-15px_rgba(0,0,0,0.3)]"
      onClick={onClick}
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
    >
      {children}
    </motion.div>
  );
});

RightModalLayout.displayName = "RightModalLayout";
