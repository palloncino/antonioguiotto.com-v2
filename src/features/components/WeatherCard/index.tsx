import {Text, Spinner} from '@fluentui/react';
import {IWeatherCardProps} from '../../../types';
import {StyledArticlesGrid, WeatherCardProp, WeatherCardContainer} from '../../Style';

const WeatherCard = ({data, loading}: IWeatherCardProps) => {
	const fatFontStyle = {fontWeight: 700};

	if (loading) {
		return <Spinner />;
	}

	return (
		<WeatherCardContainer>
			{data?.cityOf && (
				<WeatherCardProp>
					<Text variant={'large'} block>
						{`Today in ${data?.cityOf}`}
					</Text>
				</WeatherCardProp>
			)}

			{data?.hours && (
				<WeatherCardProp>
					<Text variant={'large'} block>
						Time: {`${data?.hours}`}
					</Text>
				</WeatherCardProp>
			)}

			<StyledArticlesGrid gridTemplateColumns={'repeat(2, 1fr)'} columnGap={'.5rem'} rowGap={'0'}>
				{data?.summary && (
					<WeatherCardProp>
						<Text variant={'large'} block>
							Summary: <span style={fatFontStyle}>{data?.summary}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.humidity && (
					<WeatherCardProp>
						<Text variant={'large'} block>
              Humidity: <span style={fatFontStyle}>{data?.humidity}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.temp && (
					<WeatherCardProp>
						<Text variant={'large'} block>
              Temperature: <span style={fatFontStyle}>{data?.temp}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.max && (
					<WeatherCardProp>
						<Text variant={'large'} block>
              Maximum: <span style={fatFontStyle}>{data?.max}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.min && (
					<WeatherCardProp>
						<Text variant={'large'} block>
              Minimum: <span style={fatFontStyle}>{data?.min}</span>
						</Text>
					</WeatherCardProp>
				)}

				{data?.lastUpdate && (
					<WeatherCardProp>
						<Text variant={'large'} block>
							Last update: <span style={fatFontStyle}>{data?.lastUpdate} ⏱</span>
						</Text>
					</WeatherCardProp>
				)}
			</StyledArticlesGrid>

		</WeatherCardContainer>
	);
};

export default WeatherCard;
