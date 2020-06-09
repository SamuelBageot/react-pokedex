import React from 'react';
import classes from './Pokemons.module.css';

import Pokemon from './Pokemon/Pokemon';

const pokemons = props => {
    const pokemons = props.allPokemons.map(pokemon => {
        return (
            <Pokemon {...props.pokemons} num={pokemon.num} name={pokemon.name} image={pokemon.img} types={pokemon.type} key={pokemon.id} />
        )
    })
    return (
        <div>
            <div className={classes.Pokemons}>{pokemons}</div>
        </div>
    )
}

export default pokemons;