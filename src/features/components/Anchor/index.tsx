import {SpecialWordStyle} from '../../../features/Style';
import {useTheme} from '@fluentui/react';
import styled from 'styled-components';
import {IAnchorProps} from '../../../types';

const StyledAnchor = styled.a<{ color?: string; }>`
  color: ${props => props.color};
  text-decoration: none;
`;

const Anchor = ({color, href, text, download, target, theme}: IAnchorProps) => {
	const {palette: {themePrimary}} = useTheme();
	return (
		<StyledAnchor color={color || themePrimary} href={href} download={download} target={target}>
			<SpecialWordStyle color={theme?.palette?.themePrimary || '#323130'}>
				{text}
			</SpecialWordStyle>
		</StyledAnchor>
	);
};

export default Anchor;
