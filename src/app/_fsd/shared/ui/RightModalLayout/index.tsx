"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { type MouseEventHandler, useCallback, useEffect, useRef } from "react";

export function RightModalLayout({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <motion.div
      ref={overlay}
      className="z-10 flex w-1/4 flex-initial rounded-l-lg bg-content2 shadow-[-10px_0_50px_-15px_rgba(0,0,0,0.3)]"
      onClick={onClick}
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
    >
      {children}
    </motion.div>
  );
}
