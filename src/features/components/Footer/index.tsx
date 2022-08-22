import {Text} from '@fluentui/react';

export const Footer = () => (
	<div className="Footer"
		style={{
			position: 'fixed',
			zIndex: 99,
			bottom: 0,
			transform: 'translateX(-50%)',
			left: '50%',
			padding: '1rem 0',
		}}>
		<Text>
			Designed by Antonio Guiotto
		</Text>
	</div>
);
