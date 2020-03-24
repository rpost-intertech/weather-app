import React from 'react';
import DailyStatCard from '../DailyStatCard/DailyStatCard';
import './WeeklyStats.css';

const ConvertDayOfWeek = (date) => {
   const dayOfWeek = new Date(date).getDay();
   return isNaN(dayOfWeek) ? null :
   ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
}

const ConvertKelvinToFarhrenheit = (kelvin) => {
    let tempF = (kelvin - 273.15) * (9/5) + 32;
    return tempF.toFixed(0); 
}


const WeeklyStats = (props) => {
   
    let dayOfWeek = ConvertDayOfWeek(props.date);
    let tempFMax = ConvertKelvinToFarhrenheit(props.temp_max);
    let tempFMin = ConvertKelvinToFarhrenheit(props.temp_min);
    /*0,2,9,*/
    return (
        <div className='WeeklyStats'>
          {/** <button onClick={() => props.getWeather(9)}>See Weather</button> */} 
            <DailyStatCard 
                getWeather={props.getWeather}
                dayOfWeek={dayOfWeek} 
                weatherDesc={props.weatherDesc}
                tempMax={tempFMax}
                tempMin={tempFMin}/>
            <DailyStatCard dayOfWeek={props.dayOfWeek}/>
            <DailyStatCard dayOfWeek={props.dayOfWeek}/>
            <DailyStatCard dayOfWeek={props.dayOfWeek}/>
            <DailyStatCard dayOfWeek={props.dayOfWeek}/>
            <DailyStatCard dayOfWeek={props.dayOfWeek}/>
            <DailyStatCard dayOfWeek={props.dayOfWeek}/>
        </div>
    );
}

export default WeeklyStats;