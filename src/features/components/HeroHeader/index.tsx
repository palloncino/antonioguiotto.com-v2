import {Text} from '@fluentui/react';
import {useDevice} from '../../../hooks/useDevice';
import {IHeroHeaderProps} from '../../../types';
import {CustomSection, StyledHeroHeader} from '../../Style';

const HeroHeader = ({color, bgColor, bgImage, headline = '', subHeadline = '', message}: IHeroHeaderProps) => {
	const {isMobile} = useDevice();
	return (
		<StyledHeroHeader bgColor={bgColor} bgImage={bgImage} className="StyledHeroHeader">
			<Text style={{color}} variant={'xxLargePlus'} block>
				{headline}
			</Text>
			<CustomSection>
				{message ? (
					<>
						<div style={{position: 'absolute', left: 0, width: '100%', textAlign: 'center'}}>
							<Text style={{color, overflow: 'hidden'}} variant={isMobile ? 'large' : 'large'} block>
								{message}
							</Text>
						</div>
						<Text style={{opacity: 0}} variant={isMobile ? 'large' : 'large'} block>_</Text>
					</>
				) : (
					<Text style={{color}} variant={isMobile ? 'large' : 'large'} block>
						{subHeadline}
					</Text>
				)}
			</CustomSection>
		</StyledHeroHeader>
	);
};

export default HeroHeader;
