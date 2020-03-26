import React from 'react';
import DailyStatCard from '../DailyStatCard/DailyStatCard';
import './WeeklyStats.css';
import {ConvertDayOfWeek} from '../Conversions/ConvertDayOfWeek';
import {ConvertKelvinToFarhrenheit} from '../Conversions/ConvertKelvinToFahrenheit';
import {IterateWeatherDescArr} from '../Conversions/IterateWeatherDesc';
import HourlyStatCard from '../../components/HourlyStatCard/HourlyStatCard'

const WeeklyStats = (props) => {
    let dayOfWeekArr = ConvertDayOfWeek(props.dateArr);
    let tempFMaxArr = ConvertKelvinToFarhrenheit(props.temp_maxArr);
    let tempFMinArr = ConvertKelvinToFarhrenheit(props.temp_minArr);
    let weatherDescArr = IterateWeatherDescArr(props.weatherDescArr);
    
    /*0,2,9,*/
    return (
        <div>
        <div className='WeeklyStats'>
          {/** <button onClick={() => props.getWeather(9)}>See Weather</button> */} 
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[0]} 
                tempMax={tempFMaxArr[0]}
                tempMin={tempFMinArr[0]}
                weatherDesc={weatherDescArr[0]}
                clicked={props.clicked}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[3]} 
                tempMax={tempFMaxArr[3]}
                tempMin={tempFMinArr[3]}
                weatherDesc={weatherDescArr[3]}
                clicked={props.clicked}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[12]} 
                tempMax={tempFMaxArr[12]}
                tempMin={tempFMinArr[12]}
                weatherDesc={weatherDescArr[12]}
                clicked={props.clicked}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[21]} 
                tempMax={tempFMaxArr[21]}
                tempMin={tempFMinArr[21]}
                weatherDesc={weatherDescArr[21]}
                clicked={props.clicked}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[27]} 
                tempMax={tempFMaxArr[27]}
                tempMin={tempFMinArr[27]}
                weatherDesc={weatherDescArr[27]}
                clicked={props.clicked}/>
        </div>
        <HourlyStatCard
         dateArr={props.dateArr}
         tempArr={props.tempArr}
         showHourlyWeather= {props.showHourlyWeather}
         weatherDescArr={props.weatherDescArr}
         open = {props.showHourlyWeather}/>
         </div>
         
    );
}

export default WeeklyStats;