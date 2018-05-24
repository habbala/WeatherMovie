import React, { Component } from 'react';
import './index.css';
import Weather from './components/weatherClient';
import Movie from './components/MovieClient';

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

export default App;
