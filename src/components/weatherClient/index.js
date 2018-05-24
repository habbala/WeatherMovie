import React, { Component } from 'react';
import './index.css';

export default class Weather extends Component {
  render() {

    var weather = require('openweather-apis');
    weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    weather.setLang('en');
    weather.setCity('Stockholm');
    weather.getAllWeather(function(err, JSONObj){
      console.log(JSONObj);
    });

    return (
      <div>
        hello
      </div>
    );
  }
}
