import React from 'react';
import './DailyStatCard.css';
import WeatherImage from '../WeatherImage';


const DailyStatCard = (props) => {

        
        return (
            <div className='DailyStatCard' onClick={props.clicked}>
                <p>{props.dayOfWeek}</p>
                <div className='ForecastImg'>
                <WeatherImage weatherDesc={props.weatherDesc} />
                </div>
                <div className='Temps'>
                    <p>{props.tempMax}°</p>
                    <p className='DailyLow'>{props.tempMin}°</p> {/** hold ALT and type 0176 to get the degree symbol */}
                </div>
            </div> 
        );
    
}

export default DailyStatCard; 