import React, {Component} from 'react';
import WeeklyStats from '../../components/WeeklyStats/WeeklyStats';
import weatherData from '../../assets/data/weather.json';
import WeatherToday from '../../components/WeatherToday/WeatherToday';
/*import ky from 'ky'; to be used if importing data from API key*/

/**
 * This class is the main Layout Component class. It gives the entire layout
 * of the Weather App page and manages state for temp and weather data. It
 * also retrieves weather data from a file (and has the ability to retrieve
 * weather data from OpenWeather API through commented portion below)
 */
class Layout extends Component {

    state = {
        tempArr: ['','','','','','',''], //main temp of each day
        temp_minArr: ['','','','','','',''], //minimum temp of each day
        temp_maxArr: ['','','','','','',''], //maximum temp of each day
        weather_descArr: ['','','','','','',''], //weather description of each day
        dateArr: ['','','','','','',''], //date of weather each day in 5 day forecast
        dayClickedIndex: 0 //used to determine which day was clicked for hourly weather
    }

    getWeatherFromFile = () => {
        let tempArr1 = ['','','','','','',''];
        let temp_minArr1 = ['','','','','','',''];
        let temp_maxArr1 = ['','','','','','',''];
        let weather_descArr1 = ['','','','','','',''];
        let dateArr1 =  ['','','','','','',''];
        
        for(let i=0; i<=39; i++){
            tempArr1[i] = weatherData.list[i].main.temp;   
            temp_minArr1[i] = weatherData.list[i].main.temp_min;
            temp_maxArr1[i] = weatherData.list[i].main.temp_max;
            weather_descArr1[i] = weatherData.list[i].weather[0].description;
            dateArr1[i] = weatherData.list[i].dt_txt;
        }

        this.setState({
            tempArr:  tempArr1,
            temp_minArr: temp_minArr1,
            temp_maxArr: temp_maxArr1,
            weather_descArr: weather_descArr1,
            dateArr: dateArr1
        })  
    }


    componentDidMount(){
        this.getWeatherFromFile(); //retrieve weather data from file after component is mounted
    }
  
    /**Below gets weather data from OpenWeather API and is commented out due to limit in API calls with free version */
    /*getWeather = async (index) => {
        const json = await ky.get('http://api.openweathermap.org/data/2.5/forecast?q=Woodbury,us&APPID=7fba04545651c84ae5d290ad6231b39b').json();
        console.log(index);
        console.log(json);
        console.log(json.list[index].dt_txt);
        console.log(json.list[index].weather[0].description);
        this.setState({
            temp: json.list[index].main.temp,
            temp_min: json.list[index].main.temp_min,
            temp_max: json.list[index].main.temp_max,
            weather_desc: json.list[index].weather[0].description,
            date: json.list[index].dt_txt
        })
    } */

    render() {
      return(
          <div>
              <WeatherToday 
                dateArr={this.state.dateArr}
                tempArr={this.state.tempArr}
                weatherDescArr={this.state.weather_descArr} /> 
            <WeeklyStats
                dateArr={this.state.dateArr} 
                temp_maxArr={this.state.temp_maxArr}
                temp_minArr={this.state.temp_minArr}
                tempArr={this.state.tempArr}
                weatherDescArr={this.state.weather_descArr}
                showHourlyWeather= {this.state.showHourlyWeather}
                open = {this.state.showHourlyWeather}
                dayClickedIndex={this.state.dayClickedIndex}/>
            </div>
      );
    }
}

export default Layout;