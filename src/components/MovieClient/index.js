//IMDB-API key: 2ab7eeb0
import React, { Component } from 'react';
import './index.css';

export default class Movie extends Component{

  constructor(props){
    super(props);
    this.state = {
      movieName: '',
    }
  }

  

  render(){
    const imdb = require('imdb-api');
    const movieInfo = imdb.get('The Toxic Avenger', {apiKey: '2ab7eeb0', timeout: 30000}).then(console.log).catch(console.log);

    return (
      <div className="movieContainer">
        hello3

      </div>
    );
  }
}
