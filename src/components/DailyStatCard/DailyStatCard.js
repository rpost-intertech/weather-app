import React from 'react';
import './DailyStatCard.css';
import WeatherImage from '../WeatherImage';

/**
 * This functional component displays the daily stat 'card' which
 * displays information on the weather forecast for a particular day
 * in the 5-day weather forecast
 * @param {weather data} props includes weather description, day of 
 * week, tempurate max and temperature min for the daily forecast
 */
const DailyStatCard = (props) => (
    <div className='DailyStatCard'  onClick={props.clicked}>
        <p>{props.dayOfWeek}</p>
        <div className='ForecastImg'>
        <WeatherImage weatherDesc={props.weatherDesc} />
        </div>
        <div className='Temps'>
            <p>{props.tempMax}°</p>
            <p className='DailyLow'>{props.tempMin}°</p> {/** hold ALT and type 0176 to get the degree symbol */}
        </div>
    </div> 
);
    


export default DailyStatCard; 