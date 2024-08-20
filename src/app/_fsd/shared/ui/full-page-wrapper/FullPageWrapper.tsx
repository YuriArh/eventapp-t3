import { ReactNode } from 'react';

type FullPageWrapperProps = {
  children: ReactNode;
};

export function FullPageWrapper(props: FullPageWrapperProps) {
  const { children } = props;

  return <div>{children}</div>;
}
