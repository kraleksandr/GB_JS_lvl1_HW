// === 1 ===

var a = 1, b = 1, c, d;			
c = ++a; alert(c); // 2			сначала сложение затем присвоение
d = b++; alert(d); // 1			сначала присвоение затем увеличение
c = (2+ ++a); alert(c); // 5	2 + (1 + a), тк a уже == 2
d = (2+ b++); alert(d); // 4	2 + 2 тк b == 2 и затем b + 1
alert(a); // 3					увеличили в прошлых выражениях
alert(b); // 3					увеличили в прошлых выражениях



// === 2 ===

var a = 2;
var x = 1 + (a *= 2); // 5



// === 3 ===

var n1 = 3,
	n2 = 4;
if (n1 >= 0 && n2 >= 0) {
	alert(n1 - n2);
} else if (n1 < 0 && n2 < 0) {
	alert(n1 * n2);
} else {
	alert(n1 + n2);
};



// === 4 ===

var num = parseInt(prompt("Введите число от 0 до 15"));
if (!num || num > 15 || num < 0 || isNaN(num)) {
	alert("Неправильное число")
} else {
	var message = "";
	switch(num){
		case  1: message += "1\n";
		case  2: message += "2\n";
		case  3: message += "3\n";
		case  4: message += "4\n";
		case  5: message += "5\n";
		case  6: message += "6\n";
		case  7: message += "7\n";
		case  8: message += "8\n";
		case  9: message += "9\n";
		case 10: message += "10\n";
		case 11: message += "11\n";
		case 12: message += "12\n";
		case 13: message += "13\n";
		case 14: message += "14\n";
		case 15: message += "15";
	}
	alert(message);
}



// === 5 ===

function fAdd(a,b){return a+b;}
function fSub(a,b){return a-b;}
function fMul(a,b){return a*b;}
function fDiv(a,b){return a/b;}



// === 6 ===

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 'add':
			return fAdd(arg1, arg2);
		case 'sub':
			return fSub(arg1, arg2);
		case 'mul':
			return fMul(arg1, arg2);
		case 'div':
			return fDiv(arg1, arg2);
	}
}
