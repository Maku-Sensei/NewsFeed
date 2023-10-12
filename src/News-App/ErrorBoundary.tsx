// mostly code from reactjs.org/docs/error-boundaries.html
import { Component, ErrorInfo, ReactElement, ReactNode } from "react";

class ErrorBoundary extends Component<{
  children: ReactElement;
  errorComponent: ReactNode;
}> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
