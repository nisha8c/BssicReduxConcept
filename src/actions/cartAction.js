import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

const addItem = () => {
  return {
    type: ADD_ITEM,
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export { addItem, deleteItem };

/*
In the above code we created two action creators (pure JS functions that returns action object) called addItem() and deleteItem(). Both the action creators return action objects with a specific type.

Note: Each action object must have a unique type value. Along with it, any additional data passed with the action object is optional and will depend on the logic used for updating the state.
*/