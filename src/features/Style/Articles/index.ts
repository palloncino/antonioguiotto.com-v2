import {Stack} from '@fluentui/react';
import styled from 'styled-components';

const StyledParagraphHeader = styled.div`
	margin-bottom: 1rem;
`;

const StyledParagraph = styled.div`
	text-align: justify;
  	line-height: 2.5rem;
	display: flex;
	align-items: center;
`;

const FlexContainerCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledParagraphTitle = styled.div`
	text-align: justify;
  	margin-bottom: 1rem;
	display: flex;
	align-items: center;
`;

const StyledSectionWhite = styled.div`
	// background: rgba(0,0,0,0.2);
	padding: 1.2rem;
	margin-bottom: 2rem;
	border-radius: .2rem;
	// box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const SectionMarginBottom = styled.div`
	margin-bottom: 2rem;
`;

const SectionMargin = styled.div<{mb?: string}>`
	margin-bottom: ${({mb}) => mb};
`;

const StyledCardsHead = styled.div`
	margin-bottom: 2rem;
`;

const WeatherCardContainer = styled.div`
	border-radius: .2rem;
	padding: 1rem;
	// box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
	margin-bottom: 1rem;
`;

const WeatherCardProp = styled.div`
	margin-bottom: .5rem;
`;

const StyledArticlesGrid = styled.div<{isMobile?: boolean; gridTemplateColumns?: string | string[], columnGap?: string, rowGap?: string}>``;

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
	padding: 1.2rem;
	margin-bottom: 2rem;
	border-radius: .2rem;
	box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledArticlesStack = styled(Stack)`
  height: calc(${window?.innerHeight}px - 120px);
  width: 100%;
	margin: 0 auto;
	max-width: 800px;
`;

const StyledParagraph2 = styled.div<{isMobile?: boolean}>`
	width: 100%;
	box-sizing: border-box;
	border-radius: .2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background: rgba(0,0,0,0.1);
	transition: .2s;
    transition-delay: 0s;
	&:hover {
		// transform: scale(1.05);
		cursor: pointer;
    }
	&:focus {
		background: #111;
		transform: scale(1.05);
	}
	${({isMobile}) => isMobile ? `
	height: 80px;
	padding: .5rem;
	` : `
	height auto;
	padding: 1rem;
	`}
`;

const IconContainer = styled.span<{ color?: string }>`
    margin-right: 1rem;
	flex: 1;
    display: flex; 
    align-items: center;
    justify-content: center;
    
    &:last-child {
        margin-right: 0;
     }
`;

const TextContainerStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	flex: 4;
	// justify-content: flex-start;
	// align-items: flex-start;
`;

const StyledSectionWhiteCentered = styled(StyledSectionWhite)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	// align-items: center;
	// justify-content: center;
`;

export {
	StyledArticlesStack,
	StyledParagraphHeader,
	StyledParagraph,
	StyledParagraph2,
	StyledArticlesGrid,
	StyledArticleCardContainer,
	WeatherCardContainer,
	WeatherCardProp,
	StyledSectionWhite,
	SectionMarginBottom,
	SectionMargin,
	StyledErrorViewContainer,
	StyledCardsHead,
	StyledParagraphTitle,
	StyledSectionWhiteCentered,
	FlexContainerCenter,
	IconContainer,
	TextContainerStyle,
};
