import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

let logoText = 'Logo placeholder';

function renderApp() {
  ReactDOM.render(
    <Fragment>
    <Header />
    <h1>
      Here is some random text...
    </h1>
    </Fragment>
  , document.getElementById('root'));
}

function handleEventClick(e) {
  e.preventDefault();

  let linkText = e.target.innerHTML;
  logoText = linkText;

  renderApp();
}

const Logo = () => {
  return (
    <div className="logo">
      <h1>{logoText}</h1>
    </div>
  )
}

const Navigation = () => {
  let className = 'site-nav';
  let linkClassName = `${className}-link`;

  return (
    <nav className={className}>
      <ul>
        <li>
          <a href="/" className={linkClassName} onClick={handleEventClick}>Home</a>
        </li>
        <li>
          <a href="/about" className={linkClassName} onClick={handleEventClick}>About</a>
        </li>
        <li>
          <a href="/contacts" className={linkClassName} onClick={handleEventClick}>Contacts</a>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => (
  <header>
    <Logo/>
    <Navigation />
  </header>
);

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
