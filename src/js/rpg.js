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


// init character
const character = stateControl(changeState("name")(1));

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

module.exports = playGame;

// UI logic
window.onload = function() {
  document.getElementById("create-char").onclick = () => {
    const newState = character;
    document.getElementById("name").innerText = `Name: ${newState.name}`;
    console.log("we're reaching the right place lol");
  }
}