// Business Logic

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState}
    return newState;
  }
}

const stateControl = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const replaceStateValue = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : value
    })
  }
}



function isString(input) {}

// init character
// const character = stateControl(changeState("name")(1));
// character("BigDeeps")

// add character attribute functions
const addActive = stateControl(changeState("active")(1));
const addGoofball = stateControl(changeState("goofball")(1));
const addCreative = stateControl(changeState("creative")(1));
const addGenius = stateControl(changeState("genius")(1));
const addSelfAssured = stateControl(changeState("selfAssured")(1));
const addMean = stateControl(changeState("mean")(1));

function playGame() {
  // create & store character in stateControl
  character;
  // let counter = 0;
  // recursively listen for user input to add attribute values
  // based on user input update character attributes
  addActive;
  addGoofball;
  addCreative;
  addGenius;
  addSelfAssured;
  addMean;

  return stateControl();
}


// UI logic
window.onload = function() {
  // e.preventDefault();
  document.getElementById("create-char").onsubmit = (e) => {
    e.preventDefault();
    let charName = document.getElementById("char-name").innerText;
    const character = { ...stateControl(), name: charName };
    document.getElementById("name").innerText = `Name: ${character.name}`;
  }

  document.getElementById("add-active").onclick = () => {
    addActive();
    console.log(character);
  }
}


// ALWAYS STAYS AT THE BOTTOM
// STARTS FROM THE BOTTOM AND STAYS THERE
module.exports = playGame;