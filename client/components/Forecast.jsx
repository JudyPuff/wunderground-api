import React from 'react'

const Forecast = (props) => {
  return (
    <div>
      <h2>Forecast</h2>
      <div>
        <p>
          <img src={props.future.forecast.txt_forecast.forecastday[0].icon_url} alt={props.future.forecast.txt_forecast.forecastday[0].icon} />
          <strong>
            {props.future.forecast.txt_forecast.forecastday[0].title}:&nbsp;
          </strong>
          {props.future.forecast.txt_forecast.forecastday[0].fcttext_metric}
        </p>
      </div>
      <div>
        <p>
          <img src={props.future.forecast.txt_forecast.forecastday[1].icon_url} alt={props.future.forecast.txt_forecast.forecastday[1].icon} />
          <strong>
            {props.future.forecast.txt_forecast.forecastday[1].title}:&nbsp;
          </strong>
          {props.future.forecast.txt_forecast.forecastday[1].fcttext_metric}
        </p>
      </div>
    </div>
  )
}

export default Forecast
