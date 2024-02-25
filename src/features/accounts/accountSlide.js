import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlide = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },

    withdraw(state, action) {
      state.balance -= action.payload;
    },

    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return; // you can't request one more loan
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },

    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },

    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlide.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const convertedAmount = data.rates.USD;

    dispatch({ type: "account/deposit", payload: convertedAmount });
  };
}

export default accountSlide.reducer;
/*
const DEPOSIT = "account/deposit";
const WITHDRAW = "account/withdraw";
const REQUEST_LOAN = "account/requestLoan";
const PAY_LOAN = "account/payLoan";

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
    case WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
        balance: state.balance + action.payload.amount,
      };
    case PAY_LOAN:
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

/////////////////// ACCOUNT ACTION  ///////////////////
export function deposit(amount, currency) {
  if (currency === "USD") return { type: DEPOSIT, payload: amount };

  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const convertedAmount = data.rates.USD;

    dispatch({ type: DEPOSIT, payload: convertedAmount });
  };
}

export function withdraw(amount) {
  return { type: WITHDRAW, payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: REQUEST_LOAN,
    payload: { amount: amount, loanPurpose: purpose },
  };
}

export function payLoan() {
  return { type: PAY_LOAN };
}
*/
