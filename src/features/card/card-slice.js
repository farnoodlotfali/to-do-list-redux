import { createSlice } from "@reduxjs/toolkit";
import { monthes } from "utils/utility";
import cardsData from "../card/cards.json";

const initialState = {
  cards: cardsData,
  filterd: [],
  loading: false,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    filterCards: (state, action) => {
      const { value } = monthes.find(
        (item) => action.payload.monthName === item.name
      );
      state.filterd = state.cards.filter((item) => {
        let ItemDate = new Date(item.date);

        if (action.payload.year === "All") {
          if (value === 0) {
            return;
          }
          return ItemDate.getMonth() + 1 === value;
        } else if (value === 0) {
          return ItemDate.getFullYear() === Number(action.payload.year);
        }

        return (
          ItemDate.getFullYear() === Number(action.payload.year) &&
          ItemDate.getMonth() + 1 === value
        );
      });
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload.id);
    },
    addCard: (state, action) => {
      let lastId = state.cards[state.cards.length - 1].id;
      state.cards = [...state.cards, { ...action.payload, id: lastId + 1 }];
    },
    editCard: (state, action) => {
      console.log(action.payload);
      let newCards = state.cards.filter(
        (item) => item.id !== action.payload.id
      );
      state.cards = [...newCards, { ...action.payload }];
    },
    changeLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const selectCardById = (state, cardId) =>
  state.card.cards.find((card) => card.id === cardId);

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const setLoadingValue = (amount) => (dispatch, getState) => {
  dispatch(cardActions.changeLoading(amount));
};

export const cardActions = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
