
// Action Creator;
// Actions Creators create action objects;
// Actions Object will always contain a type and payload property;

const createPolicy = (name, amount) => {
  return { // action object
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  }
};
const deletePolicy = (name, amount) => {
    return { // action object
        type: "DELETE_POLICY",
        payload: {
            name: name,
            amount: amount
        }
    }
}

const createClaim = (name, amountToCollect) => {
    return { //action object
        type: "CREATE_CLAIM",
        payload: {
            name: name,
            amountToCollect, amountToCollect
        }
    }
}

