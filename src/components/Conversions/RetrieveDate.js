export const RetrieveDate = (dateArr) => {
     
    let shortDateArr = ['','','','','','',''];
    
    dateArr.map((date, index) => {
        let hours = date.slice(5);
        let shortDate = hours.slice(1,5);
        shortDateArr[index] = shortDate === null ? null : shortDate;
        return '';
    })
    return shortDateArr;  
}