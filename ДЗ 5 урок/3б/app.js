'use strict';

let modWind = document.querySelector(".wrap");// 1. получить объект модального окна с классом .wrap

let span = document.querySelector("span");// 2. получить тег span, используемый для закрытия окна

let btn = document.querySelector("button"); // 3. получить кнопку, используемую для показа модального окна


btn.addEventListener("click", function(){
	modWind.classList.remove("hidden");
	modWind.classList.remove("slideRightReturn");
	modWind.classList.add('magictime', 'slideLeftReturn');
});



span.addEventListener("click", function(){
	modWind.classList.remove("slideLeftReturn");
	modWind.classList.add('slideRightReturn');
	setTimeout(function(){
		modWind.classList.add("hidden")
	}, 1000);
	
});

