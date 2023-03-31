// DOM elements
const valueEl = document.getElementById('value');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const plusFiveBtn = document.querySelector('#plusFive');
const minusFiveBtn = document.querySelector('#minusFive');
const incrementAsyncBtn = document.querySelector('#incrementAsync');
const incrementOddBtn = document.querySelector('#incrementOdd');

// initial state value
const initialState = {
    value: 0
}

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        case 'counter/incrementFive':
            return { value: state.value + 5 }
        case 'counter/decrementFive':
            return { value: state.value - 5 }
        default:
        return state
    }
}

// action object definitions
const addAction = {
  type: 'counter/incremented'
}

const subAction = {
  type: 'counter/decremented'
}
const addFiveAction = {
  type: 'counter/incrementFive'
}
const subFiveAction = {
  type: 'counter/decrementFive'
}
// generating the store
let store = Redux.createStore(counterReducer)

// defining render
const render = () => {
    const state = store.getState()
    valueEl.innerHTML = state.value.toString()
}

// establishing dispatch functions
const addOne = () => {
  store.dispatch(addAction)
}
const subOne = () => {
  store.dispatch(subAction);
}
const addFive = () => {
  store.dispatch(addFiveAction);
};
const subFive = () => {
  store.dispatch(subFiveAction);
};
const incrementIfOdd = () => {
  if(store.getState().value % 2 !== 0) {
    store.dispatch(addAction);
  }
}

// event listeners
plusBtn.addEventListener('click', addOne);
minusBtn.addEventListener('click', subOne);
plusFiveBtn.addEventListener('click', addFive);
minusFiveBtn.addEventListener('click', subFive);
incrementOddBtn.addEventListener('click', incrementIfOdd);
// initial render
render()

// subscribe reruns render on dispatch
store.subscribe(render)
