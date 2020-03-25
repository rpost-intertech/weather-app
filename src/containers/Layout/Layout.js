import React, {Component} from 'react';
/*import WeatherToday from '../../components/WeatherToday/WeatherToday';*/
import WeeklyStats from '../../components/WeeklyStats/WeeklyStats';
import ky from 'ky';
import weatherData from '../../assets/data/weather.json';

class Layout extends Component {

    state = {
        tempArr: ['','','','','','',''],
        temp_minArr: ['','','','','','',''],
        temp_maxArr: ['','','','','','',''],
        weather_descArr: ['','','','','','',''],
        dateArr: ['','','','','','','']
    }

    /**0,3,12,21,27*/
    getWeatherFromFile = () => {
        let tempArr1 = ['','','','','','',''];
        let temp_minArr1 = ['','','','','','',''];
        let temp_maxArr1 = ['','','','','','',''];
        let weather_descArr1 = ['','','','','','',''];
        let dateArr1 =  ['','','','','','',''];
        
        for(let i=0; i<=39; i+=3){
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
        return (<h1>hello</h1>);
    }

    componentDidMount(){
        this.getWeatherFromFile();
    }
  

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

    /**<WeatherToday 
                dayOfWeek={this.state.dayOfWeek} 
                weatherForecast={this.state.weatherForecast} /> */
    render() {
      return(
          <div>
            <WeeklyStats
                dateArr={this.state.dateArr} 
                temp_maxArr={this.state.temp_maxArr}
                temp_minArr={this.state.temp_minArr}
                weatherDescArr={this.state.weather_descArr} />
                {/**getWeather={this.getWeather}*/} 
            </div>
      );
    }
}

export default Layout;