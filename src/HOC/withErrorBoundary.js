// withErrorBoundary.js
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../ErrorPage/ErrorPage";

const withErrorBoundary = (WrappedComponent) => (props) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={() => {
        window.location.reload();
      }}
    >
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
