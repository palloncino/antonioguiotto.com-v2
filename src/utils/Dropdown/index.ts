import {IDropdownOption} from '@fluentui/react/lib/Dropdown';
import {ViewType} from '../../types';

export const viewsToDropdownOptions = (views: ViewType[]): IDropdownOption[] => views.map(({url, label}) => ({key: url, text: label}));

