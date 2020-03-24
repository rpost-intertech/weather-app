import React from 'react';
import classes from './WeatherToday.css';

const WeatherToday = (props) => (
    <div className={classes.WeatherToday}>
       <p>Woodbury, MN 55129</p>
        <p>{props.dayOfWeek}</p> 
        <p>{props.weatherForecast}</p>
    </div>
)

export default WeatherToday;