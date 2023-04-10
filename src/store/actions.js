import { ACTIONS } from "./actionNames";

export const actionCreators = {
  addToList: (data) => ({ type: ACTIONS.ADD_TO_LIST, payload: data }),
  addAllToList: (data) => ({ type: ACTIONS.ADD_ALL_TO_LIST, payload: data }),
  updateList: (data) => ({ type: ACTIONS.UPDATE_LIST, payload: data }),
  removeFromList: (data) => ({ type: ACTIONS.REMOVE_FROM_LIST, payload: data }),
  clearList: () => ({ type: ACTIONS.CLEAR_LIST }),
};
