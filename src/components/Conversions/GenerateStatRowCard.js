import React from 'react';
import { RetrieveTime } from '../Conversions/RetrieveTime';
import { ConvertKelvinToFarhrenheit } from '../Conversions/ConvertKelvinToFahrenheit';
import { ConvertWeatherDescArr } from '../Conversions/ConvertWeatherDesc';
import HourlyStatRow from '../HourlyStatCard/HourlyStatRow';

/**the jsx for appending each hourly weather information row together into one 'table' */
let jsx = [
    null
]

/**
 * This functional component aggregates the weather data for each 
 * 3-hr interval of time based on the day clicked
 * @param {weather data} props includes date of weather, temperature,
 * and description of weather as well as which interval of time to 
 * grab the weather for based on the day clicked
 */
export const GenerateStatRowCard = (props) => {
    let timeArr = RetrieveTime(props.dateArr);
    let tempFArr = ConvertKelvinToFarhrenheit(props.tempArr);
    let WeatherArr = ConvertWeatherDescArr(props.weatherDescArr);
    //clear out the jsx each time a new day is clicked
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