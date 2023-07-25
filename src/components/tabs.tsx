import React, { Component, useState } from 'react';
import { Card } from './card';
import '../tabs.scss';
import '../App.scss';
import { Skill } from './skill';

interface IPortfolioData {
	mainTitle: string,
	cardTitle: string,
	bgColor: string,
	link: string,
}
interface ISkillsData extends Array<string> { }

const portfolioData: IPortfolioData[] = [
	{
		mainTitle: 'Motodarom',
		cardTitle: 'Лендинг магазина запчастей',
		bgColor: '#ff7822',
		link: 'https://eroyeroy.github.io/motodarom/',
	},
	{
		mainTitle: 'РЕНТОН',
		cardTitle: 'Суши бар',
		bgColor: '#f4483c',
		link: 'https://eroyeroy.github.io/roll-shop/',
	},
	{
		mainTitle: 'Sweets Lab',
		cardTitle: 'Кондитерская',
		bgColor: '#ffb39b',
		link: 'https://eroyeroy.github.io/baking-shop/',
	},
	{
		mainTitle: '7Bolt',
		cardTitle: 'Лендинг магазина автозапчастей',
		bgColor: '#ff6f00',
		link: 'https://eroyeroy.github.io/7bolt-Landing/',
	},
	{
		mainTitle: 'Converse',
		cardTitle: 'Лендинг магазина обуви',
		bgColor: '#000000',
		link: 'https://eroyeroy.github.io/Converse-promo/',
	},
	{
		mainTitle: 'Nirvana',
		cardTitle: 'Лендинг альбомов группы Nirvana',
		bgColor: '#f8b822',
		link: 'https://eroyeroy.github.io/nirvana-music-player/',
	},
	{
		mainTitle: 'Roongo',
		cardTitle: 'Лендинг магазина автозапчастей',
		bgColor: '#fd8223',
		link: 'https://eroyeroy.github.io/Roongo/',
	},
	{
		mainTitle: 'Мед ЦТ',
		cardTitle: 'Лендинг медицинской компании',
		bgColor: '#3aafa9',
		link: 'https://eroyeroy.github.io/medical-company/',
	},
	{
		mainTitle: 'JasTask',
		cardTitle: 'Ежедневник',
		bgColor: '#5267f4',
		link: 'http://h96497tm.beget.tech/JusTask/app/signIn.php',
	},
	{
		mainTitle: 'Museum',
		cardTitle: 'Лендинг музея',
		bgColor: '#fcab14',
		link: 'https://eroyeroy.github.io/museum/',
	},
	{
		mainTitle: 'ТСПК',
		cardTitle: 'Доска объявлений ТСПК',
		bgColor: '#004DC9',
		link: 'http://h96497tm.beget.tech/kursach/index.php?page=1',
	}
];
const skillsData: ISkillsData = ['HTML5 (KIT)', 'CSS3 (SCSS)', 'JavaScript', 'TypeScript', 'React', 'Webpack', 'GULP', 'GIT', 'AJAX', 'БЭМ'];

export function Tabs() {
	const [activeContent, setActiveContent] = useState<number>(0);

	const renderTabContent = () => {
		switch (activeContent) {
			case 0:
				return (
					<div className='cards'>
						{
							portfolioData.slice().reverse().map((card, index) => (
								<Card key={index} mainTitle={card.mainTitle} cardTitle={card.cardTitle} bgColor={card.bgColor} link={card.link} cardObserver={cardObserver} />
							))
						}
					</div>
				);
			case 1:
				return (
					<>
						<h2 className='title skills__title'>Frontend – разработчик</h2>
						<div className='skills'>
							{skillsData.map((skill, index) => (<Skill key={index} name={skill} />))}
						</div>
					</>
				);
			default:
				return (
					<div className='cards'>
						{
							portfolioData.slice().reverse().map((card, index) => (
								<Card key={index} mainTitle={card.mainTitle} cardTitle={card.cardTitle} bgColor={card.bgColor} link={card.link} cardObserver={cardObserver} />
							))
						}
					</div>
				);
		};
	};

	const cardObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate');
				};
			});
		},
		{}
	);

	return (
		<>
			<div className='tabs'>
				<button className={`tabs__button ${activeContent === 0 ? 'active' : ''}`} onClick={() => setActiveContent(0)}>Портфолио</button>
				<button className={`tabs__button ${activeContent === 1 ? 'active' : ''}`} onClick={() => setActiveContent(1)}>Навыки</button>
			</div>
			{renderTabContent()}
		</>
	);
};
