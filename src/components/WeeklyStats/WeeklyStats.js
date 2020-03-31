import React, { Component } from 'react';
import DailyStatCard from '../DailyStatCard/DailyStatCard';
import './WeeklyStats.css';
import {ConvertDayOfWeek} from '../Conversions/ConvertDayOfWeek';
import {ConvertKelvinToFarhrenheit} from '../Conversions/ConvertKelvinToFahrenheit';
import {ConvertWeatherDescArr} from '../Conversions/ConvertWeatherDesc';
import HourlyStatCard from '../../components/HourlyStatCard/HourlyStatCard'

/**
 * This class serves as a template for displaying the daily weather for each day
 * in the 5-day weather forecast as well as the hourly weather for each day. It also
 * uses imported Conversions functions to convert the weather data into the proper format
 * to be displayed to each of the components on the page. 
 */
class WeeklyStats extends Component {

    state = {
        showHourlyWeather: false,
        dayClicked: 0
    }

    /**Handler used to determine if hourly weather whould be displayed 
     * and which hourly weather for what day */
    showHourlyWeatherHandler = (index) => {
        let showHourlyWeather2 = this.state.showHourlyWeather;
        this.setState({showHourlyWeather: !showHourlyWeather2});
        this.setState({dayClicked: index});
    }
   
    render() {
        let dayOfWeekArr = ConvertDayOfWeek(this.props.dateArr);
        let tempFMaxArr = ConvertKelvinToFarhrenheit(this.props.temp_maxArr);
        let tempFMinArr = ConvertKelvinToFarhrenheit(this.props.temp_minArr);
        let weatherDescArr = ConvertWeatherDescArr(this.props.weatherDescArr);
        
    return (
        <div>
        <div className='WeeklyStats'>
            {/** The below indexes retrieve weather for a particular day. Since the weather data retrieved
             * from the API is hourly, today's date recieves 3 separate times for today's weather, 5 separate
             * times for the last day's weather, and 8 separate times for the days 2-4. 
             */}
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[0]} 
                tempMax={tempFMaxArr[0]}
                tempMin={tempFMinArr[0]}
                weatherDesc={weatherDescArr[0]}
                clicked = {() => this.showHourlyWeatherHandler(0)}
                dayClickedIndex={this.props.dayClickedIndex}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[3]} 
                tempMax={tempFMaxArr[3]}
                tempMin={tempFMinArr[3]}
                weatherDesc={weatherDescArr[3]}
                clicked = {() => this.showHourlyWeatherHandler(1)}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[12]} 
                tempMax={tempFMaxArr[12]}
                tempMin={tempFMinArr[12]}
                weatherDesc={weatherDescArr[12]}
                clicked = {() => this.showHourlyWeatherHandler(2)}
                dayClickedIndex={this.props.dayClickedIndex}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[21]} 
                tempMax={tempFMaxArr[21]}
                tempMin={tempFMinArr[21]}
                weatherDesc={weatherDescArr[21]}
                clicked = {() => this.showHourlyWeatherHandler(3)}
                dayClickedIndex={this.props.dayClickedIndex}/>
            <DailyStatCard 
                dayOfWeek={dayOfWeekArr[27]} 
                tempMax={tempFMaxArr[27]}
                tempMin={tempFMinArr[27]}
                weatherDesc={weatherDescArr[27]}
                clicked = {() => this.showHourlyWeatherHandler(4)}
                dayClickedIndex={this.props.dayClickedIndex}/>
        </div>
        <HourlyStatCard
            dateArr={this.props.dateArr}
            tempArr={this.props.tempArr}
            showHourlyWeather= {this.state.showHourlyWeather}
            weatherDescArr={this.props.weatherDescArr}
            open = {this.props.showHourlyWeather}
            dayClickedIndex={this.state.dayClicked}/>
         </div>
         
    );
    }
}

export default WeeklyStats;