import {IFontStyles, Text} from '@fluentui/react';
import {throttle} from 'lodash';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDevice} from '../../../hooks/useDevice';
import bg from '../../../media/svgs/bg2.svg';
import {IApplicationProps} from '../../../types';
import Anchor from '../../components/Anchor';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import {SectionMargin, SpecialWordStyle, StyledArticlesGrid, StyledHeadOfSection, StyledParagraph2, StylePageContentContainer, TextContainerStyle} from '../../Style';

// eslint-disable-next-line no-empty-pattern
const Index = ({}: IApplicationProps) => {
	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const [primaryText, setPrimaryText] = useState<keyof IFontStyles | undefined>(undefined);
	const [secondaryText, setSecondaryText] = useState<keyof IFontStyles | undefined>(undefined);
	// const [, setIconGridTemplateColumns] = useState<string | undefined>(undefined);
	const [customAlert, setCustomAlert] = useState<string | undefined>(undefined);
	const {isMobile, isLaptop, isMonitor} = useDevice();

	const useCustomAlert = async (text: string, ms: number = 2000) => {
		if (text === customAlert) {
			return;
		}

		setCustomAlert(text);
		await new Promise(resolve => setTimeout(resolve, ms));
		setCustomAlert(undefined);
	};

	useEffect(() => {
		addEventListener('resize', throttle(handleResize, 500));
		dispatchEvent(new CustomEvent('resize'));
	});

	useEffect(() => {
		useCustomAlert(isMobile ? '✔ Mobile Friendly' : 'You can use TAB(↹) and Shift+TAB(⇧ + ↹) to navigate.', 6000);
	}, []);

	// eslint-disable-next-line no-unused-vars
	enum Keyboard { Enter = 13 }

	const handleResize = () => {
		if (isMonitor) {
			setPrimaryText('xLarge');
			setSecondaryText('large');
		} else if (isLaptop) {
			setPrimaryText('large');
			setSecondaryText('medium');
		} else if (isMobile) {
			setPrimaryText('medium');
			setSecondaryText('small');
		}
	};

	const handleCopyToClipboard = (text: string) => {
		useCustomAlert(`✔ Copied to clipboard: ${text}`);
		navigator.clipboard.writeText(text);
	};

	const handleRedirect = (url: string) => {
		window.location.href = `https://${url}`;
	};

	const contentView = () => (
		<div style={{position: 'relative', marginTop: isMobile ? '0rem' : '1rem'}}>

			<StyledHeadOfSection id="linkup" isMobile={isMobile}>
				<Text variant="xxLargePlus" style ={isMobile ? {} : {}}>Link up</Text>
			</StyledHeadOfSection>

			<StyledArticlesGrid isMobile={isMobile} style={isMobile ? {
				display: 'flex',
				flexWrap: 'wrap',
				rowGap: '.2rem',
				padding: '0 .2rem',
			} : {
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
				gap: '.2rem',
			}}>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleCopyToClipboard('powerhydratoni@gmail.com')}
					onClick={() => handleCopyToClipboard('powerhydratoni@gmail.com')}>
					{/* <IconContainer>
						<img style={imgStyle} src={GmailSvg} alt="Gmail logo"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}>Gmail</SpecialWordStyle>
						</Text>
						<Text block nowrap variant={secondaryText}>
								powerhydratoni@gmail.com
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('github.com/palloncino')}
					onClick={() => handleRedirect('github.com/palloncino')}>
					{/* <IconContainer>
						<img style={imgStyle} src={GithubSvg} alt="Github logo"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}><Anchor href="https://github.com/palloncino" text="Github"/></SpecialWordStyle>
						</Text>
						<Text block nowrap variant={secondaryText}>
							palloncino
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('instagram.com/antonio_guiotto')}
					onClick={() => handleRedirect('instagram.com/antonio_guiotto')}>
					{/* <IconContainer>
						<img style={imgStyle} src={InstagramSvg} alt="Instagram logo"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}><Anchor href="https://instagram.com/antonio_guiotto" text="Instagram"/></SpecialWordStyle>
						</Text>
						<Text block nowrap variant={secondaryText}>
								antonio_guiotto
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleCopyToClipboard('Toni#2583')}
					onClick={() => handleCopyToClipboard('Toni#2583')}>
					{/* <IconContainer>
						<img style={imgStyle} src={DiscordSvg} alt="Discord logo"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}>Discord</SpecialWordStyle>
						</Text>
						<Text block nowrap variant={secondaryText}>
							Toni#2583
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('www.youtube.com/channel/UC31Gz5YZuH-J5zuz5hZjzgA')}
					onClick={() => handleRedirect('www.youtube.com/channel/UC31Gz5YZuH-J5zuz5hZjzgA')}>
					{/* <IconContainer>
						<img style={imgStyle} src={ytSvg} alt="Youtube"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}><Anchor href="https://www.youtube.com/channel/UC31Gz5YZuH-J5zuz5hZjzgA" text="Youtube"/></SpecialWordStyle>
						</Text>
						<Text block nowrap variant={secondaryText}>
							Antonio Guiotto
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('wa.me/00393474943221')}
					onClick={() => handleRedirect('wa.me/00393474943221')}>
					{/* <IconContainer>
						<img style={imgStyle} src={WhatsappSvg} alt="WhatsApp logo"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}><Anchor href="https://wa.me/00393474943221" text="WhatsApp"/></SpecialWordStyle>
						</Text>
						<Text block nowrap variant={secondaryText}>
							Chat now
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('wa.me/00393474943221')}
					// onKeyPress={() => handleCopyToClipboard('powerhydratoni@gmail.com')}
					// onClick={() => handleCopyToClipboard('powerhydratoni@gmail.com')}
				>
					{/* <IconContainer>
						<img style={imgStyle} src={docSvg} alt="Document icon"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}>
								Working History
							</SpecialWordStyle>
						</Text>
						<Link to="https://s3.amazonaws.com/antonioguiotto.cv/CV.pdf" target="_blank" download style={{textDecoration: 'none'}}>
							<Text block nowrap variant={secondaryText}>
								Download PDF
							</Text>
						</Link>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('https://www.linkedin.com/in/antonioguiotto/')}
					onClick={() => handleRedirect('www.linkedin.com/in/antonioguiotto/')}
				>
					{/* <IconContainer>
						<img style={imgStyle} src={linkedinSvg} alt="Linkedin icon"/>
					</IconContainer> */}
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={primaryText}>
							<SpecialWordStyle color={'#323130'}>Linkedin</SpecialWordStyle>
						</Text>
						<Text block nowrap variant={secondaryText}>
								Antonio Guiotto
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

			</StyledArticlesGrid>
		</div>
	);

	return (
		<>
			<StylePageContentContainer>
				<SectionMargin mb={isMobile ? '0' : '0'} >
					<HeroHeader
						color={'#323130'}
						bgImage={bg}
						headline={'Homepage'}
						subHeadline={'Browse through useful links'}
					/>
				</SectionMargin>
				<div style={{
					boxSizing: 'border-box',
					zIndex: 200,
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					background: '#323130',
					position: 'fixed',
					bottom: 0,
					height: customAlert ? '10%' : 0,
					transition: '.5s',
					width: '100%',
					maxWidth: '400px',
					padding: customAlert ? '1rem' : 0,
					borderTopLeftRadius: '1rem',
					borderTopRightRadius: '1rem',
				}}>
					<SpecialWordStyle color={'#fff'}>
						{customAlert}
					</SpecialWordStyle>
				</div>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Index;
