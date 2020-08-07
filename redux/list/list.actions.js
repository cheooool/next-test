import { LIST_PUSH, LIST_POP } from "./list.types";

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
