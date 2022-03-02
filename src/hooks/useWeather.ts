/* eslint-disable */
import {useEffect, useState} from 'react';
import ApiService from '../api/apiServices';
import {currentWeatherResponseObjectType, forecastWeatherResponseObjectType, geoResponseType, IbridCityWeatherObjectType} from '../types';
import {formatGetTime, kelvinToCelsius, translateUnixDate, translateUnixDateToHours} from '../utils';

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
			const resGeo: geoResponseType = await ApiService.coordinates.London({limit: 1});
			const {lat, lon} = resGeo.data[0];
			const resLon: currentWeatherResponseObjectType = await ApiService.weather.London({lat, lon});

			const payload: IbridCityWeatherObjectType = {
				summary: resLon.data.weather[0].description,
				temp: `${kelvinToCelsius(resLon.data.main.temp)} ℃`,
				humidity: `${resLon.data.main.humidity} %`,
				lastUpdate: formatGetTime(new Date().getTime()),
				max: `${kelvinToCelsius(resLon.data.main.temp_max)} ℃`,
				min: `${kelvinToCelsius(resLon.data.main.temp_min)} ℃`,
				cityOf: resGeo.data[0].name,
			};

			setCurrentLondonWeather(payload);
			setCurrentWeatherLoading(false);

			// Fetching London Weather Forecast
			setForecastWeatherLoading(true);
			const resForecast: forecastWeatherResponseObjectType = await ApiService.weather.LondonForecast({lat, lon});

			const arrPayloads: IbridCityWeatherObjectType[] = resForecast.data.list.map(({weather, main, dt}: any) => ({
				summary: weather[0].description,
				temp: `${kelvinToCelsius(main.temp)} ℃`,
				humidity: `${main.humidity} %`,
				lastUpdate: undefined,
				max: `${kelvinToCelsius(main.temp_max)} ℃`,
				min: `${kelvinToCelsius(main.temp_min)} ℃`,
				dt: translateUnixDate(dt),
				hours: translateUnixDateToHours(dt)
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
		forecastWeatherLoading
	};
};
