import {IDropdownStyles, IStackTokens} from '@fluentui/react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
		box-sizing: border-box;
		height: 80px;
		width: 100%;
		display: flex;
		align-items: center;
`;

const StyledNavBarBox = styled.div`
		height: 100%;
		max-height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
`;

const NavBarContentContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
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
