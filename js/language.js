let langContainer = document.querySelector('.header__language'),
	langDescription = document.querySelector('.language__overflow'),
	langButton = document.querySelector('.language__button');

function showDescription() {
	langContainer.classList.toggle('header__language_active');
}

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(langContainer);
 
	if ( ! withinBoundaries ) {
		langContainer.classList.remove('header__language_active');
	}
})
// перевод
const langArr = {
	h2: {
	  English: 'Tersenev Vladislav',
	  Русский: 'Терсенев Владислав',
	},
	description: {
		English: 'Web – developer',
		Русский: 'Web – разработчик',
	},
	cardOne: {
		English: 'years of <br/> work',
		Русский: 'годы <br/> работы',
	},
	cardTwo: {
		English: 'completed <br/> projects',
		Русский: 'законченных <br/> проектов',
	},
	cardThree: {
		English: 'satisfied <br/> customers',
		Русский: 'довольных <br/> клиентов',
	},
	btn: {
		English: 'Download CV' + `<img src="img/arrow_down.svg" alt="" draggable="false">`,
		Русский: 'Скачать CV' + `<img src="img/arrow_down.svg" alt="" draggable="false">`,
	},
	portfolio: {
		English: 'Portfolio',
		Русский: 'Портфолио',
	},
	skills: {
		English: 'Skills',
		Русский: 'Навыки',
	},
	baking: {
		English: 'Baking shop',
		Русский: 'Магазин выпечки',
	},
	view: {
		English: 'View',
		Русский: 'Смотреть',
	},
	view2: {
		English: 'View',
		Русский: 'Смотреть',
	},
	view3: {
		English: 'View',
		Русский: 'Смотреть',
	},
	view4: {
		English: 'View',
		Русский: 'Смотреть',
	},
	sushi: {
		English: 'Sushi bar',
		Русский: 'Суши бар',
	},
	validate: {
		English: 'Form validation',
		Русский: 'Валидация формы',
	},
	task: {
		English: 'Task planner',
		Русский: 'Планировщик задач',
	},
	lvlMid: {
		English: 'Mid',
		Русский: 'Средний',
	},
	lvlMid2: {
		English: 'Mid',
		Русский: 'Средний',
	},
	lvlLow: {
		English: 'Low',
		Русский: 'Низкий',
	},
	lvlLow2: {
		English: 'Low',
		Русский: 'Низкий',
	},
	skillsTitle: {
		English: 'Frontend – developer',
		Русский: 'Frontend – разработчик',
	},
	footer: {
		English: 'Tersenev Vladislav',
		Русский: 'Терсенев Владислав',
	},
  };
  let btn = document.querySelectorAll('.btnlang');
btn.forEach((b) => b.addEventListener('click', setLang));
  
  function setLang() {
	let span = document.querySelector('.language__text');
	for (let key in langArr) {
	  let elem = document.querySelector('.lng-' + key);
	  if (elem) {
		elem.innerHTML = langArr[key][this.value];
		span.innerHTML = this.value;
		langContainer.classList.remove('header__language_active');
	  }
	}
  }