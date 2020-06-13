import React from 'react';
import classes from './Pokemons.module.css';
import { NavLink } from 'react-router-dom';

import Pokemon from './Pokemon/Pokemon';

const pokemons = props => {
    const pokemons = props.pokemonsSearch.map(pokemon => {
        return (
            <NavLink
            to={{
                pathname: "/" + pokemon.name.toLowerCase(),
                state: {pokemon: props.allPokemons[pokemon.id - 1]}
            }}
            key={pokemon.id}>
                <Pokemon {...props.pokemons} num={pokemon.num} name={pokemon.name} image={pokemon.img} types={pokemon.type} />
            </NavLink>
        )
    })
    return (
        <div>
            <div className={classes.Pokemons}>{pokemons}</div>
        </div>
    )
}

export default pokemons;