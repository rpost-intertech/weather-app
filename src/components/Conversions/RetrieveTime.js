export const RetrieveTime = (dateArr) => {
     
    let timeArr = ['','','','','','',''];
    
    dateArr.map((date, index) => {
        let hours = date.slice(-8);
        timeArr[index] = hours === null ? null : hours;
        return '';
    })
    return timeArr;  
}