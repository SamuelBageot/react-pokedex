import React, { Component } from "react";
import classes from './PokeList.module.css';

class PokeList extends Component {
    render () {
        return (
            <div className={classes.PokeList}>
                <h1>PokeList</h1>
            </div>
        )
    }
}

export default PokeList;