import {useEffect, useState} from 'react';
import { useDevice } from '../../../hooks/useDevice';
import bg from '../../../media/svgs/bg2.svg';
import {IApplicationProps} from '../../../types';
import CustomAlert from '../../components/CustomAlert';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import LinkUp from '../../components/LinkUp';
import {StylePageContentContainer, Wrapper01} from '../../Style';

// eslint-disable-next-line no-empty-pattern
const Index = ({}: IApplicationProps) => {
	const [customAlert, setCustomAlert] = useState<string | undefined>(undefined);
	const {isMobile} = useDevice();

	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const useCustomAlert = async (text: string | undefined) => {
		setCustomAlert(text);
		await new Promise(resolve => setTimeout(resolve, 4000));
		setCustomAlert(undefined);
	};

	useEffect(() => {
		useCustomAlert(isMobile ? '✔ Mobile Friendly' : '✔ Keyboard Friendly.Use TAB(↹) and Shift+TAB(⇧ + ↹) to navigate.Hit Enter(↩) to call action.');
	}, []);

	const contentView = () => (
		<Wrapper01>
			<LinkUp useCustomAlert={useCustomAlert}/>
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
