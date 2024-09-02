"use client";
import { TRPCReactProvider } from "~/trpc/react";
import { EventModalProvider } from "~/entities/Event";
import { compose } from "~/shared/lib";
import { withErrorHandler } from "./withErrorHandler";
import { withSession } from "./withSession";
import { withTheme } from "./withTheme";

export const Providers = compose([
  withTheme,
  withErrorHandler,
  TRPCReactProvider,
  EventModalProvider,
  withSession,
]);
