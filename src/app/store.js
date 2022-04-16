import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "features/modal/modal-slice";
import { cardReducer } from "features/card/card-slice";
import counterReducer from "features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer,
    modal: modalReducer,
  },
});
