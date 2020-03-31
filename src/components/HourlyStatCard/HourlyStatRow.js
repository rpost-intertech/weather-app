import React from 'react';
import WeatherImage from '../WeatherImage';
import './HourlyStatRow.css';

/**
 * This functional component displays weather information
 * pertaining to a certain hour of a day
 * @param {weather data} props including time, weather description
 * and temperature
 */
const HourlyStatRow = (props) => {
    return (
        <div className='HourlyStatRow'>
        <p className='DateTime'>
            {props.time} 
           {/**{shdateArr[0]} */} 
        </p>
        <div className='HourlyStatTemps'>
            <div className='HourlyWeatherImage'>
            <WeatherImage weatherDesc={props.weather}/>
            </div>
          <strong>{props.tempF}°</strong>  
        </div>
        <p className='HourlyWeatherDesc'>
           <em>{props.weather} </em> 
        </p>
        </div>
    );
}

export default HourlyStatRow;