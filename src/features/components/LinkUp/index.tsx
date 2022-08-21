import {IFontStyles, Text} from '@fluentui/react';
import {throttle} from 'lodash';
import {useEffect, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import {LinkUpProps} from '../../../types';
import {CustomSection, StyledArticlesGrid, StyledHeadOfSection} from '../../Style';
import StandardButton from '../StandardButton';

export default function LinkUp({setCustomAlert}: LinkUpProps) {
	const [primaryText, setPrimaryText] = useState<keyof IFontStyles | undefined>(undefined);
	const [secondaryText, setSecondaryText] = useState<keyof IFontStyles | undefined>(undefined);
	const {isMobile, isLaptop, isMonitor} = useDevice();

	const handleCopyToClipboard = (text: string) => {
		useCustomAlert(`✔ Copied to clipboard: ${text}`);
		navigator.clipboard.writeText(text);
	};

	useEffect(() => {
		// useCustomAlert(isMobile ? '✔ Mobile Friendly' : '✔ Keyboard Friendly.Use TAB(↹) and Shift+TAB(⇧ + ↹) to navigate.Hit Enter(↩) to call action.');
	}, []);

	useEffect(() => {
		addEventListener('resize', throttle(handleResize, 500));
		dispatchEvent(new CustomEvent('resize'));
	});

	const handleResize = () => {
		if (isMonitor) {
			setPrimaryText('xLarge');
			setSecondaryText('large');
		} else if (isLaptop) {
			setPrimaryText('large');
			setSecondaryText('medium');
		} else if (isMobile) {
			setPrimaryText('medium');
			setSecondaryText('small');
		}
	};

	const useCustomAlert = async (text: string, ms: number = 2000) => {
		setCustomAlert(text);
		await new Promise(resolve => setTimeout(resolve, ms));
		setCustomAlert(undefined);
	};

	return (
		<>
			<StyledHeadOfSection id="linkup" isMobile={isMobile}>
				<Text variant="xxLargePlus">Link up</Text>
			</StyledHeadOfSection>
			<StyledArticlesGrid isMobile={isMobile}>
				<CustomSection mb=".2rem">
					<StandardButton
						primaryText={'Gmail'}
						secondaryText={'powerhydratoni@gmail.com'}
						copyToClipBoard
						handleCopyToClipboard={handleCopyToClipboard}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText} />
				</CustomSection>

				<CustomSection mb=".2rem">
					<StandardButton
						primaryText={'Whatsapp'}
						secondaryText={'Chat now'}
						redirectURL={'wa.me/00393474943221'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText} />
				</CustomSection>

				<CustomSection mb=".2rem">
					<StandardButton
						primaryText={'Github'}
						secondaryText={'palloncino'}
						redirectURL={'github.com/palloncino'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText} />
				</CustomSection>

				<CustomSection>
					<StandardButton
						primaryText={'Linkedin'}
						secondaryText={'Antonio Guiotto'}
						redirectURL={'www.linkedin.com/in/antonioguiotto'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText} />
				</CustomSection>

			</StyledArticlesGrid>
		</>
	);
}
