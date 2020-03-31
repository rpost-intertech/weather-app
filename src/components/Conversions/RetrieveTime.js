/**
 * This helper function retrieves the time interval from the date
 * string passed in
 * @param {date} dateArr includes the date retrieved from the weather
 * data file
 */
export const RetrieveTime = (dateArr) => {
    let timeArr = ['','','','','','',''];
    
    dateArr.map((date, index) => {
        let hours = date.slice(-8);
        timeArr[index] = hours === null ? null : hours;
        return '';
    })
    return timeArr;  
}