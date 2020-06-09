import React from 'react';
import pokeball from '../../../../assets/images/pokeball.png';
import classes from './Spinner.module.css';

const spinner = () => (
    <div className={classes.Spinner}><img src={pokeball} height="40px" /></div>
)

export default spinner;