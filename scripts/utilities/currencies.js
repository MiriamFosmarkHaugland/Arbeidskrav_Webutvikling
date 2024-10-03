const coinCount = document.getElementById("resources__coin-count");
const metalCount = document.getElementById("resources__metal-count");
const woodCount = document.getElementById("resources__wood-count");

let coin = 0;
let metal = 0;
let wood = 0;

if (localStorage.getItem("Coin") === null) {
    localStorage.setItem("Coin", 0)
}
coin = Number(localStorage.getItem("Coin"));

if (localStorage.getItem("Metal") === null) {
    localStorage.setItem("Metal", 0)
}
metal = Number(localStorage.getItem("Metal"));

if (localStorage.getItem("Wood") === null) {
    localStorage.setItem("Wood", 0)
}
wood = Number(localStorage.getItem("Wood"));

coinCount.innerHTML = coin;
metalCount.innerHTML = metal;
woodCount.innerHTML = wood;

export function getCoins() {
    return coin;
}

export function getMetal() {
    return metal;
}

export function getWood() {
    return wood;
}

export function setCoins(newAmount) {
    coin = newAmount
    localStorage.setItem("Coin", coin)
    coinCount.innerHTML = coin;
}

export function setMetal(newAmount) {
    metal = newAmount
    localStorage.setItem("Metal", metal)
    metalCount.innerHTML = metal;
}

export function setWood(newAmount) {
    wood = newAmount
    localStorage.setItem("Wood", wood)
    woodCount.innerHTML = wood;
}