import { getCoins, setCoins } from "../utilities/currencies.js";

let warriorOutput = document.getElementById("warrior-output");

const displayWarriorArr = [
    {
        name: "Snake",
        type: "snake-warrior",
        price: 200,
        img: "images/snake-warrior.jpg"
    },
    {
        name: "Giant",
        type: "giant-warrior",
        price: 500,
        img: "images/giant-warrior.jpg"
    },
    {
        name: "Big Axe",
        type: "big-axe-warrior",
        price: 150,
        img: "images/big-axe-warrior.jpg"
    },
    {
        name: "Thief",
        type: "thief-warrior",
        price: 50,
        img: "images/thief-warrior.jpg"
    },
    {
        name: "Tank",
        type: "tank-warrior",
        price: 250,
        img: "images/tank-warrior.jpg"
    },
    {
        name: "Berserker",
        type: "berserker-warrior",
        price: 300,
        img: "images/berserker-warrior.jpg"
    }
]

let armyArr = [];
// If there's warrior data stored in localStorage, it retrieves that data and converts it from a JSON string back into a JavaScript array.
if (localStorage.getItem("Army")) {
    armyArr = JSON.parse(localStorage.getItem("Army"))
}

export const displayWarriorOnScreen = () => {
    displayWarriorArr.forEach(warrior => {
        warriorOutput.innerHTML += 
        `
        <article class="col-12 col-md-6 col-lg-4">
            <p class="grid__text">${warrior.name}</p>
            <img id="grid__snake-warrior-image" class="grid__image" src="${warrior.img}" alt="${warrior.name} warrior image">
            <button id="${warrior.type}" class="grid__btn grid__btn-hover grid__btn-warrior">Buy ${warrior.name} ${warrior.price} <img class="grid__coin" src="images/gold-coin.png" alt="Gold coin image"></button>
        </article>
        `;
    })
}

export const buyWarrior = (event) => {
    // The event will be called if one of the icons are clicked, if that happens we get the parent element instead which should be the button.
    let element = event.target // event.target is the element that was clicked
    if (element.nodeName != "BUTTON") { // if the element is not a button
        element = event.target.parentElement; // get the parent element which would be the button
    }

    let warrior = displayWarriorArr.find(warrior => warrior.type === element.id)

    if (!warrior) {
        console.error("Warrior not found");
        return;
    }
    if (getCoins() >= warrior.price) {
        armyArr.push(warrior)
        setCoins(getCoins() - warrior.price)
        //Updates localStorage and turns the array to a string array, because localStorage only accepts primitive datatypes.
        localStorage.setItem("Army", JSON.stringify(armyArr));
    } else {
        alert("Not enough coins... Go farm more resources!")
    }
}

export function getArmy() {
    return armyArr
}