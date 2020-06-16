import React, { Component } from "react";
import axios from 'axios';
import classes from './FullPokemon.module.css';
import Spinner from '../../components/Layout/UI/Spinner/Spinner';
import { NavLink } from "react-router-dom";

class FullPokemon extends Component {

    state = {
        pokemon: null
    }

    componentDidMount() {
        axios
        .get(`https://pokeres.bastionbot.org/images/pokemon/${this.props.location.state.pokemon.id}.png`)
        .then(results => {
            // console.log(results);
            console.log(this.props.location);
            const pokemon = {...this.props.location.state.pokemon};
            console.log(pokemon);
            pokemon.image = results.config.url;
            this.setState({pokemon});
        })
    }

    render () {
        let pokemon = null;
        if (this.state.pokemon) {

            const weaknesses = [];
            const pokemonTypes = [];
            const prevEvolutions = [];
            const nextEvolutions = [];
            this.state.pokemon.weaknesses.forEach(weakness => weaknesses.push(<span className={[classes.Type, classes[weakness]].join(' ')} key={weakness}>{weakness}</span>));
            this.state.pokemon.type.forEach(type => pokemonTypes.push(<span className={[classes.Type, classes[type]].join(' ')} key={type}>{type}</span>));
            this.state.pokemon.prev_evolution && this.state.pokemon.prev_evolution.forEach(prevEvolution => prevEvolutions.push(<span key={prevEvolution.name}>{prevEvolution.name}</span>));
            this.state.pokemon.next_evolution && this.state.pokemon.next_evolution.forEach(nextEvolution => nextEvolutions.push(<span key={nextEvolution.name}>{nextEvolution.name} </span>));

            pokemon = (
                <div className={classes.FullPokemon}>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '2rem', marginBottom: '4rem'}}>
                        <span className={classes.FullPokemonNum} style={{fontSize: '2rem', fontWeight: 'light'}}>#{this.state.pokemon.num}</span>
                        <h1 className={classes.Title}>{this.state.pokemon.name}</h1>
                    </div>
                    <img style={{maxHeight: '30rem'}} src={this.state.pokemon.image} alt={this.state.pokemon.name} />
                    <div className={classes.Data}>
                        <p>Type(s)</p>
                        <p>{pokemonTypes}</p>
                        <p>Faiblesse(s)</p>
                        <p>{weaknesses}</p>
                    </div>
                    <div className={classes.Evolutions}>
                        {(prevEvolutions.length > 0 || nextEvolutions.length > 0) ? <h2 style={{textAlign: 'center'}}>Evolutions</h2> : <h2 style={{textAlign: 'center'}}>Ce pokemon n'évolue pas</h2>}
                        {prevEvolutions.length > 0 && <p style={{fontSize: '1.6rem'}}>Previous Evolutions : {prevEvolutions}</p>}
                        {nextEvolutions.length > 0 && <p style={{fontSize: '1.6rem'}}>Next Evolutions : {nextEvolutions}</p>}
                    </div>
                </div>
            )
            
        } else {
            pokemon = <Spinner />
        }
        return pokemon;
    }
}

export default FullPokemon;