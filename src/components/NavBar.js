import "../index.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../Redux/userdataSlice";

function NavBar() {
  const currentUser = useSelector((state) => state.userdata.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt=""
        />
      </div>
      <div className="nav-details">
        <ul className="nav-items">
          <Link to="/recipe" className="link">
            <li className="nav-item">Recipe</li>
          </Link>
          <Link to="/about" className="link">
            <li className="nav-item">About Us</li>
          </Link>
          <Link to="/favourite" className="link">
            <li className="nav-item">Favourites</li>
          </Link>

          {currentUser ? (
            <>
              <li className="nav-item">UserName: {currentUser}</li>
              <Link to="/" className="link" onClick={handleLogout}>
                <li className="nav-item">Logout</li>
              </Link>
            </>
          ) : (
            <Link to="/" className="link">
              <li className="nav-item">Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
