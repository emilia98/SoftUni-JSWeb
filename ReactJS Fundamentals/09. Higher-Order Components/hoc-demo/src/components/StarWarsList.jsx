import React, { Component } from 'react';
import StarWarsService from '../services/star-wars-service.js';

class StarWarsList extends Component {
    constructor(props) {
        super(props);

        this.starWarsService = new StarWarsService();
        
        this.state = {
            characters: [],
            error: null
        }
    }

    async componentDidMount() {
        try {
            let characters = await this.starWarsService.getStarWarsCharacters();

            this.setState({characters});
        } catch(error) {
            console.log(error);
            this.setState({error});
        }
    }
    render() {
        const  {characters, error} = this.state;

        if(error) {
            return <h1>Something went wrong!</h1>
        }

        if(!characters.length) {
            return <h1>Loading...</h1>
        }

        return (
            <ul>
                {
                    characters.map(character => <li key={character.url}>{character.name}</li>)
                }
            </ul>
        )
    }
}

export default StarWarsList;