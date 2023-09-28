import {Stack, Text} from '@fluentui/react';
import {useRef} from 'react';
import {useNavigation} from '../../../hooks';
import {useDevice} from '../../../hooks/useDevice';
import logo from '../../../media/svgs/logo-white.svg';
import {IFramedChildComponentProps} from '../../../types';
import {animateClick} from '../../../utils';
import {Sections} from '../../Pages/Index';
import {SpecialWordStyle, StyledLogoBox, StyledLogoPlusTextBox} from '../../Style';
import {horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';
import StandardButton from '../StandardButton';

// eslint-disable-next-line no-unused-vars
export const NavBar = ({appConfig}: IFramedChildComponentProps) => {
	const {navigate} = useNavigation();
	const {isMobile} = useDevice();
	const logoBoxRef = useRef(null);

	const handleAnchor = (TargetIdDOM: string) => {
		const el = document.querySelector(`#${TargetIdDOM}`);
		el?.scrollIntoView({behavior: 'smooth'});
		(el as any)?.focus();
		if (!el?.classList.contains('open')) {
			const _el = document.querySelector(`#${TargetIdDOM}_tabIndex`);
			(_el as any).click();
		}
	};

	return (
		<NavBarWrapper isMobile={isMobile} className="NavBarWrapper">
			<NavBarContentContainer isMobile={isMobile} className="NavBarContentContainer">
				<StyledLogoPlusTextBox>
					<StyledLogoBox
						isMobile={isMobile}
						tabIndex={1}
						onKeyPress={e => e.charCode === 13 && navigate('/')}
						onClick={() => {
							animateClick(logoBoxRef, isMobile);
							navigate('/');
						}}
						className="StyledLogoBox"
						ref={logoBoxRef}
						title="Back to homepage"
					>
						<StyledNavBarBox>
							<img src={logo} alt={'guiotto\'s company logo'} style={{...logoStyle}} />
						</StyledNavBarBox>

						{/* <StyledNavBarBox className="StyledNavBarBox__isMobile">
							<Text variant={'large'} nowrap block>
								<SpecialWordStyle color={'#fff'}>
										antonioguiotto.com {'\u00A0'}
								</SpecialWordStyle>
							</Text>
						</StyledNavBarBox> */}

						<StandardButton
							styleOverride={{paddingLeft: '0rem'}}
							primaryTextStyleOverride={{marginTop: '-4px', paddingLeft: '0rem'}}
							secondaryTextStyleOverride={{color: '#ffffff90'}}
							altText={'Go to Homepage'}
							primaryText={'antonioguiotto.com'}
							secondaryText={isMobile ? 'Mobile' : 'Desktop'}
							primaryTextVariant={'xLarge'}
							secondaryTextVariant={'small'}
							bg={undefined}
							buttonHeight={undefined}/>

					</StyledLogoBox>
					{/* <CustomSection ml={'.2rem'}>
						<Text style={{lineHeight: '.6rem'}} variant={'smallPlus'} nowrap block>
							<span>←</span>BACK TO
						</Text>
						<Text style={{lineHeight: '1rem'}} variant={'large'} nowrap block>
						HOMEPAGE
						</Text>
					</CustomSection> */}
				</StyledLogoPlusTextBox>
				{!isMobile && (
					<StyledNavBarBox>
						<Stack horizontal tokens={horizontalGapStackTokens}>

							<div
								tabIndex={1}
								style={{cursor: 'pointer'}}
								onClick={() => handleAnchor(Sections.Chat)}
								onKeyPress={(e: any) => e.charCode === 13 && handleAnchor(Sections.Chat)}>
								<Text variant="large">
									{Sections.Chat}
								</Text>
							</div>

							<div
								tabIndex={1}
								style={{cursor: 'pointer'}}
								onClick={() => handleAnchor(Sections.Websites)}
								onKeyPress={(e: any) => e.charCode === 13 && handleAnchor(Sections.Websites)}>
								<Text variant="large">
									{Sections.Websites}
								</Text>
							</div>

							<div
								tabIndex={1}
								style={{cursor: 'pointer'}}
								onClick={() => handleAnchor(Sections.Videos)}
								onKeyPress={(e: any) => e.charCode === 13 && handleAnchor(Sections.Videos)}>
								<Text variant="large">
									{Sections.Videos}
								</Text>
							</div>

							<div
								tabIndex={1}
								style={{cursor: 'pointer'}}
								onClick={() => handleAnchor(Sections.Contacts)}
								onKeyPress={(e: any) => e.charCode === 13 && handleAnchor(Sections.Contacts)}>
								<Text variant="large">
									{Sections.Contacts}
								</Text>
							</div>
						</Stack>
					</StyledNavBarBox>
				)}
			</NavBarContentContainer>
		</NavBarWrapper>
	);
};

