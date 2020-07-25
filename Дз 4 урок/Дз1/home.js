"use strict";

function NumberToObject(number) {
    if (Number.isInteger(number) && number > 0 && number <= 999) {
		return{
		units : number % 10,
		tens : (Math.floor(number / 10)) % 10,
        hundreds : Math.floor(number / 100),
		};
    }else {
		console.log("Вы ввели не число или оно не целое.");
	    return{};
	}
};

console.log(NumberToObject(234));
