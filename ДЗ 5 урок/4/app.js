'use strict';
let buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
	button.addEventListener("click", function(event){
		buttonClickHandler(event);
	})
});

function buttonClickHandler(event) {
	const cardNode = event.target.parentNode;
	
	const card = {
		wrap: cardNode,
		img: cardNode.querySelector("img"),
		productName: cardNode.querySelector(".productname"),
		button: cardNode.querySelector("button"),
	};
	const textOnButton = card.button.innerText;
	if (textOnButton === "Подробнее"){
		showText(card);
	} else if (textOnButton === "Отмена"){
		hideText(card);
	}
}

function showText(card){
	card.img.style.display = "none";
	const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea veniam, delectus expedita asperiores repudiandae unde consequuntur voluptatibus ratione consectetur, modi sed, assumenda magnam! ";
	card.productName.insertAdjacentHTML("afterend", `<div class="desc" style="width: 150px">${text}</div>`);
	card.button.innerText = "Отмена";	
	
}

function hideText(card){
	card.wrap.querySelector(".desc").remove();
	card.img.style.display = "block";
	card.button.innerText = "Подробнее";
}