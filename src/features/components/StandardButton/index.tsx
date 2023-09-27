import {Text} from '@fluentui/react';
import {useRef} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import {StandardButtonProps} from '../../../types';
import {StyledStandardButton, TextContainerStyle} from '../../Style';
import Anchor from '../Anchor';
import {animateClick} from '../../../utils/index';

// eslint-disable-next-line no-unused-vars
enum Keyboard { Enter = 13 }

export default function StandardButton({
	altText,
	primaryText,
	secondaryText,
	primaryTextVariant,
	secondaryTextVariant,
	redirectURL,
	copyToClipBoard,
	handleCopyToClipboard,
	bg,
	buttonHeight,
	styleOverride,
	primaryTextStyleOverride,
	secondaryTextStyleOverride,
}: StandardButtonProps) {
	const {isMobile} = useDevice();
	const _ref = useRef(null);

	const handleClick = () => {
		animateClick(_ref, isMobile);
		if (copyToClipBoard && handleCopyToClipboard && secondaryText) {
			handleCopyToClipboard(secondaryText);
		}

		if (redirectURL) {
			window.location.href = `https://${redirectURL}`;
		}
	};

	const handleKeyPress = (event?: any) => {
		if (copyToClipBoard && handleCopyToClipboard && secondaryText && event.charCode === Keyboard.Enter) {
			handleCopyToClipboard(secondaryText);
		}

		if (redirectURL && event.charCode === Keyboard.Enter) {
			window.location.href = `https://${redirectURL}`;
		}
	};

	return (
		<StyledStandardButton
			style={styleOverride}
			title={altText}
			className="StyledStandardButton"
			isMobile={isMobile}
			tabIndex={1}
			onKeyPress={handleKeyPress}
			onClick={handleClick}
			ref={_ref}
			bg={bg}
			height={buttonHeight}>
			<TextContainerStyle isMobile={isMobile} className="StyledStandardButton__TextContainer">
				<Text variant={primaryTextVariant} style={{color: '#fff', padding: '0rem .2rem', ...primaryTextStyleOverride}}>
					{redirectURL ? <Anchor color="#fff" href={`https://${redirectURL}`} text={primaryText}/> : primaryText}
				</Text>
				<Text block nowrap variant={secondaryTextVariant} style={{color: '#fff', padding: '0rem .2rem', ...secondaryTextStyleOverride}}>
					{secondaryText}
				</Text>
			</TextContainerStyle>
		</StyledStandardButton>
	);
}
