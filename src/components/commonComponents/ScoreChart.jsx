import React from 'react'
import Chart from "react-google-charts";

export const options = {
    pieHole: 0.6,
    is3D: false,
    backgroundColor: 'transparent',
    legend: {
        position: "none", // Set the legend position to 'none' to remove the legend
    },
    colors: ["#18E2D3", "grey"],
    chartArea: {
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
    },
    pieSliceTextStyle: {
        color: 'transparent', // Text color inside the pie slices
    },
    pieSliceBorderColor: 'transparent',
    sliceVisibilityThreshold: 0,
    shadow: 'none',
};

const ScoreChart = ({data}) => {
    return (
        <Chart
            chartType="PieChart"
            width="3rem"
            height='3rem'
            data={data}
            options={options}
            className="donut-chart"
        />
    )
}

export default ScoreChart

