import {SpecialWordStyle} from '../../Style';
import {CustomAlertProps} from '../../../types';
import {useDevice} from '../../../hooks/useDevice';

export default function CustomAlert({customAlert}: CustomAlertProps) {
	const isMobile = useDevice();
	return (
		<div style={{position: 'relative'}}>
			<div style={{
				boxSizing: 'border-box',
				zIndex: 200,
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				background: '#323130',
				position: 'fixed',
				bottom: customAlert ? '.2rem' : 0,
				height: customAlert ? 'auto' : 0,
				transition: '.5s',
				width: 'auto',
				maxWidth: '500px',
				padding: customAlert ? '1rem' : 0,
				margin: isMobile ? '0 1rem' : 0,
				borderTopLeftRadius: '.5rem',
				borderTopRightRadius: '.5rem',
				borderBottomRightRadius: '.5rem',
				lineHeight: '1.6rem',
			}}>
				<div style={{
					transition: '.5s',
					opacity: customAlert ? '1' : '0',
					width: '0px',
					height: '0px',
					position: 'absolute',
					bottom: 0,
					left: customAlert ? '-16px' : '16px',
					borderTop: '16px solid #0000',
					borderRight: customAlert ? '16px solid #323130' : '0px solid #323130',
				}}></div>
				<SpecialWordStyle color={'#fff'}>
					{customAlert}
				</SpecialWordStyle>
			</div>
		</div>
	);
}
