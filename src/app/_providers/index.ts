"use client";
import { compose } from "~/shared/lib";
import { withTheme } from "./withTheme";
import { withErrorHandler } from "./withErrorHandler";
import { TRPCReactProvider } from "~/trpc/react";
import { EventModalProvider } from "~/entities/Event";

export const Providers = compose([
  withTheme,
  withErrorHandler,
  TRPCReactProvider,
  EventModalProvider,
]);
