import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLagend: true,
        legendPosition: "right",
        location: "City"
    }

    render(){
        return(
          <div className="chart">
            <Bar
                data={this.state.chartData}
                options={{
                    title: {
                        display: this.props.displayTitle,
                        text: `Cities in ${this.props.location}`,
                        fontSize: 25
                    },
                    legend: {
                        display: this.props.displayLagend,
                        position:this.props.legendPosition
                    }
                }}
        />
            <Line
            data={this.state.chartData}
            options={{
                title: {
                    display: this.props.displayTitle,
                    text: `Cities in ${this.props.location}`,
                    fontSize: 25
                },
                legend: {
                    display: this.props.displayLagend,
                    position:this.props.legendPosition
                }
            }}
    />

        <Pie
        data={this.state.chartData}
        options={{
            title: {
                display: this.props.displayTitle,
                text: `Cities in ${this.props.location}`,
                fontSize: 25
            },
            legend: {
                display: this.props.displayLagend,
                position:this.props.legendPosition
            }
        }}
    />
         </div>
        )
    }
}

export default Chart;