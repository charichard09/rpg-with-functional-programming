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