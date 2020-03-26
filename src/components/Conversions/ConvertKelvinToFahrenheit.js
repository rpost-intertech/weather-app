export const ConvertKelvinToFarhrenheit = (tempArr) => {
    let tempFArr = ['','','','','','',''];
    tempArr.map((kTemp, index) => {
        tempFArr[index] = ((kTemp - 273.15) * (9/5) + 32).toFixed(0);
        return '';
    })
    return tempFArr;
}