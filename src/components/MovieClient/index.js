//IMDB-API key: 2ab7eeb0
import React, { Component } from 'react';
import './index.css';

export default class Movie extends Component{

  render(){
    const imdb = require('imdb-api');
    imdb.get('The Toxic Avenger', {apiKey: '2ab7eeb0', timeout: 30000}).then(console.log).catch(console.log);

    //var weather = require('openweather-apis');
    //weather.setAPPID('5a8b6837143c58aa94dee4d3be632930');
    //weather.setLang('en');
    //weather.setCity('Stockholm');
    /*weather.getAllWeather(function(err, JSONObj){
      console.log(JSONObj);
    });*/

    return (
      <div>
        hello3
      </div>
    );
  }
}
