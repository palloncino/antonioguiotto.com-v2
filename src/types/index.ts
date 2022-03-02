/* eslint-disable no-unused-vars */
import {PartialTheme} from '@fluentui/react';
import {CSSProperties} from 'styled-components';

type coordinatesQueryObjectType = {
	limit: number;
}
type weatherQueryObjectType = {
	lat: number;
	lon: number;
}

type GeoObjectType = {
	name: string;
	lat: number;
	lon: number;
}

type geoResponseType = {
	data: GeoObjectType[];
}

type weatherObjectType = {
	description: string;
}

type weatherDataPayloadType = {
	weather: weatherObjectType[],
	main: CityWeatherObjectType,
	dt: number,
}

type currentWeatherResponseObjectType = {
	data: weatherDataPayloadType;
}

type forecastWeatherResponseObjectType = {
	data: {
		list: weatherObjectType[],
	},
}

type CityWeatherObjectType = {
	temp: number;
	humidity: number;
	temp_max: number;
	temp_min: number;
}

type IbridCityWeatherObjectType = {
	summary: string;
	temp: string;
	humidity: string;
	cityOf?: string;
	lastUpdate?: string;
	max?: string;
	min?: string;
	hours?: string
	dt?: string;
}

interface IWeatherCardProps {
	data: IbridCityWeatherObjectType | undefined;
	loading: boolean;
}

interface IWeatherForecastCardsProps {
	data: IbridCityWeatherObjectType[] | undefined;
	loading: boolean;
}

interface ICityForecastResponse {
	cod: number;
	message: number;
	cnt: number;
	list: [
		{
			dt: number;
			main: {
				temp: number;
				feels_like: number;
				temp_min: number;
				temp_max: number;
				pressure: number;
				sea_level: number;
				grnd_level: number;
				humidity: number;
				temp_kf: number;
			},
			weather: [
				{
					id: number;
					main: string;
					description: string;
					icon: string;
				}
			],
			clouds: {
				all: number;
			},
			wind: {
				speed: number,
				deg: number,
				gust: number;
			},
			visibility: number;
			pop: number;
			rain: {
				['3h']: number;
			},
			sys: {
				pod: string;
			},
			dt_txt: string
		},
	]
	city: {
		id: number;
		name: string;
		coord: {
			lat: number;
			lon: number;
		}
		country: string;
		timezone: number;
		sunrise: number;
		sunset: number;
	}
}

type FolderNameType = string;
interface ViewType {
	folderName: FolderNameType;
	name: string;
	label: string;
	url: string;
}
interface IAppConfig {
	views: ViewType[];
}
interface IHeroHeaderProps extends IApplicationProps {
	color?: string;
	bgColor?: string;
	bgImage?: string;
	headline?: string;
}
interface IApplicationProps {
	theme?: PartialTheme | undefined;
	appConfig?: IAppConfig;
}

interface IFramedChildComponentProps extends IApplicationProps { }

interface ILinkButton extends IFramedChildComponentProps {
	name?: string;
	label: string;
	url: string;
	currentPath?: boolean;
}

interface IImageProps {
	src: string;
	alt?: string;
	style?: CSSProperties;
}

interface IAnchorProps {
	text?: string;
	color?: string;
	href?: string;
}

export enum ArticleTagType {
	Code = 'code',
	React = 'react',
	Hooks = 'hooks',
	Art = 'art',
	Streaming = 'stremaing',
	Design = 'design',
	Ideas = 'ideas',
	Gaming = 'gaming',
}

interface IArticleMetadata {
	folderName: string;
	component: string;
	title: string;
	created: Date | string;
	summary: string;
	tags: string[];
}

type IArticleMetadataModuleImport = {
	[key: string]: IArticleMetadata;
};

interface IErrorViewProps {
	message: string;
}

export type {
	FolderNameType,
	ViewType,
	IAppConfig,
	IApplicationProps,
	IFramedChildComponentProps,
	ILinkButton,
	IHeroHeaderProps,
	IImageProps,
	IAnchorProps,
	IArticleMetadata,
	IArticleMetadataModuleImport,
	coordinatesQueryObjectType,
	weatherQueryObjectType,
	CityWeatherObjectType,
	IWeatherCardProps,
	ICityForecastResponse,
	IWeatherForecastCardsProps,
	IErrorViewProps,
	IbridCityWeatherObjectType,
	geoResponseType,
	currentWeatherResponseObjectType,
	forecastWeatherResponseObjectType,
};

