import {StyledCustomAlertContainer, StyledCustomAlert, SpecialWordStyle} from '../../Style';
import {CustomAlertProps} from '../../../types';
import {useDevice} from '../../../hooks/useDevice';
import {useEffect, useRef, useState} from 'react';
import {throttle} from 'lodash';

export default function CustomAlert({customAlert}: CustomAlertProps) {
	const [customAlertLenght, setCustomAlertLength] = useState();
	const {isMobile} = useDevice();
	const _ref = useRef(null);

	useEffect(() => {
		addEventListener('resize', throttle(handleResize, 500));
		dispatchEvent(new CustomEvent('resize'));
	});

	const handleResize = () => setCustomAlertLength((_ref as any).current.clientWidth);

	return (
		<StyledCustomAlertContainer
			ref={_ref}
			customAlert={customAlert}
			isMobile={isMobile}
			className="CustomAlertContainer">

			<StyledCustomAlert
				customAlert={customAlert}
				isMobile={isMobile}
				className="CustomAlert"
				width={customAlertLenght}>

				<SpecialWordStyle>
					{customAlert}
				</SpecialWordStyle>

			</StyledCustomAlert>

		</StyledCustomAlertContainer>
	);
}
