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