import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';

function makeContact(data) {
  return (
    <div className="contact" data-id={data.id} onClick={handleContactClick}>
      <span className="avatar small">&#9787;</span>
      <span className="title">{data.firstName} {data.lastName}</span>
    </div>
  )
}

function handleContactClick(ev) {
  let contact = ev.target.closest('.contact');
  let id = contact.getAttribute('data-id');

  // get the contact with this id
  // create details Component
  // render details component with the contact with this id
}

const Contacts = () => {
  let html = [];
  let id = 0;
  for(let contact of contacts) {
    contact.id = id++;

    html.push(makeContact(contact));
  }

  console.log(html);

  return html;
}
class App extends Component {
  render() {
    console.log(contacts);
    return (
      <div class="container">
        <header>&#9993; Contact Book</header>
        <div id="book">
          <div id="list">
            <h1>Contacts</h1>
            <div class="content">
              <Contacts />
            </div>
          </div>
          <div id="details">
            <h1>Details</h1>
              <div class="content">
                <div class="info">
                  <div class="col">
                    <span class="avatar">&#9787;</span>
                  </div>
                  <div class="col">
      <span class="name">Ivan</span>
      <span class="name">Ivanov</span>
      </div>
      </div>
      <div class="info">
      <span class="info-line">&phone; 0887 123 456</span>
      <span class="info-line">&#9993; i.ivanov@gmail.com</span>
      </div>
      </div>
      </div>
      </div>
      <footer>Contact Book SPA &copy; 2017</footer>
      </div>
    );
  }
}

export default App;
