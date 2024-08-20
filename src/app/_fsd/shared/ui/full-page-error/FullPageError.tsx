import { FullPageWrapper } from '../full-page-wrapper';

type FullPageErrorProps = {
  error: any;
};

export function FullPageError(props: FullPageErrorProps) {
  const { error } = props;

  return (
    <FullPageWrapper>
      <div>
        <div>
          <h1>Something went wrong:</h1>
          <ul>{error?.message}</ul>
        </div>
      </div>
    </FullPageWrapper>
  );
}
