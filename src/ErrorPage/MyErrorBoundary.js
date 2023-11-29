// ErrorBoundary.js
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";

const MyErrorBoundary = ({ children }) => {
    
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onReset={() => {
        // Navigating to the root URL ("/")
        window.location.href = "/";
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default MyErrorBoundary;
