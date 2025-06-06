import "../css/weather.css";
import { useEffect, useState } from "react";
import secrets from "../secrets.js";

import axios from "axios";

import mockData from "./weatherDataExample.json"

const API_KEY = secrets.REACT_APP_WEATHER_API_KEY;
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function Weather() {
    let initialWeatherData = localStorage.getItem("weatherData");
    if (initialWeatherData) {
        initialWeatherData = JSON.parse(initialWeatherData);
        console.log( initialWeatherData )
    }
	const [loading, setLoading] = useState(true);
	const [coordinates, setCoordinates] = useState(null);
	const [weatherData, setWeatherData]  = useState( initialWeatherData );

	useEffect(() => {
		if (!coordinates) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				setCoordinates([ latitude, longitude ]);
			});
		}
    }, [ coordinates ]);

    
    useEffect(() => {
        console.log( coordinates )
    
        // if you have weather data, clear it if its older than 1 hour
        if ( weatherData ) {
    
            var timeReceived = weatherData?.location?.localtime;
            const now = new Date();
            const parsedTimeReceived = new Date( timeReceived );
            
            const diffMs = now - parsedTimeReceived
            const diffMinutes = diffMs / 1000 / 60;
            
            const maxHoursOld = 1;
            const maxMinutesOld = 60 * maxHoursOld
    
            if ( diffMinutes >= maxMinutesOld ) {
                console.log( "Data in storage is older than 1 hour old" )
                localStorage.removeItem( "weatherData" )
                setWeatherData( null );
    
            } else {
                console.log( "Data in storage is less than 1 hour old" )
            }
    
        }

        var currentWeatherData = null;

		if ( weatherData == null && coordinates != null ) {
			
            async function fetchWeather() {

                currentWeatherData = await getWeatherData( coordinates )
                if ( currentWeatherData !== null ) {
                    console.log( "Got this data back from the API call:" )
                    setWeatherData( currentWeatherData );
                    localStorage.setItem( "weatherData", JSON.stringify( currentWeatherData ) )
                }
            }
            fetchWeather();

		}

        if ( weatherData !== null && coordinates !== null ) {
            setLoading( false )
        }

	}, [coordinates, weatherData]);

    if ( loading ) {
        return (
            <p>Loading Weather Data!</p>
        )
    } else {

        return (
            <div className = "WeatherContainer">
                <p>The Weather</p>
                <div className="weatherSection">
                    <p>City: {weatherData?.location?.name}</p>
                    <p>Region: {weatherData?.location?.region}</p>
                    <p>Country: {weatherData?.location?.country}</p>
                    <p>Timezone: {weatherData?.location?.tz_id}</p>
                    <p>{coordinates[0]}, {coordinates[1]}</p>
                </div>

                <div className="weatherSection">
                    <p>Current Conditions:</p>
                    <p>Country: {weatherData?.current?.condition?.text}</p>
                    <img src={weatherData?.current?.condition?.icon}/>
                </div>
                
            </div>
        );
}
}

async function getWeatherData(coordinates) {

    // return mockData

	var latitude = coordinates[0];
	var longitude = coordinates[1];
    const weatherAPIURL = "http://api.weatherapi.com/v1/current.json";
    var returnData = null;

    try {
    
        const response = await axios.get(
            weatherAPIURL, 
            {
                params: {
                    key: API_KEY,
                    q: `${latitude},${longitude}`,
                    aqi: "no"
                }
            }
        )

        return response.data

    } catch ( error ) {
        console.log( "Weather API Error:", error )
    }

	return returnData;
}
