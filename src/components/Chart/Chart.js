import React, { useState, useEffect, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import ChartContext from '../../store/chart-context';
import { generateUniqueKeys } from '../../utils/utils';
// import data from "../../data.json";
// import { generateUniqueKeys } from '../../utils/utils'


const AppColors = {
    purple: '#AD82D9',
    red: '#EA828F'
}

const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }],

    },
    bezierCurve: false,
    plugins: {
        title: {
            display: true,
            text: (ctx) => 'Point Style: ' + ctx.chart.data.datasets[0].pointStyle,
        }
    }
}


const Chart = (props) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const chartCtx = useContext(ChartContext)
    const chartData = chartCtx.filteredList
    console.log(chartData);

    console.log(chartData.chartLabel);

    const data = {
        labels: chartData.map(ele => ele.month),

        datasets: [
            {
                label: chartData.charLabel,
                data: chartData.map(ele => ele.lessons),
                borderWidth: 2,
                lineTension: 0,
                borderColor: AppColors.red,
                backgroundColor: "transparent",
                pointRadius: 4,
                pointHoverRadius: 4,
            }
            // ,
            // {
            //     label: 'Morneau Shepell',
            //     data: [100, 200, 300, 56, 23, 435, 85],
            //     borderWidth: 2,
            //     lineTension: 0,
            //     borderColor: AppColors.purple,
            //     backgroundColor: "transparent",
            //     pointRadius: 4,
            //     pointHoverRadius: 4,
            // }
        ]
    }

    return (
        <div style={{ width: '80%' }}>
            <Line data={data}
                height={400}
                width={600}
                options={options}
            />
        </div>
    )
}

export default Chart