import React from 'react';
import Clouds from '../assets/images/cloudy.png';
import PartialSun from '../assets/images/partial_sun.png';
import Rain from '../assets/images/rainy_day.png';

const WeatherImage = (props) => {
    if(props.weatherDesc === 'overcast clouds'){
     return  <img src={Clouds} alt="Forecast"/>;       
    } else if(props.weatherDesc ==='light rain'){
        return <img src={Rain} alt="Forecast"/>
    } else{
        return <img src={PartialSun} alt="Forecast"/>;
    }
}

export default WeatherImage;