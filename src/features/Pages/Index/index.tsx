import {useCallback, useEffect, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import bg from '../../../media/svgs/bg2.svg';
import {IApplicationProps} from '../../../types';
import CustomAlert from '../../components/CustomAlert';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import LinkUp from '../../components/LinkUp';
import {CustomSection, StylePageContentContainer, Wrapper01} from '../../Style';
import Banner01 from '../../components/Banner01';
import {CSSProperties} from 'styled-components';
import {Text} from '@fluentui/react';

export enum Sections {Camping = 'Camping', Videos = 'Videos', Contacts = 'Contacts'}

// eslint-disable-next-line no-empty-pattern
const Index = ({}: IApplicationProps) => {
	const [customAlert, setCustomAlert] = useState<string | undefined>(undefined);
	const [isCampingSectionOpen, setIsCampingSectionOpen] = useState(false);
	const [isVideosSectionOpen, setIsVideosSectionOpen] = useState(false);
	const [isContactsSectionOpen, setIsContactsSectionOpen] = useState(true);
	const {isMobile} = useDevice();

	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const useCustomAlert = async (text: string | undefined) => {
		setCustomAlert(text);
		await new Promise(resolve => setTimeout(resolve, 4000));
		setCustomAlert(undefined);
	};

	const handleSetSectionOpen = (id: Sections.Camping | Sections.Videos | Sections.Contacts) => {
		switch (id) {
			case Sections.Camping: setIsCampingSectionOpen(!isCampingSectionOpen);
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
		setTimeout(() => {
			useCustomAlert(isMobile ? 'Welcome to my website' : 'Welcome to my website');
		}, 8000);
	}, []);

	const tempStyle = {flex: 1, minWidth: 'calc(50% - 1rem)', boxSizing: 'border-box'} as CSSProperties;

	const contentView = () => (
		<Wrapper01>
			<CustomSection mb={'20rem'}>
				<div style={isMobile ? {
					display: 'flex',
					flexDirection: 'column',
					rowGap: '0rem',
					columnGap: '.2rem',
				} : {
					display: 'flex',
					boxSizing: 'border-box',
					flexWrap: 'wrap',
					columnGap: '.4rem',
				}}>

					{!isMobile && (
						<>
							<div id="Camping" style={{...tempStyle, flex: 2, minWidth: '100%'}}>
								<CustomSection width={'100%'} mb={'.4rem'}>
									<Banner01
										id={Sections.Camping}
										primaryText="Camping"
										secondaryText="Weather and park for the night"
										handleSetSectionOpen={handleSetSectionOpen}
									/>
								</CustomSection>
							</div>

							<div style={{...tempStyle, height: isCampingSectionOpen ? isMobile ? undefined : '400px' : '0px', transition: '.5s'}}>
								<div style={{postion: 'relative', width: '100%', height: '100%', borderRadius: '.2rem'} as CSSProperties}>
									<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
										{/*
											<iframe
											src="https://www.meteoblue.com/en/weather/maps/widget/milan_italy_3173435?windAnimation=0&gust=0&satellite=0&cloudsAndPrecipitation=0&cloudsAndPrecipitation=1&temperature=0&temperature=1&sunshine=0&extremeForecastIndex=0&geoloc=fixed&tempunit=C&windunit=km%252Fh&lengthunit=metric&zoom=5&autowidth=auto"
											frameBorder="0"
											scrolling="NO"
											sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
											style={{width: '100%', height: '100%', borderRadius: '.2rem'}} />
										*/}
										<div style={{background: '#DCE2E1', width: '100%', height: '100%', borderRadius: '.2rem'}} />
									</div>
								</div>
							</div>

							<div style={{...tempStyle, height: isCampingSectionOpen ? isMobile ? 'auto' : '400px' : '0px', transition: '.5s'}}>
								<div style={{postion: 'relative', width: '100%', height: '100%', borderRadius: '.2rem'} as CSSProperties}>
									<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
										{isMobile ? (
											<div style={{
												background: 'red',
												height: '100%',
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												justifyContent: 'center',

											}}>
												<Text>
													{/* Check <a href="https://www.park4night.com/carte_lieux" target="_blank" rel="noreferrer">park4night website</a> */}
												</Text>
												<div style={{width: '100%', height: '100%', borderRadius: '.2rem'}} />
											</div>
										) : (
											// <iframe
											// 	id={'park4night'}
											// 	src="https://www.park4night.com/carte_lieux"
											// 	frameBorder="0"
											// 	sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox"
											// 	style={{width: '100%', height: '100%', borderRadius: '.2rem'}} />
											<div style={{background: '#DCE2E1', width: '100%', height: '100%', borderRadius: '.2rem'}} />
										)}
									</div>
								</div>
							</div>

							<div id="Videos" style={{...tempStyle, flex: 2, minWidth: '100%'}}>
								<CustomSection width={'100%'} mb={'.4rem'} mt={isCampingSectionOpen ? '.4rem' : '0rem'}>
									<Banner01
										id={Sections.Videos}
										primaryText="Videos"
										secondaryText="Some of the latest tracks"
										handleSetSectionOpen={handleSetSectionOpen} />
								</CustomSection>
							</div>

							{/* {isVideosSectionOpen && (<> */}
							<div style={{...tempStyle, minWidth: 'calc(25% - 1rem)', height: isVideosSectionOpen ? '160px' : '0px', transition: '.5s'}}>
								<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
									{/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/366TrfvbUnA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
									<div style={{background: '#DCE2E1', width: '100%', height: '100%', borderRadius: '.2rem'}} />
								</div>
							</div>

							<div style={{...tempStyle, minWidth: 'calc(25% - 1rem)', height: isVideosSectionOpen ? '160px' : '0px', transition: '.5s'}}>
								<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
									{/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/V05xzWPU8mk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
									<div style={{background: '#DCE2E1', width: '100%', height: '100%', borderRadius: '.2rem'}} />
								</div>
							</div>

							<div style={{...tempStyle, minWidth: 'calc(25% - 1rem)', height: isVideosSectionOpen ? '160px' : '0px', transition: '.5s'}}>
								<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
									{/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ncwo6c3yu30" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
									<div style={{background: '#DCE2E1', width: '100%', height: '100%', borderRadius: '.2rem'}} />
								</div>
							</div>

							<div style={{...tempStyle, minWidth: 'calc(25% - 1rem)', height: isVideosSectionOpen ? '160px' : '0px', transition: '.5s'}}>
								<div style={{boxSizing: 'border-box', postion: 'absolute', width: '100%', height: '100%'} as CSSProperties}>
									{/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/pyRPf-TTa3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
									<div style={{background: '#DCE2E1', width: '100%', height: '100%', borderRadius: '.2rem'}} />
								</div>
							</div>
							{/* </>) } */}
						</>
					)}

					<div id="Contacts" style={{...tempStyle, flex: 2, minWidth: '100%'}}>
						<CustomSection width={'100%'} mb={isMobile ? '.2rem' : '.4rem'} mt={isVideosSectionOpen ? '.4rem' : '0rem'}>
							<Banner01
								id={Sections.Contacts}
								primaryText="Contacts"
								secondaryText="Browse through useful links"
								handleSetSectionOpen={handleSetSectionOpen} />
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

	return (
		<>
			<StylePageContentContainer>
				<HeroHeader
					color={'#323130'}
					bgImage={bg}
					headline={'Homepage'}
					subHeadline={'Site in construction'}
					message={customAlert as string}
				/>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
			{/* <CustomAlert customAlert={customAlert as string} /> */}
		</>
	);
};

export default Index;
