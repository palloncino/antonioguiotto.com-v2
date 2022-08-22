import {Stack, Text} from '@fluentui/react';
import {useNavigation} from '../../../hooks';
import {useDevice} from '../../../hooks/useDevice';
import logo from '../../../media/svgs/logo-white.svg';
import {IFramedChildComponentProps} from '../../../types';
import {CustomSection, SpecialWordStyle, StyledLogoBox, StyledLogoPlusTextBox} from '../../Style';
import {horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';

export const NavBar = ({appConfig}: IFramedChildComponentProps) => {
	const {navigate} = useNavigation();
	const {isMobile} = useDevice();

	return (
		<NavBarWrapper isMobile={isMobile} className="NavBarWrapper">
			<NavBarContentContainer isMobile={isMobile} className="NavBarContentContainer">
				<StyledLogoPlusTextBox>
					<StyledLogoBox
						isMobile={isMobile}
						tabIndex={1}
						onKeyPress={e => e.charCode === 13 && navigate('/')}
						onClick={() => navigate('/')}
						className="StyledLogoBox"
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
				<StyledNavBarBox>
					<Stack horizontal tokens={horizontalGapStackTokens}>

					</Stack>
				</StyledNavBarBox>
			</NavBarContentContainer>
		</NavBarWrapper>
	);
};

