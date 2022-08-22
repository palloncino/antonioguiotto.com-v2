import {Text} from '@fluentui/react';
import {useEffect, useRef, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import {animateClick} from '../../../utils';
import {Sections} from '../../Pages/Index';
import {StyledBanner01Animator, StyledBanner01Background, StyledBanner01TextBox} from '../../Style';

interface Banner01Props {
	id: keyof typeof Sections;
	primaryText: string;
	secondaryText: string;
	heightTargetClass?: string;
	handleSetSectionOpen: (id: keyof typeof Sections | undefined) => void;
	isOpen?: boolean;
	bg?: any;
}

const Banner01 = ({
	id,
	primaryText,
	secondaryText,
	heightTargetClass,
	handleSetSectionOpen,
	isOpen,
	bg,
}: Banner01Props) => {
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
		<div style={{width: '100%', height: height || isMobile ? '100px' : '140px'}}>
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
				<StyledBanner01Background id={id} isOpen={isOpen} style={ bg && {
					background: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}>
					<StyledBanner01TextBox isMobile={isMobile}>
						<Text style={{color: '#fff'}} variant={isMobile ? 'xxLargePlus' : 'superLarge'}>{primaryText}</Text>
						<Text style={{color: '#fff'}} variant={isMobile ? 'medium' : 'large'}>{secondaryText}</Text>
					</StyledBanner01TextBox>
				</StyledBanner01Background>
			</StyledBanner01Animator>
		</div>
	);
};

export default Banner01;
