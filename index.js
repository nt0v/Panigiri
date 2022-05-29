let souvlakiCost = 1.5;
let loukanikoCost = 1.5;
let colaCost = 2;
let beerCost = 2.5;

let total = 0;

let totalElement = document.querySelector(".total span");

let souvlakiQuantity = 0;
let loukanikoQuantity = 0;
let colaQuantity = 0;
let beerQuantity = 0;

let souvlakiElement = document.getElementById("s-cost");
let loukanikoElement = document.getElementById("l-cost");
let colaElement = document.getElementById("c-cost");
let beerElement = document.getElementById("b-cost");

function resetAll() {
    total = 0;
    totalElement.textContent = total;
    souvlakiQuantity = 0;
    souvlakiElement.textContent = souvlakiQuantity;
    loukanikoQuantity = 0;
    loukanikoElement.textContent = loukanikoQuantity;
    colaQuantity = 0;
    colaElement.textContent = colaQuantity;
    beerQuantity = 0;
    beerElement.textContent = beerQuantity;
}

function addSouvlaki() {
    souvlakiQuantity += 1;
    total += souvlakiCost;
    totalElement.textContent = total;
    souvlakiElement.textContent = souvlakiQuantity;
    console.log("Add Souvlaki");
}

function removeSouvlaki() {
    if (souvlakiQuantity > 0) {
        souvlakiQuantity -= 1;
        total -= souvlakiCost;
        totalElement.textContent = total;
        souvlakiElement.textContent = souvlakiQuantity;
        console.log("Remove Souvlaki");
    }
}

function resetSouvlaki() {
    if (souvlakiQuantity > 0) {
        total -= souvlakiQuantity * souvlakiCost;
        totalElement.textContent = total;
        souvlakiQuantity = 0;
        souvlakiElement.textContent = souvlakiQuantity;
        console.log("Reset Souvlaki");
    }
}

function addLoukaniko() {
    loukanikoQuantity += 1;
    total += loukanikoCost;
    totalElement.textContent = total;
    loukanikoElement.textContent = loukanikoQuantity;
    console.log("Add Loukaniko");
}

function removeLoukaniko() {
    if (loukanikoQuantity > 0) {
        loukanikoQuantity -= 1;
        total -= loukanikoCost;
        totalElement.textContent = total;
        loukanikoElement.textContent = loukanikoQuantity;
        console.log("Remove Loukaniko");
    }
}

function resetLoukaniko() {
    if (loukanikoQuantity > 0) {
        total -= loukanikoQuantity * loukanikoCost;
        totalElement.textContent = total;
        loukanikoQuantity = 0;
        loukanikoElement.textContent = loukanikoQuantity;
        console.log("Reset Loukaniko");
    }
}

function addCola() {
    colaQuantity += 1;
    total += colaCost;
    totalElement.textContent = total;
    colaElement.textContent = colaQuantity;
    console.log("Add Cola");
}

function removeCola() {
    if (colaQuantity > 0) {
        colaQuantity -= 1;
        total -= colaCost;
        totalElement.textContent = total;
        colaElement.textContent = colaQuantity;
        console.log("Remove Cola");
    }
}

function resetCola() {
    if (colaQuantity > 0) {
        total -= colaQuantity * colaCost;
        totalElement.textContent = total;
        colaQuantity = 0;
        colaElement.textContent = colaQuantity;
        console.log("Reset Cola");
    }
}

function addBeer() {
    beerQuantity += 1;
    total += beerCost;
    totalElement.textContent = total;
    beerElement.textContent = beerQuantity;
    console.log("Add Beer");
}

function removeBeer() {
    if (beerQuantity > 0) {
        beerQuantity -= 1;
        total -= beerCost;
        totalElement.textContent = total;
        beerElement.textContent = beerQuantity;
        console.log("Remove Beer");
    }
}

function resetBeer() {
    if (beerQuantity > 0) {
        total -= beerQuantity * beerCost;
        totalElement.textContent = total;
        beerQuantity = 0;
        beerElement.textContent = beerQuantity;
        console.log("Reset Beer");
    }
}