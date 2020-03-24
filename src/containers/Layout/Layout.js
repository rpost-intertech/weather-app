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

    /**0,3,6,9,12,15,18 */
    getWeatherFromFile = () => {
        console.log("reading weather data from file: ");
        const fileTemp = weatherData.list[0].main.temp;
        const fileTempMin = weatherData.list[0].main.temp_min;
        const fileTempMax = weatherData.list[0].main.temp_max;
        const fileWeatherDesc = weatherData.list[0].weather[0].description;
        const fileDate = weatherData.list[0].dt_txt;
        let tempArr1 = ['','','','','','',''];
        let temp_minArr1 = ['','','','','','',''];
        let temp_maxArr1 = ['','','','','','',''];
        let weather_descArr1 = ['','','','','','',''];
        let dateArr1 =  ['','','','','','',''];
        
        for(let i=0; i<=18; i+=3){
            tempArr1[i] = weatherData.list[i].main.temp;   
            temp_minArr1[i] = weatherData.list[i].main.temp_min;
            temp_maxArr1[i] = weatherData.list[i].main.temp_max;
            weather_descArr1[i] = weatherData.list[i].weather[0].description;
            dateArr1[i] = weatherData.list[i].dt_txt
        }

        

        console.log(tempArr1);
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
                date={this.state.dateArr[0]} 
                temp_max={this.state.temp_maxArr[0]}
                temp_min={this.state.temp_minArr[0]}
                weatherDesc={this.state.weather_descArr[0]} />
                {/**getWeather={this.getWeather}*/} 
            </div>
      ) ;
    }
}

export default Layout;