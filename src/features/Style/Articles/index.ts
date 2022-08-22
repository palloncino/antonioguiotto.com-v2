import styled from 'styled-components';

const CustomSection = styled.div<{
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
		line-height: 3rem;
		top: -50px;
		padding: 0.5rem 2rem;
		z-index: 1;
	`}
`;

const StyledArticlesGrid = styled.div<{isMobile?: boolean; gridTemplateColumns?: string | string[], columnGap?: string, rowGap?: string}>`
	${({isMobile}) => isMobile ? `
	` : `;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: .2rem;
	`}
`;

const StyledStandardButton = styled.div<{isMobile?: boolean; bg?: string;}>`
	background-image: ${({bg}) => `url(${bg})`};
	background-position: top;
	background-repeat: no-repeat;
	background-size: cover;
	
	width: 100%;
	box-sizing: border-box;
	border-radius: .2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	border: .05rem solid #0002;
	border-bottom: .1rem solid #0002;
	overflow: hidden;
	animation: topToCenterBg 2s forwards;
	animation-duration: 2s;
	// animation-delay: 1s;
	&:hover {
		cursor: pointer;
    }
	@keyframes topToCenterBg {
		0% {
			background-position: top;
			background-repeat: no-repeat;
			background-size: cover;
			// opacity: 0;
		}
		100% {
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			// opacity: 1;
		}
	}
	${({isMobile}) => isMobile ? `
	height: 32px;
	padding: .5rem;
	border: none;
	border-radius: .2rem;
	&:focus {
		border-left: .1rem solid;
		border-right: .1rem solid;
		border-top: .1rem solid;
		border-bottom: .1rem solid;
	}
	` : `
	height: 40px;
	padding: 0 1rem;
	&:focus {
		border-left: .1rem solid;
		border-right: .1rem solid;
		border-top: .1rem solid;
		border-bottom: .1rem solid;
	}
	&:hover { 
	}
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
};
