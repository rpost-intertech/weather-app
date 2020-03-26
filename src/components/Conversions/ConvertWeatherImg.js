export const ConvertWeatherImg (props) {
    switch(String(props.weatherDesc)){
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