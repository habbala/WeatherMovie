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

const imdb = require('imdb-api');
const apiKey = '2ab7eeb0';

class Movie extends Component{

  constructor(props){
    super(props);
    this.eventHandler = this.eventHandler.bind(this);
  }
  componentDidMount(){
    if(this.props.weather !== null || this.props.weather !== ''){
      this.getRandomWeatherMovie();
    } else {
      this.getMovie('Trouble');
    }
  }

  getRandomWeatherMovie(){
    imdb.search({title: this.props.weather}, {apiKey: apiKey, timeout: 30000})
    .then((result)=>{
      console.log(result.results);
      this.getMovie(result.results[this.getRandomInt(result.results.length)].title);
    })
    .catch(console.log);
  }

  getMovie(title){
    imdb.get(title, {apiKey: apiKey, timeout: 30000})
    .then((result)=>{
      this.props.setMovie(result);
      console.log(this.props.movie);
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  eventHandler(event){
    this.getRandomWeatherMovie();
    this.displayDescritption();
    console.log("CLICK");
  }

  displayDescritption(){
    document.getElementById("movieDesc").style.display = "visible";
  }

  render(){
    return (
      <span className="movieContainer" onClick={this.eventHandler}>
        <div className="movieTitle">
          {this.props.movie.title}
        </div>
        <div className="moviePoster">
          <img className= "poster" src={this.props.movie.poster}/>
        </div>
        <div className="movieInformation">
          <p><b>Rated:</b> {this.props.movie.rating}</p>
          <p><b>Genre:</b> {this.props.movie.genres}</p>
          <p><b>Actors:</b> {this.props.movie.actors}</p>
          <p><b>Director: </b>{this.props.movie.director}</p>
          <p ID="movieDesc"><b>Description: </b>{this.props.movie.plot}</p>
        </div>
      </span>
    );
  }
}

const connectedMovie = connect(mapStateToProps, mapDispatchToProps)(Movie);
export default connectedMovie;
