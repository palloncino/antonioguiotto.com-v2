import React, {useState, useEffect, useRef} from 'react';
import './Carousel.css'; // Assume you have this CSS file

function Carousel({isParentOpen}: any) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const initialX = useRef<any>();

	const items = [
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
		{
			id: '',
			title: 'Random Picsum Image',
			background: 'https://picsum.photos/200/300',
			video: false,
			image: true,
		},
	];

	const handleTouchStart = (e: any) => {
		initialX.current = e.touches[0].clientX;
	};

	const handleTouchMove = (e: any) => {
		if (initialX.current === null) {
			return;
		}

		const currentX = e.touches[0].clientX;
		const differenceX = initialX.current - currentX;

		if (differenceX > 0) {
			// Swiped left
			setSelectedIndex(prevIndex => (prevIndex + 1) % items.length);
		} else if (differenceX < 0) {
			// Swiped right
			setSelectedIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
		}

		initialX.current = null;
	};

	const handleKeyDown = (e: { key: string; }) => {
		if (e.key === 'ArrowRight') {
			setSelectedIndex(prevIndex => (prevIndex + 1) % 10);
		} else if (e.key === 'ArrowLeft') {
			setSelectedIndex(prevIndex => (prevIndex - 1 + 10) % 10);
		}
	};

	const handleClick = (index: React.SetStateAction<number>) => {
		setSelectedIndex(index);
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div className="carousel" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
			<div className="carousel-inner" style={{transform: `translateX(-${selectedIndex * 300}px)`}}>
				{items.map(({title, background}, index) => (
					<div
						tabIndex={1}
						key={index}
						className={`carousel-item ${!isParentOpen && 'closed-section'} ${index === selectedIndex ? 'selected' : ''}`}
						onKeyDown={e => e.key === 'Enter' && handleClick(index)}
						onClick={() => handleClick(index)}
						style={{background: `url(${background}) center / cover no-repeat`}}
					>
						{title} {index + 1}
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;
