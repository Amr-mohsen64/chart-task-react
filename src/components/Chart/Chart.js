import React from 'react'
import { Line } from 'react-chartjs-2';


const AppColors = {
    purple: '#AD82D9',
    red: '#EA828F'
}

const Chart = () => {
    return (
        <Line data={{
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: 'countrues',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 2,
                    lineTension: 0,
                    borderColor: AppColors.red,
                    backgroundColor: "transparent",
                    pointRadius: 4,
                    pointHoverRadius: 4,
                },
                {
                    label: 'quantity',
                    data: [100, 200, 300, 56, 23, 43],
                    borderWidth: 2,
                    lineTension: 0,
                    borderColor: AppColors.purple,
                    backgroundColor: "transparent",
                    pointRadius: 4,
                    pointHoverRadius: 4,
                }
            ]
        }}
            height={400}
            width={600}
            options={{
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


            }}
        />
    )
}

export default Chart