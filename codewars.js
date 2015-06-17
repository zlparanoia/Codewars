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
// 4.Complete The Pattern #5-Even Ladder
//mine:
function pattern(n) {
	var output = "",
		i,
		j;
	// Happy Coding ^_^
	(n % 2 !== 0) && (n -= 1);
	for (i = 2; i <= n; i += 2) {
		for (j = 0; j < i; j++) {
			output += i;
		}
		if(i != n) {
			output += "\n";
		}
	}
	return output;
}
console.log(pattern(2));
//bug1: 最后一行不换行
//bug2: for循环若要重新循环，在循环语句初始化，不要在循环外
//others:
function pattern(n) {
	var output = "",
		num,
		i,
		j;
	n = Math.floor(n/2);   //输出的行数
	for (i = 1; i <= n; i++) {
		num = i * 2;       //每一行的数
		for (j = 1; j <= num; j++) {
			output += num; 
		}
		if (i != n) {
			output += "\n";  //最后一行不换行
		}
	}
	return output;
}
console.log(pattern(5));
//5.Find Your Villain Name
function getVillainName(birthday){
	var months = {
		January: "The Evil",
		February: "The Vile",
		March: "The Cruel",
		April: "The Trashy",
		May: "The Despicable",
		June: "The Embarrassing",
		July: "The Disreputable",
		August: "The Atrocious",
		September: "The Twirling",
		October: "The Orange",
		November: "The Terrifying",
		December: "The Awkward"
	},
		dates = {
		0: "Mustrache",
		1: "Pickle",
		2: "Hood Ornament",
		3: "Raisin",
		4: "Recycling Bin",
		5: "Potato",
		6: "Tomato",
		7: "House Cat",
		8: "Teaspoon",
		9: "Laundry Basket"
	},
		birth = birthday.toString().split(" "),
		month,
		date,
		firstName = "",
		lastName = "",
		name = "";
		
	month = new RegExp(birth[1]);
	for (var i in months) {
		(month.test(i)) && (firstName = months[i]);
	}
	date = birth[2] >= 10 ? birth[2] % 10 : birth[2];
	lastName = dates[Number(date)];
    name = firstName + " "+ lastName;
	return name;
}
var birthday = new Date();
console.log(getVillainName(birthday));
//bug1: 日期为一位数时，格式是0开头，用Number()把数字去掉。
//bug2: 遍历对象用in语句。
// 6.Recursive reverse string
function reverse(str) {
    return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;  // ello + h; llo + e + h; lo + l + e + h; o + l + l + e + h
}
// console.log(reverse("hello"));
//利用递归实现反转。
function reverse(arr){
    var arr=arr.split("").reverse().join(""); 
     return arr;
} 
console.log(reverse("hello world"));