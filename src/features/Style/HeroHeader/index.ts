import styled from 'styled-components';

const StyledHeroHeader = styled.div<{ bgColor?: string; bgImage?: string; }>`
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background: ${props => props.bgColor ? props.bgColor : ''};
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : ''};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: .2rem;
`;

export {StyledHeroHeader};
