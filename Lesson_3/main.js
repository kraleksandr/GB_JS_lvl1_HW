// === 1 ===
console.log('=== 1 ===')




// === 2 ===
console.log('=== 2 ===')

let a = 0;
do {
	let aa = a;
	if (a == 0) {
		aa += ' Эт ноль'
	} else if (a % 2 == 0) {
		aa += ' Чет'
	} else {
		aa += ' Нечет'
	}
	console.log(aa);
	a++;
} while (a <= 10)


// === 3 ===
console.log('=== 3 ===')

for (let d = 0; d <= 9; console.log(d++)) {}


// === 4 ===
console.log('=== 4 ===')

let c = '';
do {
	c += 'x';
	console.log(c);
} while (c.length < 20)
