import React, { Component } from 'react';
import './index.css';

const weather = require('openweather-apis');

export default class Weather extends Component {

  constructor(props){
    super(props);
    this.state = {
      weatherInfo: '',
    }
    this.getWeather = this.getWeather.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentWillMount(){
    weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    weather.setLang('en');
    weather.setCity('Stockholm');
  }

  componentDidMount(){
    this.getWeather();
  }

  getWeather(){
    weather.getAllWeather((err, response) => {
      console.log(response);
      this.setState({weatherInfo: response.weather[0].main});
    });
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
