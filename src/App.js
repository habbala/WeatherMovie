import React, { Component } from 'react';
import './index.css';
import Weather from './components/weatherClient';
import Movie from './components/MovieClient';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    movie: state.movie,
  };
}

class App extends Component {
  render() {
    return (

      <div class="container1">
        <div class="header">
          <h1>Moodie </h1>
        </div>
        <div class="container2">
          <Weather/>
          <Movie/>
        </div>
      </div>
    );
  }
}


const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
