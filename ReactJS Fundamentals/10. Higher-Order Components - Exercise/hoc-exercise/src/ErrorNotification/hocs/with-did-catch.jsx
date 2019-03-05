import React from 'react';
import withWarning from './with-warning';
/*
function withDidCatch(Component) {
    return class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                hasError: false
            }
        }
        componentDidCatch(err, info) {
            console.log(err);
            this.setState({hasError: true});

        }
        render() {
            // let { hasError } = this.props;
            console.log('didcatch');

            if (this.state.hasError) {
                return withWarning(Component);
              }

              return <Component {...this.props} />
            
        }

        
    }
}
*/

function withErrorHandler ( Component) {
    class WithErrorHandler extends React.Component {
      constructor (props) {
        super(props)

        console.log('safasasfasfasfasfasasf');
       React.Children.forEach(this.props.children, (child) => {
            console.log(child);
        });
    
        // Construct the initial state
        this.state = {
          hasError: false,
          error: null,
          errorInfo: null
        }
      }
  
      componentDidCatch (error, info) {
          console.log(error);
        // Update state if error happens
        this.setState({ hasError: true, error, errorInfo: info })
  
      }
  
      render () {
        // if state contains error we render fallback component
        if (this.state.hasError) {
          const { error, errorInfo } = this.state
          return (
              withWarning(Component)
          )
        }
  
        return <Component />
      }
    }
    return WithErrorHandler
  }

export default withErrorHandler;