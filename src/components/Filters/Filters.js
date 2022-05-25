import React, { useContext, useState } from 'react'
import classes from './Filters.module.scss';
// import data from "../../data.json";
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { generateUniqueKeys } from '../../utils/utils'
import ChartContext from '../../store/chart-context';




const Filters = () => {

    const chartCtx = useContext(ChartContext)
    const data = chartCtx.data

    //pass retruned unduplicatd to select html
    const schoolOptions = generateUniqueKeys(data, 'school')
    const campOptions = generateUniqueKeys(data, 'camp')
    const countryOptions = generateUniqueKeys(data, 'country')

    // console.log(filteredSchool);
    const schoolChangeHandler = (selectedSchool) => {
        chartCtx.schoolChangeHandler(selectedSchool)
    }

    const campChangeHandler = (selectedCamp) => {
        chartCtx.campChangeHandler(selectedCamp)
    }

    const countryChangeHandler = (selectedCountry) => {
        chartCtx.countryChangeHandler(selectedCountry)
    }

    return (
        <>
            <section className={classes['chart-filters']}>
                <CustomSelect label='Select school' data={schoolOptions} onChangeFilter={schoolChangeHandler} />
                <CustomSelect label='Select camp' data={campOptions} onChangeFilter={campChangeHandler} />
                <CustomSelect  label='Select Country' data={countryOptions} onChangeFilter={countryChangeHandler} />
            </section>
        </>
    )
}

export default Filters