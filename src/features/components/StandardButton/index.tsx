import {Text} from '@fluentui/react';
import {useRef, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import {StandardButtonProps} from '../../../types';
import {StyledStandardButton, TextContainerStyle} from '../../Style';
import Anchor from '../Anchor';

// eslint-disable-next-line no-unused-vars
enum Keyboard { Enter = 13 }

export default function StandardButton({primaryText, secondaryText, primaryTextVariant, secondaryTextVariant, redirectURL, copyToClipBoard, handleCopyToClipboard, bg}: StandardButtonProps) {
	const {isMobile} = useDevice();
	const _ref = useRef(null);

	const handleClick = () => {
		if (copyToClipBoard && handleCopyToClipboard && secondaryText) {
			handleCopyToClipboard(secondaryText);
		}

		if (redirectURL) {
			window.location.href = `https://${redirectURL}`;
		}

		(_ref.current as any).animate([
			{
				transform: 'scale(.95)',
				easing: 'ease-out',
			},
			{
				transform: 'scale(1.02)',
				easing: 'ease-out',
			},
			{
				transform: 'scale(1)',
				easing: 'ease-out',
			},
		], 500);
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
			className="StyledStandardButton"
			isMobile={isMobile}
			tabIndex={1}
			onKeyPress={handleKeyPress}
			onClick={handleClick}
			ref={_ref}
			bg={bg}>
			<TextContainerStyle isMobile={isMobile} className="StyledStandardButton__TextContainer">
				<Text variant={primaryTextVariant} style={{background: '#ffffff90', padding: '0rem .2rem'}}>
					{redirectURL ? <Anchor href={`https://${redirectURL}`} text={primaryText}/> : primaryText}
				</Text>
				<Text block nowrap variant={secondaryTextVariant} style={{background: '#ffffff80', padding: '0rem .2rem'}}>
					{secondaryText}
				</Text>
			</TextContainerStyle>
		</StyledStandardButton>
	);
}
