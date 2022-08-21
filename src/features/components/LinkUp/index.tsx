import {IFontStyles, Text} from '@fluentui/react';
import {throttle} from 'lodash';
import {useEffect, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import {LinkUpProps} from '../../../types';
import {CustomSection, StyledArticlesGrid, StyledHeadOfSection} from '../../Style';
import StandardButton from '../StandardButton';
import gmailSvg from '../../../media/svgs/gmail.svg';
import whatsappSvg from '../../../media/svgs/whatsapp.svg';
import githubSvg from '../../../media/svgs/github.svg';
import linkedinSvg from '../../../media/svgs/linkedin.svg';

export default function LinkUp({useCustomAlert}: LinkUpProps) {
	const [primaryText, setPrimaryText] = useState<keyof IFontStyles | undefined>(undefined);
	const [secondaryText, setSecondaryText] = useState<keyof IFontStyles | undefined>(undefined);
	const {isMobile, isLaptop, isMonitor} = useDevice();

	const handleCopyToClipboard = (text: string) => {
		useCustomAlert(`✔ Copied to clipboard: ${text}`);
		navigator.clipboard.writeText(text);
	};

	useEffect(() => {
		addEventListener('resize', throttle(handleResize, 500));
		dispatchEvent(new CustomEvent('resize'));
	});

	const handleResize = () => {
		if (isMonitor) {
			setPrimaryText('xLarge');
			setSecondaryText('large');
		} else if (isLaptop) {
			setPrimaryText('xLarge');
			setSecondaryText('medium');
		} else if (isMobile) {
			setPrimaryText('medium');
			setSecondaryText('small');
		}
	};

	return (
		<>
			<StyledHeadOfSection id="linkup" isMobile={isMobile}>
				<Text variant="xxLargePlus">Link up</Text>
			</StyledHeadOfSection>
			<StyledArticlesGrid isMobile={isMobile}>
				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Gmail'}
						secondaryText={'powerhydratoni@gmail.com'}
						copyToClipBoard
						handleCopyToClipboard={handleCopyToClipboard}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={gmailSvg} />
				</CustomSection>

				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Whatsapp'}
						secondaryText={'Chat now'}
						redirectURL={'wa.me/00393474943221'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={whatsappSvg} />
				</CustomSection>

				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Github'}
						secondaryText={'palloncino'}
						redirectURL={'github.com/palloncino'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={githubSvg} />
				</CustomSection>

				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Linkedin'}
						secondaryText={'Antonio Guiotto'}
						redirectURL={'www.linkedin.com/in/antonioguiotto'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={linkedinSvg} />
				</CustomSection>

			</StyledArticlesGrid>
		</>
	);
}
