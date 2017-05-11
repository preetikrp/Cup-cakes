"use strict";
console.log("bakery.js loaded");

var inventory = [];
var bakery = {};

bakery.getInventory = () => {
    return inventory;
};

bakery.loadInventory = () => {
    return new Promise ( function  (resolve, reject) {
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "https://cupcakes-57f52.firebaseio.com/.json");
        inventoryLoader.send();

        inventoryLoader.addEventListener("load", function () {
            var data = JSON.parse(this.responseText);
            inventory = data.ccakes;
            data = data.ccakes;
            resolve(data);
        });
    });
};

module.exports = bakery;