//IMDB-API key: 2ab7eeb0
import React, { Component } from 'react';
import './index.css';

export default class getMovie extends Component{

  constructor(){
    super();
    this.state = {
      movieTitle: '',
      moviePoster: '',
      movieRating: '',
      movieActors: '',
    };
  }


  componentWillMount(){

    const imdb = require('imdb-api');
    imdb.get('Frozen', {apiKey: '2ab7eeb0', timeout: 30000})
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  componentDidMount(){
    const imdb = require('imdb-api');
    imdb.get('Frozen', {apiKey: '2ab7eeb0', timeout: 30000})
    .then((result)=>{

      this.setState({movieTitle : result.title});
      this.setState({moviePoster : result.poster});
      this.setState({movieRating : result.rating});
      this.setState({movieActors : result.actors});
      console.log(this.state.movieTitle);
    })
  }

  render(){
    return (
      <div className="movieContainer">
        <div className="movieTitle">

          {this.state.movieTitle}
        </div>
        <div className="moviePoster">
          <img src={this.state.moviePoster}/>
        </div>
        <div className="movieInformation">
          <p>Rated: {this.state.movieRating}</p>
          <p>Actors: {this.state.movieActors}</p>
        </div>
      </div>
    );
  }
}
