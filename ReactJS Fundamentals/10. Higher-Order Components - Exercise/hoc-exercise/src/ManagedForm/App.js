import React, { Component } from 'react';
import UniversalForm from './UniversalForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
  <UniversalForm title="Register">
        <input type="text" name="username" />
        <input type="text" name="email" />
        <input type="file" name="image" />
        <input type="password" name="password" />
        <input type="text" name="repeat" />
        </ UniversalForm>

        <UniversalForm title="Login">
        <input type="text" name="username" />
        <input type="password" name="password" />
        </ UniversalForm>
      </React.Fragment>
      
    );
  }
}

export default App;
