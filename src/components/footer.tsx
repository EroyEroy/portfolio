import React, { Component } from 'react';
import '../footer.scss';

export function Footer() {
	function formatDate() {
		const months = [
			'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
			'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
		];

		const date = new Date(),
			day = date.getDate(),
			month = months[date.getMonth()],
			year = date.getFullYear();

		return `${day} ${month} ${year}`;
	};

	return (
		<footer className='footer'>
			<div className="container">
				<div className='footer__inner'>
					©&ensp;Терсенев Владислав
					<div id='dateYear'>{formatDate()}</div>
				</div>
			</div>
		</footer>
	);
};