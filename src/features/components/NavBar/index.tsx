import {Stack, Text} from '@fluentui/react';
import {useRef} from 'react';
import {useNavigation} from '../../../hooks';
import {useDevice} from '../../../hooks/useDevice';
import logo from '../../../media/svgs/logo-white.svg';
import {IFramedChildComponentProps} from '../../../types';
import {animateClick} from '../../../utils';
import {Sections} from '../../Pages/Index';
import {CustomSection, SpecialWordStyle, StyledLogoBox, StyledLogoPlusTextBox} from '../../Style';
import {horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';

// eslint-disable-next-line no-unused-vars
export const NavBar = ({appConfig}: IFramedChildComponentProps) => {
	const {navigate} = useNavigation();
	const {isMobile} = useDevice();
	const logoBoxRef = useRef(null);

	const handleAnchor = (TargetIdDOM: string) => {
		const el = document.querySelector(`#${TargetIdDOM}`);
		el?.scrollIntoView({behavior: 'smooth'});
		(el as any)?.focus();
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
					>
						<StyledNavBarBox>
							<img src={logo} alt={'guiotto\'s company logo'} style={{...logoStyle}} />
						</StyledNavBarBox>
						{!isMobile && (
							<StyledNavBarBox className="StyledNavBarBox__isMobile">
								<Text variant={'large'} nowrap block>
									<SpecialWordStyle color={'#fff'}>
									antonioguiotto.com {'\u00A0'}
									</SpecialWordStyle>
								</Text>
							</StyledNavBarBox>
						)}
					</StyledLogoBox>
					<CustomSection ml={'.2rem'}>
						<Text style={{lineHeight: '.6rem'}} variant={'smallPlus'} nowrap block>
							<span>←</span>BACK TO
						</Text>
						<Text style={{lineHeight: '1rem'}} variant={'large'} nowrap block>
						HOMEPAGE
						</Text>
					</CustomSection>
				</StyledLogoPlusTextBox>
				{!isMobile && (
					<StyledNavBarBox>
						<Stack horizontal tokens={horizontalGapStackTokens}>
							<div
								tabIndex={1}
								style={{cursor: 'pointer'}}
								onClick={() => {
									handleAnchor(Sections.Camping);
									const el = document.querySelector(`#${Sections.Camping}_tabIndex`);
									(el as any).click();
								}}
								onKeyPress={(e: any) => {
									if (e.charCode === 13) {
										handleAnchor(Sections.Camping);
										const el = document.querySelector(`#${Sections.Camping}_tabIndex`);
										(el as any).click();
									}
								}}>
								{Sections.Camping}
							</div>

							<div
								tabIndex={1}
								style={{cursor: 'pointer'}}
								onClick={() => {
									handleAnchor(Sections.Videos);
									const el = document.querySelector(`#${Sections.Videos}_tabIndex`);
									(el as any).click();
								}}
								onKeyPress={(e: any) => {
									if (e.charCode === 13) {
										handleAnchor(Sections.Videos);
										const el = document.querySelector(`#${Sections.Videos}_tabIndex`);
										(el as any).click();
									}
								}}>
								{Sections.Videos}
							</div>

							<div
								tabIndex={1}
								style={{cursor: 'pointer'}}
								onClick={() => {
									handleAnchor(Sections.Contacts);
									const el = document.querySelector(`#${Sections.Contacts}_tabIndex`);
									(el as any).click();
								}}
								onKeyPress={(e: any) => {
									if (e.charCode === 13) {
										handleAnchor(Sections.Contacts);
										const el = document.querySelector(`#${Sections.Contacts}_tabIndex`);
										(el as any).click();
									}
								}}>
								{Sections.Contacts}
							</div>
						</Stack>
					</StyledNavBarBox>
				)}
			</NavBarContentContainer>
		</NavBarWrapper>
	);
};

