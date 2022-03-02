import {Stack} from '@fluentui/react';
import styled from 'styled-components';

const StylePageContentContainer = styled(Stack)`
  height: calc(${window?.innerHeight}px - 120px);
  width: 100%;
	margin: 0 auto;
	max-width: 1024px;
`;

const ViewWrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: 2000px;
	margin: 0 auto;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export {
	StylePageContentContainer,
	ViewWrapper,
	ContentWrapper,
};

