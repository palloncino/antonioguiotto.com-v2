import {Dropdown, IDropdownOption, Stack, Text} from '@fluentui/react';
import {FormEvent, useState} from 'react';
import {useNavigation} from '../../../hooks';
import {useDevice} from '../../../hooks/useDevice';
import logo from '../../../media/svgs/logo-white.svg';
import {IFramedChildComponentProps} from '../../../types';
import {viewsToDropdownOptions} from '../../../utils';
import {extractModuleFromUrl} from '../../../utils/URL';
import {SpecialWordStyle} from '../../Style';
import {dropdownStyles, horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';

export const NavBar = ({appConfig}: IFramedChildComponentProps) => {
	const {pathname, navigate} = useNavigation();
	const {isMobile} = useDevice();
	const [selectedKey, setSelectedKey] = useState(extractModuleFromUrl(pathname));
	const options: IDropdownOption[] = viewsToDropdownOptions(appConfig?.views || []);
	const handleChangedDropdown = (_: FormEvent<HTMLDivElement>, module: IDropdownOption | undefined): void => {
		const selectedItemKey = `${module?.key}` || '';
		setSelectedKey(selectedItemKey);
		navigate(selectedItemKey);
	};

	return (
		<NavBarWrapper isMobile={isMobile}>
			<NavBarContentContainer isMobile={isMobile}>
				<Stack
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '0rem',
						height: '32px',
						width: isMobile ? 'auto' : '260px',
						background: '#323130',
						borderRadius: '0.2rem',
						cursor: 'pointer',
					}}
					tabIndex={1}
					onKeyPress={e => e.charCode === 13 && handleChangedDropdown({} as FormEvent<HTMLDivElement>, {key: '/', text: ''})}
					onClick={() => handleChangedDropdown({} as FormEvent<HTMLDivElement>, {key: '/', text: ''})}
				>
					<StyledNavBarBox>
						<img src={logo} alt={'guiotto\'s company logo'} style={{...logoStyle}} />
					</StyledNavBarBox>
					{!isMobile && (
						<StyledNavBarBox>
							<Text variant={'large'} nowrap block>
								<SpecialWordStyle color={'#fff'}>
									antonioguiotto.com
								</SpecialWordStyle>
							</Text>
						</StyledNavBarBox>
					)}
				</Stack>
				{!isMobile && pathname === '/cv' && (
					<Stack>
						<a style={{transform: 'scale(1.2)', textDecoration: 'none'}} tabIndex={1} href="" download target="_blank">download cv</a>
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

