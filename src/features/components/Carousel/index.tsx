import React, {useState, useEffect} from 'react';
import './Carousel.css'; // Assume you have this CSS file

function Carousel() {
	const [selectedIndex, setSelectedIndex] = useState(0);

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
		<div className="carousel">
			<div className="carousel-inner" style={{transform: `translateX(-${selectedIndex * 300}px)`}}>
				{Array.from({length: 10}).map((_, index) => (
					<div
						tabIndex={1}
						key={index}
						className={`carousel-item ${index === selectedIndex ? 'selected' : ''}`}
						onKeyDown={(e: any) => e.key === 'Enter' && handleClick(index)}
						onClick={() => handleClick(index)} // Add onClick handler here
					>
            Item {index + 1}
					</div>
				))}
			</div>
		</div>
	);
}

export default Carousel;
