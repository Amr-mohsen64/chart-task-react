import { useState, useEffect, useContext } from 'react';
import classes from './App.module.scss';
import Chart from './components/Chart/Chart'
import Header from './components/Header/Header'
import ChartContext from './store/chart-context';
import ChartProvider from './store/chartProvider';
// import data from "./data.json";


function App() {
  const [chartData, setChartData] = useState({})

  const chartCtx = useContext(ChartContext)

  useEffect(() => {

    const fetchData = async () => {
      const data = await fetch('http://localhost:3000/data')
        .then(res => res.json())
        .then(data => {
          data.map(d => {
            // lessons.push(d.lessons)
            return d;
            
          })

          const schoolData = data.filter(e => e.school === 'Greenlight' && e.country === 'Tunisia' && e.camp === "Kakuma")
          const schoolLessons = schoolData.map(e => e.lessons)
          const months = schoolData.map(e => e.month)
          
          // console.log(schoolLessons);
          // console.log(schoolData);

          chartCtx.asignData(data)

          // setChartData({
          //   schoolData,
          //   schoolLessons,
          //   months,
          //   data
          // })
        })
    }
    fetchData()
  }, [])


  return (

    <section className={classes.content}>
      <div className={classes.container}>
        <Header data={chartData.data} />
        <Chart data={chartData} />
      </div>
    </section>

  );
}

export default App;
