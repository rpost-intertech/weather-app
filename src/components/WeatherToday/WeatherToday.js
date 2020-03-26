import React from 'react';
import './WeatherToday.css';
import {ConvertDayOfWeek} from '../Conversions/ConvertDayOfWeek';
import {ConvertKelvinToFarhrenheit} from '../Conversions/ConvertKelvinToFahrenheit';
import {IterateWeatherDescArr} from '../Conversions/IterateWeatherDesc';
import WeatherImage from '../WeatherImage';

const WeatherToday = (props) => {
    let dayOfWeekArr = ConvertDayOfWeek(props.dateArr);
    let tempArr = ConvertKelvinToFarhrenheit(props.tempArr);
    let weatherDescArr = IterateWeatherDescArr(props.weatherDescArr);
    return (
        <div className='WeatherToday'>
        <p className='City'>Woodbury, MN 55129</p>
        <p className='DayOfWeek'>{dayOfWeekArr[0]} </p>
        <p className='WeatherDesc'> {weatherDescArr[0]}</p>
            <div className='WeatherImage'>
            <WeatherImage weatherDesc={weatherDescArr[0]}/>
            </div>
         <p className='Temp'> {tempArr[0]}°</p>  
     </div>
    );
}
  
export default WeatherToday;