import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchRecipes,
  setSearchText,
  clearSearch,
  filterRecipes,
} from "../Redux/recipeSlice";
import RecipeCard from "./RecipeCard";

function Recipe() {
  const dispatch = useDispatch();
  const { recipeData, searchText, loading, error } = useSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(filterRecipes());
  };

  const handleClear = () => {
    dispatch(clearSearch());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Recipe name"
        className="textField"
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />
      <button className="search" onClick={handleSearch}>
        🔎
      </button>
      <button className="search" onClick={handleClear}>
        ❌
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="recipe-card">
        {recipeData.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Recipe;
