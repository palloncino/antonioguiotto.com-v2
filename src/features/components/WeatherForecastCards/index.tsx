import {Spinner, Text} from '@fluentui/react';
import {IWeatherForecastCardsProps, IbridCityWeatherObjectType} from '../../../types';
import WeatherCard from '../WeatherCard';
import {StyledArticlesGrid} from '../../Style';
import {Fragment} from 'react';

const WeatherForecastCards = ({data, loading}: IWeatherForecastCardsProps) => {
	if (loading) {
		return <Spinner />;
	}

	const handleRenderHeading = (title: string | undefined) => (
		<Fragment>
			<Text variant="xLarge">{title}</Text>
			<span></span>
		</Fragment>
	);

	const handleRenderCard = (item: IbridCityWeatherObjectType) => <WeatherCard data={item} loading={false} />;

	const handleRenderCardWithHeading = (data: IbridCityWeatherObjectType[] | undefined = []) => {
		let currentDateTime: string | undefined = '';
		let hasHeading: boolean = false;

		return data.map((item, index) => {
			const itemDateTime = item.dt?.split(',')[0];

			if (itemDateTime !== currentDateTime) {
				currentDateTime = itemDateTime;
				hasHeading = true;
			} else if (itemDateTime === currentDateTime) {
				hasHeading = false;
			}

			if (hasHeading) {
				return (
					<Fragment key={'weather-card-' + index}>
						{handleRenderHeading(itemDateTime)}
						{handleRenderCard(item)}
					</Fragment>
				);
			}

			return (
				<Fragment key={'weather-card-' + index}>
					{handleRenderCard(item)}
				</Fragment>
			);
		});
	};

	return (
		<StyledArticlesGrid gridTemplateColumns={'repeat(2, 1fr)'}>
			{handleRenderCardWithHeading(data)}
		</StyledArticlesGrid>
	);
};

export default WeatherForecastCards;
