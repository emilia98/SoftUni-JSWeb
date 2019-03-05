import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }

    this.normalizeParent = this.normalizeParent.bind(this);
  }

  componentDidCatch(err, info) {
    this.setState({
      hasError: true
    });
  }

  normalizeParent() {
    this.setState({
      hasError: false
    });
  }

  render() {
    return <this.props.component hasError={this.state.hasError} normalizeParent={this.normalizeParent} />
  }

}


export default ErrorBoundary;