import styled from 'styled-components';
import {Sections} from '../../Pages/Index';

const CustomSection = styled.div<{
	width?: string,
	m?: string,
	mb?: string,
	mt?: string,
	ml?: string,
	mr?: string,
	p?: string,
	pb?: string,
	pt?: string,
	pl?: string,
	pr?: string,
}>`
	margin: ${({m}) => m};
	margin-bottom: ${({mb}) => mb};
	margin-top: ${({mt}) => mt};
	margin-left: ${({ml}) => ml};
	margin-right: ${({mr}) => mr};
	margin: ${({p}) => p};
	margin-bottom: ${({pb}) => pb};
	margin-top: ${({pt}) => pt};
	margin-left: ${({pl}) => pl};
	margin-right: ${({pr}) => pr};
	${({width}) => width ? `width: ${width};` : null}
`;

const StyledLogoBox = styled.div<{isMobile?: boolean;}>`
	background: #323130;
	display: flex;
	flexDirection: row;
	alignItems: center;
	justifyContent: center;
	padding: 0rem;
	height: 32px;
	width: ${({isMobile}) => isMobile ? 'auto' : 'auto'};
	border-radius: .2rem;
	cursor: pointer;
`;

const StyledLogoPlusTextBox = styled.div<{}>`
	display: flex;
	align-items: center;

	animation-name: fallDown;
	animation-duration: 1s;
	animation-delay: 0s;
	animation-iteration-count: 1;
	animation-timing-function: ease-in-out;
	animation-fill-mode : forwards;

	@keyframes fallDown {
		0% {
			transform: translateY(-100%);
			opacity: 1;
		}
		100% {
			transform: translateY(0%);
			opacity: 1;
		}
	}
`;

const StyledErrorViewContainer = styled.div`
	padding: 1.2rem;
	margin-bottom: 2rem;
	border-radius: .2rem;
	box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledHeadOfSection = styled.div<{isMobile?: boolean;}>`
	${({isMobile}) => isMobile ? `
		position: absolute;
		top: -2.4rem;
		text-decoration: underline;
		padding: 0 2rem;
	` : `
		border-color: #0002 #0006 #0006 #0002;
		position: absolute;
		left: 0;
		text-decoration: underline;
		top: -40px;
		z-index: 1;
	`}
`;

const StyledArticlesGrid = styled.div<{isMobile?: boolean; gridTemplateColumns?: string | string[], columnGap?: string, rowGap?: string}>`
	${({isMobile}) => isMobile ? `
		gap: .2rem;
	` : `;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: .4rem;
	`}
`;

const StyledStandardButton = styled.div<{isMobile?: boolean; bg?: string; height?: string;}>`
	// background-image: ${({bg}) => `url(${bg})`};
	background: #5BA1B0;
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;

	cursor: pointer;
	width: 100%;
	box-sizing: border-box;
	border-radius: .2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	overflow: hidden;

	&:hover {
		animation: animation02 .5s forwards;
	}

	&:not(:hover) {
		animation: animation01 .2s;
	}

	@keyframes animation02 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.02);
		}
	}

	@keyframes animation01 {
		0% {
			transform: scale(1.02);
		}
		100% {
			transform: scale(1);
		}
	}

	${({isMobile, height}) => isMobile ? `
		height: 32px;
		padding: .5rem;
		border-radius: .2rem;
		&:hover {
			animation: unset;
		}
	` : `
		height: ${height || '40px'};
		padding: 0 1rem;
	`}
`;

const IconContainer = styled.span<{ color?: string }>`
    margin-right: 1rem;
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    
    &:last-child {
        margin-right: 0;
     }
`;

const TextContainerStyle = styled.div<{isMobile?: boolean;}>`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
	display: flex;
	${({isMobile}) => isMobile ? `
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	align-items: center;
	` : `
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	align-items: center;
	`}
`;

const Wrapper01 = styled.div<{isMobile?: boolean;}>`
	position: relative;
	 ${({isMobile}) => isMobile ? `
		marginTop: 0rem;
	 ` : `
		marginTop: 1rem;
	 `}
`;

const StyledBanner01Animator = styled.div<{disabled?: boolean;}>`
	position: relative;
	borderRadius: .2rem;
	width: 100%;
	height: 100%;
	boxSizing: border-box;
	&:hover {
		${({disabled}) => disabled ? '' : 'animation: animation02 .5s forwards;'}
	}
	&:not(:hover) {
		${({disabled}) => disabled ? '' : 'animation: animation01 .2s;'}
	}
	@keyframes animation02 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.02);
		}
	}
	@keyframes animation01 {
		0% {
			transform: scale(1.02);
		}
		100% {
			transform: scale(1);
		}
	}
`;

const StyledBanner01Background = styled.div<{id?: string;}>`
	${({id}) => {
		if (id === Sections.Camping) {
			return 'background: #B18F69;';
		}

		if (id === Sections.Videos) {
			return 'background: #D8CAAE;';
		}

		if (id === Sections.Contacts) {
			return 'background: #ACD1D1;';
		}
	}}
	background-size: cover;
	background-position: center;
	height: 100%;
	width: 100%;
	cursor: pointer;
	border-radius: .2rem;
`;

const StyledBanner01TextBox = styled.div<{isMobile?: boolean;}>`
	position: absolute;
	bottom: .2rem;
	right: .2rem;
	display: flex;
	flex-direction: column;
	padding: .2rem 1rem;
	background: #323130;
	border-radius: .2rem;
	${({isMobile}) => isMobile ? 'min-width: auto;' : 'min-width: 200px;'}
`;

export {
	StyledStandardButton,
	StyledArticlesGrid,
	StyledErrorViewContainer,
	IconContainer,
	TextContainerStyle,
	StyledHeadOfSection,
	Wrapper01,
	CustomSection,
	StyledLogoBox,
	StyledLogoPlusTextBox,
	StyledBanner01Animator,
	StyledBanner01Background,
	StyledBanner01TextBox,
};
