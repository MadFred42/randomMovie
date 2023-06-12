import { Component, ErrorInfo } from 'react';
import { OwnProps, OwnState } from './types';

class ErrorBoundary extends Component<OwnProps, OwnState> {
  public state: OwnState;

  constructor(props: OwnProps) {
    super(props);
    this.state = { isError: false };
  }

  public static getDerivedStateFromError() {
    return { isError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error', error, errorInfo);
  }

  public render() {
    if (this.state.isError) {
      return <h1>Sorry, an error occurred...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
