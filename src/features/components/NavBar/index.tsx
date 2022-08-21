import {Stack, Text} from '@fluentui/react';
import {useNavigation} from '../../../hooks';
import {useDevice} from '../../../hooks/useDevice';
import logo from '../../../media/svgs/logo-white.svg';
import {IFramedChildComponentProps} from '../../../types';
import {CustomSection, SpecialWordStyle, StyledLogoBox} from '../../Style';
import {horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';

export const NavBar = ({appConfig}: IFramedChildComponentProps) => {
	const {navigate} = useNavigation();
	const {isMobile} = useDevice();

	return (
		<NavBarWrapper isMobile={isMobile}>
			<NavBarContentContainer isMobile={isMobile}>
				<StyledLogoBox
					isMobile={isMobile}
					tabIndex={1}
					onKeyPress={e => e.charCode === 13 && navigate('/')}
					onClick={() => navigate('/')}
				>
					<StyledNavBarBox>
						<img src={logo} alt={'guiotto\'s company logo'} style={{...logoStyle}} />
					</StyledNavBarBox>
					{!isMobile && (
						<StyledNavBarBox>
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
						←BACK TO
					</Text>
					<Text style={{lineHeight: '1rem'}} variant={'large'} nowrap block>
						HOMEPAGE
					</Text>
				</CustomSection>
				<StyledNavBarBox>
					<Stack horizontal tokens={horizontalGapStackTokens}>

					</Stack>
				</StyledNavBarBox>
			</NavBarContentContainer>
		</NavBarWrapper>
	);
};

