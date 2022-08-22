import {MutableRefObject} from 'react';

export const animateClick = (ref: MutableRefObject<null>, isMobile?: boolean) => {
	(ref.current as any).animate(isMobile ? [
		{
			transform: 'scale(1)',
			easing: 'ease-out',
		},
		{
			transform: 'scale(1.01)',
			easing: 'ease-out',
		},
		{
			transform: 'scale(1)',
			easing: 'ease-out',
		},
	] : [
		{
			transform: 'scale(.98)',
			easing: 'ease-out',
		},
		{
			transform: 'scale(1.03)',
			easing: 'ease-out',
		},
		{
			transform: 'scale(1.02)',
			easing: 'ease-out',
		},
	], 500);
};
