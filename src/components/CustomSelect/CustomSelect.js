import React, { useContext } from 'react'
import ChartContext from '../../store/chart-context';
import classes from './CustomSelect.module.scss';



export const CustomSelect = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }



    return (

        <div className={classes['chart-filter']}>
            <label className={classes['app-gray']} htmlFor="">{props.label}</label>
            <select onChange={dropDownChangeHandler}>
                {props.data.map((option) => {
                    return <option value={option} key={option} >{option}</option>
                })}
            </select>
        </div>
    )
}
