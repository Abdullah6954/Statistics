import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

class LineChart extends Component{
  render(){
    return(
      <div data-aos="zoom-in" className="h-100">
        <Line
         width={100}
         height={100}
         data={{
            type: 'line',
            labels: ['Male', 'Female', 'Kids'],
            datasets: [{
                label: 'France',
                data: [25, 15, 5, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        }}
        options={{
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    font: {
                        size: 200
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks:{
                        callback: function(value, index, values) {
                            return '%' + value;
                        }
                    }
                }
            }
        }}
        />
      </div>
    );
  }
}

export default LineChart;
