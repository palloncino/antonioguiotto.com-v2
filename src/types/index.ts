/* eslint-disable no-unused-vars */
import {IFontStyles} from '@fluentui/react';
import {PartialTheme} from '@fluentui/react';
import {CSSProperties} from 'styled-components';

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
	subHeadline?: string;
	message?: string;
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
	theme?: PartialTheme | undefined;
	target?: string;
	download?: boolean;
	text?: string;
	color?: string;
	href?: string;
	tabIndex?: boolean;
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

export type customAlertItemType = {
	text: string;
	duration: number;
}

interface CustomAlertProps {
	customAlert: string | customAlertItemType[];
}

interface StandardButtonProps {
	primaryText: string;
	secondaryText: string;
	primaryTextVariant: keyof IFontStyles | undefined;
	secondaryTextVariant: keyof IFontStyles | undefined;
	redirectURL?: string | undefined;
	copyToClipBoard?: boolean;
	bg?: string;
	handleCopyToClipboard?: (text: string, ms?: number) => void;
	buttonHeight?: string;
}

interface LinkUpProps {
	buttonHeight?: string;
    useCustomAlert: (payload: string | undefined) => void;
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
	IErrorViewProps,
	CustomAlertProps,
	StandardButtonProps,
	LinkUpProps,
};

