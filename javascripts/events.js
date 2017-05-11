"use strict";

var cardStyle = require("./cards");

function activateEvents(){
	$(".cards-wrapper").click(cardStyle.highlightCard);

}
module.exports = activateEvents;