import * as actionTypes from "../actions/types";



const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_ITEM:
      const itemToAdd = action.payload;

      return {
        ...state,
        items: state.items.concat(itemToAdd)
      };

    case actionTypes.REMOVE_ITEM:
      const itemToRemove = action.payload;

      return {
        ...state,
        items: state.items.filter(item => item !== itemToRemove)
      };

    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };



    default:
      return state;
  }
};

export default cartReducer;
