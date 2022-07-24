// анимация
const animItems = document.querySelectorAll('.animate');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animeItemOffset = offset(animItem).top;
			const animStart = 30;

			// настройка
			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			// если объект выше окна браузера
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			// добавление класса
			if ((window.pageYOffset > animeItemOffset - animItemPoint) && window.pageYOffset < (animeItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			}
		};
	};
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageXOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	// для элементов, которые находятся сразу в поле зрения
	setTimeout(() => {
		animOnScroll();
	}, 300);
};