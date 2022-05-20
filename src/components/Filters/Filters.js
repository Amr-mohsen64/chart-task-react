import React from 'react'
import classes from './Filters.module.scss';
import data from "../../data.json";
import { CustomSelect } from '../CustomSelect/CustomSelect';


function generateUnique(array, key) {
    const arrayObjectsKeys = array.map(obj => obj[key])
    const uniqueExtractedValues = [...new Set(arrayObjectsKeys)]
    return uniqueExtractedValues
}

const schoolOptions = generateUnique(data, 'school')
const camplOptions = generateUnique(data, 'camp')
const countryOptions = generateUnique(data, 'country')


const Filters = () => {
    return (
        <>
            <section className={classes['chart-filters']}>
                {/* <div className={classes['chart-filter']}>
                    <label className={classes['app-gray']} htmlFor="">Select Country</label>
                    <select>
                        {schoolOptions.map((option) => {
                            return <option key={option} >{option}</option>
                        })}
                    </select>
                </div>
                <div className={classes['chart-filter']}>
                    <label className={classes['app-gray']} htmlFor="">Select Country</label>
                    <select>
                        {camplOptions.map((camp) => {
                            return <option key={camp} >{camp}</option>
                        })}
                    </select>
                </div>
                <div className={classes['chart-filter']}>
                    <label className={classes['app-gray']} htmlFor="">Select Country</label>
                    <select>
                        {countryOptions.map((country) => {
                            return <option key={country} >{country}</option>
                        })}
                    </select>
                </div> */}
                <CustomSelect data={schoolOptions} />
                <CustomSelect data={camplOptions} />
                <CustomSelect data={countryOptions} />
            </section>


        </>
    )
}

export default Filters