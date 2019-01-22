
const initialState = {
  counter: 0,
  catergoryData: []
}
export default reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'INCREASE_COUNTER':
          return { counter: state.counter + 1 }
      case 'DECREASE_COUNTER':
          return { counter: state.counter - 1 }
      case 'FETCH_DATA_RESPONSE':
          return {
            ...state,
            catergoryData: action.data
          }
  }
  return state
}
