"use client";

import { useSearchParams } from "next/navigation";
import {
  type MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useRouter } from "~/i18n/routing";
import { NEW_EVENT_MODAL_QUERY } from "../constants";
import { type useNewEventModalOptions } from "./useNewEventModal.types";

export const useNewEventModal = (options?: useNewEventModalOptions) => {
  const { overlay = null, wrapper = null } = options ?? {};
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isNewEventModalOpened, setIsNewEventModalOpened] = useState(false);

  useEffect(() => {
    if (searchParams.has(NEW_EVENT_MODAL_QUERY)) {
      setIsNewEventModalOpened(true);

      return;
    }

    setIsNewEventModalOpened(false);
  }, [searchParams]);

  const openNewEventModal = () => {
    router.push(`?${NEW_EVENT_MODAL_QUERY}`);
  };

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
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

  return { isNewEventModalOpened, openNewEventModal, onClick, onDismiss };
};
