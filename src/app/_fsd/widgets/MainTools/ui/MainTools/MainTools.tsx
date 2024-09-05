import React from "react";
import Auth, { SignOutButton } from "~/features/Auth";
import NewEvent from "~/features/Event";
import LangSelector from "~/features/Lang/Selector";
import { ThemeButton } from "~/features/Theme";

/**
 *
 * @returns {ReactNode} widget where the main interaction buttons are located
 */

export function MainTools() {
  return (
    <div className="absolute left-1/2 top-0 z-10 flex w-max -translate-x-1/2 transform justify-end gap-3 rounded-b-3xl bg-default-100 p-2">
      <NewEvent />
      <Auth />
      <SignOutButton />
      <LangSelector />
      <ThemeButton />
    </div>
  );
}
