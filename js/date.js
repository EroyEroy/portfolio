window.addEventListener('load', () => {
	const time = document.querySelector(".dateYear");

	mydate = new Date();
	myday = mydate.getDay();
	mymonth = mydate.getMonth();
	myweekday = mydate.getDate();
	weekday = myweekday;
	myyear = mydate.getYear();
	year = myyear

	if (year < 2000)
		year = year + 1900;
	if (myday == 0)
		day = " Воскресенье, "
	else if (myday == 1)
		day = " Понедельник, "
	else if (myday == 2)
		day = " Вторник, "
	else if (myday == 3)
		day = " Среда, "
	else if (myday == 4)
		day = " Четверг, "
	else if (myday == 5)
		day = " Пятница, "
	else if (myday == 6)
		day = " Суббота, "
	if (mymonth == 0)
		month = "Января "
	else if (mymonth == 1)
		month = "Февраля "
	else if (mymonth == 2)
		month = "Марта "
	else if (mymonth == 3)
		month = "Апреля "
	else if (mymonth == 4)
		month = "Мая "
	else if (mymonth == 5)
		month = "Июня "
	else if (mymonth == 6)
		month = "Июля "
	else if (mymonth == 7)
		month = "Августа "
	else if (mymonth == 8)
		month = "Сентября "
	else if (mymonth == 9)
		month = "октября "
	else if (mymonth == 10)
		month = "Ноября "
	else if (mymonth == 11)
		month = "Декабря"
	time.innerHTML = '<span class="dateYear">' + myweekday + ' ' + month + year + '</span>';
});