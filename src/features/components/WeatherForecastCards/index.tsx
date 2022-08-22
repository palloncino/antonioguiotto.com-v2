import {Spinner} from '@fluentui/react';
import {useEffect} from 'react';
import {IbridCityWeatherObjectType, IWeatherForecastCardsProps} from '../../../types/weather';
import {FlexWrap} from '../../Style/Weather';
import WeatherCard from '../WeatherCard';
import {Text} from '@fluentui/react';
import bg4 from '../../../media/svgs/bg4.svg';

const WeatherForecastCards = ({data, loading}: IWeatherForecastCardsProps) => {
	if (loading) {
		return <Spinner />;
	}

	useEffect(() => {
		console.log({data});
	}, [data]);

	const handleRenderCard = (item: IbridCityWeatherObjectType) => <WeatherCard data={item} loading={false} />;

	// const handleRenderCardWithHeading = (data: IbridCityWeatherObjectType[] | undefined = []) => data.map((item, index) => (
	// 	<Fragment key={'weather-card-' + index}>
	// 		{handleRenderCard(item)}
	// 	</Fragment>
	// ));

	const weatherCard = {
		width: '250px',
	};

	const handleRenderCardWithHeading = (data: IbridCityWeatherObjectType[] | undefined = []) => {
		let _str: string | undefined = '';

		return data.map((item, index) => {
			const str = item.dt?.split(',')[0];

			if (!(_str === str)) {
				_str = str;

				return [
					<div
						key={`${str}-${index}-1`}
						style={{
							width: '100%',
							background: `url(${bg4})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							color: 'white',
							padding: '1rem',
						}}>
						<Text variant="xLarge" color={'#fff'}>
							{str}
						</Text>
					</div>,
					<div key={`${str}-${index}-2`} style={weatherCard}>{handleRenderCard(item)}</div>,
				];
			}

			return [
				<div key={'weather-card-' + index} style={weatherCard}>
					{handleRenderCard(item)}
				</div>,
			];
		});
	};

	return (
		<FlexWrap>
			{handleRenderCardWithHeading(data)}
		</FlexWrap>
	);
};

export default WeatherForecastCards;
