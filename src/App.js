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
      <div>
        <Weather/>
        <Movie/>
      </div>
    );
  }
}


const connectedApp = connect(mapStateToProps, null)(App);
export default connectedApp;
