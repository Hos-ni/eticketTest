// useErrorBoundary.js
import { useState, useCallback, useEffect } from "react";

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);

  const onError = useCallback(() => {
    setHasError(true);
  }, []);

  const onReset = useCallback(() => {
    setHasError(false);
  }, []);

  const handleRefresh = useCallback(() => {
    window.location.reload();
  }, []);

  useEffect(() => {
    const errorHandler = (event) => {
      event.preventDefault();
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  return { hasError, onError, onReset, handleRefresh };
};

export default useErrorBoundary;
