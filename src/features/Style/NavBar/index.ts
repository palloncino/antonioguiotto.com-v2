import {IDropdownStyles, IStackTokens} from '@fluentui/react';
import styled from 'styled-components';

const NavBarWrapper = styled.div<{isMobile?: boolean;}>`
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		height: 60px;
		${({isMobile}) => isMobile ? `
		background: #000;
		margin-bottom: 0;
		` : `
		background: #000;
		border-bottom-left-radius: 0.2rem;
		border-bottom-right-radius: 0.2rem;
		`};
`;

const StyledNavBarBox = styled.div`
		height: 100%;
		max-height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
`;

const NavBarContentContainer = styled.div<{isMobile?: boolean;}>`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${({isMobile}) => isMobile ? '0 1rem' : '0 2rem'};
`;

const dropdownStyles: Partial<IDropdownStyles> = {
	dropdown: {
		width: '10rem',
	},
	dropdownItem: {
		color: 'unset',
	},
	dropdownItemSelected: {
		color: 'white',
	},
	dropdownItems: {
		color: 'white',
	},
};

const horizontalGapStackTokens: IStackTokens = {
	childrenGap: 20,
};

const logoStyle = {
	height: '100%',
};

export {
	NavBarWrapper,
	StyledNavBarBox,
	NavBarContentContainer,
	dropdownStyles,
	horizontalGapStackTokens,
	logoStyle,
};
