import { ElementType, Suspense } from 'react';
import { CircularProgress } from '@nextui-org/react';
import { FullPageWrapper } from '../full-page-wrapper';

export function Loadable(Component: ElementType) {
  return function fn(props: any) {
    return (
      <Suspense
        fallback={
          <FullPageWrapper>
            <CircularProgress color="danger" aria-label="Loading..." />
          </FullPageWrapper>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  };
}
