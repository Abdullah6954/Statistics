import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChart extends Component{
    render(){
        return(
            <div data-aos="zoom-out">
                <span>LE MONDE</span>
                <Doughnut
                    width={100}
                    height={100}
                        data={{
                            type: 'doughnut',
                            labels: ['Obèses', "Non obèses"],
                            datasets: [{
                                label: 'Dans le monde',
                                data: [23, 77],
                                backgroundColor: [
                                    '#f50057',
                                    '#6c63ff'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)'
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

export default DoughnutChart;