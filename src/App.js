import React, { Component } from 'react';
import './App.css';
import Geocode from './components-1/geocode';
import WeatherReport from './components-1/weatherReport'


class App extends Component {
  render() {
    return (
      <div className="App">
       <WeatherReport/>
      </div>
    );
  }
}

export default App;
