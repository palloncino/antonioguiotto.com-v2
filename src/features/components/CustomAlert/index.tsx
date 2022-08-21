import {StyledCustomAlertContainer, StyledCustomAlert, SpecialWordStyle} from '../../Style';
import {CustomAlertProps} from '../../../types';
import {useDevice} from '../../../hooks/useDevice';

export default function CustomAlert({customAlert}: CustomAlertProps) {
	const {isMobile} = useDevice();
	return (
		<StyledCustomAlertContainer customAlert={customAlert} isMobile={isMobile} className="CustomAlertContainer">
			<StyledCustomAlert customAlert={customAlert} isMobile={isMobile} className="CustomAlert">
				<SpecialWordStyle>
					{customAlert}
				</SpecialWordStyle>
			</StyledCustomAlert>
		</StyledCustomAlertContainer>
	);
}
