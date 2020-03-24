import React from 'react';

import PartialSun from '../../assets/images/partial_sun.png';
import Rain from '../../assets/images/rainy_day.png';
import Cloudy from '../../assets/images/cloudy.png';

const WeatherImage = (weatherDesc) => {
    let image =  <img src={PartialSun} alt="Forecast"/>;
    switch(weatherDesc){
        case('few clouds'):
            image = PartialSun;
            break;
        case('broken clouds'):
            image = PartialSun;
            break;
        case('overcast clouds'):
            image = Cloudy;
            break;
        case('light rain'):
            console.log("it's rainy");
            image = <img src={Rain} alt="Forecast"/>
            break;
        case(''):
        break;
        case('sunny'):
        break;
        default:
           image = PartialSun
    }
    return(
        <img src={PartialSun} alt="Forecast"/>
    );
}


export default WeatherImage;

