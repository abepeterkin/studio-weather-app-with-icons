import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DayPage from './components/DayPage'
import WeekPage from './components/WeekPage'
import './styles/weather-icons.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/:day" component={DayPage}/>
        <Route exact path="/" component={WeekPage}/>
      </div>
    );
  }
}

export default App;
