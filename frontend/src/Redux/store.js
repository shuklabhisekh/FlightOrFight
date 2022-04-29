import { combineReducers } from "redux";
// import { createStore } from "redux";
import { flightReducer } from "./Flight/flightReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;
// const middleware = [thunk];
// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware)
//   // other store enhancers if any
// );


//  In below code if you uncomment the above code and pass enhancer instad of muddleware it will work
const rootReducer = combineReducers({
  flight: flightReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
