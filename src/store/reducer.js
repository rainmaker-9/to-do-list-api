import { ACTIONS } from "./actionNames";

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_LIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ACTIONS.ADD_ALL_TO_LIST:
      return {
        ...state,
        items: [...state.items, ...action.payload],
      };
    case ACTIONS.UPDATE_LIST:
      return {
        ...state,
        items: updateObjectInArray(state.items, action),
      };
    case ACTIONS.CLEAR_LIST:
      return {
        items: [],
      };
    case ACTIONS.REMOVE_FROM_LIST:
      return {
        ...state,
        items: removeItemFromList(state.items, action),
      };
    default:
      return state;
  }
};

function removeItemFromList(array, action) {
  return array.filter((item, index) => index !== action.index);
}

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      return item;
    }

    return {
      ...item,
      ...action.item,
    };
  });
}
