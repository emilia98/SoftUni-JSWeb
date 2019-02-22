import React, { Component } from 'react';
import './Street.css';


class Street extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Street" onMouseEnter={() => { this.props.onStreetHover(this.props.id)}}>
         <p className="street-info">{this.props.location}</p>
      </div>
    )
  }
}

export default Street;
