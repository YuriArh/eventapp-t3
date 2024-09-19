"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "~/i18n/routing";
import {
  type useQueryModalReturn,
  type useQueryModalOptions,
} from "./useQueryModal.types";

/**
 * Hook to control a modal window by query string parameter.
 *
 * @param {{ overlay?: React.RefObject<HTMLDivElement> | null, wrapper?: React.RefObject<HTMLDivElement> | null, modalQuery: string }} options
 * @returns {{ isOpen: boolean, openModal: () => void, onClick: (event: React.MouseEvent<Element, MouseEvent>) => void, onDismiss: () => void }}
 */
export const useQueryModal = (
  options: useQueryModalOptions,
): useQueryModalReturn => {
  const { overlay = null, wrapper = null, modalQuery } = options;
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (searchParams.has(modalQuery)) {
      setIsOpen(true);

      return;
    }

    setIsOpen(false);
  }, [searchParams]);

  const openModal = () => {
    router.push(`?${modalQuery}`);
  };

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e: React.MouseEvent<Element, MouseEvent>) => {
      if (
        (overlay?.current && e.target === overlay.current) ??
        (wrapper?.current && e.target === wrapper.current)
      ) {
        onDismiss();
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

  return { isOpen, openModal, onClick, onDismiss };
};
