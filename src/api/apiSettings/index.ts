import axios, {AxiosInstance} from 'axios';

export const clientRequest = (headers?: Record<string, unknown>): AxiosInstance => {
	const instance = axios.create({
		baseURL: 'http://api.openweathermap.org',
		headers: {
			'Content-Type': 'application/json',
			...headers,
		},
	});
	return instance;
};
