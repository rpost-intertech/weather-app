import React from 'react';
import { RetrieveTime } from '../Conversions/RetrieveTime';
import { ConvertKelvinToFarhrenheit } from '../Conversions/ConvertKelvinToFahrenheit';
import { IterateWeatherDescArr } from '../Conversions/IterateWeatherDesc';
import HourlyStatRow from '../HourlyStatCard/HourlyStatRow';

let jsx = [
    null
]

export const GenerateStatRowCard = (props) => {
    let timeArr = RetrieveTime(props.dateArr);
    let tempFArr = ConvertKelvinToFarhrenheit(props.tempArr);
    let WeatherArr = IterateWeatherDescArr(props.weatherDescArr);
    //clear out the jsx
    jsx = [];
    let keyVal = 0;

    for(let i=props.beginIndex; i<=props.endIndex;i++){
        jsx.push(
            <HourlyStatRow 
            key={keyVal++}
            time={timeArr[i]}
            weather={WeatherArr[i]}
            tempF={tempFArr[i]}/>
        );      
    }

    return (jsx);
}