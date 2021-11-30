import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarLine extends Component{
    render(){
        return(
            <div data-aos="flip-down" className="h-100">
                <Bar
                width={100}
                height={100}
                    data={{
                        type: 'bar',
                        labels: ['Male', 'Female', 'Kids'],
                        datasets: [{
                            label: 'Germany',
                            data: [23, 24, 15, 100],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.9)',
                                'rgba(54, 162, 235, 0.9)',
                                'rgba(255, 206, 86, 0.9)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                            ],
                            borderWidth: 1
                        },
                        {
                            type: 'line',
                            label: 'France',
                            data: [25, 15, 5, 100],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.9)',
                                'rgba(54, 162, 235, 0.9)',
                                'rgba(255, 206, 86, 0.9)',
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
                                beginAtZero: true
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

export default BarLine;