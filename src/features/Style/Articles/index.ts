import {Stack} from '@fluentui/react';
import styled from 'styled-components';

const StyledArticlesStack = styled(Stack)`
  height: calc(${window?.innerHeight}px - 120px);
  width: 100%;
	margin: 0 auto;
	max-width: 800px;
`;

const StyledParagraphHeader = styled.div`
	margin-bottom: 1rem;
`;

const StyledParagraph = styled.div`
	text-align: justify;
	margin-bottom: 1rem;
  line-height: 2rem;
`;

const StyledSectionWhite = styled.div`
	background: #fff;
	padding: 1.2rem;
	margin-bottom: 2rem;
	border-radius: .2rem;
	box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const SectionMarginBottom = styled.div`
	margin-bottom: 2rem;
`;

const StyledCardsHead = styled.div`
	margin-bottom: 2rem;
`;

const WeatherCardContainer = styled.div`
	background: #fff;
	border-radius: .2rem;
	padding: 1rem;
	box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
	margin-bottom: 1rem;
`;

const WeatherCardProp = styled.div`
	margin-bottom: .5rem;
`;

const SpecialWordStyle = styled.span<{ color?: string }>`
	color: ${props => props.color};
	font-family: 'menlo';
`;

const StyledArticlesGrid = styled.div<{gridTemplateColumns?: string, columnGap?: string, rowGap?: string}>`
	display: grid;
	grid-template-columns: ${props => props.gridTemplateColumns || 'repeat(3, 1fr)'};
	column-gap: ${props => props.columnGap || '1rem'};
	row-gap: ${props => props.rowGap || '1rem'};
`;

const StyledArticleCardContainer = styled.div<{key?: string, color?: string, bgColor?: string}>`
	background: ${props => props.bgColor};
	color: ${props => props.color};
	padding: 1rem;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	border-radius: .2rem;
`;

const StyledErrorViewContainer = styled.div`
	background: #fff;
	padding: 1.2rem;
	margin-bottom: 2rem;
	border-radius: .2rem;
	box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export {
	StyledArticlesStack,
	StyledParagraphHeader,
	StyledParagraph,
	SpecialWordStyle,
	StyledArticlesGrid,
	StyledArticleCardContainer,
	WeatherCardContainer,
	WeatherCardProp,
	StyledSectionWhite,
	SectionMarginBottom,
	StyledErrorViewContainer,
	StyledCardsHead,
};
