import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
  },
});

export const { addReview } = reviewSlice.actions;
export const selectReviews = (state) => state.reviews.reviews;
export default reviewSlice.reducer;
