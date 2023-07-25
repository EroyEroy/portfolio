import React, { Component } from 'react';
import '../tabs.scss';
import '../main.scss';

export function Card({ mainTitle, cardTitle, bgColor, link, cardObserver }: { mainTitle: string, cardTitle: string, bgColor: string, link: string, cardObserver: IntersectionObserver }) {
	const cardRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (cardRef.current && cardObserver) {
			cardObserver.observe(cardRef.current);
		}
		return () => {
			if (cardRef.current && cardObserver) {
				cardObserver.unobserve(cardRef.current);
			};
		};
	}, [cardObserver]);

	return (
		<div ref={cardRef} className='card' style={{ backgroundColor: bgColor }}>
			{mainTitle}
			<div className='card__info'>
				<h2 className='card__title'>{cardTitle}</h2>
				<a className='mainButton' href={link} target="_blank">Смотреть</a>
			</div>
		</div>
	);
};