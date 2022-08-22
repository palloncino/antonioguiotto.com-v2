import {Text} from '@fluentui/react';
import {useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import {useWeather} from '../../../hooks/useWeather';
import bg from '../../../media/svgs/bg4.svg';
import {IApplicationProps} from '../../../types';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import WeatherCard from '../../components/WeatherCard';
import WeatherForecastCards from '../../components/WeatherForecastCards';
import {CustomSection, StylePageContentContainer, Wrapper01} from '../../Style';
import {SectionMarginBottom, StyledArticlesGrid} from '../../Style/Weather';

// eslint-disable-next-line no-empty-pattern
const Weather = ({}: IApplicationProps) => {
	const [customAlert, setCustomAlert] = useState<string | undefined>(undefined);
	const [errorMessage, setErrorMessage] = useState('');

	const {isMobile} = useDevice();

	const {
		errorMessage: weatherErrorMessage,
		currentLondonWeather,
		currentWeatherLoading,
		forecastLondonWeather,
		forecastWeatherLoading,
	} = useWeather();

	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const contentView = () => (
		<Wrapper01>
			<CustomSection mb={'1rem'}>
				<Text variant={'xxLarge'} nowrap block>
					Right now in London
				</Text>
			</CustomSection>

			<CustomSection mb={'1rem'}>
				<StyledArticlesGrid gridTemplateColumns={'repeat(2, 1fr)'}>
					<WeatherCard data={currentLondonWeather} loading={currentWeatherLoading} />
				</StyledArticlesGrid>
			</CustomSection>

			<CustomSection mb={'1rem'}>
				<Text variant={'xxLarge'} nowrap block>
					Weather forecast for the next 5 days
				</Text>
			</CustomSection>

			<CustomSection mb={'1rem'}>
				<WeatherForecastCards data={forecastLondonWeather} loading={forecastWeatherLoading} />
			</CustomSection>
		</Wrapper01>
	);

	return (
		<>
			<StylePageContentContainer>
				<HeroHeader
					color={'#323130'}
					bgImage={'https://antonio-guiotto-media.s3.amazonaws.com/sky01.jpeg'}
					headline={'Weather'}
					subHeadline={'Site in construction'}
					message={customAlert as string}
				/>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
			{/* <CustomAlert customAlert={customAlert as string} /> */}
		</>
	);
};

export default Weather;
