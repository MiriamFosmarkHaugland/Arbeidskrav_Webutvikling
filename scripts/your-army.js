import { getArmy } from "./modules/warriors.js";
import { getWeapon } from "./modules/weapons.js";
import { getAnimal } from "./modules/animals.js";

let warriorOutput = document.getElementById("warrior-output");
let weaponAndAnimalOutput = document.getElementById("weapon-and-animal-output");
let warriorInput = document.getElementById("warrior-input");
let weaponAndAnimalInput = document.getElementById("weapon-and-animal-input");
let noWarriorSearchOutput = document.getElementById("no-warrior-search-output");
let noWeaponAnimalSearchOutput = document.getElementById("no-weapon-animal-search-output");


const showAllWarriors = () => {
    getArmy().forEach(warrior => {
        warriorOutput.innerHTML += `
            <article class="col-3 col-md-2 col-lg-1">
                <img class="grid__image-warrior grid__image" src="${warrior.img}" alt="Warrior image">
            </article>
        `
    });
}

const showAllAnimals = () => {
    getAnimal().forEach(animal => {
        weaponAndAnimalOutput.innerHTML += `
        <article class="col-6 col-md-4 col-lg-2">
            <img class="grid__image-animal grid__image" src="${animal.img}" alt="Animal image">
        </article>
        `
    })
}

const showAllWeapons = () => {
    getWeapon().forEach(weapon => {
        weaponAndAnimalOutput.innerHTML += `
        <article class="col-6 col-md-4 col-lg-2">
            <img class="grid__image-weapon grid__image" src="${weapon.img}" alt="Weapon image">
        </article>
        `
    });
}

const searchWarriors = () => {
    noWarriorSearchOutput.innerHTML = "";
    if (warriorInput.value === "") {
        warriorOutput.innerHTML = "";
        showAllWarriors();
        return
    }
    let filteredArr = getArmy().filter(warrior => warrior.name.toLowerCase() === warriorInput.value.toLowerCase());
    warriorOutput.innerHTML = "";
    if (filteredArr.length === 0) {
        noWarriorSearchOutput.innerHTML = "No result on the your search";
        return
    }
    filteredArr.forEach(warrior => {
        warriorOutput.innerHTML += `
            <article class="col-3 col-md-2 col-lg-1">
                <img class="grid__image-warrior grid__image" src="${warrior.img}" alt="Army image">
            </article>
        `
    })
}

const searchAnimalAndWeapons = () => {
    noWeaponAnimalSearchOutput.innerHTML = "";
    if (weaponAndAnimalInput.value === "") {
        weaponAndAnimalOutput.innerHTML = "";
        showAllAnimals();
        showAllWeapons();
        return
    }
    const mergedArray = [...getAnimal(), ...getWeapon()]
    let filteredArr = mergedArray.filter(entry => entry.name.toLowerCase() === weaponAndAnimalInput.value.toLowerCase());
    weaponAndAnimalOutput.innerHTML = "";
    if (filteredArr.length === 0) {
        noWeaponAnimalSearchOutput.innerHTML = "No result on the your search";
        return
    }
    filteredArr.forEach(entry => {
        weaponAndAnimalOutput.innerHTML += `
            <article class="col-6 col-md-4 col-lg-2">
                <img class="grid__image-weapon grid__image-animal grid__image" src="${entry.img}" alt="Weapon and animal image">
            </article>
        `
    })
}

showAllWarriors();
showAllAnimals();
showAllWeapons();

document.getElementById("btn-search-warrior").addEventListener("click", searchWarriors);
document.getElementById("btn-search-weapon-and-animal").addEventListener("click", searchAnimalAndWeapons);
