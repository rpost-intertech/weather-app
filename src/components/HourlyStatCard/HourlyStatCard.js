import React from 'react';
import './HourlyStatCard.css';

import { GenerateStatRowCard } from '../Conversions/GenerateStatRowCard';

/**
 * This function determines which intervals represent the hourly forecasts based
 * on which daily weather 'card' was clicked. The indexes were determined based
 * on fixed weather data given from the OpenWeather API 
 * @param {*} dayClickedIndex 
 */
const retrieveBeginningIndex = (dayClickedIndex) => {
    let indexes = [0,0];
    /**First day (today) of forecast provides 3 3-hr interval forecasts */
    if(dayClickedIndex === 0) {
        indexes[1] = 2;
    /**Second day of forecast provides 8 3-hr interval forecasts */
    }else if (dayClickedIndex === 1){
        indexes[0] = 3;
        indexes[1] = 10;
    /**Third day of forecast provides 8 3-hr interval forecasts */
    }else if (dayClickedIndex === 2){
        indexes[0] = 11;
        indexes[1] = 18;
    /**Fourth day of forecast provides 8 3-hr interval forecasts */
    }else if (dayClickedIndex === 3){
        indexes[0] = 19;
        indexes[1] = 26;
    /**Fifth day of forecast provides 5 3-hr interval forecasts */
    }else{
        indexes[0] = 27;
        indexes[1] = 31;
    }
    return indexes;

}

/**
 * This functional component generates the hourly (3-hr interval) 'table'
 * that is displayed when a user clicks on a daily weather 'card'
 * @param {weather data} props includes the date, temperature, weather
 * description, and what day of the forecast was clicked
 */
const HourlyStatCard = (props) => {
    let indexes  = retrieveBeginningIndex(props.dayClickedIndex);
    
    return (
        props.showHourlyWeather ?
        <div className='HourlyStats'>
            <GenerateStatRowCard 
                dateArr={props.dateArr}
                tempArr={props.tempArr}
                weatherDescArr={props.weatherDescArr}
                beginIndex={indexes[0]}
                endIndex={indexes[1]}
                dayClickedIndex={props.dayClickedIndex}/>

        </div> : null
    );
} 

export default HourlyStatCard;