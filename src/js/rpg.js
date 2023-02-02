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

const changeStateNum = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value,
    })
  }
}

const changeStateString = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || "") + value,
    })
  }
}

// add character attribute functions
// const addActive = changeState("active")(1);
// const addGoofball = changeState("goofball")(1);
// const addCreative = changeState("creative")(1);
// const addGenius = changeState("genius")(1);
// const addSelfAssured = changeState("selfAssured")(1);
// const addMean = changeState("mean")(1);
// const addBeginnerPoints = changeState("BeginnerPoints")(1);


// UI logic
function addPoints() {
  // document.getElementById("add-active").onclick = () => {
  //   // removed stateControl from add variables, call stateControl here b/c reasons. also add to beginner points
  //   const newState = { ...stateControl(addActive), ...stateControl(addBeginnerPoints) };
  //   document.getElementById("active").innerText = `${newState.active}`;
  // }

  document.getElementById("add-points").onclick = (event) => {
    if (event.target.id === "add-points") {
      return;
    }
    const attribute = event.target.value;
    const newState = { ...stateControl(changeStateNum(attribute)(1)) }
    document.getElementById(attribute).innerText = `${newState[attribute]}`;
  }
}

window.onload = function() {
  // e.preventDefault();
  document.getElementById("create-char").onsubmit = (e) => {
    e.preventDefault();
    // change innerText to .value
    let charName = document.getElementById("char-name").value;
    const character = { ...stateControl(changeStateString("name")(charName)) };
    document.getElementById("name").innerText = `Name: ${character.name}`;
  }

  addPoints();

  document.getElementById("finalize").onclick = () => {
    const newState = { ...stateControl() };
    document.getElementById("character-name").innerText = `${newState.name}`;
    document.getElementById("char-active").innerText = `${newState.active}`;
    document.getElementById("char-goofball").innerText = `${newState.goofball}`;
    document.getElementById("char-creative").innerText = `${newState.creative}`;
    document.getElementById("char-genius").innerText = `${newState.genius}`;
    document.getElementById("char-selfAssured").innerText = `${newState.selfAssured}`;
    document.getElementById("char-mean").innerText = `${newState.mean}`;
  }
}

