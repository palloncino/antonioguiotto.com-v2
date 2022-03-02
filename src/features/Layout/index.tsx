import {Spinner, SpinnerSize} from '@fluentui/react';
import React, {lazy, Suspense} from 'react';
import {IFramedChildComponentProps, FolderNameType} from '../../types';
import {NavBar} from '../components/NavBar';
import {ContentWrapper, ViewWrapper} from '../Style';

export const framedView = (view: FolderNameType, props?: IFramedChildComponentProps): React.ReactNode => {
	const ComponentView = lazy(() => import(`../Pages/${view}`));

	return (
		<ViewWrapper>
			<NavBar {...props} />
			<ContentWrapper>
				<Suspense fallback={<Spinner size={SpinnerSize.large} />}>
					<ComponentView {...props} />
				</Suspense>
			</ContentWrapper>
		</ViewWrapper>
	);
};
