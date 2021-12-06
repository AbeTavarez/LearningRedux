// Reducers
// First argument is the current data opr state of our app.
// Second argument is the action object that contains the action.type and payload.

const claimsHistory = (oldListOFClaims = [], action) {
    if (action.type === "CREATE_CLAIM") {
        // we create a new array with the new piece of data.
        return [...oldListOFClaims, action.payload]
    };
    return oldListOFClaims;
};