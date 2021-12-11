import React, { Component } from "react";
import Chart from "react-apexcharts";

class Food extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Hamburger', 'Frites', 'Pizza', 'Saucisse'],
          labels: {
              style: {
                fontSize: '20px',
                fontWeight: 'bold',
                fontFamily: 'Lobster',
              }
          }
        },
        colors: '#f50057',
        plotOptions: {
            bar: {
              borderRadius: 30,
            },
        },
    },
    series: [
        {
          name: "Calories",
          data: [390, 312, 266, 301]
        }
      ],
    };
  }

  render() {
    return (
      <div data-aos="flip-down" style={{height:'100vh'}}>
        <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
            height="100%"
        />
      </div>
    );
  }
}

export default Food;