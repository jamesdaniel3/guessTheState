const stateEl = document.querySelector(`.state`);

const randomState = function () {
  // currently this starts as one state and quickly switches to the other
  const state_num = Math.trunc(Math.random() * 50);
  console.log(state_num);
  stateEl.src = `state${state_num}.png`;
};

randomState();
