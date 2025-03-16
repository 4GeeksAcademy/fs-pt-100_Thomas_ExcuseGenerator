import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let subjects = ["My friend", "A stranger", "My boss", "A rabid bat", "Pedro Sanchez", "An ex-convict", "My neighbor's cat", "An alien"];
let actions = [{verb: "slapped", transitive: true}, {verb: "died", transitive: false}, {verb: "bit", transitive: true}, {verb: "fired", transitive: true}, {verb: "fell into a coma", transitive: false}, {verb: "spontaneously combusted", transitive: false}, {verb: "sneezed on", transitive: true}, {verb: "threw up on", transitive: true}, {verb: "disappeared", transitive: false}, {verb: "ran over", transitive: true}];
let objects = ["me", "your mom", "my little brother", "my grandma", "my guncle", "Leticia Sabater", "my ex", "a robot"]

const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

const getSubject = () => subjects[getRandomIndex(subjects)];

const getAction = () => actions[getRandomIndex(actions)];

const getObject = () => objects[getRandomIndex(objects)];

const getPredicate = (actionObj) => {
  if (actionObj.transitive) {
    return `${actionObj.verb} ${getObject()}`;
  } else {
    return actionObj.verb;
  }
};

const generateExcuse = () => {
  const subject = getSubject();
  const actionObj = getAction();
  const predicate = getPredicate(actionObj);
  document.getElementById("excuse").innerHTML = `${subject} ${predicate}.`;
};

window.onload = generateExcuse;
