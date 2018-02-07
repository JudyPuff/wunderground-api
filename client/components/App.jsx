import React from 'react'
import Weather from './Weather'
import request from 'superagent'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      weatherObject: this.getWeather()
    }
    this.getWeather = this.getWeather.bind(this)
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

  render () {
    return (
      <div>
        <h1>EDA Auckland&rsquo;s Weather</h1>
        {this.state.weatherObject && <Weather weather={this.state.weatherObject} />}
      </div>
    )
  }
}

export default App
