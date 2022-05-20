import React from 'react'
import Filters from '../Filters/Filters';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes['app-header']}>
            <h1>Analyis Chart</h1>
            <h3>Number of Lessons</h3>
            <Filters />
        </header>
    )
}

export default Header