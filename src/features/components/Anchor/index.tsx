import {useTheme} from '@fluentui/react';
import styled from 'styled-components';
import {IAnchorProps} from '../../../types';

const StyledAnchor = styled.a<{ color?: string; }>`
  color: ${props => props.color};
  text-decoration: none;
`;

const Anchor = ({color, href, text, download, target}: IAnchorProps) => {
	const {palette: {themePrimary}} = useTheme();
	return <StyledAnchor color={color || themePrimary} href={href} download={download} target={target}>{text}</StyledAnchor>;
};

export default Anchor;
