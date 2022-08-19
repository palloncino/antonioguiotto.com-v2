import {Text} from '@fluentui/react';
import {IHeroHeaderProps} from '../../../types';
import {StyledHeroHeader} from '../../Style';

const HeroHeader = ({color, bgColor, bgImage, headline, subHeadline}: IHeroHeaderProps) => (
	<StyledHeroHeader bgColor={bgColor} bgImage={undefined} >
		<Text style={{color}} variant={'xxLargePlus'} block>
			{headline ? headline : 'Title'}
		</Text>
		<Text style={{color}} variant={'xLarge'} block>
			{subHeadline ? subHeadline : ''}
		</Text>
	</StyledHeroHeader>
);

export default HeroHeader;
