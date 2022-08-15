/* eslint-disable no-unused-vars */
import {Dropdown, IDropdownOption, Stack, Text} from '@fluentui/react';
import {FormEvent, useState} from 'react';
import {useNavigation} from '../../../hooks';
import {IFramedChildComponentProps} from '../../../types';
import {viewsToDropdownOptions} from '../../../utils';
import {extractModuleFromUrl} from '../../../utils/URL';
import {useEffect} from 'react';
import logo from '../../../media/svgs/logo-white.svg';
import {SpecialWordStyle} from '../../Style';
import {dropdownStyles, horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';
import Anchor from '../Anchor';
import {useDevice} from '../../../hooks/useDevice';

export const NavBar = ({appConfig}: IFramedChildComponentProps) => {
	const {pathname, navigate} = useNavigation();
	const {isMobile} = useDevice();
	const [selectedKey, setSelectedKey] = useState(extractModuleFromUrl(pathname));
	const options: IDropdownOption[] = viewsToDropdownOptions(appConfig?.views || []);
	const handleChangedDropdown = (_: FormEvent<HTMLDivElement>, module: IDropdownOption | undefined): void => {
		console.log({_, module});
		const selectedItemKey = `${module?.key}` || '';
		setSelectedKey(selectedItemKey);
		navigate(selectedItemKey);
	};

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	return (
		<NavBarWrapper>
			<NavBarContentContainer style={{justifyContent: 'space-between'}}>
				<Stack style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '0rem',
					height: '32px',
					width: isMobile ? 'auto' : '260px',
				}} tabIndex={1} onKeyPress={e => e.charCode === 13 && handleChangedDropdown({} as FormEvent<HTMLDivElement>, {key: '/', text: ''})}>
					<StyledNavBarBox>
						<img src={logo} alt={'guiotto\'s company logo'} style={{...logoStyle}} />
					</StyledNavBarBox>
					{!isMobile && (
						<StyledNavBarBox>
							<Text variant={'large'} nowrap block>
								<SpecialWordStyle>
									antonioguiotto.com
								</SpecialWordStyle>
							</Text>
						</StyledNavBarBox>
					)}
				</Stack>
				{window.innerWidth > 400 && pathname === '/cv' && (
					<Stack>
						<a style={{transform: 'scale(1.2)', textDecoration: 'none', color: '#e0f'}} tabIndex={1} href="" download target="_blank">download cv</a>
					</Stack>
				)}
				<StyledNavBarBox>
					<Stack horizontal tokens={horizontalGapStackTokens}>
						<Dropdown
							tabIndex={1}
							options={options}
							styles={dropdownStyles}
							onChange={handleChangedDropdown}
							selectedKey={selectedKey}
						/>
					</Stack>
				</StyledNavBarBox>
			</NavBarContentContainer>
		</NavBarWrapper>
	);
};

