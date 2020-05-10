import React, { Component } from 'react';
import './App.css';
import WeatherReport from './components-1/weatherReport'
// import Loader from './components-1/Loader'

class App extends Component {

  
  render() {
    return (
      <div className="App">
        
       <WeatherReport/>
       {/* <Loader/> */}
      </div>
    );
  }
}

export default App;
