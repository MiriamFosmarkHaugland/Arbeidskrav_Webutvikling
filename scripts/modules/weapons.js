import { getCoins, getMetal, getWood, setCoins, setMetal, setWood } from "../utilities/currencies.js";

let weaponOutput = document.getElementById("weapon-output");

const displayWeaponArr = [
    {
        name: "Catapult",
        type: "catapult-weapon",
        price: 50,
        metalCost: 20,
        woodCost: 20,
        img: "images/catapult-weapon.png"
    },
    {
        name: "Cannon",
        type: "cannon-weapon",
        price: 100,
        metalCost: 50,
        woodCost: 50,
        img: "images/cannon-weapon.png"
    }
]

export const displayWeaponOnScreen = () => {
    displayWeaponArr.forEach(weapon => {
        weaponOutput.innerHTML += 
        `
        <article class="col-12 col-md-6 col-xl-6">
            <p class="grid__text">${weapon.name}</p>
            <img class="grid__image" src="${weapon.img}" alt="${weapon.name} image">
            <button id="${weapon.type}" class="grid__btn grid__btn-hover grid__btn-weapon">Buy ${weapon.name} ${weapon.price} <img class="grid__coin" src="images/gold-coin.png" alt="Gold coin image"> ${weapon.metalCost} <img class="grid__coin" src="images/metal.png" alt="Metal image"> ${weapon.woodCost} <img class="grid__coin" src="images/wood.png" alt="Wood image"></button>
        </article>
        `;
    })
}

let weaponArr = [];
// If there's weapon data stored in localStorage, it retrieves that data and converts it from a JSON string back into a JavaScript array.
if (localStorage.getItem("Weapon")) {
    weaponArr = JSON.parse(localStorage.getItem("Weapon"))
}

export const buyWeapon = (event) => {
    // The event will be called if one of the icons are clicked, if that happens we get the parent element instead which should be the button.
    let element = event.target // event.target is the element that was clicked
    if (element.nodeName != "BUTTON") { // if the element is not a button
        element = event.target.parentElement // get the parent element which would be the button
    }
    
    let weapon = displayWeaponArr.find(weapon => weapon.type === element.id);
    
    if (!weapon){
        console.error("Weapon not found");
        return;
    }
    if (getCoins() >= weapon.price && getMetal() >= weapon.metalCost && getWood() >= weapon.woodCost) {
        weaponArr.push(weapon)
        setCoins(getCoins() - weapon.price);
        setMetal(getMetal() - weapon.metalCost);
        setWood(getWood() - weapon.woodCost);
        //Updates localStorage and turns the array to a string array, because localStorage only accepts primitive datatypes.
        localStorage.setItem("Weapon", JSON.stringify(weaponArr));
    } else {
        alert("Not enough coins... Go farm more resources!")
    }
}

export function getWeapon() {
    return weaponArr
}