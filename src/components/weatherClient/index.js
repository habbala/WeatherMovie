import React, { Component } from 'react';
import './index.css';

const weather = require('openweather-apis');

export default class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      weatherInfo: 0,
    }
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentWillMount(){
    weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    weather.setLang('en');
    weather.setCity('Stockholm');
    this.setState({weatherInfo: this.state.weatherInfo + 1});
  }

  getWeather(){
    weather.getAllWeather(function(err, JSONObj){
      console.log(JSONObj.main);
    });

    this.setState({weatherInfo: this.state.weatherInfo + 1});

  }

  eventHandler(event){
    this.getWeather();
  }

  render() {
    return (
      <div className="weather-container" onClick={this.eventHandler}>
        {this.state.weatherInfo}
      </div>
    );
  }
}
