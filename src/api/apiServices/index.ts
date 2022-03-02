import {coordinatesQueryObjectType, weatherQueryObjectType} from '../../types';
import {clientRequest} from '../apiSettings';

const prefixGeo = 'geo/1.0/direct';
const prefixCurrent = '/data/2.5/weather';
const prefixForecast = '/data/2.5/forecast';

const endpoint = {
	LondonCoordinates: `${prefixGeo}?q=London`,
	LondonWeather: `${prefixCurrent}`,
	LondonForecast: `${prefixForecast}`,
};

const querifyObject = (queryObject: any): string => {
	let queryString = '';
	// eslint-disable-next-line guard-for-in
	for (const key in queryObject) {
		queryString += `${key}=${queryObject[key]}&`;
	}

	return queryString || '&';
};

export const pathFrom = (apiPath: keyof typeof endpoint, queryObject: coordinatesQueryObjectType | weatherQueryObjectType | undefined) => {
	const path = endpoint[apiPath];
	const query = querifyObject(queryObject);
	const apiKey = `appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
	return `${path}${path.includes('?') ? '&' : '?'}${query}${apiKey}`;
};

export const fromLondonCoordinates = (queryObject?: coordinatesQueryObjectType) => pathFrom('LondonCoordinates', queryObject);
export const fromLondonCurrent = (queryObject?: weatherQueryObjectType) => pathFrom('LondonWeather', queryObject);
export const fromLondonForecast = (queryObject?: weatherQueryObjectType) => pathFrom('LondonForecast', queryObject);

const ApiService = {
	coordinates: {
		London: (queryObject: coordinatesQueryObjectType) => clientRequest().get(fromLondonCoordinates(queryObject)),
	},
	weather: {
		London: (queryObject?: weatherQueryObjectType) => clientRequest().get(fromLondonCurrent(queryObject)),
		LondonForecast: (queryObject?: weatherQueryObjectType) => clientRequest().get(fromLondonForecast(queryObject)),
	},
};

export default ApiService;
