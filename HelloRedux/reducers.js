// =========== Reducers
// First argument is the current data stored in the state of our app. if any!
// Second argument is the action object that contains the action.type and payload.

export const claimsHistory = (oldListOFClaims = [], action) => {
    if (action.type === "CREATE_CLAIM") {
        // we create a new array with the new piece of data.
        return [...oldListOFClaims, action.payload]
    };
    return oldListOFClaims;
};

export const accounting = (balance = 100, action) => {
    if (action.type === "CREATE_CLAIM") {
        // if it's a claim we deduct the money
        return balance - action.payload.amountToCollect;
    } else if (action.type === "CREATE_POLICY") {
        // if is a new policy we add the money
        return balance + action.payload.amount;
    }
    return balance;
};

export const policies = (listOfPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
        return [...listOfPolicies, action.payload.name]
    } else if (action.type === "DELETE_POLICY") {
        return listOfPolicies.filter(name => name !== action.payload.name)
    }
    return listOfPolicies;
}