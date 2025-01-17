import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";


// const store = createStore(rootReducer, applyMiddleware(thunk));
// const enhancer = composeWithDevTools({
//     // Options: https://github.com/jhen0409/react-native-debugger#options
//   })(applyMiddleware(...middlewares));



const middlewares = [thunk];
const enhancer = composeWithDevTools({
    // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));



const store = createStore(rootReducer, enhancer);


export default store;
