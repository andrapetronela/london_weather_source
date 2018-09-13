import React, { Component } from 'react';
import DaysList from './DaysList';

class App extends Component {
 
constructor() {
    super()
    this.state = {
      data: []      
    }
  }

  componentDidMount() {
    const getWeather = (woeid) => { 
   fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`) 
   .then(result => {
    return result.json();
  })
   .then(data => {
    this.setState({data: data.consolidated_weather});
    //console.log(data);    
   })
   .catch(err => 
    console.log(err));
}
getWeather(44418);
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">London weather <i class="fa-flip-vertical fa-spin fas fa-umbrella umbrella"></i></h1>
        </header>
        <DaysList data={this.state.data} />
      </div>
    );
  }
}

export default App;
