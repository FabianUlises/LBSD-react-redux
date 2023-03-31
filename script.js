// DOM elements
const valueEl = document.getElementById('value');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const plusFive = document.querySelector('#plusFive');
const minusFive = document.querySelector('#minusFive');
const incrementAsync = document.querySelector('#incrementAsync');
const incrementOdd = document.querySelector('#incrementOdd');

minusFive.addEventListener('click', () => {
  console.log('button clicked');
});
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
  store.dispatch(subAction)
}

// event listeners
plusBtn.addEventListener('click', addOne)
minusBtn.addEventListener('click', subOne)

// initial render
render()

// subscribe reruns render on dispatch
store.subscribe(render)