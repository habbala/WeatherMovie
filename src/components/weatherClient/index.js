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
      location: {
        latitude: '51.5033640',
        longitude: '-0.1276250'
      },
    }
    this.getWeather = this.getWeather.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentWillMount(){
    weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    weather.setLang('en');
    //weather.setCity('Stockholm');
    weather.setCoordinate(this.state.location.latitude, this.state.location.longitude);
  }

  componentDidMount(){
    this.getWeather();
  }

  getLocation(){
    if(!this.props.isGeolocationAvailable){
      console.log("browser does not support geolocation");
    } else {
      if(!this.props.isGeolocationEnabled){
        console.log("geolocation is not enabled");
      } else {
        console.log(this.props.coords);
        this.setState({location: this.props.coords});
        //weather.setCoordinate(this.props.coords.latitude, this.props.coords.longitude);
      }
    }
  }

  getWeather(){
    this.getLocation();
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
        {this.props.weather} at {this.state.location.latitude}:{this.state.location.longitude}
      </span>
    );
  }
}

const connectedWeather = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default connectedWeather;
