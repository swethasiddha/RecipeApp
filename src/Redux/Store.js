import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import userdataReducer from "./userdataSlice";
import reviewReducer from "./reviewSlice";
import recipeReducer from "./recipeSlice";

const Store = configureStore({
  reducer: {
    favourite: favouriteReducer,
    userdata: userdataReducer,
    reviews: reviewReducer,
    recipes: recipeReducer,
  },
});

export default Store;
