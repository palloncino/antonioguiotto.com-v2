import {Text} from '@fluentui/react';
import {useEffect, useRef, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import {animateClick} from '../../../utils';
import {Sections} from '../../Pages/Index';
import {StyledBanner01Animator, StyledBanner01Background, StyledBanner01TextBox} from '../../Style';

const Banner01 = ({
	id,
	primaryText,
	secondaryText,
	heightTargetClass,
	handleSetSectionOpen,
}: any) => {
	const {isMobile} = useDevice();
	const _ref = useRef(null);
	const [height, setHeight] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (heightTargetClass) {
			const el = document.querySelector(`.${heightTargetClass}`);
			if (el?.clientHeight) {
				setHeight(`${el.clientHeight}px`);
			}
		}
	}, []);

	return (
		<div style={{width: '100%', height: height || '160px'}}>
			<StyledBanner01Animator
				disabled={id === Sections.Contacts}
				id={`${id}_tabIndex`}
				tabIndex={1}
				ref={_ref}
				onKeyPress={e => {
					if (id === Sections.Contacts) {
						return;
					}

					if (e.charCode === 13) {
						handleSetSectionOpen(id);
						animateClick(_ref, isMobile);
					}
				}}
				onClick={() => {
					if (id === Sections.Contacts) {
						return;
					}

					handleSetSectionOpen(id);
					animateClick(_ref, isMobile);
				}}>
				<StyledBanner01Background id={id}>
					<StyledBanner01TextBox isMobile={isMobile}>
						<Text style={{color: '#fff'}} variant={isMobile ? 'xLarge' : 'xxLarge'}>{primaryText}</Text>
						<Text style={{color: '#fff', textAlign: 'right', marginBottom: '.2rem'}} variant={isMobile ? 'small' : 'medium'}>{secondaryText}</Text>
					</StyledBanner01TextBox>
				</StyledBanner01Background>
			</StyledBanner01Animator>
		</div>
	);
};

export default Banner01;
