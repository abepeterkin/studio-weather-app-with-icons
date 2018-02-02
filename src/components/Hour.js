import React from 'react'
import '../styles/hours.css'

class Hour extends React.Component {
  render() {
    const { time, temp, icon } = this.props
    return (
      <div className='hour'>
        <div className='time'>{time}</div>
        <i className={`wi ${icon}`} src={icon}></i>
        <div className='temp'>{temp}°</div>
      </div>
    )
  }
}

export default Hour