import React from 'react'
import Hour from './Hour'
import Header from './Header'

class HomePage extends React.Component {
  render() {
    const dayName = this.props.match.params.day
    const dayData = this.hourlyData[dayName.toLowerCase()]
    return (
      <div className='App'>
        <Header title={`${dayName} Hourly Forecast`}/>
        {dayData ? (
          dayData.map((hour) => 
            <div>
              <Hour time={hour.time} temp={hour.temp} icon={hour.icon}></Hour>
            </div>
          )
        ) : (
          <div>No data found for that day.</div>
        )}
      </div>
    )
  }

  // this example uses fake hardcoded data
  hourlyData = {
    monday: [
      {
        time: '4:00 AM',
        temp: '61',
        icon: "wi-cloudy"
      },
      {
        time: '8:00 AM',
        temp: '60',
        icon: "wi-cloudy"
      },
      {
        time: '12:00 PM',
        temp: '65',
        icon: "wi-cloudy"
      },
      {
        time: '4:00 PM',
        temp: '65',
        icon: "wi-cloudy"
      },
      {
        time: '8:00 PM',
        temp: '66',
        icon: "wi-cloudy"
      },
      {
        time: '12:00 AM',
        temp: '68',
        icon: "wi-rain"
      }
    ],
    tuesday: [
      {
        time: '4:00 AM',
        temp: '78',
        icon: "wi-rain"
      },
      {
        time: '8:00 AM',
        temp: '79',
        icon: "wi-rain"
      },
      {
        time: '12:00 PM',
        temp: '80',
        icon: "wi-rain"
      },
      {
        time: '4:00 PM',
        temp: '75',
        icon: "wi-cloudy"
      },
      {
        time: '8:00 PM',
        temp: '70',
        icon: "wi-night-cloudy"
      },
      {
        time: '12:00 AM',
        temp: '76',
        icon: "wi-night-cloudy"
      }
    ],
    wednesday: [
      {
        time: '4:00 AM',
        temp: '61',
        icon: "wi-cloudy"
      },
      {
        time: '8:00 AM',
        temp: '60',
        icon: "wi-cloudy"
      },
      {
        time: '12:00 PM',
        temp: '65',
        icon: "wi-day-cloudy"
      },
      {
        time: '4:00 PM',
        temp: '65',
        icon: "wi-day-sunny"
      },
      {
        time: '8:00 PM',
        temp: '66',
        icon: "wi-night-clear"
      },
      {
        time: '12:00 AM',
        temp: '68',
        icon: "wi-night-clear"
      }
    ],
    thursday: [
      {
        time: '4:00 AM',
        temp: '45',
        icon: "wi-night-cloudy"
      },
      {
        time: '8:00 AM',
        temp: '50',
        icon: "wi-day-cloudy"
      },
      {
        time: '12:00 PM',
        temp: '46',
        icon: "wi-day-cloudy"
      },
      {
        time: '4:00 PM',
        temp: '45',
        icon: "wi-cloudy"
      },
      {
        time: '8:00 PM',
        temp: '42',
        icon: "wi-night-cloudy"
      },
      {
        time: '12:00 AM',
        temp: '42',
        icon: "wi-night-cloudy"
      }
    ],
    friday: [
      {
        time: '4:00 AM',
        temp: '55',
        icon: "wi-night-cloudy"
      },
      {
        time: '8:00 AM',
        temp: '53',
        icon: "wi-day-sunny"
      },
      {
        time: '12:00 AM',
        temp: '52',
        icon: "wi-day-sunny"
      },
      {
        time: '4:00 PM',
        temp: '46',
        icon: "wi-day-sunny"
      },
      {
        time: '8:00 PM',
        temp: '41',
        icon: "wi-night-clear"
      },
      {
        time: '12:00 AM',
        temp: '35',
        icon: "wi-night-clear"
      }
    ],
  }
  
}

export default HomePage