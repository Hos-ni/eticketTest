// ErrorBoundary.js
import React, { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage/ErrorPage";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleReset = () => {
    window.location.reload();
  };

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      console.error("An error occurred:", error, errorInfo);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <ErrorPage resetErrorBoundary={handleReset} />;
  }

  return children;
};

export default ErrorBoundary;
