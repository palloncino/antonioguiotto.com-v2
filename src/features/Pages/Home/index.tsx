import {Text} from '@fluentui/react';
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
import {SectionMarginBottom, SpecialWordStyle, StyledParagraph, StylePageContentContainer} from '../../Style';

const Home = ({theme}: IApplicationProps) => {
	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const iconStyle = {
		display: 'flex',
		alignItems: 'end',
		maxWidth: '1.2rem',
		marginRight: '.5rem',
	};

	const contentView = () => (
		<>
			<SectionMarginBottom>
				<StyledParagraph>
					<Text variant={'xLarge'}>
					What I do
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Text variant={'large'}>
					Hi, am a Software Developer helping enterprises make the best out of their presence online.
					</Text>
				</StyledParagraph>
			</SectionMarginBottom>

			<SectionMarginBottom>

				<StyledParagraph>
					<Text variant={'xLarge'}>
					My daily bread
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={IosSvg} alt="IOS logo" style={iconStyle} />
					<Text variant={'large'}>
					Apple Machine
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={ReactSvg} alt="React logo" style={iconStyle} />
					<Text variant={'large'}>
					React
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={TypescriptSvg} alt="TS logo" style={iconStyle} />
					<Text variant={'large'}>
					Typescript
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={NodeJsSvg} alt="Node logo" style={iconStyle} />
					<Text variant={'large'}>
					NodeJs
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={GitSvg} alt="Git logo" style={iconStyle} />
					<Text variant={'large'}>
					Git
					</Text>
				</StyledParagraph>

			</SectionMarginBottom>

			<SectionMarginBottom>

				<StyledParagraph>
					<Text variant={'xLarge'}>
					Get in touch
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={GmailSvg} alt="Gmail logo" style={iconStyle} />
					<Text variant={'large'}>
					My email: <SpecialWordStyle color={theme?.palette?.themePrimary}>powerhydratoni@gmail.com</SpecialWordStyle>
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={GithubSvg} alt="Github logo" style={iconStyle} />
					<Text variant={'large'}>
					If you are a developer, this is my <Anchor href="https://github.com/palloncino" text="github account"/>
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={InstagramSvg} alt="Instagram logo" style={iconStyle} />
					<Text variant={'large'}>
					This is my <Anchor href="https://instagram.com/antonio_guiotto" text="instagram"/>
					</Text>
				</StyledParagraph>

				<StyledParagraph>
					<Image src={DiscordSvg} alt="Discord logo" style={iconStyle} />
					<Text variant={'large'}>
					My discord ID is <SpecialWordStyle color={theme?.palette?.themePrimary}>Toni#2583</SpecialWordStyle>
					</Text>
				</StyledParagraph>
			</SectionMarginBottom>
		</>
	);

	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgImage={bg}
						headline={'Welcome'} />
				</SectionMarginBottom>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Home;
