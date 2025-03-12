import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let subjects = ["My friend", "A stranger", "My boss", "A rabid bat"];
let actions = ["slapped me", "died", "bit me", "fired me", "hurt my feelings"];

const getRandom = (arr) => {
  let randNum = Math.random();
  return Math.floor(randNum * arr.length)
}

const generateExcuse = () => {
  let randomSubject = subjects[getRandom(subjects)]
  let randomAction = actions[getRandom(actions)]

  let randomExcuse = `${randomSubject} ${randomAction}.`;
  document.getElementById("excuse").innerHTML = randomExcuse;
};

window.onload = generateExcuse;
