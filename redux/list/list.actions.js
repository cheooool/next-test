import { LIST_PUSH, LIST_POP, REQUEST_LIST } from "./list.types";

export const requestList = () => {
  return {
    type: REQUEST_LIST,
  };
};
export const listPush = (item) => {
  return {
    type: LIST_PUSH,
    payload: {
      item,
    },
  };
};

export const listPop = () => {
  return {
    type: LIST_POP,
  };
};
