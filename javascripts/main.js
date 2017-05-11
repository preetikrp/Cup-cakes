"use strict";
console.log("hello cupcakes are great");

let Handlebars = require('hbsfy/runtime');
let cakeInventory = require('./bakery.js'),
	cakeTemplate = require('../templates/cake-grid.hbs'),
	eventStuff = require("./events.js"),
	welcomeTemplate = require("../templates/welcome.hbs"),
	welcomeData = require('../templates/welcome-data.js');
$('#welcome').append(welcomeTemplate(welcomeData));

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);
function populatePage(stuff){

//make a div to hold rendered html
	let obh = {ccakes : stuff};
	let newDiv = document.createElement("div");
	console.log("poopPage", newDiv, stuff);
	newDiv.innerHTML = cakeTemplate(obh);
	$("#cake-cards").append(newDiv);
	eventStuff();
}



	cakeInventory.loadInventory()
	.then(
		(inventoryFromLoadInventoryResolve)=>{
			console.log("cake promise", inventoryFromLoadInventoryResolve);
			populatePage(inventoryFromLoadInventoryResolve);
		},
		(reason) =>{
			console.log("something went wrong, sorry to break your heart ");

		});