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
      latitude: '40.741895',
      longitude: '-73.989308',
      icon: '',
    }
    this.getWeather = this.getWeather.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentWillMount(){
    weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    weather.setLang('en');
    weather.setCoordinate(this.state.latitude, this.state.longitude);
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
    this.getWeather();
  }

  getWeather(){
    weather.getAllWeather((err, response) => {
      this.props.setWeather(response.weather[0].main);
      this.setState({icon: response.weather[0].icon});
      console.log("http://openweathermap.org/img/w/" + this.state.icon + ".png");
    });
  }

  eventHandler(event){
    this.getLocation();
  }

  render() {
    const iconStyle = {
      backgroundImage: 'url(' + 'http://openweathermap.org/img/w/' + this.state.icon + '.png)',
    }

    return (
      <div className="weather-container" onClick={this.eventHandler} style={iconStyle}>

        <div class="backgroundWeather" onClick={this.eventHandler}><p className="weatherType">{this.props.weather} </p></div>
        <p>at {this.state.latitude}:{this.state.longitude}</p>
        <div class="siteDescription">
          <p><b> Moodie</b> is a place for you to help you decide what movie you should watch, depending on the weather!</p>
          <p> Just press the button to the left and let the magic happen</p>
        </div>
      </div>
    );
  }
}

const connectedWeather = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default connectedWeather;
