/**
 * Takes the passed in date of format 'MM/DD/YYYY HH:mm:ss'
 * and converts it to what day of the week it is
 * @param {date} dateArr a date from the weather information file 
 * in the format 'MM/DD/YYYY HH:mm:ss'
 */
export const ConvertDayOfWeek = (dateArr) => {
    let dayOfWeekArr = ['','','','','','',''];
    dateArr.map((date, index) => {
        const dayOfWeek = new Date(date).getDay();
        dayOfWeekArr[index] = isNaN(dayOfWeek) ? null :
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
        return '';
    })
    return dayOfWeekArr;  
}