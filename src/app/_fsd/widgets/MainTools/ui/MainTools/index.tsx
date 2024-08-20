"use client";
import React from "react";
import { ThemeButton } from "~/features/Theme";
import { NewEventButton } from "~/features/NewEvent";

/**
 *
 * @returns {ReactNode} widget where the main interaction buttons are located
 */

export function MainTools() {
  return (
    <div className="w-fit p-2 flex  rounded-b-3xl absolute bg-default-100 z-10  top-0 left-1/2 transform -translate-x-1/2 gap-3 justify-end">
      <NewEventButton />
      <ThemeButton />
    </div>
  );
}
