import {buyWarrior, displayWarriorOnScreen} from "./modules/warriors.js";
import {buyAnimal, displayAnimalOnScreen} from "./modules/animals.js";
import {buyWeapon, displayWeaponOnScreen} from "./modules/weapons.js";

displayWarriorOnScreen();
displayWeaponOnScreen();
displayAnimalOnScreen();

//Selects all elements with the class "grid_btn-..." and returns a NodeList.
const gridWarriorBtn = document.querySelectorAll(".grid__btn-warrior");
//Iterates through each element in the NodeList.
gridWarriorBtn.forEach(button => {
    button.addEventListener("click", buyWarrior);
});

const gridWeaponBtn = document.querySelectorAll(".grid__btn-weapon");
gridWeaponBtn.forEach(button => {
    button.addEventListener("click", buyWeapon);
});

const gridAnimalBtn = document.querySelectorAll(".grid__btn-animal");
gridAnimalBtn.forEach(button => {
    button.addEventListener("click", buyAnimal);
});

const restartGame = () => {
    localStorage.clear();
    location.reload();
}

document.getElementById("restart-game-btn").addEventListener("click", restartGame);
