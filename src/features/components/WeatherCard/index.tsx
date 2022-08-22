import {Text, Spinner} from '@fluentui/react';
import {useEffect} from 'react';
import {IWeatherCardProps} from '../../../types/weather';
import {WeatherCardProp, WeatherCardContainer} from '../../Style/Weather';

const WeatherCard = ({data, loading}: IWeatherCardProps) => {
	const fatFontStyle = {fontWeight: 700};

	if (loading) {
		return <Spinner />;
	}

	useEffect(() => {
		console.log({data});
	}, [data]);

	return (
		<WeatherCardContainer>

			{data?.cityOf && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
						{`Today in ${data?.cityOf}`}
					</Text>
				</WeatherCardProp>
			)}

			{data?.hours && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
						Time: {`${data?.hours}`}
					</Text>
				</WeatherCardProp>
			)}

			{data?.summary && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
							Summary: <span style={fatFontStyle}>{data?.summary}</span>
					</Text>
				</WeatherCardProp>
			)}

			{data?.humidity && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
              Humidity: <span style={fatFontStyle}>{data?.humidity}</span>
					</Text>
				</WeatherCardProp>
			)}

			{data?.temp && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
              Temperature: <span style={fatFontStyle}>{data?.temp}</span>
					</Text>
				</WeatherCardProp>
			)}

			{data?.max && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
              Maximum: <span style={fatFontStyle}>{data?.max}</span>
					</Text>
				</WeatherCardProp>
			)}

			{data?.min && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
              Minimum: <span style={fatFontStyle}>{data?.min}</span>
					</Text>
				</WeatherCardProp>
			)}

			{data?.lastUpdate && (
				<WeatherCardProp>
					<Text variant={'medium'} block>
							Last update: <span style={fatFontStyle}>{data?.lastUpdate} ⏱</span>
					</Text>
				</WeatherCardProp>
			)}

		</WeatherCardContainer>
	);
};

export default WeatherCard;
