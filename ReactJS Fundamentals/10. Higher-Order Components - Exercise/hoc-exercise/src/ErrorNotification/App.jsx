import React, { Component, Fragment } from 'react';
import Register from '../ErrorNotification/components/Register/Register';
import Navigation from '../ErrorNotification/components/Navigation/Navigation';
import Article from '../ErrorNotification/components/Article/Article';
import ErrorBoundary from '../ErrorNotification/components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
        <Fragment>
            <div className="main">

            <ErrorBoundary component={Article}>
                <Article />
            </ErrorBoundary>

            <ErrorBoundary component={Register}>
                <Register />
            </ErrorBoundary>

            <ErrorBoundary component={Navigation}>
                <Navigation />
            </ErrorBoundary>
        </div>
        </Fragment>
        
    );
  }
}

export default App;
