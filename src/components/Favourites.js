import { useSelector, useDispatch } from "react-redux";
import { clearFavourite, removeFavourite } from "../Redux/favouriteSlice";

function Favourites() {
  const currentUser = useSelector((state) => state.userdata.currentUser);
  const favourites = useSelector(
    (state) => state.favourite.favouritesByUser[currentUser] || []
  );
  const dispatch = useDispatch();

  const handleClearFavourites = () => {
    dispatch(clearFavourite({ userName: currentUser }));
  };

  return (
    <div>
      <h2 className="text-orange-600 text-3xl">Favourite Recipes</h2>
      <br></br>

      {favourites.length > 0 ? (
        <>
          <button onClick={handleClearFavourites}>Clear All</button>
          <br></br>
          <br></br>
          <div className="flex flex-wrap gap-6 justify-center">
            {favourites.length > 0 ? (
              favourites.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-gray-100 p-4 rounded-lg  w-[200px] flex flex-col items-center"
                >
                  <img
                    className="w-full h-[150px] object-cover rounded-md mb-4"
                    src={recipe.image}
                    alt={recipe.name}
                  />
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {recipe.name}
                  </h3>
                  <button
                    onClick={() =>
                      dispatch(
                        removeFavourite({
                          userName: currentUser,
                          recipeId: recipe.id,
                        })
                      )
                    }
                    className="bg-orange-600 text-white py-1 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No favourite recipes yet!</p>
            )}
          </div>
        </>
      ) : (
        <p>No favourites added yet.</p>
      )}
    </div>
  );
}

export default Favourites;
