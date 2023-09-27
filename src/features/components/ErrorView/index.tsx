import {Icon, Text} from '@fluentui/react';
import {IErrorViewProps} from '../../../types';
import {StyledErrorViewContainer, StylePageContentContainer} from '../../Style';

const ErrorView = ({message}: IErrorViewProps) => (
	<StylePageContentContainer>
		<StyledErrorViewContainer>
			<Icon style={{fontSize: '8rem'}} iconName="Warning" />
			<Text variant={'xLarge'} nowrap block>
				{message}
			</Text>
		</StyledErrorViewContainer>
	</StylePageContentContainer>
);

export default ErrorView;
