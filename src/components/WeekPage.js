import React from 'react'
import WeekDay from './WeekDay.js'
import Header from './Header.js'
import '../styles/week.css'

class WeekPage extends React.Component {
  render() {
    const weekdays = this.fakeWeekData
    return (
      <div className='App'>
        <Header title='5 Day Forecast'/>
        {weekdays.map((day) =>
          <WeekDay
            dayName={day.dayName}
            icon={day.icon}
            tempHigh={day.tempHigh}
            tempLow={day.tempLow}>
          </WeekDay>
        )}
      </div>
    );
  }

  // this example uses fake hardcoded data
  fakeWeekData = [
    {
      dayName: "Monday",
      icon: "wi-cloud",
      tempHigh: "70",
      tempLow: "60"
    },
    {
      dayName: "Tuesday",
      icon: "wi-day-sunny",
      tempHigh: "80",
      tempLow: "70"
    },
    {
      dayName: "Wednesday",
      icon: "wi-day-sunny",
      tempHigh: "75",
      tempLow: "68"
    },
    {
      dayName: "Thursday",
      icon: "wi-day-cloudy-gusts",
      tempHigh: "50",
      tempLow: "42"
    },
    {
      dayName: "Friday",
      icon: "wi-day-rain",
      tempHigh: "55",
      tempLow: "35"
    }
  ]
}

export default WeekPage