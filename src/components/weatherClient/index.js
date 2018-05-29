import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {setWeather} from '../../actions';
import {geolocated} from 'react-geolocated';

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
    });
  }

  eventHandler(event){
    this.getLocation();
    this.getWeather();
  }

  render() {
    return (
      <span className="weather-container" onClick={this.eventHandler}>
        {this.props.weather} at {this.state.latitude}:{this.state.longitude}
      </span>
    );
  }
}

const connectedWeather = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default connectedWeather;
