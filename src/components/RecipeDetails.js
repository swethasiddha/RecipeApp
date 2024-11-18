import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import "../index.css";

function RecipeDetails() {
  const { resID } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  async function fetchData() {
    const response = await fetch(`https://dummyjson.com/recipes/${resID}`);
    const json = await response.json();
    setRecipeDetails(json);
  }

  useEffect(() => {
    fetchData();
  });

  if (!recipeDetails) return <p>Loading...</p>;

  return (
    <>
      <div className="details-container">
        <div className="item-list">
          <h3>Ingredient list</h3>
          <ul>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="item-steps">
          <h3>Step-by-step cooking instructions</h3>
          <ul>
            {recipeDetails.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
      <Rating />
    </>
  );
}

export default RecipeDetails;
