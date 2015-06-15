//1、Collatz Conjecture Length 
//mine:
function collatz(n) {
	//your code here
	var count = 1;
	while (n != 1) {
		if (n % 2 == 0) {
			n = n / 2;
			count++;
		} else {
			n = n * 3 + 1;
			count++;
		}
	}
	return count;
}
console.log(collatz(20));
//others:
function collatz(n) {
	//your code here
	var count = 1;
	while (n != 1) {
		count++;
		n = n % 2 == 0 ? n / 2 : n * 3 + 1;
	}
	return count;
}
console.log(collatz(20));
//2、Find the capitals
//mine:
var capitals = function(word) {
	// Write your code here
	var i = 0,
		len = word.length,
		re = /^[A-Z]{1}$/,
		arr = [];
	for (; i < len; i++) {
		if (re.test(word[i])) {
			arr.push(i);
		}
	}
	return arr;
};
console.log(capitals("GhjH"));
//others:
var capitals = function(word) {
	// Write your code here
	var i = 0,
		len = word.length,
		arr = [];
	for (; i < len; i++) {
		word[i].toUpperCase() === word[i] && arr.push(i);
	}
	return arr;
};
console.log(capitals("GhjH"));
//3.Digitize
function digitize(n) {
	var str = n.toString(),
		i = 0,
		len = str.length,
		arr = [];
	for (; i < len; i++) {
		arr.push(+str[i]);
	}
	return arr;
}
console.log(digitize(12676543));
//others:
function digitize(n) {
	return String(n).split("").map(Number);
} 
console.log(digitize(12676543));