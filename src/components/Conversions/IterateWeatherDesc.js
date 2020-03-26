export const IterateWeatherDescArr = (weatherDescArr) => {
    let descArr1 = ['','','','','','',''];
    weatherDescArr.map((date,index) => {
        descArr1[index] = date;
        return '';
    })
    return descArr1;
}