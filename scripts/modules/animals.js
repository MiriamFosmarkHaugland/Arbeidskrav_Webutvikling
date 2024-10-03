import { getCoins, setCoins } from "../utilities/currencies.js";

let animalOutput = document.getElementById("animal-output");

const displayAnimalArr = [
    {
        name: "Horse",
        type: "horse-animal",
        price: 75,
        img: "images/horse-animal.png"
    },
    {
        name: "Elephant",
        type: "elephant-animal",
        price: 100,
        img: "images/elephant-animal.png"
    }
]

export const displayAnimalOnScreen = () => {
    displayAnimalArr.forEach(animal => {
        animalOutput.innerHTML += 
        `
        <article class="col-12 col-md-6 col-xl-6">
            <p class="grid__text">${animal.name}</p>
            <img class="grid__image" src="${animal.img}" alt="${animal.name} image">
            <button id="${animal.type}" class="grid__btn grid__btn-hover grid__btn-animal">Buy ${animal.name} ${animal.price} <img class="grid__coin" src="images/gold-coin.png" alt="Gold coin image"></button>
        </article>
        `;
    })
}

let animalArr = [];
// If there's animal data stored in localStorage, it retrieves that data and converts it from a JSON string back into a JavaScript array.
if (localStorage.getItem("Animal")) {
    animalArr = JSON.parse(localStorage.getItem("Animal"))
}

export const buyAnimal = (event) => {
    // The event will be called if one of the icons are clicked, if that happens we get the parent element instead which should be the button.
    let element = event.target // event.target is the element that was clicked
    if (element.nodeName != "BUTTON") { // if the element is not a button
        element = event.target.parentElement; // get the parent element which would be the button
    }

    let animal = displayAnimalArr.find(animal => animal.type === element.id)

    if (!animal) {
        console.error("Animal not found");
        return;
    }
    if (getCoins() >= animal.price) {
        animalArr.push(animal)
        setCoins(getCoins() - animal.price)
        //Updates localStorage and turns the JavaScript array to a JSON string array, because localStorage only accepts primitive datatypes.
        localStorage.setItem("Animal", JSON.stringify(animalArr));  
    } else {
        alert("Not enough coins... Go farm more resources!")
    }
}

export function getAnimal() {
    return animalArr
}