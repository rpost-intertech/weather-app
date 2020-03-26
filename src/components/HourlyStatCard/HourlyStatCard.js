import React from 'react';
import './HourlyStatCard.css';
//import {RetrieveDate} from '../Conversions/RetrieveDate';

import { GenerateStatRowCard } from '../Conversions/GenerateStatRowCard';

const HourlyStatCard = (props) => {
    //let shdateArr = RetrieveDate(props.dateArr); 
    
    return (
        props.showHourlyWeather ?
        <div className='HourlyStats'>
            <GenerateStatRowCard 
                dateArr={props.dateArr}
                tempArr={props.tempArr}
                weatherDescArr={props.weatherDescArr}
            />

        </div> : null
    );
} 

export default HourlyStatCard;