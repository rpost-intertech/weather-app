import React from 'react';
import './HourlyStatCard.css';
//import {RetrieveDate} from '../Conversions/RetrieveDate';

import { GenerateStatRowCard } from '../Conversions/GenerateStatRowCard';

const retrieveBeginningIndex = (dayClickedIndex) => {
    let indexes = [0,0];
    if(dayClickedIndex === 0) {
        indexes[1] = 2;
    }else if (dayClickedIndex === 1){
        indexes[0] = 3;
        indexes[1] = 10;
    }else if (dayClickedIndex === 2){
        indexes[0] = 11;
        indexes[1] = 18;
    }else if (dayClickedIndex === 3){
        indexes[0] = 19;
        indexes[1] = 26;
    }else{
        indexes[0] = 27;
        indexes[1] = 31;
    }
    return indexes;

}

const HourlyStatCard = (props) => {
    //let shdateArr = RetrieveDate(props.dateArr);
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