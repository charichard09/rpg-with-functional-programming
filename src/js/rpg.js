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

// set init point pool at 20
const initPointPool = { ...stateControl(changeStateNum("charPoints")(20)) };


// UI logic
function addPoints() {
  document.getElementById("add-points").onclick = (event) => {
    if (event.target.id === "add-points") {
      return;
    }
    // check to see if enough points
    const charNow = stateControl();
    const ptsNow = charNow.charPoints;
    if (ptsNow > 0) {
      const attribute = event.target.value;
      const newState = { ...stateControl(changeStateNum(attribute)(1)) }
      // reduce charPoints by one
      const newPts = { ...stateControl(changeStateNum("charPoints")(-1)) };
      document.getElementById(attribute).innerText = `${newState[attribute]}`;
      document.getElementById("points-now").innerText = `Points: ${newPts.charPoints}`;
    } else {
      document.getElementById("points-now").innerText = `Points: ${charNow.charPoints} You've spent all your points!` ;
    }
  }
}

window.onload = function() {
  document.getElementById("create-char").onsubmit = (e) => {
    e.preventDefault();

    let charName = document.getElementById("char-name").value;
    const character = { ...stateControl(changeStateString("name")(charName)) };
    // give character 20 points to start
    initPointPool;
    document.getElementById("name").innerText = `Name: ${character.name} Points: ${character.charPoints}`;
  }
  
  addPoints();

  // show character stats
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

