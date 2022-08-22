import {Spinner, SpinnerSize} from '@fluentui/react';
import React, {lazy, Suspense} from 'react';
import {IFramedChildComponentProps, FolderNameType} from '../../types';
import {NavBar} from '../components/NavBar';
import {Footer} from '../components/Footer';
import {ContentWrapper, CustomSection, ViewWrapper} from '../Style';
import {useDevice} from '../../hooks/useDevice';

export const framedView = (view: FolderNameType, props?: IFramedChildComponentProps): React.ReactNode => {
	const {isMobile} = useDevice();
	const ComponentView = lazy(() => import(`../Pages/${view}`));

	return (
		<ViewWrapper isMobile={isMobile} id="ViewWrapper">
			<CustomSection mt={'.4rem'} mb={isMobile ? '0rem' : '.4rem'}>
				<NavBar {...props} />
			</CustomSection>
			<ContentWrapper>
				<Suspense fallback={<Spinner styles={{circle: {}}} size={SpinnerSize.large} />}>
					<ComponentView {...props} />
				</Suspense>
			</ContentWrapper>
			{/* <Footer /> */}
		</ViewWrapper>
	);
};
