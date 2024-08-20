import { ErrorBoundary } from "react-error-boundary";
import { FullPageError } from "~/shared/ui/full-page-error";

export function withErrorHandler({ children }: { children: JSX.Element }) {
  return (
    <ErrorBoundary FallbackComponent={FullPageError}>{children}</ErrorBoundary>
  );
}
