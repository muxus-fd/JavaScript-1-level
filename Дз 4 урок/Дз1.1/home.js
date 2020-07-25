"use strict";
// es5
function Product(name, price){
	this.name = name;
	this.price = price;
	this.make25PercentDiscount = function(discount) {
		this.price = this.price - (this.price / 100 * discount);
	}
}

const products = [
	new Product("товар1", 456),
	new Product("товар2", 125),
	new Product("товар3", 567),
]
for (let product of products){
	product.make25PercentDiscount(25);
}
console.log(products);


//Es6
class ProductEs6 {
	constructor (name, price){
		this.name = name;
	    this.price = price;
	}
	make25PercentDiscountEs6(discount) {
		this.price = this.price - (this.price / 100 * discount);
	}
}

const productsEs6 = [
	new ProductEs6("товар1", 123),
	new ProductEs6("товар2", 456),
	new ProductEs6("товар3", 678),
];


for (let productEs6 of productsEs6){
	productEs6.make25PercentDiscountEs6(25);
}
console.log(productsEs6);
