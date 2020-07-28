'use strict';
let modWind = document.querySelector(".wrap");// 1. получить объект модального окна с классом .wrap

let span = document.querySelector("span");// 2. получить тег span, используемый для закрытия окна

let btn = document.querySelector("button"); // 3. получить кнопку, используемую для показа модального окна


btn.addEventListener("click", function(){
	modWind.classList.remove("hidden")					
});
// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden


span.addEventListener("click", function(){
	modWind.classList.add("hidden")
});// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
