import {StyledCustomAlertContainer, StyledCustomAlert, SpecialWordStyle} from '../../Style';
import {CustomAlertProps} from '../../../types';
import {useDevice} from '../../../hooks/useDevice';
import {useEffect, useRef, useState} from 'react';

export default function CustomAlert({customAlert}: CustomAlertProps) {
	const [customAlertLenght, setCustomAlertLength] = useState();
	const {isMobile} = useDevice();
	const _ref = useRef(null);

	useEffect(() => {
		addEventListener('resize', () => setCustomAlertLength((_ref as any).current.clientWidth));
		dispatchEvent(new CustomEvent('resize'));
	});

	return (
		<StyledCustomAlertContainer
			ref={_ref}
			customAlert={customAlert}
			isMobile={isMobile}
			className="CustomAlertContainer">

			<StyledCustomAlert
				customAlert={customAlert}
				isMobile={isMobile}
				className={`CustomAlert ${customAlert && 'active'}`}
				width={customAlertLenght}>

				<SpecialWordStyle>
					{customAlert}
				</SpecialWordStyle>

			</StyledCustomAlert>

		</StyledCustomAlertContainer>
	);
}
