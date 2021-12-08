// From Redux
import { createStore, combineReducers } from "redux";
// Import Our Reducers
import { claimsHistory, accounting, policies } from "./reducers.js";
// Import Our Action Creator Functions
import { createPolicy, createClaim, deletePolicy } from "./actionsCreators.js";

// Combine Our Reducers
const reducers = combineReducers({
    claimsHistory,
    accounting,
    policies
});

// Store: the store represents our Redux app.
// The Store has a reference to our reducers and contains all the data.
const store = createStore(reducers);

// Create an Action by calling 
const action = createPolicy("abraham", 10);

// Forwards the action to the reducers
store.dispatch(action);
// store.dispatch(createPolicy('mel', 50));
// store.dispatch(createPolicy('lau', 40));

// store.dispatch(createClaim('abraham', 30));

// store.dispatch(deletePolicy('mel'))
console.log(store.getState())