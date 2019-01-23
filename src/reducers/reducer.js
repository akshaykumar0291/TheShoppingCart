
const initialState = {
  catergoryData: []
}
export default reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'FETCH_DATA_RESPONSE':
          return {
            ...state,
            catergoryData: action.data
          }
  }
  return state
}
