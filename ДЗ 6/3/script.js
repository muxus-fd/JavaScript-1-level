
//я Пытался сделать самостоятельно, но пока не особо получается самому, я вникал в ход работы
//программы смотря готовое дз  и копировал из него некоторые готовые функции. 
//Пытался сам сделать данный функционал, как понимал его у себя в голове, но пока знания
//не отточены и нужно больше практики для понимая работы функций и как правильно их собирать.
//У меня вопрос - как понять когда нужно создать переменную с данными и функциями
//как в дз -basket , а когда можно делать как у меня ниже - все функции отделень, хотя может 
//я сделал и не правильно, но вроде работает? Спасибо !

'use strict';
let tbody = document.querySelector('tbody'); //место куда добавить товар
let products = {}; // для добавления продуктов
let buttons = document.querySelectorAll(".toBasketBtn"); //находим кнопки в корзину

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        buttonClickHandler(event);
    })
});

//слушаем клик по кнопке и выполняем добавление товара
function buttonClickHandler(event) {
    const cardProduct = event.target;
    const card = {
        id: cardProduct.getAttribute('data-id'),
        price: cardProduct.getAttribute('data-price'),
        name: cardProduct.getAttribute('data-name'),
    };
    addProduct(card);
    addInProducts(card);
    renderTotalSum(card);
    addRemoveListener();
};

function addRemoveListener() {
    let removeBtns = document.querySelectorAll('.productRemoveBtn');
    for (let i = 0; i < removeBtns.length; i++) {
        removeBtns[i].addEventListener('click', removeProductListener);
    }
};

function removeProductListener(event) {
    removeProduct(event);
    renderTotalSum();
}

// добавляем товар в переменную products
function addInProducts(card) {
    if (products[card.id] == undefined) {
        products[card.id] = {
            price: card.price,
            name: card.name,
            count: 1
        }
    } else {
        products[card.id].count++;
    }
};

// добавляем товар в корзину, если он есть то увеличиваем количество
function addProduct(product) {
    let verifId = document.querySelector(`.productCount[data-id="${product.id}"]`);
    if (!verifId) {
        let productInBuy = `<tr><th scope="row">${product.id}</th><td>${product.name}</td><td>${product.price}</td><td class="productCount" data-id="${product.id}">1</td><td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td></tr>`;
        tbody.insertAdjacentHTML("beforeend", productInBuy);
    } else {
        verifId.textContent++;
        return;
    }
};

// записываем в Итого сумму из другой функции
function renderTotalSum() {
    document.querySelector('.total').textContent = totalPrice();
};

//считаем сумму для поля ИТОГО
function totalPrice(card) {
    let sum = 0;
    for (let key in products) {
        sum += products[key].price * products[key].count;
    }
    return sum;
};
function removeProductFromObject(id) {
    if (products[id].count == 1) {
        delete products[id];
    } else {
        products[id].count--;
    }
};

function removeProduct(event) {
    let id = event.srcElement.dataset.id;
    removeProductFromObject(id);
    removeProductFromBasket(id);
};

function removeProductFromBasket(id) {
    let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
    if (countTd.textContent == 1) {
        countTd.parentNode.remove();
    } else {
        countTd.textContent--;
    }
};


