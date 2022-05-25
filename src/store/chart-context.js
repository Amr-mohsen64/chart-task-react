import React from 'react';

const ChartContext = React.createContext({
    // better auto completion as model
    data: [],
    filteredList: [],
    chartLabel:'',
    asignData: (data) => { },
    filterSchoolHandler: (school) => { },
    filterCountryHandler: (country) => { },
    filterCampHandler: (camp) => { },
    filterDataHandler: (school, camp, country) => { },
    countryChangeHandler: (event) => { },
    schoolChangeHandler: (event) => { },
    campChangeHandler: (event) => { },
})

export default ChartContext;