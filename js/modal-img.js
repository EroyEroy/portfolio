let modal = document.querySelector('#myModal'),
	img = document.querySelector('#myImg'),
	modalImg = document.querySelector('#img01'),
	span = document.querySelector('.close');

img.onclick = function () {
	modal.style.display = 'flex';
	modalImg.src = this.src;
	document.body.style.overflow = 'hidden';
}
span.onclick = function () {
	modal.style.display = 'none';
	document.body.style.overflow = 'auto';
}
    // Закрытие окна по клику вне области.
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
			document.body.style.overflow = 'auto';
        }
    });

    // Закрытие окна по нажатию клавиши Escape.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
			document.body.style.overflow = 'auto';
        }
    });