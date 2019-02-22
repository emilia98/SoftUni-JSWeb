import React, { Component } from 'react';
import './App.css';

import Street from './Street/Street.js';
import House from './House/House.js';
import HouseDetails from './HouseDetails/HouseDetails';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streets: [],
      hasFetched: false,
      hasError: false,
      selectedStreet: 0,
      selectedHouse: 0
  }

  this.onStreetHover = this.onStreetHover.bind(this);
  this.onHouseHover = this.onHouseHover.bind(this);
}

  componentDidMount() {
    fetch('http://localhost:9999/feed/street/all')
    .then(response => {
      if(!response.ok) {
        return null;
      }
      return  response.json()
    })
    .then(data => {
      if(data === null) {
        return this.setState({
          hasFetched: true,
          hasError: true
        });
      }

      this.setState({
        streets: data.streets,
        hasFetched: true
      });
    });
  }

   onStreetHover(streetId) {
     this.setState({
       selectedStreet: streetId
     })
  }

  onHouseHover(houseId) {
    this.setState({
      selectedHouse: houseId
    });
  }

  render() {
    return (
      <div className="App">
        <div className="streets">
          <h2>Streets</h2>
          {
            renderStreets(this.state,this.onStreetHover)
          }
        </div>
        <div className="houses">
          <h2>Houses</h2>
          {
            renderHouses(this)
          }
        </div>
      {
        renderHouseDetails(this)
      }
      </div>
    )
  }
}

function renderStreets(state, onStreetHover) {
if(!state.hasFetched) {
  return ( <h3>Streets loading...</h3> )
}

  if(state.hasError) {
    return ( <h3 class="center-text">An error occurred while getting all the streets</h3> )
  }

  if(!state.streets.length) {
    return ( <h3 class="center-text">No streets to show</h3> )
  }
  return state.streets.map((street, index) => <Street location={street.location} key={index} id={index} onStreetHover={onStreetHover}/>)
}

function renderHouses(self) {
  let state = self.state;

  if(!state.hasFetched) {
    return ( <h3>Houses loading...</h3> )
  }

  if(state.streets.length === 0) {
    return null;
  }
  let street = state.streets[state.selectedStreet];
  let homes = street.homes;

  if(homes.length === 0) {
      return ( <h3 class="center-text">No homes to show</h3> )
  }

  return homes.map((home, index) => (
    <House image={home.imageUrl} key={index} id={index} onHouseHover={self.onHouseHover}/>
  ))
}

function renderHouseDetails(self) {
  let state = self.state;

  if(!state.hasFetched) {
    return null;
  }
  if(state.streets.length === 0) {
    return null;
  }

  let street = state.streets[state.selectedStreet];
  let homes = street.homes;
  let home = null;

  if(homes.length === 0) {
      return null;
  }

  home = homes[state.selectedHouse];

if(home) {
  console.log(home);

  return <HouseDetails type={home.type} image={home.imageUrl} description={home.description} price={home.price} altText={`house_${state.selectedStreet}_${state.selectedHouse}`}/>
}

return null;

}

export default App;
