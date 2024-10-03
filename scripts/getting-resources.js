import { getCoins, getMetal, getWood, setCoins, setMetal, setWood } from "./utilities/currencies.js";

const farmInMines = () => {
    let randomPercentage = Math.random();
    let randomAmount = Math.floor(Math.random() * 100) + 1;
    if (randomPercentage < 0.75) {
        setMetal(getMetal() + randomAmount)
    } else {
        setCoins(getCoins() + randomAmount)
    }
}

const farmInWoods = () => {
    let randomAmount = Math.floor(Math.random() * 100) + 1;
    setWood(getWood() + randomAmount)
}

const minesImage = document.querySelector(".grid__image-mines");
minesImage.addEventListener("click", farmInMines);

const woodsImage = document.querySelector(".grid__image-woods");
woodsImage.addEventListener("click", farmInWoods);

