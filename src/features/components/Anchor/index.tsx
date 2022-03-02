import {useTheme} from '@fluentui/react';
import styled from 'styled-components';
import {IAnchorProps} from '../../../types';

const StyledAnchor = styled.a<{ color?: string; }>`
  color: ${props => props.color};
  text-decoration: none;
`;

const Anchor = ({color, href, text}: IAnchorProps) => {
	const {palette: {themePrimary}} = useTheme();
	return <StyledAnchor color={color || themePrimary} href={href} >{text}</StyledAnchor>;
};

export default Anchor;
