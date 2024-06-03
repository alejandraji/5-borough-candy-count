import React from "react";

import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status}: {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  }
  return <h1>Unknown error</h1>;
}
