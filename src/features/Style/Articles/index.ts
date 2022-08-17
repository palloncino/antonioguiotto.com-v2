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

const StyledHeadOfSection = styled.div<{isMobile?: boolean;}>`
	${({isMobile}) => isMobile ? `
		position: absolute;
		top: -2.4rem;
		text-decoration: underline;
		padding: 0 2rem;
		color: unset;
	` : `
		color: #111;
		border-color: #0002 #0006 #0006 #0002;
		position: absolute;
		left: 0;
		text-decoration: underline;
		line-height: 3rem;
		top: -50px;
		padding: 0.5rem 2rem;
		z-index: 1;
	`}
`;

const StyledArticlesGrid = styled.div<{isMobile?: boolean; gridTemplateColumns?: string | string[], columnGap?: string, rowGap?: string}>`
	background: #3f237d;
	padding: 1rem;
	border-radius: .2rem;
	border-top: .4rem solid #0002;
	border-bottom: .4rem solid #0004;
	border-left: .4rem solid #0002;
	border-right: .4rem solid #0004;
	${({isMobile}) => isMobile ? `
	` : `;
	`}
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
	background: #0002;
	border: 2px solid #0002;
	overflow: hidden;
	&:hover {
		cursor: pointer;
    }
	${({isMobile}) => isMobile ? `
	height: 60px;
	padding: .5rem;
	border: none;
	border-radius: .2rem;
	&:focus {
		background: #000;
	}
	` : `
	height 40px;
	padding: 1rem;
	&:focus {
		transform: scale(1.05);
		background: #000;
	}
	`}
`;

const IconContainer = styled.span<{ color?: string }>`
    margin-right: 1rem;
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    
    &:last-child {
        margin-right: 0;
     }
`;

const TextContainerStyle = styled.div<{isMobile?: boolean;}>`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
	display: flex;
	${({isMobile}) => isMobile ? `
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	align-items: center;
	` : `
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	align-items: center;
	`}
`;

const StyledSectionWhiteCentered = styled(StyledSectionWhite)`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	StyledHeadOfSection,
};
