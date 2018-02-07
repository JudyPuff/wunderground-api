import React from 'react'

const Weather = (props) => {
  return (
    <div>
      <div>
        <h3>
          Currently: {props.weather.current_observation.weather} &nbsp;
          <img src={props.weather.current_observation.icon_url} alt="current observation" />
        </h3>
        <h2>
          {props.weather.current_observation.temp_c}&deg;C ({props.weather.current_observation.temp_f}&deg;F)
        </h2>
        <h4>
          Wind from the {props.weather.current_observation.wind_dir} at {props.weather.current_observation.wind_kph}kph
        </h4>
      </div>
      <div>
        <p>{props.weather.current_observation.observation_time}</p>
        <img src={props.weather.current_observation.image.url} alt="weatherunderground logo" className="pic"/>
      </div>
    </div>
  )
}

export default Weather
