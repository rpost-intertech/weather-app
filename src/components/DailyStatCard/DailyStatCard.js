import React, { Component } from 'react';
import './DailyStatCard.css';
import partialSun from '../../assets/images/partial_sun.png';
import Clouds from '../../assets/images/cloudy.png';


class DailyStatCard extends Component {

    state = {
        forecastImg: null
    }

    componentDidMount(){
        switch(String(this.props.weatherDesc)){
            case('few clouds'):
                const partialSunImg = partialSun;
                this.setState({
                    forecastImg: partialSunImg
                });
                break;
            case('broken clouds'):
                partialSunImg = require('../../assets/images/partial_sun.png');
                this.setState({
                    forecastImg: partialSunImg
                });
                break;
            case('overcast clouds'):
                const cloudyImg = require('../../assets/images/cloudy.png');
                this.setState({
                    forecastImg: cloudyImg
                });
                break;
            case('light rain'):
                const rainyImg = '../../assets/images/rainy_day.png';
                this.setState({
                    forecastImg: rainyImg
                });
                break;
            case('light snow'):
                const snowyImg = '../../assets/images/snowy_day.png';
                 this.setState({
                    forecastImg: snowyImg
                });
                 break;
            case('sunny'):
                const sunnyImg = '../../assets/images/sunny_day.png';
                this.setState({
                    forecastImg: sunnyImg
                });
                break;
            default:
                this.setState({
                    forecastImg: ''
                });            
        }
        console.log("Component Did Mount in WeatherImage: ")
        console.log(this.state.forecastImg);
    }

    render() {
        return (
            <div className='DailyStatCard'>
                <p>{this.props.dayOfWeek}</p>
                <div className='ForecastImg'>
                <img src={partialSun} alt="Forecast"/>
                </div>
                <div className='Temps'>
                    <p>{this.props.tempMax}°</p>
                    <p className='DailyLow'>{this.props.tempMin}°</p> {/** hold ALT and type 0176 to get the degree symbol */}
                </div>
        </div>
        );
    }
}

export default DailyStatCard; 