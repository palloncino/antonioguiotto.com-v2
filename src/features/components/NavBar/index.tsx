/* eslint-disable no-unused-vars */
import {Text, Dropdown, IDropdownOption, Stack} from '@fluentui/react';
import {FormEvent, useState} from 'react';
import {useNavigation} from '../../../hooks';
import {IFramedChildComponentProps} from '../../../types';
import {viewsToDropdownOptions} from '../../../utils';
import {extractModuleFromUrl} from '../../../utils/URL';
import {Image} from '../Image';
import logo from '../../../media/svgs/logo.svg';
import {dropdownStyles, horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';
import {SpecialWordStyle} from '../../Style';
import Anchor from '../Anchor';

export const NavBar = ({appConfig}: IFramedChildComponentProps) => {
	const {pathname, navigate} = useNavigation();
	const [selectedKey, setSelectedKey] = useState(extractModuleFromUrl(pathname));
	const options: IDropdownOption[] = viewsToDropdownOptions(appConfig?.views || []);
	const handleChangedDropdown = (_: FormEvent<HTMLDivElement>, module: IDropdownOption | undefined): void => {
		const selectedItemKey = `${module?.key}` || '';
		setSelectedKey(selectedItemKey);
		navigate(selectedItemKey);
	};

	return (
		<NavBarWrapper>
			<NavBarContentContainer style={{justifyContent: window.innerWidth < 400 ? 'center' : 'space-between'}}>
				<Stack style={{display: 'flex', flexDirection: 'row'}}>
					<StyledNavBarBox>
						<Image src={logo} alt={'guiotto\'s company logo'} style={logoStyle} />
					</StyledNavBarBox>
					<StyledNavBarBox>
						<Text variant={'large'} nowrap block>
							<SpecialWordStyle>
							antonioguiotto.com
							</SpecialWordStyle>
						</Text>
					</StyledNavBarBox>
				</Stack>
				{window.innerWidth > 400 && (
					<Stack>
						<Anchor href="https://s3.amazonaws.com/antonioguiotto.cv/CV.pdf" text="download cv" download target="_blank"/>
					</Stack>
				)}
				{/* <StyledNavBarBox>
					<Stack horizontal tokens={horizontalGapStackTokens}>
						<Dropdown
							options={options}
							styles={dropdownStyles}
							onChange={handleChangedDropdown}
							selectedKey={selectedKey}
						/>
					</Stack>
				</StyledNavBarBox> */}
			</NavBarContentContainer>
		</NavBarWrapper>
	);
};

