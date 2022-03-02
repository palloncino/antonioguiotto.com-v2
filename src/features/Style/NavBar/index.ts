import {IDropdownStyles, IStackTokens} from '@fluentui/react';
import styled from 'styled-components';

const NavBarWrapper = styled.div`
		height: 80px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
`;

const StyledNavBarBox = styled.div`
		height: 100%;
		max-height: 40px;
		padding-right: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
`;

const NavBarContentContainer = styled.div`
	height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
	padding: 0 2rem;
`;

const dropdownStyles: Partial<IDropdownStyles> = {
	dropdown: {width: '10rem'},
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
