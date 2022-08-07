import {IFontStyles} from '@fluentui/react';
import {throttle} from 'lodash';
import {useEffect, useState} from 'react';
import bg from '../../../media/svgs/bg2.svg';
import {IApplicationProps} from '../../../types';
import ErrorView from '../../components/ErrorView';
import HeroHeader from '../../components/HeroHeader';
import {SectionMarginBottom, StyledArticlesGrid, StylePageContentContainer} from '../../Style';

const Memes = ({theme}: IApplicationProps) => {
	const errorMessage = '';
	const errorMessageView = () => <ErrorView message={errorMessage} />;

	const mediaContainerStyle = {
		width: '100%',
		borderRadius: '10px',
	};

	const [, setTextSize] = useState<keyof IFontStyles | undefined>(undefined);
	const [iconGridTemplateColumns, setIconGridTemplateColumns] = useState<string | undefined>(undefined);

	useEffect(() => {
		addEventListener('resize', throttle(handleResize, 500));
		dispatchEvent(new CustomEvent('resize'));
	});

	const handleResize = (event: any) => {
		const {innerWidth} = event.target;
		if (innerWidth >= 800) {
			setTextSize('large');
			setIconGridTemplateColumns('repeat(3, 1fr)');
		} else if (innerWidth >= 500 && innerWidth < 800) {
			setTextSize('medium');
			setIconGridTemplateColumns('repeat(2, 1fr)');
		} else if (innerWidth < 500) {
			setTextSize('medium');
			setIconGridTemplateColumns('1fr');
		}
	};

	const contentView = () => (
		<>
			<StyledArticlesGrid gridTemplateColumns={iconGridTemplateColumns}>
				{[
					'https://media.discordapp.net/attachments/714790573214793749/1005860108254842880/FZJW3CKacAAfkAy.jpg',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005863121996501042/trim.A4AC006E-2457-4E2B-B3D2-2380C255259E.mov',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005859986410328154/MteKa78FZFXe2DGz.mp4',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005860024326832238/unknown-179.png',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005862670240579695/unknown-6-1.png',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005863713884082277/video.mp4',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005864334464925726/a41.png',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005864588471967874/1-1.jpeg',
					'https://cdn.discordapp.com/attachments/714790573214793749/1005864959030341702/completefailure.mp4',
				].map(url => {
					const isImg = (/\.(gif|jpg|jpeg|tiff|png)$/i).test(url);
					if (!isImg) {
						return (
							<div key={`key-${url}`} style={mediaContainerStyle}>
								<video width="100%" height="100%" controls >
									<source src={url} />
								</video>
							</div>
						);
					}

					return (
						<div key={`key-${url}`} style={{width: '100%'}} tabIndex={1}>
							<img style={mediaContainerStyle} src={url} />
						</div>
					);
				})}
			</StyledArticlesGrid>
		</>
	);

	return (
		<>
			<StylePageContentContainer>
				<SectionMarginBottom>
					<HeroHeader
						color={theme?.palette?.white}
						bgImage={bg}
						headline={'Memes'}
						subHeadline={'from Discord'}
					/>
				</SectionMarginBottom>
				{errorMessage ? errorMessageView() : contentView()}
			</StylePageContentContainer>
		</>
	);
};

export default Memes;
