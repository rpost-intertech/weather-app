import React from 'react';
import { ConvertKelvinToFarhrenheit } from '../Conversions/ConvertKelvinToFahrenheit';
import { IterateWeatherDescArr } from '../Conversions/IterateWeatherDesc';
import {ConvertDayOfWeek} from '../Conversions/ConvertDayOfWeek';
import DailyStatCard from '../DailyStatCard/DailyStatCard';

let jsx = [
    null
]

export const GenerateStatRowCard = (props) => {
    let dayOfWeekArr = ConvertDayOfWeek(props.dateArr);
    let tempFMaxArr = ConvertKelvinToFarhrenheit(props.temp_maxArr);
    let tempFMinArr = ConvertKelvinToFarhrenheit(props.temp_minArr);
    let weatherDescArr = IterateWeatherDescArr(props.weatherDescArr);
    //clear out the jsx
    jsx = [];
    let keyVal = 0;

    for(let i=3; i<=10;i++){
        jsx.push(
            <DailyStatCard 
            dayOfWeek={dayOfWeekArr[0]} 
            tempMax={tempFMaxArr[0]}
            tempMin={tempFMinArr[0]}
            weatherDesc={weatherDescArr[0]}
            clicked={props.clicked}/>
        );      
    }

    return (jsx);
}