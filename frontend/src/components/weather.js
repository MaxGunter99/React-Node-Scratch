import "../css/weather.css";
import { useEffect, useState } from "react";
import secrets from "../secrets.js";

import axios from "axios";

const API_KEY = secrets.REACT_APP_WEATHER_API_KEY;
// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function Weather() {
	let initialWeatherData = localStorage.getItem("weatherData");
	if (initialWeatherData) {
		initialWeatherData = JSON.parse(initialWeatherData);
		console.log(initialWeatherData);
	}
	const [loading, setLoading] = useState(true);
	const [coordinates, setCoordinates] = useState(null);
	const [weatherData, setWeatherData] = useState(initialWeatherData);

	useEffect(() => {
		if (!coordinates) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				setCoordinates([latitude, longitude]);
			});
		}
	}, [coordinates]);

	useEffect(() => {
		console.log(coordinates);

		// if you have weather data, clear it if its older than 1 hour
		if (weatherData) {
			var timeReceived = weatherData?.location?.localtime;
			const now = new Date();
			const parsedTimeReceived = new Date(timeReceived);

			const diffMs = now - parsedTimeReceived;
			const diffMinutes = diffMs / 1000 / 60;

			const maxHoursOld = 1;
			const maxMinutesOld = 60 * maxHoursOld;

			console.log("Received:", parsedTimeReceived);
			console.log("Now:", now);
			console.log(diffMinutes);
			console.log(maxMinutesOld);

			if (diffMinutes >= maxMinutesOld) {
				console.log("Data in storage is older than 1 hour old");
				localStorage.removeItem("weatherData");
				setWeatherData(null);
			} else {
				console.log("Data in storage is less than 1 hour old");
			}
		}
	}, [coordinates, weatherData]);

	useEffect(() => {
		var currentWeatherData = null;

		if (weatherData === null && coordinates != null) {
			async function fetchWeather() {
				currentWeatherData = await getWeatherData(coordinates);
				if (currentWeatherData !== null) {
					console.log("Got this data back from the API call:");
					setWeatherData(currentWeatherData);
					localStorage.setItem("weatherData", JSON.stringify(currentWeatherData));
				}
			}
			fetchWeather();
		}
	}, [coordinates, weatherData]);

	useEffect(() => {
		if (weatherData && coordinates) {
			setLoading(false);
		}
	}, [weatherData, coordinates]);

	return (
		<div className="weather-container">
			<div className="heading-section">
				<h2 className="section-title">The Weather</h2>
				<p>
					in {weatherData?.location?.name}, {weatherData?.location?.region}
				</p>
			</div>

			<br />

			{loading === true ? (
				<p>Loading Weather Data!</p>
			) : (
				<div className="data-card-container">
					<div className="data-card">
						<div className="main-content">
							<div className="header-subsection">
								<h5>
									<strong>
										{weatherData?.current?.condition?.text} {weatherData?.current?.temp_f}ºF
									</strong>
								</h5>
								<img
									alt="current-condition-image"
									className="current-condition-image"
									src={weatherData?.current?.condition?.icon}
								/>
							</div>

							<div className="data-subsection">
								<p>
									Feels Like: <strong>{weatherData?.current?.feelslike_f}ºF</strong>
								</p>
								<p>
									Lat: <strong>{weatherData?.location?.lat}</strong>
								</p>
								<p>
									Lon: <strong>{weatherData?.location?.lon}</strong>
								</p>
								<p>
									Wind:{" "}
									<strong>
										{weatherData?.current?.wind_mph}mph {weatherData?.current?.wind_dir}
									</strong>
								</p>
								<p>
									Timezone: <strong>{weatherData?.location?.tz_id}</strong>
								</p>
							</div>
						</div>

						<div className="data-end">
							<br />
							<p>
								Last Updated:{" "}
								<strong>
									{new Date(weatherData?.current?.last_updated).toLocaleString("en-US", {
										weekday: "short",
										year: "numeric",
										month: "short",
										day: "numeric",
										hour: "numeric",
										minute: "2-digit",
									})}
								</strong>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

async function getWeatherData(coordinates) {
	var latitude = coordinates[0];
	var longitude = coordinates[1];
	const weatherAPIURL = "http://api.weatherapi.com/v1/current.json";
	var returnData = null;

	try {
		const response = await axios.get(weatherAPIURL, {
			params: {
				key: API_KEY,
				q: `${latitude},${longitude}`,
				aqi: "no",
			},
		});

		return response.data;
	} catch (error) {
		console.log("Weather API Error:", error);
	}

	return returnData;
}
