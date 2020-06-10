import React, { Component } from "react";
import classes from './PokeList.module.css';
import axios from 'axios';

import Spinner from '../../components/Layout/UI/Spinner/Spinner';
import Pokemons from '../../components/Pokemons/Pokemons';

class PokeList extends Component {

    state = {
        url: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
        allPokemons: null,
        pokemonsSearch: null
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

    nameSearch = e => {
        const pokemons = [...this.state.allPokemons];
        const userInput = e.target.value.toLowerCase();
        const userSearch = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(userInput) || pokemon.num.includes(userInput));
        this.setState({pokemonsSearch: userSearch});
    }

    render () {
        let content = null;
        if (this.state.allPokemons) {
            content = <Pokemons pokemonsSearch={this.state.pokemonsSearch} allPokemons={this.state.allPokemons} />
        } else {
            content = <Spinner />
        }

        return (
            <div className={classes.PokeList}>
                <form className={classes.SearchForm}>
                    <input className={classes.SearchInput} onChange={this.nameSearch.bind(this)} placeholder="Search for a Pokemon" />
                </form>
                {content}
            </div>
        )

    }
}

export default PokeList;