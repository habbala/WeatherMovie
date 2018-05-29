//IMDB-API key: 2ab7eeb0
import React, { Component } from 'react';
import './index.css';
import {setMovie} from '../../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    movie: state.movie,
    weather: state.weather,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setMovie: movie => dispatch(setMovie(movie)),
  };
};

class Movie extends Component{

/*
  componentWillMount(){
    const imdb = require('imdb-api');
    imdb.get('Frozen', {apiKey: '2ab7eeb0', timeout: 30000})
    .then(function(response){
      console.log(response);
    })
    .catch(function(error){
      console.log(error);
    });
  }*/

  componentDidMount(){
    const imdb = require('imdb-api');
    /*
    let genre = '';
    if(this.props.weather === 'Clear'){
      genre = 'Comedy';
    } else {
      genre = 'Drama'
    }
    */
    if(true){
      imdb.search({title: 'Clear'}, {apiKey: '2ab7eeb0', timeout: 30000})
      .then((result)=>{
        console.log(result.results);
        imdb.get(result.results[this.getRandomInt(result.results.length)].title, {apiKey: '2ab7eeb0', timeout: 30000})
        .then((result)=>{
          this.props.setMovie(result);
          console.log(this.props.movie);
        })
      })
      .catch(console.log);
    } else {
      imdb.get('Frozen', {apiKey: '2ab7eeb0', timeout: 30000})
      .then((result)=>{
        this.props.setMovie(result);
        console.log(this.props.movie);
      })
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render(){
    return (
      <div className="movieContainer">
        <div className="movieTitle">

          {this.props.movie.title}
        </div>
        <div className="moviePoster">
          <img className= "poster" src={this.props.movie.poster}/>
        </div>
        <div className="movieInformation">
          <p>Rated: {this.props.movie.rating}</p>
          <p>Genre: {this.props.movie.genres}</p>
          <p>Actors: {this.props.movie.actors}</p>
          <p>Director: {this.props.movie.director}</p>
          <p>Description: {this.props.movie.plot}</p>
        </div>
      </div>
    );
  }
}

const connectedMovie = connect(mapStateToProps, mapDispatchToProps)(Movie);
export default connectedMovie;
