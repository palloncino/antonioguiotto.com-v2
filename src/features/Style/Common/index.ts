import {Stack} from '@fluentui/react';
import styled from 'styled-components';
import {customAlertItemType} from '../../../types';

const StylePageContentContainer = styled(Stack)`
  height: calc(${window?.innerHeight}px - 120px);
  width: 100%;
	margin: 0 auto;
	max-width: 1024px;
`;

const WebsiteContainer = styled(Stack)`
  border: 1px solid;
`;

const ViewWrapper = styled.div`
	height: 100%;
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;
`;

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const SpecialWordStyle = styled.span<{ color?: string }>`
	color: ${props => props.color};
	font-family: 'menlo';
`;

const StyledCustomAlertContainer = styled.div<{customAlert?: string | customAlertItemType[]; isMobile?: boolean}>`
	position: relative;
	${({customAlert, isMobile}) => customAlert ? `
		${isMobile ? `
		
		` : `
		
		`}
	` : `
		${isMobile ? `
			
		` : `
			
		`}
	`}
`;

const StyledCustomAlert = styled.div<{width?: number; customAlert?: string | customAlertItemType[]; isMobile?: boolean}>`
	width: ${({width}) => `${width}px`};
	transition: transform ease-in-out .5s, opacity ease .5s;
	z-index: 200;
	position: fixed;
	bottom: 0;
	opacity: 0;
	box-sizing: border-box;
	height: 4rem;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 1rem;
	background: #000;
	color: #fff;

	${({customAlert, isMobile}) => customAlert ? `
		${isMobile ? `
		transform: translateY(0%);
		opacity: 1;
		` : `
		transform: translateY(0%);
		opacity: 1;
		`}
	` : `
		${isMobile ? `


		` : `


		`}
	`}
`;

export {
	StylePageContentContainer,
	ViewWrapper,
	ContentWrapper,
	SpecialWordStyle,
	WebsiteContainer,
	StyledCustomAlertContainer,
	StyledCustomAlert,
};

