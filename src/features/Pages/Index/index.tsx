import {IFontStyles, Text} from '@fluentui/react';
import {throttle} from 'lodash';
import {useEffect, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import bg from '../../../media/svgs/bg2.svg';
import DiscordSvg from '../../../media/svgs/discord.svg';
import GithubSvg from '../../../media/svgs/github.svg';
import GmailSvg from '../../../media/svgs/gmail.svg';
import InstagramSvg from '../../../media/svgs/instagram.svg';
import WhatsappSvg from '../../../media/svgs/whatsapp.svg';
import ytSvg from '../../../media/svgs/yt.svg';
import docSvg from '../../../media/svgs/doc.svg';
import linkedinSvg from '../../../media/svgs/linkedin.svg';
import {IApplicationProps} from '../../../types';
import Anchor from '../../components/Anchor';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import {
	IconContainer, SectionMargin, SpecialWordStyle, StyledArticlesGrid, StyledHeadOfSection, StyledParagraph2, StylePageContentContainer, TextContainerStyle,
} from '../../Style';

const Index = ({theme}: IApplicationProps) => {
	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const [textSize, setTextSize] = useState<keyof IFontStyles | undefined>(undefined);
	const [, setIconGridTemplateColumns] = useState<string | undefined>(undefined);
	const [customAlert, setCustomAlert] = useState<string | undefined>(undefined);
	const {isMobile} = useDevice();

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
		console.log(1);
	});

	useEffect(() => {
		useCustomAlert(isMobile ? '✔ Mobile Friendly' : 'You can use TAB(↹) and Shift+TAB(⇧ + ↹) to navigate.', 6000);
	}, []);

	const handleResize = (event: any) => {
		const {innerWidth} = event.target;
		if (innerWidth >= 800) {
			setTextSize('large');
			setIconGridTemplateColumns('repeat(3, 1fr)');
		} else if (innerWidth >= 500 && innerWidth < 800) {
			setTextSize('medium');
			setIconGridTemplateColumns('repeat(2, 1fr)');
		} else if (innerWidth < 500) {
			setTextSize('medium');
			setIconGridTemplateColumns('1fr');
		}
	};

	const imgStyle = {maxWidth: isMobile ? '40px' : '30px', maxHeight: isMobile ? '40px' : '30px', cursor: 'grab'};

	const handleCopyToClipboard = (text: string) => {
		useCustomAlert(`✔ Copied to clipboard: ${text}`);
		navigator.clipboard.writeText(text);
	};

	const handleRedirect = (url: string) => {
		window.location.href = `https://${url}`;
	};

	enum Keyboard {
		Enter = 13
	}

	const contentView = () => (
		<div style={{position: 'relative'}}>

			<StyledHeadOfSection id="linkup" isMobile={isMobile}>
				<Text variant="xxLargePlus" style ={{color: isMobile ? '' : '#111'}}>Link up</Text>
			</StyledHeadOfSection>

			<StyledArticlesGrid isMobile={isMobile} style={isMobile ? {
				display: 'flex',
				flexWrap: 'wrap',
				rowGap: '.2rem',
				padding: '0 .2rem',
			} : {
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
				columnGap: '.5rem',
				rowGap: '.5rem',
			}}>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleCopyToClipboard('powerhydratoni@gmail.com')}
					onClick={() => handleCopyToClipboard('powerhydratoni@gmail.com')}>
					<IconContainer>
						<img style={imgStyle} src={GmailSvg} alt="Gmail logo"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}>Gmail</SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
								powerhydratoni@gmail.com
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('github.com/palloncino')}
					onClick={() => handleRedirect('github.com/palloncino')}>
					<IconContainer>
						<img style={imgStyle} src={GithubSvg} alt="Github logo"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}><Anchor href="https://github.com/palloncino" text="Github"/></SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
							palloncino
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('instagram.com/antonio_guiotto')}
					onClick={() => handleRedirect('instagram.com/antonio_guiotto')}>
					<IconContainer>
						<img style={imgStyle} src={InstagramSvg} alt="Instagram logo"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}><Anchor href="https://instagram.com/antonio_guiotto" text="Instagram"/></SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
								antonio_guiotto
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleCopyToClipboard('Toni#2583')}
					onClick={() => handleCopyToClipboard('Toni#2583')}>
					<IconContainer>
						<img style={imgStyle} src={DiscordSvg} alt="Discord logo"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}>Discord</SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
							Toni#2583
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('www.youtube.com/channel/UC31Gz5YZuH-J5zuz5hZjzgA')}
					onClick={() => handleRedirect('www.youtube.com/channel/UC31Gz5YZuH-J5zuz5hZjzgA')}>
					<IconContainer>
						<img style={imgStyle} src={ytSvg} alt="Youtube"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}><Anchor href="https://www.youtube.com/channel/UC31Gz5YZuH-J5zuz5hZjzgA" text="Youtube"/></SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
							Antonio Guiotto
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={(e: any) => e.charCode === Keyboard.Enter && handleRedirect('wa.me/00393474943221')}
					onClick={() => handleRedirect('wa.me/00393474943221')}>
					<IconContainer>
						<img style={imgStyle} src={WhatsappSvg} alt="WhatsApp logo"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}><Anchor href="https://wa.me/00393474943221" text="WhatsApp"/></SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
							Chat now
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					// onKeyPress={() => handleCopyToClipboard('powerhydratoni@gmail.com')}
					// onClick={() => handleCopyToClipboard('powerhydratoni@gmail.com')}
				>
					<IconContainer>
						<img style={imgStyle} src={docSvg} alt="Document icon"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}>Curriculum Vitae</SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
								download PDF
						</Text>
					</TextContainerStyle>
				</StyledParagraph2>

				<StyledParagraph2
					isMobile={isMobile}
					tabIndex={1}
					// onKeyPress={() => handleCopyToClipboard('powerhydratoni@gmail.com')}
					// onClick={() => handleCopyToClipboard('powerhydratoni@gmail.com')}
				>
					<IconContainer>
						<img style={imgStyle} src={linkedinSvg} alt="Linkedin icon"/>
					</IconContainer>
					<TextContainerStyle isMobile={isMobile}>
						<Text variant={isMobile ? 'medium' : 'xLarge'}>
							<SpecialWordStyle color={theme?.palette?.themePrimary}>Linkedin</SpecialWordStyle>
						</Text>
						<Text variant={textSize}>
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
						color={theme?.palette?.white}
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
					background: '#000',
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
					<SpecialWordStyle>
						{customAlert}
					</SpecialWordStyle>
				</div>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Index;
