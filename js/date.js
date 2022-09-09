function autoDate() {
	const startDate = new Date('2022-09-09')  //устанавливаем дату начала интервала 
	const now = new Date() //определяем текущую дату
	const delta = Math.trunc((+now - +startDate) / 3 / 24 / 3600 / 1000); // вычисляем количество трёхдневных интервалов которые прошли с момента startDate

	const resDate = startDate
	resDate.setDate(resDate.getDate() + delta * 3)
	//итоговая дата -- это стартовая дата + количево вычислиных трёхдневных интервалов, вычисленных на предыдущем шаге, умноженые на 3

	const dateTag = document.querySelector('.dateYear') //находим тег, в котором должна оказаться новая дата
	dateTag.textContent = resDate.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' })
	//устанавливаем дату в соответствии с форматом DD MMMM (можете подобрать любой другой) 
};
autoDate();
setInterval(autoDate, 10 * 60 * 1000) //затем обновляем данные каждые 10 минут