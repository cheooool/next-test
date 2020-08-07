import { LIST_PUSH, LIST_POP, REQUEST_LIST } from "./list.types";

const initialState = {
  data: [],
};
const listReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_PUSH:
      return {
        ...state,
        data: [...state.data, payload.item],
      };
    case LIST_POP:
      return {
        ...state,
        data: state.data.slice(1),
      };
    default:
      return state;
  }
};

export default listReducer;
