import "./App.css";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Recipe from "./components/Recipe";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Favourites from "./components/Favourites";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Login />
              </>
            }
          ></Route>
          <Route
            path="/recipe"
            element={
              <>
                <NavBar /> <Recipe /> <Footer />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                {" "}
                <NavBar />
                <AboutUs /> <Footer />
              </>
            }
          ></Route>
          <Route
            path="/favourite"
            element={
              <>
                {" "}
                <NavBar />
                <Favourites /> <Footer />
              </>
            }
          ></Route>
          <Route
            path="/recipeDetails/:resID"
            element={
              <>
                {" "}
                <NavBar />
                <RecipeDetails /> <Footer />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
