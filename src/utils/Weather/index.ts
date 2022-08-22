import moment from 'moment';

export const kelvinToCelsius = (temp: number) => (temp - 273.15).toFixed(2);

export const translateUnixDate = (unix: number | undefined) => {
	if (!unix) {
		return;
	}

	return moment.unix(unix).format('LLL');
};

export const translateUnixDateToHours = (unix: number | undefined) => {
	if (!unix) {
		return;
	}

	return moment.unix(unix).format('LT');
};

export const formatGetTime = (time: number | undefined) => {
	if (!time) {
		return;
	}

	return moment(time).format('LT');
};
