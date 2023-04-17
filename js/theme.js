const themeSwitches = document.querySelectorAll('.header__button-theme');
themeSwitches.forEach(swither => {
	swither.addEventListener('click', function() {
		applyTheme(this.dataset.theme);
		localStorage.setItem('theme', this.dataset.theme);
	});
});

function applyTheme(themeName) {
	let themeURL = `css/${themeName}-theme.css`;
	document.querySelector('[title="theme"]').setAttribute('href', themeURL);
}

let activeTheme = localStorage.getItem('theme');

if (activeTheme === null) {
	applyTheme('light');
} else {
	applyTheme(activeTheme);
}