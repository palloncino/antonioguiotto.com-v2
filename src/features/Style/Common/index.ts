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

const StyledCustomAlert = styled.div<{customAlert?: string | customAlertItemType[]; isMobile?: boolean}>`
	transition: transform ease-in-out .5s, opacity ease .5s;
	position: fixed;
	bottom: -10%;
	opacity: 0;
	box-sizing: border-box;
	height: 4rem;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 1rem;
	border: 1px solid;
	width: 100%;
	${({customAlert, isMobile}) => customAlert ? `
		${isMobile ? `
		transform: translateY(-200%);
		opacity: 1;
		` : `
		transform: translateY(-200%);
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

