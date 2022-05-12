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