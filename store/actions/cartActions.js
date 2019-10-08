import axios from "axios";
import * as actionTypes from "./types";





export const addItemToCart = (newItem) => ({
    type: actionTypes.ADD_ITEM,
    payload: newItem

});


export const removeItemFromCart = (item) => ({
    type: actionTypes.REMOVE_ITEM,
    payload: item

});


export const checkoutCart = () => ({
    type: actionTypes.CHECKOUT,

});