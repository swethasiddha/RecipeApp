import "../index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../Redux/favouriteSlice";

function RecipeCard({ recipe }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.userdata.currentUser);

  const handleAddFavourite = () => {
    if (currentUser) {
      dispatch(addFavourite({ userName: currentUser, recipe }));
    } else {
      alert("Please log in to add favorites.");
    }
  };

  return (
    <div className="card-container">
      <div className="card">
        <Link to={`/recipeDetails/${recipe.id}`} className="link">
          <img className="recipe-img" src={recipe.image} alt={recipe.name} />
          <h3 className="recipe-name">{recipe.name}</h3>
        </Link>
        <button className="fav-button" onClick={handleAddFavourite}>
          Add to Favourite
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
