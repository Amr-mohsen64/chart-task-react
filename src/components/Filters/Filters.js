import React from 'react'
import classes from './Filters.module.scss';
import data from "../../data.json";
import { CustomSelect } from '../CustomSelect/CustomSelect';



/**
 * function to remove duplicated keys from duplicated array and return new unique keys
 * @param {*} array array of objects from raw sever data
 * @param {*} key key of array of objects 
 * @returns uniqueExtractedValues
 */

function generateUniqueKeys(array, key) {
    const arrayObjectsKeys = array.map(obj => obj[key])
    const uniqueExtractedValues = [...new Set(arrayObjectsKeys)]
    return uniqueExtractedValues
}

//pass retruned unduplicatd to select html
const schoolOptions = generateUniqueKeys(data, 'school')
const camplOptions = generateUniqueKeys(data, 'camp')
const countryOptions = generateUniqueKeys(data, 'country')


const Filters = () => {
    return (
        <>
            <section className={classes['chart-filters']}>
                <CustomSelect data={schoolOptions} />
                <CustomSelect data={camplOptions} />
                <CustomSelect data={countryOptions} />
            </section>
        </>
    )
}

export default Filters