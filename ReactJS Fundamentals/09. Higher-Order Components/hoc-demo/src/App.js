import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import StarWarsList from './components/StarWarsList';
import BookListWithHoc from './components-with-hoc/BookListWithHoc.jsx';
import StarWarsListWithHoc from './components-with-hoc/StarWatsListWithHoc.jsx';

const Normal = () => (
  <Fragment>
    <BookList />
    <StarWarsList />
  </Fragment>
)

const WithHoc = () => (
  <Fragment>
    <BookListWithHoc />
    <StarWarsListWithHoc foo={'foo'} num={3}/>
  </Fragment>
)

const NavBar = () => (
  <Fragment>
      <Link to="/normal" className="btn btn-primary btn-lg">Normal</Link>
      <Link to="/hoc" className="btn btn-success btn-lg">With Hoc</Link>
  </Fragment>
)

class App extends Component {
  render() {
    return (
        <Router>
          <Fragment>
        <NavBar/>
        <Switch>
            <Route path="/normal" exact component={Normal} />
            <Route path="/hoc" exact component={WithHoc} />
        </Switch>
        </Fragment>
        </Router>
    )}
}

export default App;
