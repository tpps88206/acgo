import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error('getDerivedStateFromError', error);
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('componentDidCatch', error);
  }

  render() {
    if (this.state.hasError) {
      return <div>error</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
