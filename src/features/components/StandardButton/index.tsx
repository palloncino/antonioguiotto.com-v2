import {Text} from '@fluentui/react';
import {SpecialWordStyle, StyledStandardButton, TextContainerStyle} from '../../Style';
import {StandardButtonProps} from '../../../types';
import Anchor from '../Anchor';
import {useDevice} from '../../../hooks/useDevice';

// eslint-disable-next-line no-unused-vars
enum Keyboard { Enter = 13 }

export default function StandardButton({primaryText, secondaryText, primaryTextVariant, secondaryTextVariant, redirectURL, copyToClipBoard, handleCopyToClipboard}: StandardButtonProps) {
	const {isMobile} = useDevice();

	const handleClick = () => {
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
			isMobile={isMobile}
			tabIndex={1}
			onKeyPress={handleKeyPress}
			onClick={handleClick}>
			<TextContainerStyle isMobile={isMobile}>
				<Text variant={primaryTextVariant}>
					<SpecialWordStyle color={'#323130'}>{redirectURL ? <Anchor href={`https://${redirectURL}`} text={primaryText}/> : primaryText}</SpecialWordStyle>
				</Text>
				<Text block nowrap variant={secondaryTextVariant}>
					{secondaryText}
				</Text>
			</TextContainerStyle>
		</StyledStandardButton>
	);
}
