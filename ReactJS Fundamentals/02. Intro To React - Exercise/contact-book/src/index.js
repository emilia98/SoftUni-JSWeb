import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import contacts from './data/contacts.json';

let id = 0;

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

function makeContact(data) {
  return (
    <div className="contact" data-id={data.id} onClick={handleContactClick} key={data.id}>
      <span className="avatar small">&#9787;</span>
      <span className="title">{data.firstName} {data.lastName}</span>
    </div>
  )
}

function getDetails(contact) {
  return (
    <div className="content">
      <div className="info">
        <div className="col">
          <span className="avatar">&#9787;</span>
        </div>
        <div className="col">
          <span className="name">{contact.firstName}</span>
          <span className="name">{contact.lastName}</span>
       </div>
      </div>
      <div className="info">
        <span className="info-line">&#9742; {contact.phone}</span>
        <span className="info-line">&#9993; {contact.email}</span>
      </div>
    </div>
  )
}

function handleContactClick(ev) {
  let contact = ev.target.closest('.contact');
  id = contact.getAttribute('data-id');

  render();
}

const Contacts = () => {
  let html = [];
  let id = 0;
  for(let contact of contacts) {
    contact.id = id++;

    html.push(makeContact(contact));
  }
  return html;
}

const App = () => {
  return (
  <div className="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
      <div id="list">
        <h1>Contacts</h1>
        <div className="content">
          <Contacts />
        </div>
      </div>
      <div id="details">
        <h1>Details</h1>
        {getDetails(contacts[id])}
  </div>
  </div>
  <footer>Contact Book SPA &copy; 2017</footer>
  </div>);
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
