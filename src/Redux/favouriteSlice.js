import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesByUser: {},
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      const { userName, recipe } = action.payload;
      if (!state.favouritesByUser[userName]) {
        state.favouritesByUser[userName] = [];
      }
      // Add only if the recipe is not already in the user's favorites
      if (
        !state.favouritesByUser[userName].some((fav) => fav.id === recipe.id)
      ) {
        state.favouritesByUser[userName].push(recipe);
      }
    },
    removeFavourite: (state, action) => {
      const { userName, recipeId } = action.payload;
      if (state.favouritesByUser[userName]) {
        state.favouritesByUser[userName] = state.favouritesByUser[
          userName
        ].filter((recipe) => recipe.id !== recipeId);
      }
    },
    clearFavourite: (state, action) => {
      const { userName } = action.payload;
      if (state.favouritesByUser[userName]) {
        state.favouritesByUser[userName] = [];
      }
    },
  },
});

export const { addFavourite, removeFavourite, clearFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
