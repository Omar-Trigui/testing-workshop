import * as types from "./actionType";
const initState = {
  loading: false,
  pokemon: {},
};
function rootReducer(state = initState, action) {
  switch (action.type) {
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_POKEMON:
      return { ...state, pokemon: action.payload };
    default:
      return state;
  }
}
export default rootReducer;
