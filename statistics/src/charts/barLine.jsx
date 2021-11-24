import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarLine extends Component{
    render(){
        return(
            <div className="h-100">
                <Bar
                width={100}
                height={100}
                    data={{
                        type: 'bar',
                        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                        datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: 'yellow',
                            borderColor: 'red',
                            borderWidth: 1
                        },
                        {
                            type: 'line',
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: 'blue',
                            borderColor: 'red',
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