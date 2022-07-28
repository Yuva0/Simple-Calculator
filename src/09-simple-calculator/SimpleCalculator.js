import { useReducer } from "react"
// import { act } from "react-dom/test-utils";

// const initialState = {}
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CLEAR: 'clear'
}

function reducer (state, action) {
  switch (action.type){
    case ACTIONS.INCREMENT:
      return { soln: state.btnA + state.btnB }
    case ACTIONS.DECREMENT:
        return { soln: state.btnA - state.btnB }
    case ACTIONS.CLEAR:
      return { soln:0 }
    default:
      return state
  }
}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [calcState, dispatchCalculation] = useReducer(reducer, {
    btnA: 0,
    btnB: 0,
    soln: 0
  })

  const addHandler = () => {
    dispatchCalculation({type: ACTIONS.INCREMENT})
  }

  const subtractHander = () => {
    dispatchCalculation({type: ACTIONS.DECREMENT})
  }

  const clearHandler = () => {
    dispatchCalculation({type: ACTIONS.CLEAR})
  }

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => (calcState.btnA = number)}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => (calcState.btnB = number)}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={addHandler}>+</button>
        <button onClick={subtractHander}>-</button>
        <button onClick={clearHandler}>c</button>
      </div>
      <div><h2>Result:{calcState.soln}</h2></div>
    </div>
  )
}
