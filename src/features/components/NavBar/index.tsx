import {Dropdown, IDropdownOption, Stack} from '@fluentui/react';
import {FormEvent, useState} from 'react';
import {useNavigation} from '../../../hooks';
import {IFramedChildComponentProps} from '../../../types';
import {viewsToDropdownOptions} from '../../../utils';
import {extractModuleFromUrl} from '../../../utils/URL';
import {Image} from '../Image';
import logo from '../../../media/svgs/logo.svg';
import {dropdownStyles, horizontalGapStackTokens, logoStyle, NavBarContentContainer, NavBarWrapper, StyledNavBarBox} from '../../Style/NavBar';

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
			<NavBarContentContainer>
				<StyledNavBarBox>
					<Image src={logo} alt={'guiotto\'s company logo'} style={logoStyle} />
				</StyledNavBarBox>
				<StyledNavBarBox>
					<Stack horizontal tokens={horizontalGapStackTokens}>
						<Dropdown
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

