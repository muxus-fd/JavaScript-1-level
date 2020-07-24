"use strict";
// es5 Post 
function Post(author, text, date) {
	this.author = author;
	this.text = text;
	this.date = date;
}

Post.prototype.edit = function (textNew) {
	this.text = textNew;
};

const post1 = new Post("John", "lorem ipsum", "29.08.2020");
post1.edit("lorem23");
console.log(post1);

//наследование функции Post в AttachedPost
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

// es5 AttachedPost
function AttachedPost(author, text, date) {
	Post.call(this, author, text, date);
	this.highliter = "false";
	this.makeTextHighlighted = function(){
		this.highliter = "true";
	}
}

const post2 = new AttachedPost("Jack", "lorem 45678", "29.08.2020");
console.log(post2);
post2.makeTextHighlighted();

//Es6 Post
class PostEs6 {
	constructor(author, text, date) {
		this.author = author;
		this.text = text;
		this.date = date;
	}
	editEs6(textNew) {
		this.text = textNew;
	}
}
const post3 = new PostEs6("Andrew", "lorem ipsum ionvf fewfwdf", "29.08.2020");
post3.editEs6("lorem23");
console.log(post3);

// es6 AttachedPost
class AttachedPostEs6 extends PostEs6 {
	super(){
	this.highliter = "false";
	}
	makeTextHighlightedEs6(){
		this.highliter = "true";
	}
}

const post4 = new AttachedPostEs6("Maik", "lorem cfghmn", "29.08.2020");
console.log(post4);
post4.makeTextHighlightedEs6();
