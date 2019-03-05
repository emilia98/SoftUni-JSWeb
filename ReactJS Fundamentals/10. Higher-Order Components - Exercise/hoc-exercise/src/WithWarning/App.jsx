import React, { Component, Fragment } from 'react';
import './App.css';
import Register from '../WithWarning/components/Register/Register';
import Navigation from '../WithWarning/components/Navigation/Navigation';
import Article from '../WithWarning/components/Article/Article';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }

        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        let {hasError} = this.state;
        this.setState({ hasError: !hasError});
    }
  render() {
      let btnText = (this.state.hasError ? 'Hide': 'Show') + " Error";
    return (
        <Fragment>
            <button className="btn btn-danger btn-lg" onClick={this.onButtonClick}>{btnText}</button>
            <div className="main">
            
            <Article hasError={this.state.hasError}/>
            <Register  hasError={this.state.hasError}/>
            <Navigation  hasError={this.state.hasError}/>
            
        </div>
        </Fragment>
        
    );
  }
}

export default App;
