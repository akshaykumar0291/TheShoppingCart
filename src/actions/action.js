import * as types from "./type";

export function fetchAllCategoryData() {
    return async function(dispatch) {
        let url = "http://10.0.2.2:3000/allCategory";
        let response = await fetch(url);
        console.log("response = ", response);
        let data = await response.json();
        console.log("data = ", data);

        dispatch({
          type: types.FETCH_DATA_RESPONSE,
          data
        });
      };
}