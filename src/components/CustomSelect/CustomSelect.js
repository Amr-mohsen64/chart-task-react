import React from 'react'
import classes from './CustomSelect.module.scss';



export const CustomSelect = (props) => {
    return (

        <div className={classes['chart-filter']}>
            <label className={classes['app-gray']} htmlFor="">Select Country</label>
            <select>
            {props.data.map((option) => {
                return <option key={option} >{option}</option>
            })}
        </select>
        </div>
    )
}
