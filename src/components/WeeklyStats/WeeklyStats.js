import React from 'react';
import DailyStatCard from '../DailyStatCard/DailyStatCard';
import './WeeklyStats.css';

const ConvertDayOfWeek = (dateArr) => {
    let dayOfWeekArr = ['','','','','','',''];
    dateArr.map((date, index) => {
        const dayOfWeek = new Date(date).getDay();
        dayOfWeekArr[index] = isNaN(dayOfWeek) ? null :
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
        return '';
    })
    return dayOfWeekArr;  
}

const ConvertKelvinToFarhrenheit = (tempArr) => {
    let tempFArr = ['','','','','','',''];
    tempArr.map((kTemp, index) => {
        tempFArr[index] = ((kTemp - 273.15) * (9/5) + 32).toFixed(0);
        return '';
    })
    return tempFArr;
}

const IterateDateArr = (dateArr) => {
    let dateArr1 = ['','','','','','',''];
    dateArr.map((date,index) => {
        dateArr1[index] = date;
        return '';
    })
    return dateArr1;
}


const WeeklyStats = (props) => {
    let dayOfWeekArr = ConvertDayOfWeek(props.dateArr);
    let tempFMaxArr = ConvertKelvinToFarhrenheit(props.temp_maxArr);
    let tempFMinArr = ConvertKelvinToFarhrenheit(props.temp_minArr);
    let weatherDescArr = IterateDateArr(props.weatherDescArr);
    
    /*0,2,9,*/
    return (
        <div className='WeeklyStats'>
          {/** <button onClick={() => props.getWeather(9)}>See Weather</button> */} 
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[0]} 
                tempMax={tempFMaxArr[0]}
                tempMin={tempFMinArr[0]}
                weatherDesc={weatherDescArr[0]}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[3]} 
                tempMax={tempFMaxArr[3]}
                tempMin={tempFMinArr[3]}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[12]} 
                tempMax={tempFMaxArr[12]}
                tempMin={tempFMinArr[12]}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[21]} 
                tempMax={tempFMaxArr[21]}
                tempMin={tempFMinArr[21]}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[27]} 
                tempMax={tempFMaxArr[27]}
                tempMin={tempFMinArr[27]}/>
        </div>
    );
}

export default WeeklyStats;