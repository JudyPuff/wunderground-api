import React from 'react'
import Weather from './Weather'
import Forecast from './Forecast'
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      weatherObject: this.getWeather(),
      forecastObject: this.getForecast()
    }
    this.getWeather = this.getWeather.bind(this)
    this.getForecast = this.getForecast.bind(this)
  }

  getWeather () {
    request
      .get('https://api.wunderground.com/api/2fad0b0fdeeafdf8/conditions/q/NZ/Eden_Terrace.json')
      .then(res => {
        this.setState({
          weatherObject: res.body
        })
      })
  }

  getForecast () {
    request
      .get('https://api.wunderground.com/api/2fad0b0fdeeafdf8/forecast/q/NZ/Eden_Terrace.json')
      .then(res => {
        this.setState({
          forecastObject: res.body
        })
      })
  }

  render () {
    return (
      <div>
        <h1>EDA Auckland&rsquo;s Weather</h1>
        {this.state.weatherObject && <Weather weather={this.state.weatherObject} />}
        {this.state.forecastObject && <Forecast future={this.state.forecastObject} />}
      </div>
    )
  }
}

export default App
