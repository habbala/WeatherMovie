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

  componentWillMount(){
    const imdb = require('imdb-api');
    const movieInfo = imdb.get('The Toxic Avenger', {apiKey: '2ab7eeb0', timeout: 30000}).then(console.log).catch(console.log);
    this.setState({movieName: ' bajs'});
  }

  render(){
    return (
      <div className="movieContainer">
        <div className="movieTitle">
          {this.state.movieName}
        </div>
        <div className="moviePoster">
          fin bild på postern
        </div>
        <div className="movieInformation">
          <p>Rated: </p>
          <p>Description:</p>
        </div>
      </div>
    );
  }
}
