let n = prompt('Введите число'),
	num = {
		единицы: 0,
		десятки: 0,
		сотни: 0
	};

function explode(n) {
	num.сотни = Math.floor(n / 100);
	num.десятки = Math.floor((n - num.сотни * 100) / 10);
	num.единицы = n - num.сотни * 100 - num.десятки * 10;
	console.log(num);
}

if (n > 999 || n < 1) {
	console.log(n + ' не подходит');
} else {
	explode(n);
}