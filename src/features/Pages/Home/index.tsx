import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import {SectionMarginBottom, SpecialWordStyle, StyledParagraph, StylePageContentContainer} from '../../Style';
import {Text} from '@fluentui/react';
import ErrorView from '../../components/ErrorView';
import Anchor from '../../components/Anchor';

const Home = ({theme}: IApplicationProps) => {
	const errorMessageView = () => <ErrorView message={''} />;

	const contentView = () => (
		<>
			<StyledParagraph>
				<Text variant={'large'}>
					Hi, am a Software Developer helping enterprises make web applications with React and Typescript.
				</Text>
			</StyledParagraph>

			<StyledParagraph>
				<Text variant={'large'}>
					Glad you came in here, for any sort of collaboration, feel free to get in touch by any of the following channels.
				</Text>
			</StyledParagraph>

			<StyledParagraph>
				<Text variant={'large'}>
					If you are a developer, this is my <Anchor href="https://github.com/palloncino" text="github account"/>
				</Text>
			</StyledParagraph>

			<StyledParagraph>
				<Text variant={'large'}>
					This is my <Anchor href="https://instagram.com/antonio_guiotto" text="instagram"/>
				</Text>
			</StyledParagraph>

			<StyledParagraph>
				<Text variant={'large'}>
					My discord ID is <SpecialWordStyle color={theme?.palette?.themePrimary}>Toni#2583</SpecialWordStyle>
				</Text>
			</StyledParagraph>
		</>
	);

	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgColor={`linear-gradient(113.96deg, ${theme?.palette?.themeDarker} 0%, ${theme?.palette?.themePrimary} 48.44%, ${theme?.palette?.themeDarker} 100%)`}
						headline={'Welcome'} />
				</SectionMarginBottom>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Home;
