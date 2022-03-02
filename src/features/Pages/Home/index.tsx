import {IApplicationProps} from '../../../types';
import HeroHeader from '../../components/HeroHeader';
import {SectionMarginBottom, StylePageContentContainer} from '../../Style';
import {Text} from '@fluentui/react';
import ErrorView from '../../components/ErrorView';

const Home = ({theme}: IApplicationProps) => {
	const errorMessage = '';

	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const contentView = () => (
		<>
			<SectionMarginBottom>
				<Text variant={'xxLarge'} nowrap block>
					Description
				</Text>
			</SectionMarginBottom>

			<SectionMarginBottom>
				<Text variant={'large'} nowrap block>
					Software Developer helping enterprises make web applications with React and Typescript.
				</Text>
			</SectionMarginBottom>

			<SectionMarginBottom>
				<Text variant={'large'} nowrap block>
					Software Developer helping enterprises make web applications with React and Typescript.
				</Text>
			</SectionMarginBottom>
		</>
	);

	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgColor={`linear-gradient(113.96deg, ${theme?.palette?.themeDarker} 0%, ${theme?.palette?.themePrimary} 48.44%, ${theme?.palette?.themeDarker} 100%)`}
						headline={'antonioguiotto.com'} />
				</SectionMarginBottom>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Home;
