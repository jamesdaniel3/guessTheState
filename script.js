const stateEl = document.querySelector(`.state`);
const againBtn = document.querySelector(`.again`);
let currentStateNum = 0;

const randomState = function () {
  // currently this starts as one state and quickly switches to the other
  const state_num = Math.trunc(Math.random() * 50);
  currentStateNum = state_num;
  console.log(state_num);
  stateEl.src = `state${state_num}.png`;
};

randomState();

againBtn.addEventListener(`click`, function () {
  console.log("ENTERED");
  randomState(); // change state
  // reset all text boxes
});
