import React from "react";
import SignIn from "~/features/Auth";
import NewEvent from "~/features/NewEvent";
import { ThemeButton } from "~/features/Theme";

/**
 *
 * @returns {ReactNode} widget where the main interaction buttons are located
 */

export function MainTools() {
  return (
    <div className="absolute left-1/2 top-0 z-10 flex w-fit -translate-x-1/2 transform justify-end gap-3 rounded-b-3xl bg-default-100 p-2">
      <NewEvent />
      <SignIn />
      <ThemeButton />
    </div>
  );
}
