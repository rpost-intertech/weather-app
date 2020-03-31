#Project Description
This project is a weather application that displays the weather for today as well as the 5-day forecast for the week. It provides the location, day of the week, weather temperature, and an image representing the daily weather for today's date as well as a summary of the 5-day forecast via daily stat 'cards'. When a daily 'card' is clicked, the hourly weather as given in 3 hour intervals is displayed for the corresponding day that was clicked. 

#Note on the weather data 

The weather data from this app was retrieved using the 5 day weather forecast API provided by Open Weather Map (see https://openweathermap.org/forecast5). Initially this app had the ability to dynamically retrieve this forecast from the API directly, but due to the limit of API calls through the free version on Open Weather Map and the frequency of calls made during the development of this application, this functionality was commented out and instead the data was stored in a json file and retrieved from that file within the project. This dynamic functionality is still contained in the application in comments and can be leveraged if needed.

Additionally, the weather data from this 5 day weather forecast is given as follows.

The first day of the weather data, or today's weather data if retrieved today, contains 3 separate weather forecasts for 3 time intervals. The weather data provide forecasts for every 3 hours, starting at 3pm and ending at 9m.

The second day through the fourth day of the weather data contains 8 separate weather forecasts for 8 time intervals. The weather data provide forecasts for every 3 hours, starting at 12am and ending at 9pm.

The fifth or last day of the weather data contains 5 separate weather forecasts for 5 time intervals. The weather data provide forecasts for every 3 hours, starting at 12am and ending at 12pm.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


#Final Note
This application was created by Rita Post to serve the purpose of understanding the basic fundamentals of React. Given the limited exposure to React at the time of this app's creation, Rita was unable to provide Testing, React Hooks, or error handling and data validation in this application. If time permits, these features will be added to this app at a future date.

