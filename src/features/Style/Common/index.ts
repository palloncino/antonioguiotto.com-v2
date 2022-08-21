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
	box-sizing: border-box;
	padding: .2rem;
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

const StyledCustomAlert = styled.div<{animationDuration?: string; width?: number; customAlert?: string | customAlertItemType[]; isMobile?: boolean}>`
	width: ${({width}) => `${width}px`};
	height: auto;
	background: #323130;
	color: #fff;
	z-index: 200;
	position: fixed;
	bottom: -100px;
	box-sizing: border-box;
	padding: 1rem;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	border-radius: 0.2rem;

	&.active {
		animation: popup 4s ease-in-out;
	}

	@keyframes popup {
		0% {
			bottom: -100px;
		}
		20% {
			bottom: .2rem;
		}
		80% {
			bottom: .2rem;
		}
		100% {
			bottom: -100px;
		}
	}

	${({customAlert, isMobile, width}) => customAlert ? `
		${isMobile ? `
		width: calc(${width}px - 0rem);
		left: 50%;
		transform: translateX(-50%);
		` : `
	
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

