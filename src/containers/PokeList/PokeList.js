import React, { Component } from "react";
import classes from './PokeList.module.css';
import axios from 'axios';

import Pokemons from '../../components/Pokemons/Pokemons';

class PokeList extends Component {

    state = {
        url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
        allPokemons: null
    }

    componentDidMount() {
        axios
        .get(this.state.url)
        .then(response => {
            const allPokemons = response.data.pokemon;
            const pokemonsSearch = response.data.pokemon;
            this.setState({allPokemons, pokemonsSearch});
        })
    }

    render () {
        let content = null;
        if (this.state.allPokemons) {
            content = <Pokemons allPokemons={this.state.allPokemons} />
        } else {
            content = <h4>Loading...</h4>
        }

        return (
            <div className={classes.PokeList}>
                {content}
            </div>
        )
        
    }
}

export default PokeList;