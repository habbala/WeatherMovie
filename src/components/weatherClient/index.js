import React, { Component } from 'react';
import './index.css';

const weather = require('openweather-apis');

export default class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      weatherInfo: '',
    }
  }

  componentWillMount(){
    weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    weather.setLang('en');
    weather.setCity('Stockholm');
    weather.getAllWeather(function(err, JSONObj){
      console.log(JSONObj);
    });

    this.setState({weatherInfo: 'hej'});

  }

  render() {

    return (
      <div className="weather-container">
        {this.state.weatherInfo}
      </div>
    );
  }
}
