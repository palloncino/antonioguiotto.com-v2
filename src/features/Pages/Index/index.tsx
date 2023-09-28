/* eslint-disable complexity */
import {Spinner, Text} from '@fluentui/react';
import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {CSSProperties} from 'styled-components';
import {useNavigation} from '../../../hooks';
import {useDevice} from '../../../hooks/useDevice';
import bg3 from '../../../media/svgs/bg3.svg';
import img from './banner2.png';
import {IApplicationProps} from '../../../types';
import {animateClick} from '../../../utils';
import Banner01 from '../../components/Banner01';
import ChatGPTApp from '../../components/ChatGPTApp';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import LinkUp from '../../components/LinkUp';
import {CustomSection, StyledTextBox01, StylePageContentContainer, Wrapper01} from '../../Style';
import config from '../../../app.config.json';

export enum Sections {
	/* */ Chat = 'Chat',
	/* * * */ ChatInput = 'ChatInput',
	/* */ Websites = 'Websites',
	/* * * */ Weather = 'Weather',
	/* * * */ Kusama = 'Kusama',
	/* */ Videos = 'Videos',
	/* */ Contacts = 'Contacts'
}

const REDIRECT_TIMEOUT = 500;

// eslint-disable-next-line no-empty-pattern
const Index = ({}: IApplicationProps) => {
	const {navigate} = useNavigation();
	const [customAlert, setCustomAlert] = useState<string | undefined>(undefined);
	const [isChatSectionOpen, setIsChatSectionOpen] = useState(true);
	const [isWebsitesSectionOpen, setIsWebsitesSectionOpen] = useState(true);
	const [isVideosSectionOpen, setIsVideosSectionOpen] = useState(true);
	const [isContactsSectionOpen, setIsContactsSectionOpen] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const _ref01 = useRef(null);
	const _ref02 = useRef(null);

	// const _ref03 = useRef(null);
	// const _ref04 = useRef(null);
	// const _ref05 = useRef(null);
	// const _ref06 = useRef(null);

	const {isMobile} = useDevice();

	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const useCustomAlert = async (text: string | undefined) => {
		setCustomAlert(text);
		await new Promise(resolve => setTimeout(resolve, 4000));
		setCustomAlert(undefined);
	};

	const handleSetSectionOpen = (id: keyof typeof Sections | undefined) => {
		switch (id) {
			case Sections.Chat: setIsChatSectionOpen(!isChatSectionOpen);
				break;

			case Sections.Websites: setIsWebsitesSectionOpen(!isWebsitesSectionOpen);
				break;

			case Sections.Videos: setIsVideosSectionOpen(!isVideosSectionOpen);
				break;

			case Sections.Contacts: setIsContactsSectionOpen(!isContactsSectionOpen);
				break;

			default:
				break;
		}
	};

	useEffect(() => {
		useCustomAlert(isMobile ? 'Mobile Friendly' : 'Use TAB(↹) and Shift+TAB(⇧ + ↹) to navigate. Hit Enter(↩) to call action.');
	}, []);

	const tempStyle = {flex: 1, minWidth: 'calc(50% - 1rem)', boxSizing: 'border-box'} as CSSProperties;

	const tempStyleVideos = {...tempStyle};

	const handleSectionSubPageClick = (_ref: MutableRefObject<null> | null, isMobile: boolean, section: keyof typeof Sections) => {
		if (_ref) {
			animateClick(_ref, isMobile);
		}
	};

	const contentView = () => (
		<Wrapper01>
			<CustomSection mb={'20rem'}>
				<div style={isMobile ? {
					display: 'flex',
					flexDirection: 'column',
				} : {
					display: 'flex',
					boxSizing: 'border-box',
					flexWrap: 'wrap',
					columnGap: '.4rem',
				}}>

					<div id="Chat" className={`Chat${isChatSectionOpen ? ' open' : ''}`} style={{...tempStyle, flex: 2, minWidth: '100%'}}>
						<CustomSection width={'100%'} mb={isChatSectionOpen ? '.4rem' : '.4rem'}>
							<Banner01
								id={Sections.Chat}
								primaryText="Chat"
								secondaryText="Some of my work"
								handleSetSectionOpen={handleSetSectionOpen}
								isOpen={isChatSectionOpen}
								bg={undefined}
							/>
						</CustomSection>
					</div>

					<div id={'ChatInput'}
						style={{
							...tempStyle,
							height: isChatSectionOpen ? isMobile ? undefined : 'auto' : '0px',
							transition: '.5s',
							marginBottom: isChatSectionOpen ? isMobile ? '.4rem' : '.4rem' : '0rem',
						}}>
						<div style={{postion: 'relative', width: '100%', height: '100%', borderRadius: '.2rem'} as CSSProperties}>
							<ChatGPTApp />
						</div>
					</div>

					<div id="Websites" className={`Websites${isWebsitesSectionOpen ? ' open' : ''}`} style={{...tempStyle, flex: 2, minWidth: '100%'}}>
						<CustomSection width={'100%'} mb={isWebsitesSectionOpen ? '.4rem' : '.4rem'}>
							<Banner01
								id={Sections.Websites}
								primaryText="Websites"
								secondaryText="Some of my work"
								handleSetSectionOpen={handleSetSectionOpen}
								isOpen={isWebsitesSectionOpen}
								bg={undefined}
							/>
						</CustomSection>
					</div>

					<div id={'Weather'}
						style={{
							...tempStyle,
							height: isWebsitesSectionOpen ? isMobile ? undefined : '320px' : '0px',
							transition: '.5s',
							marginBottom: isWebsitesSectionOpen ? isMobile ? '.4rem' : '0rem' : '0rem',
						}}>
						<div style={{postion: 'relative', width: '100%', height: '100%', borderRadius: '.2rem'} as CSSProperties}>
							<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
								{/* https://www.meteoblue.com/en/weather/maps/widget/milan_italy_3173435?windAnimation=0&gust=0&satellite=0&cloudsAndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&temperature=1&sunshine=0&extremeForecastIndex=0&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto" */}
								<div
									onClick={async () => {
										setCustomAlert(`You are being redirected to ${Sections.Weather} App`);
										setIsLoading(true);
										await new Promise(res => {
											setTimeout(() => {
												res(undefined);
												handleSectionSubPageClick(_ref01, isMobile, Sections.Weather);
												navigate(`/${Sections.Weather}`);
											}, REDIRECT_TIMEOUT);
										});
									}}
									onKeyPress={() => ({})}
									tabIndex={1}
									ref={_ref01}
									style={{
										width: '100%',
										transition: '.5s',
										height: (isWebsitesSectionOpen ? (isMobile ? '160px' : '100%') : '0px'),
										paddingBottom: isWebsitesSectionOpen ? '1rem' : '0rem',
										borderRadius: '.2rem',
										boxSizing: 'border-box',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'flex-end',
										cursor: 'pointer',
										background: `url(${'https://antonio-guiotto-media.s3.amazonaws.com/sky01.jpeg' || 'https://picsum.photos/600'})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}>
									<StyledTextBox01 isOpen={isWebsitesSectionOpen} isMobile={isMobile}>
										<Text style={{color: '#fff'}} variant={isMobile ? 'xLarge' : 'xxLarge'}>{'Palloncino\'s weather app'}</Text>
										<Text style={{color: '#fff', marginBottom: '.2rem'}} variant={isMobile ? 'small' : 'medium'}>
											This app is in progress.
										</Text>
									</StyledTextBox01>
								</div>
							</div>
						</div>
					</div>

					<div id={'Kusama'}
						style={{...tempStyle, height: isWebsitesSectionOpen ? isMobile ? 'auto' : '320px' : '0px', transition: '.5s'}}>
						<div style={{postion: 'relative', width: '100%', height: '100%', borderRadius: '.2rem'} as CSSProperties}>
							<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
								<div
									onClick={async () => {
										const url = 'kusamaacid.com';
										setCustomAlert(`You are being redirected to ${url}`);
										setIsLoading(true);
										await new Promise(res => {
											setTimeout(() => {
												res(undefined);
												window.location.href = `https://${url}`;
											}, REDIRECT_TIMEOUT);
										});
									}}
									onKeyPress={() => ({})}
									tabIndex={1}
									ref={_ref02}
									style={{
										width: '100%',
										transition: '.5s',
										height: (isWebsitesSectionOpen ? (isMobile ? '160px' : '100%') : '0px'),
										paddingBottom: isWebsitesSectionOpen ? '1rem' : '0rem',
										borderRadius: '.2rem',
										boxSizing: 'border-box',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'flex-end',
										cursor: 'pointer',
										background: `url(${undefined || img || '#e4e4e4'})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}>
									<StyledTextBox01 isOpen={isWebsitesSectionOpen} isMobile={isMobile}>
										<Text style={{color: '#fff'}} variant={isMobile ? 'xLarge' : 'xxLarge'}>Kusama Acid</Text>
										<Text style={{color: '#fff', marginBottom: '.2rem'}} variant={isMobile ? 'small' : 'medium'}>
											New Fresh NFTs - Under construction 🛠👷🏻🚧
										</Text>
									</StyledTextBox01>
								</div>
							</div>
						</div>
					</div>

					<div id="Videos" className={`Videos${isVideosSectionOpen ? ' open' : ''}`} style={{...tempStyle, flex: 2, minWidth: '100%'}}>
						<CustomSection width={'100%'} mb={isVideosSectionOpen ? '.4rem' : '.4rem'} mt={isWebsitesSectionOpen ? '.4rem' : '0rem'}>
							<Banner01
								id={Sections.Videos}
								primaryText="Videos"
								secondaryText="Some of the latest tracks"
								handleSetSectionOpen={handleSetSectionOpen}
								isOpen={isVideosSectionOpen}
								bg={undefined} />
						</CustomSection>
					</div>

					{config.data.videos.data.map(({name, title, author, url}, index) => (
						<div
							key={`${title}-${index}`}
							style={{...tempStyleVideos, minWidth: 'calc(25% - 1rem)', height: isVideosSectionOpen ? isMobile ? 'unset' : '160px' : '0px', transition: '.5s', marginBottom: isVideosSectionOpen ? isMobile ? '.4rem' : '0rem' : '0rem'}}>
							<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
								<div
									tabIndex={1}
									onClick={() => handleSectionSubPageClick(null, isMobile, Sections.Videos)}
									// ref={_ref03}
									style={{
										background: '#e4e4e4',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										width: '100%',
										height: isVideosSectionOpen ? isMobile ? '160px' : '160px' : '0px',
										borderRadius: '.2rem',
										transition: '.5s',
										cursor: 'pointer',
									}}/>
							</div>
						</div>
					))}

					<div id="Contacts" className={`Contacts${isContactsSectionOpen ? ' open' : ''}`} style={{...tempStyle, flex: 2, minWidth: '100%'}}>
						<CustomSection width={'100%'} mb={isMobile ? '.2rem' : '.4rem'} mt={isVideosSectionOpen ? '.4rem' : '0rem'}>
							<Banner01
								id={Sections.Contacts}
								primaryText="Contacts"
								secondaryText="Browse through useful links"
								handleSetSectionOpen={handleSetSectionOpen}
								isOpen={isContactsSectionOpen}
								bg={undefined} />
						</CustomSection>
					</div>

					<div style={{...tempStyle, height: isContactsSectionOpen ? '160px' : '0px', transition: '.5s'}}>
						<CustomSection width={'100%'}>
							<LinkUp buttonHeight={isContactsSectionOpen ? '40px' : '0px'} useCustomAlert={useCustomAlert}/>
						</CustomSection>
					</div>

				</div>

			</CustomSection>

		</Wrapper01>
	);

	const renderLoader = () => (
		<div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<Spinner size={3} label="Loading" />
		</div>
	);

	return (
		<>
			<StylePageContentContainer>
				<CustomSection mb={isMobile ? '0rem' : isChatSectionOpen ? '0rem' : '.4rem'}>
					{isChatSectionOpen ? '' : (
						<HeroHeader
							color={'#323130'}
							bgImage={isMobile ? undefined : undefined}
							headline={'Homepage'}
							subHeadline={'Site in progress'}
							message={customAlert as string} />
					)}
				</CustomSection>
				{errorMessage ? errorMessageView() : isLoading ? renderLoader() : contentView()}
			</StylePageContentContainer>
			{/* <CustomAlert customAlert={customAlert as string} /> */}
		</>
	);
};

export default Index;
