import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const header = () => (
    <header className={classes.Header}>
        <div className={classes.Header_wrapper}>
            <NavLink className={classes.Header_logo} to="/">LOGO</NavLink>
            <nav className={classes.Header_nav}>
                <li><NavLink to="/list">Pokedex</NavLink></li>
            </nav>
        </div>
    </header>
)

export default header;