import {IFontStyles, Text} from '@fluentui/react';
import {throttle} from 'lodash';
import {useEffect, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import bg from '../../../media/svgs/bg2.svg';
import GithubSvg from '../../../media/svgs/github.svg';
import GmailSvg from '../../../media/svgs/gmail.svg';
import WhatsappSvg from '../../../media/svgs/whatsapp.svg';
import {IApplicationProps} from '../../../types';
import Anchor from '../../components/Anchor';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import {
	IconContainer, SectionMarginBottom, SpecialWordStyle, StyledArticlesGrid, StyledParagraph2, StyledSectionWhite, StylePageContentContainer, TextContainerStyle,
} from '../../Style';

const CV = ({theme}: IApplicationProps) => {
	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const [textSize, setTextSize] = useState<keyof IFontStyles | undefined>(undefined);
	const [, setIconGridTemplateColumns] = useState<string | undefined>(undefined);

	useEffect(() => {
		addEventListener('resize', throttle(handleResize, 500));
		dispatchEvent(new CustomEvent('resize'));
	});

	/* start */
	const {isMobile} = useDevice();
	const [customAlert, setCustomAlert] = useState<string | undefined>(undefined);

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

	const handleCopyToClipboard = (text: string) => {
		setCustomAlert(`✔ Copied to clipboard: ${text}`);
		setTimeout(() => setCustomAlert(undefined), 4000);
		navigator.clipboard.writeText(text);
	};

	/* end */

	const imgStyle = {maxWidth: '70px', maxHeight: '100px', cursor: 'grab'};

	const contentView = () => (
		<>
			<StyledSectionWhite>
				<StyledArticlesGrid columnGap={'2rem'} rowGap={'2rem'} gridTemplateColumns={window.innerWidth < 400 ? 'repeat(auto-fit, minmax(300px, 1fr))' : 'repeat(auto-fit, minmax(400px, 1fr))'}>

					<StyledParagraph2
						isMobile={isMobile}
						tabIndex={1}
						onKeyPress={() => handleCopyToClipboard('powerhydratoni@gmail.com')}>
						<IconContainer>
							<img style={imgStyle} src={GmailSvg} alt="Gmail logo"/>
						</IconContainer>
						<TextContainerStyle>
							<Text variant={isMobile ? 'medium' : 'xLarge'}>
								<SpecialWordStyle color={theme?.palette?.themePrimary}>Gmail</SpecialWordStyle>
							</Text>
							<Text variant={textSize}>
								powerhydratoni@gmail.com
							</Text>
						</TextContainerStyle>
					</StyledParagraph2>

					<StyledParagraph2 tabIndex={1}>
						<IconContainer>
							<img style={imgStyle} src={GithubSvg} alt="Github logo"/>
						</IconContainer>
						<TextContainerStyle>
							<Text variant={'xLarge'}>
								<SpecialWordStyle color={theme?.palette?.themePrimary}><Anchor href="https://github.com/palloncino" text="Github"/></SpecialWordStyle>
							</Text>
							<Text variant={textSize}>
							palloncino
							</Text>
						</TextContainerStyle>
					</StyledParagraph2>

					<StyledParagraph2 tabIndex={1}>
						<IconContainer>
							<img style={imgStyle} src={WhatsappSvg} alt="WhatsApp logo"/>
						</IconContainer>
						<TextContainerStyle>
							<Text variant={'xLarge'}>
								<SpecialWordStyle color={theme?.palette?.themePrimary}><Anchor href="https://wa.me/00393474943221" text="WhatsApp"/></SpecialWordStyle>
							</Text>
							<Text variant={textSize}>
							+39 3474943221
							</Text>
						</TextContainerStyle>
					</StyledParagraph2>

				</StyledArticlesGrid>
			</StyledSectionWhite>
			<br />
		</>
	);

	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgImage={bg}
						headline={'My Working History'}
						subHeadline={'Find the CV on the top right corner'}
					/>
				</SectionMarginBottom>
				{customAlert && (
					<div style={{position: 'absolute', bottom: 0, height: '100px', width: '200px'}}>
						<Text>
							{customAlert}
						</Text>
					</div>
				)}
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default CV;
