import {IFontStyles} from '@fluentui/react';
import {throttle} from 'lodash';
import {useEffect, useState} from 'react';
import {useDevice} from '../../../hooks/useDevice';
import githubSvg from '../../../media/svgs/github.svg';
import gmailSvg from '../../../media/svgs/gmail.svg';
import linkedinSvg from '../../../media/svgs/linkedin.svg';
import whatsappSvg from '../../../media/svgs/whatsapp.svg';
import {LinkUpProps} from '../../../types';
import {CustomSection, StyledArticlesGrid} from '../../Style';
import StandardButton from '../StandardButton';

export default function LinkUp({useCustomAlert, buttonHeight}: LinkUpProps) {
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
		<CustomSection width="100%" className="LinkUp">
			{/* <StyledHeadOfSection id="LinkUpHead" isMobile={isMobile}>
				<Text variant="xxLargePlus">Link up</Text>
			</StyledHeadOfSection> */}
			<StyledArticlesGrid isMobile={isMobile} className="LinkUpBody LinkUpBodyGrid">
				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Gmail'}
						secondaryText={'powerhydratoni@gmail.com'}
						copyToClipBoard
						handleCopyToClipboard={isMobile ? undefined : handleCopyToClipboard}
						redirectURL={isMobile ? 'mailto:powerhydratoni@gmail.com' : undefined}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={gmailSvg}
						buttonHeight={buttonHeight} />
				</CustomSection>

				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Whatsapp'}
						secondaryText={'Chat now'}
						redirectURL={'wa.me/00393474943221'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={whatsappSvg}
						buttonHeight={buttonHeight} />
				</CustomSection>

				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Github'}
						secondaryText={'palloncino'}
						redirectURL={'github.com/palloncino'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={githubSvg}
						buttonHeight={buttonHeight} />
				</CustomSection>

				<CustomSection mb={isMobile ? '.2rem' : '0rem'}>
					<StandardButton
						primaryText={'Linkedin'}
						secondaryText={'Antonio Guiotto'}
						redirectURL={'www.linkedin.com/in/antonioguiotto'}
						primaryTextVariant={primaryText}
						secondaryTextVariant={secondaryText}
						bg={linkedinSvg}
						buttonHeight={buttonHeight} />
				</CustomSection>

			</StyledArticlesGrid>
		</CustomSection>
	);
}
