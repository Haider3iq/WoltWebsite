import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "My First dataset",
          data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35],
          borderColor: "#6043D5",
          borderWidth: "0",
          backgroundColor: "#6043D5",
          hoverBackgroundColor: "#6043D5",
          className: "lineChart ",
		  barThickness: 5,
        },
      ],
    };

    const options = {
		plugins:{
			legend: {
				display: false
			},
		},
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: 
          {
            display: false,
			max: 100,
            min: 0,
            beginAtZero: true,
			
            ticks: {
              display: false,
             
              stepSize: 10,
            },
            grid: {
              display: false,
              drawBorder: false,
            },
          },
       
        x: 
          {
            display: false,
            barPercentage: 0.4,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        
      },
    };

    return <Bar data={data} height={85}  options={options} />;
    // return <></>
  }
}

export default BarChart;
