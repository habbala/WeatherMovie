import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setWeather} from '../../actions';

const weather = require('openweather-apis');

const mapStateToProps = state => {
  return {
    weather: state.weather,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setWeather: weather => dispatch(setWeather(weather)),
  };
};

class Weather extends Component {

  constructor(props){
    super(props);

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
      this.props.setWeather(response.weather[0].main);
      console.log(this.props.weather);
    });
  }

  eventHandler(event){
    this.getWeather();
  }

  render() {
    return (
      <div className="weather-container" onClick={this.eventHandler}>
        {this.props.weather}
      </div>
    );
  }
}

const connectedWeather = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default connectedWeather;
