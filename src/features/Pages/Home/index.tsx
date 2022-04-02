import {IFontStyles, Text} from '@fluentui/react';
import DiscordSvg from '../../../media/svgs/discord.svg';
import InstagramSvg from '../../../media/svgs/instagram.svg';
import GmailSvg from '../../../media/svgs/gmail.svg';
import GithubSvg from '../../../media/svgs/github.svg';
import IosSvg from '../../../media/svgs/ios.svg';
import ReactSvg from '../../../media/svgs/react.svg';
import TypescriptSvg from '../../../media/svgs/typescript.svg';
import NodeJsSvg from '../../../media/svgs/nodejs.svg';
import GitSvg from '../../../media/svgs/git.svg';
import bg from '../../../media/svgs/bg.svg';
import {IApplicationProps} from '../../../types';
import Anchor from '../../components/Anchor';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import {Image} from '../../components/Image';
import {StyledSectionWhite, SpecialWordStyle, StyledParagraph, StylePageContentContainer, SectionMarginBottom, StyledArticlesGrid, StyledParagraphTitle} from '../../Style';
import {useEffect, useState} from 'react';
import {throttle} from 'lodash';

const Home = ({theme}: IApplicationProps) => {
	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const iconStyle = {
		display: 'flex',
		alignItems: 'end',
		maxWidth: '1.2rem',
		marginRight: '.5rem',
	};

	const [textSize, setTextSize] = useState<keyof IFontStyles | undefined>(undefined);
	const [iconGridTemplateColumns, setIconGridTemplateColumns] = useState<string | undefined>(undefined);

	useEffect(() => {
		addEventListener('resize', throttle(handleResize, 500));
		dispatchEvent(new CustomEvent('resize'));
	});

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

	const contentView = () => (
		<>
			<StyledSectionWhite>
				<StyledParagraphTitle>
					<Text variant={'xLarge'}>
					👷🏻‍♂️ What I do
					</Text>
				</StyledParagraphTitle>

				<StyledParagraph>
					<Text variant={textSize}>
					Hi, am a Software Developer helping enterprises make the best out of their online presence.
					</Text>
				</StyledParagraph>
			</StyledSectionWhite>

			<StyledSectionWhite>

				<StyledParagraphTitle>
					<Text variant={'xLarge'}>
					🍞 My daily bread
					</Text>
				</StyledParagraphTitle>

				<StyledArticlesGrid gridTemplateColumns={iconGridTemplateColumns}>

					<StyledParagraph>
						<Image src={IosSvg} alt="IOS logo" style={iconStyle} />
						<Text variant={textSize}>
					Apple Machine
						</Text>
					</StyledParagraph>

					<StyledParagraph>
						<Image src={ReactSvg} alt="React logo" style={iconStyle} />
						<Text variant={textSize}>
					React
						</Text>
					</StyledParagraph>

					<StyledParagraph>
						<Image src={TypescriptSvg} alt="TS logo" style={iconStyle} />
						<Text variant={textSize}>
					Typescript
						</Text>
					</StyledParagraph>

					<StyledParagraph>
						<Image src={NodeJsSvg} alt="Node logo" style={iconStyle} />
						<Text variant={textSize}>
					NodeJs
						</Text>
					</StyledParagraph>

					<StyledParagraph>
						<Image src={GitSvg} alt="Git logo" style={iconStyle} />
						<Text variant={textSize}>
					Git
						</Text>
					</StyledParagraph>

				</StyledArticlesGrid>

			</StyledSectionWhite>

			<StyledSectionWhite>

				<StyledParagraphTitle>
					<Text variant={'xLarge'}>
					✍🏻 Get in touch
					</Text>
				</StyledParagraphTitle>

				<StyledArticlesGrid gridTemplateColumns={window.innerWidth < 400 ? 'repeat(auto-fit, minmax(300px, 1fr))' : undefined}>

					<StyledParagraph>
						<Image src={GmailSvg} alt="Gmail logo" style={iconStyle} />
						<Text variant={textSize}>
					My email: <SpecialWordStyle color={theme?.palette?.themePrimary}>powerhydratoni@gmail.com</SpecialWordStyle>
						</Text>
					</StyledParagraph>

					<StyledParagraph>
						<Image src={GithubSvg} alt="Github logo" style={iconStyle} />
						<Text variant={textSize}>
					If you are a developer, this is my <Anchor href="https://github.com/palloncino" text="github account"/>
						</Text>
					</StyledParagraph>

					<StyledParagraph>
						<Image src={InstagramSvg} alt="Instagram logo" style={iconStyle} />
						<Text variant={textSize}>
					This is my <Anchor href="https://instagram.com/antonio_guiotto" text="instagram"/>
						</Text>
					</StyledParagraph>

					<StyledParagraph>
						<Image src={DiscordSvg} alt="Discord logo" style={iconStyle} />
						<Text variant={textSize}>
					My discord ID is <SpecialWordStyle color={theme?.palette?.themePrimary}>Toni#2583</SpecialWordStyle>
						</Text>
					</StyledParagraph>

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
						headline={'🙋🏻‍♂️ Hi brother/sister.'}
						subHeadline={'How\'re you doing today?'}
					/>
				</SectionMarginBottom>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Home;
