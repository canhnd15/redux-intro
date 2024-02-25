import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createAt: "",
  updateAt: "",
};

const customerSlide = createSlice({
  name: "customer",
  initialState,
  reducers: {
    create(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.createAt = new Date().toISOString();
    },

    update(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalID = action.payload.nationalID;
      state.updateAt = new Date().toISOString();
    },
  },
});

export const { create, update } = customerSlide.actions;

export default customerSlide.reducer;

/*
const CREATE_CUSTOMER = "customer/create";
const UPDATE_CUSTOMER = "customer/update";

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case CREATE_CUSTOMER:
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };
    case UPDATE_CUSTOMER:
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

/////////////////// CUSTOMER ACTION  ///////////////////
export function createCustomer(fullName, nationalID) {
  return {
    type: CREATE_CUSTOMER,
    payload: {
      fullName: fullName,
      nationalID: nationalID,
      createAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return {
    type: UPDATE_CUSTOMER,
    payload: fullName,
  };
}

*/
