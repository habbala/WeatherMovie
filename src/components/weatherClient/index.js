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
    this.state = {
      latitude: '63.826489',
      longitude: '20.324358',
      icon: '',
    }
    this.getWeather = this.getWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentWillMount(){
    weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    weather.setLang('en');
    this.getLocation();
  }

  componentDidMount(){
    this.getWeather();
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition(this.setLocation, console.log);
  }

  setLocation(position){
    this.setState({latitude: position.coords.latitude});
    this.setState({longitude: position.coords.longitude});
    weather.setCoordinate(this.state.latitude, this.state.longitude);
    console.log(this.state.latitude + " : " + this.state.longitude);
  }

  getWeather(){
    weather.getAllWeather((err, response) => {
      this.props.setWeather(response.weather[0].main);
      this.setState({icon: response.weather[0].icon});
      console.log(this.state.icon);
    });
  }

  eventHandler(event){
    this.getLocation();
    this.getWeather();
  }

  render() {
    return (
      <span className="weather-container" onClick={this.eventHandler}>
        <p className="weatherType">{this.props.weather} </p>
        <p>at {this.state.latitude}:{this.state.longitude}</p>
      </span>
    );
  }
}

const connectedWeather = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default connectedWeather;
