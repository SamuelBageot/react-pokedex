import React from 'react';
import classes from './Pokemon.module.css';

const pokemon = props => {

    const pokemonTypes = [];
    props.types.forEach(type => pokemonTypes.push(<span className={[classes.Type, classes[type]].join(' ')} key={type}>{type}</span>))
    
    return (
        <div className={classes.Pokemon}>
            <p className={classes.Num}>#{props.num}</p>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
            <div>{pokemonTypes}</div>
        </div>
    )

}

export default pokemon;