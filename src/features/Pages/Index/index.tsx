import {useState} from 'react';
import bg from '../../../media/svgs/bg2.svg';
import {IApplicationProps} from '../../../types';
import CustomAlert from '../../components/CustomAlert';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import LinkUp from '../../components/LinkUp';
import {StylePageContentContainer, Wrapper01} from '../../Style';

// eslint-disable-next-line no-empty-pattern
const Index = ({}: IApplicationProps) => {
	const [customAlert, setCustomAlert] = useState<string | undefined>('asd');

	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const contentView = () => (
		<Wrapper01>
			<LinkUp setCustomAlert={setCustomAlert}/>
		</Wrapper01>
	);

	return (
		<>
			<StylePageContentContainer>
				<HeroHeader
					color={'#323130'}
					bgImage={bg}
					headline={'Homepage'}
					subHeadline={'Browse through useful links'}
				/>
				<CustomAlert customAlert={customAlert as string} />
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Index;
