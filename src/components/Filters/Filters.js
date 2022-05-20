import React from 'react'
import classes from './Filters.module.scss';


const Filters = () => {
    return (
        <section className={classes['chart-filters']}>
            <div className={classes['chart-filter']}>
                <label className={classes['app-gray']} htmlFor="">Select Country</label>
                <select>
                    <option>dsa</option>
                </select>
            </div>
            <div className={classes['chart-filter']}>
                <label className={classes['app-gray']} htmlFor="">Select Country</label>
                <select>
                    <option>dsa</option>
                </select>
            </div>
            <div className={classes['chart-filter']}>
                <label className={classes['app-gray']} htmlFor="">Select Country</label>
                <select>
                    <option>dsa</option>
                </select>
            </div>
        </section>
    )
}

export default Filters