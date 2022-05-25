import React, { useContext } from 'react'
import ChartContext from '../../store/chart-context';
import Filters from '../Filters/Filters';
import classes from './Header.module.scss';

const Header = ({ data }) => {

    const chartCtx = useContext(ChartContext)


    // console.log(chartCtx.filteredData);

    return (
        <header className={classes['app-header']}>
            <h1>Analyis Chart</h1>
            <h3>Number of Lessons</h3>
            <Filters data={data} />
        </header>
    )
}

export default Header