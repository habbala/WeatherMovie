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
      movieDirector: '',
      movieGenre: '',
      movieDescription: '',
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
      this.setState({movieGenre : result.genres});
      this.setState({movieActors : result.actors});
      this.setState({movieDirector : result.director});
      this.setState({movieDescription : result.plot});
      console.log(this.state.movieTitle);
    })
  }

  moreText(){
    document.getElementByID('showMore').style.overflow = 'visible';
  }

  render(){
    return (
      <div className="movieContainer">
        <div className="movieTitle">

          {this.state.movieTitle}
        </div>
        <div className="moviePoster">
          <img className= "poster" src={this.state.moviePoster}/>
        </div>
        <div className="movieInformation">
          <p>Rated: {this.state.movieRating}</p>
          <p>Genre: {this.state.movieGenre}</p>
          <p>Actors: {this.state.movieActors}</p>
          <p>Director: {this.state.movieDirector}</p>
          <p className="showMore" id="showMore" onClick="moreText">Description: {this.state.movieDescription}</p>
        </div>
      </div>
    );
  }
}
