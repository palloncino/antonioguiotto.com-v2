/* eslint-disable new-cap */
import {useEffect, useState} from 'react';
import ApiService from '../api/apiServices';
import {IbridCityWeatherObjectType} from '../types/weather';
import {formatGetTime, kelvinToCelsius, translateUnixDate, translateUnixDateToHours} from '../utils/Weather';
import mock from './mock-weather.json';

export const useWeather = () => {
	const [currentLondonWeather, setCurrentLondonWeather] = useState<IbridCityWeatherObjectType | undefined>();
	const [currentWeatherLoading, setCurrentWeatherLoading] = useState(false);
	const [forecastLondonWeather, setForecastLondonWeather] = useState<IbridCityWeatherObjectType[]>();
	const [forecastWeatherLoading, setForecastWeatherLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const getLondonWeather = async () => {
		try {
			// Fetching London Current Weather
			setCurrentWeatherLoading(true);

			let resGeo: any;
			let coordinatesLondon: { name: string, lat: number, lon: number };
			if (process.env.NODE_ENV === 'development') {
				resGeo = await ApiService.coordinates.London({limit: 1});
				coordinatesLondon = resGeo.data[0];
			} else {
				resGeo = {data: mock.coordinatesLondon};
				coordinatesLondon = mock.coordinatesLondon;
			}

			let resLon: any;
			if (process.env.NODE_ENV === 'development') {
				resLon = await ApiService.weather.London({lat: coordinatesLondon.lat, lon: coordinatesLondon.lon});
			} else {
				resLon = {data: mock.weatherLondon};
			}

			const payload: IbridCityWeatherObjectType = {
				summary: resLon.data.weather[0].description,
				temp: `${kelvinToCelsius(resLon.data.main.temp)} ℃`,
				humidity: `${resLon.data.main.humidity} %`,
				lastUpdate: formatGetTime(new Date().getTime()),
				max: `${kelvinToCelsius(resLon.data.main.temp_max)} ℃`,
				min: `${kelvinToCelsius(resLon.data.main.temp_min)} ℃`,
				cityOf: coordinatesLondon.name,
			};

			setCurrentLondonWeather(payload);
			setCurrentWeatherLoading(false);

			// Fetching London Weather Forecast
			setForecastWeatherLoading(true);

			let resForecast: any;
			if (process.env.NODE_ENV === 'development') {
				resForecast = await ApiService.weather.LondonForecast({lat: coordinatesLondon.lat, lon: coordinatesLondon.lon});
			} else {
				resForecast = {data: mock.ForecastLondon};
			}

			const arrPayloads: IbridCityWeatherObjectType[] = resForecast.data.list.map(({weather, main, dt}: any) => ({
				summary: weather[0].description,
				temp: `${kelvinToCelsius(main.temp)} ℃`,
				humidity: `${main.humidity} %`,
				lastUpdate: undefined,
				max: `${kelvinToCelsius(main.temp_max)} ℃`,
				min: `${kelvinToCelsius(main.temp_min)} ℃`,
				dt: translateUnixDate(dt),
				hours: translateUnixDateToHours(dt),
			}));

			setForecastLondonWeather(arrPayloads);
			setForecastWeatherLoading(false);
		} catch (error) {
			setErrorMessage(`${error}`);
		}
	};

	useEffect(() => {
		getLondonWeather();
	}, []);

	return {
		errorMessage,
		currentLondonWeather,
		currentWeatherLoading,
		forecastLondonWeather,
		forecastWeatherLoading,
	};
};
