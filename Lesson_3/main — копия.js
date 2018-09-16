// === 1 ===
console.log('=== 1 ===')

let a1 = '';
let p, n = 0;
while (n <= 100) {
	if (n == 2 || n == 3 || n == 5 || n == 7) {
		//console.log(n)
		a1 += n + ' ';
	} else if (n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
		//console.log(n);
		a1 += n + ' ';
	}
	n++;
}
console.log(a1);

let a2 = '';
let v = 0;
while (v <= 100) {
	for (var g = 2; g <= v; g++) {
		if (v % g == 0) {
			break;
		}
	}
	if (v == g) {
		//console.log(v);
		a2 += v + ' ';
	}
	v++;
}
console.log(a2);


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
