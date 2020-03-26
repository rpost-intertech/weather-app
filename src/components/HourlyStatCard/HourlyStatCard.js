import React from 'react';
import './HourlyStatCard.css';
import { RetrieveTime } from '../Conversions/RetrieveTime';
import { ConvertKelvinToFarhrenheit } from '../Conversions/ConvertKelvinToFahrenheit';
import { IterateWeatherDescArr } from '../Conversions/IterateWeatherDesc';
import {RetrieveDate} from '../Conversions/RetrieveDate';

const HourlyStatCard = (props) => {
    let timeArr = RetrieveTime(props.dateArr);
    let tempFArr = ConvertKelvinToFarhrenheit(props.tempArr);
    let WeatherArr = IterateWeatherDescArr(props.weatherDescArr);
    let shdateArr = RetrieveDate(props.dateArr); 
    
     /*logic for open/close animation
     let attachedClasses = ['HourlyStatCard', 'Close'];
     if(props.open){
         attachedClasses = ['HourlyStatCard', 'Open'];
     } */

    return (
        props.showHourlyWeather ?
        <div>
            <div className='HourlyStatCard'>
                <p className='DateTime'>
                    {timeArr[0]} 
                    {shdateArr[0]}
                </p>
                <p>
                    {tempFArr[0]}°
                </p>
                <p>
                    {WeatherArr[0]} 
                </p>
                </div>
                <div className='HourlyStatCard'>
                <p>
                    {timeArr[1]}
                </p>
                <p>
                    {tempFArr[1]}°
                </p>
                <p>
                    {WeatherArr[1]} 
                </p>
            </div>  
            <div className='HourlyStatCard'>
                <p>
                    {timeArr[2]}
                </p>
                <p>
                    {tempFArr[2]}°
                </p>
                <p>
                    {WeatherArr[2]} 
                </p>
            </div>  
        </div> : null
    );
} 

export default HourlyStatCard;