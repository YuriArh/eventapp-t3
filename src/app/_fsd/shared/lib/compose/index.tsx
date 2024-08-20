import React, { ComponentType } from "react";

/**
 *
 * @param providers
 * @returns
 */

const compose = (providers: ComponentType<React.PropsWithChildren<any>>[]) =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));

export default compose;
