const initialState = {
  catergoryData: [],
  cartProductData: []
};
export default (reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_RESPONSE":
      return {
        ...state,
        catergoryData: action.data
      };
    case "ADD_TO_CARTLIST":
      return {
        ...state,
        cartProductData: state.cartProductData.concat(action.productData)
      };
  }
  return state;
});