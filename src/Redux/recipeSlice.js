import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      return data.recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch recipes");
    }
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipeData: [],
    originalData: [],
    searchText: "",
    loading: false,
    error: null,
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearch: (state) => {
      state.searchText = "";
      state.recipeData = state.originalData;
    },
    filterRecipes: (state) => {
      state.recipeData = state.originalData.filter((recipe) =>
        recipe.name.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipeData = action.payload;
        state.originalData = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearchText, clearSearch, filterRecipes } =
  recipeSlice.actions;
export default recipeSlice.reducer;
