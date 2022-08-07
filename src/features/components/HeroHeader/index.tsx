import {Text} from '@fluentui/react';
import {IHeroHeaderProps} from '../../../types';
import {StyledHeroHeader} from '../../Style';

const HeroHeader = ({color, bgColor, bgImage, headline, subHeadline}: IHeroHeaderProps) => (
	<StyledHeroHeader bgColor={bgColor} bgImage={bgImage} >
		<Text style={{color}} variant={window.innerWidth < 400 ? 'xLarge' : 'xxLargePlus'} block>
			{headline ? headline : 'Title'}
		</Text>
		<Text style={{color}} variant={window.innerWidth < 400 ? 'large' : 'xLarge'} block>
			{subHeadline ? subHeadline : ''}
		</Text>
	</StyledHeroHeader>
);

export default HeroHeader;
