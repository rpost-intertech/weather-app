/**
 * This helper function converts the weather desription passed in 
 * to a sorted array of weather desciption
 * @param {weather description} weatherDescArr an array containing the
 * weather description for each day in the weather forecast
 */
export const ConvertWeatherDescArr = (weatherDescArr) => {
    let descArr1 = ['','','','','','',''];
    weatherDescArr.map((desc,index) => {
        descArr1[index] = desc;
        return '';
    })
    return descArr1;
}