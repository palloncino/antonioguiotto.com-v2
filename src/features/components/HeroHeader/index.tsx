import {Text} from '@fluentui/react';
import {IHeroHeaderProps} from '../../../types';
import {StyledHeroHeader} from '../../Style';

const HeroHeader = ({color, bgColor, bgImage, headline}: IHeroHeaderProps) => (
	<StyledHeroHeader bgColor={bgColor} bgImage={bgImage} >
		<Text style={{color}} variant={'xxLargePlus'} nowrap block>
			{headline ? headline : 'Hero Header'}
		</Text>
	</StyledHeroHeader>
);

export default HeroHeader;
