import React, { Component } from "react";
import { Line } from "react-chartjs-2";

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
      data:  [50, 75, 34, 55, 25, 70, 50, 80, 60, 90, 45, 65],
      borderColor: '#6043D5',
      borderWidth: "4",
      barThickness:'flex',
      backgroundColor: 'rgba(255, 199, 182, 0.3)',
	  fill: true,
	  tension:0.4,
      minBarLength:10
    }
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  
	plugins:{
		legend: {
			display: false
		},
		tooltip: {
			mode: "index",
			intersect: false,
			titleColor: "#888",
			bodyColor: "#555",
			titleFontSize: 12,
			bodyFontSize: 15,
			backgroundColor: "rgba(255,255,255,1)",
			displayColors: true,			
			padding: 10,
			borderColor: "rgba(220, 220, 220, 1)",
			borderWidth: 1,
			caretSize: 6,
			caretPadding: 10
		 }
	},
  scales: {
    y:{
       gridColor: "navy",
      grid: {
        color: "rgba(0,0,0,0.1)",
        height: 50,
        drawBorder: true
      },
      ticks: {
        fontColor: "#3e4954",
        max: 100,
        min: 0,
        stepSize: 20
      },
    },
    x: {
      barPercentage: 0.3,
      
      grid: {
        display: false,
        zeroLineColor: "transparent"
      },
      ticks: {
        stepSize: 20,
        fontColor: "#3e4954",
        fontFamily: "Nunito, sans-serif"
      }
    }
  },
  elements: {
    point: {
      radius: 0,
      borderWidth: 0
    }
  },
  
};
class ActivityLineChart extends Component {
   render() {
      return (
         <div style={{height:"350px"}}>
            <Line data={data} options={options} height={350} />
         </div>
      );
   }
}

export default ActivityLineChart;
