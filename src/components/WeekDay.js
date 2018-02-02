import React from 'react'
import { Link } from 'react-router-dom'

class WeekDay extends React.Component {
  render() {
    const {dayName, icon, tempHigh, tempLow} = this.props
    return (
      <div className="week-day">
        <div className='day-name'><Link to={`/${dayName}`}>{dayName}</Link></div>
        <i className={`wi ${icon}`} src={icon}></i>
        <div className='temperatures'>
          <span className='temp-high'>{tempHigh}°</span>
          <span className='temp-low'>{tempLow}°</span> 
        </div>
      </div>
    )
  }
}

export default WeekDay