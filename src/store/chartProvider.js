import React, { useCallback, useEffect, useReducer, useState } from 'react'
import ChartContext from './chart-context'




const ChartProvider = (props) => {


    const [data, setData] = useState([])
    const [filteredList, setFilteredList] = useState(data);
    const [selectedSchool, setSelectedSchool] = useState('')
    const [selectedCamp, setSelectedCamp] = useState('')
    const [selectedCountry, setSelectedCountry] = useState('')

    const asignDataHandler = (data) => {
        setData(data)
    }

    const filterSchoolHandler = useCallback((filteredData) => {
        if (!selectedSchool) {
            return filteredData;
        }

        const filteredSchool = filteredData.filter(
            (data) => data.school === selectedSchool
        );
        return filteredSchool;
    },[selectedSchool])

    const filterCountryHandler = useCallback((filteredData) => {
        if (!selectedCountry) {
            return filteredData;
        }

        const filteredCountry = filteredData.filter(
            (data) => data.country === selectedCountry
        );
        return filteredCountry;
    },[selectedCountry])

    const filterCampHandler = useCallback((filteredData) => {
        if (!selectedCamp) {
            return filteredData;
        }

        const filteredCamp = filteredData.filter(
            (data) => data.camp.split(" ").indexOf(selectedCamp) !== -1
        );
        return filteredCamp;
    },[selectedCamp])

    const schoolChangeHandler = (school) => {
        setSelectedSchool(school);
    }

    const campChangeHandler = (camp) => {
        setSelectedCamp(camp);
    }

    const countryChangeHandler = (country) => {
        setSelectedCountry(country);
    }

    const chartContext = {
        data: data,
        filteredList: filteredList,
        chartLabel:filteredList.find(element => element.school === selectedSchool),
        asignData: asignDataHandler,
        countryChangeHandler: countryChangeHandler,
        schoolChangeHandler: schoolChangeHandler,
        campChangeHandler: campChangeHandler
    }

    useEffect(() => {
        var filteredData = filterSchoolHandler(data);
        filteredData = filterCountryHandler(filteredData);
        filteredData = filterCampHandler(filteredData);
        setFilteredList(filteredData);
    }, [data, filterCampHandler, filterCountryHandler, filterSchoolHandler]);

    return (
        <>
            <ChartContext.Provider value={chartContext}>
                {props.children}
            </ChartContext.Provider>
        </>
    )
}
export default ChartProvider   