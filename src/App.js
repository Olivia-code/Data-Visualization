import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Charts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: [ "Beverly Hills","Burbank", "Culver City", "Glendale",
        "Inglewood", "La Cañada Flintridge",
        "Montebello", "Palos Verdes",
        "Pasadena", "Santa Monica"],
        datasets: [
            {
                label:"Population",
                data: [34109,
                      103340,
                      38883,
                      191719, 
                      109673, 
                      20246,
                      62500, 
                      13438, 
                      137122, 
                      89736
                    ],
                    backgroundColor: [
                        "rgba(0, 128, 128, 0.6)",
                        "rgba(0, 255, 0, 0.6)",
                        "rgba(0, 255, 225, 0.6)",
                        "rgba(128, 128, 128, 0.6)",
                        "rgba(155, 99,132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgba(75, 192, 192, 0.6)",
                        "rgba(153, 102, 255, 0.6)",
                        "rgba(255, 159, 64, 0.6)",
                    ],
            }
        ]
    }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Charts</h1>
        </header>
        <Chart chartData={this.state.chartData} location="Los Angeles" />
      </div>
    );
  }
}

export default App;
