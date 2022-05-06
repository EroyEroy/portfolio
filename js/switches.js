let portfolioBtn = document.querySelector('.info__portfolio-btn'),
	skillsBtn = document.querySelector('.info__skills-btn'),
	
	protfolio = document.querySelector('.illustrate__portfolio-cards'),
	skills = document.querySelector('.illustrate__skills');
	
document.addEventListener('click', (e) => {
	if (event.target === portfolioBtn){
		portfolioBtn.classList.add('active');
		skillsBtn.classList.remove('active');

		protfolio.classList.add('active');
		skills.classList.remove('active');
	} else if (event.target === skillsBtn){
		portfolioBtn.classList.remove('active');
		skillsBtn.classList.add('active');

		protfolio.classList.remove('active');
		skills.classList.add('active');
	}
});