import React, { Component } from 'react';
import StarWarsService from '../services/star-wars-service.js';
import withDataFromService from './hocs/with-data-from-service.jsx';

class StarWarsListWithHoc extends Component {
    render() {
        const  {data: characters, foo, num} = this.props;

        return (
            <ul>
                {foo} {num}
                {
                    characters.map(character => <li key={character.url}>{character.name}</li>)
                }
            </ul>
        )
    }
}

/*
If we have a static method in the class we should copy it in the HOC
*/

export default withDataFromService(StarWarsListWithHoc, [], new StarWarsService().getStarWarsCharacters);