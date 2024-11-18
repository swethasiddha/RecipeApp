import "../index.css";
import { useNavigate } from "react-router-dom";
import images from "../images/login-page.jpg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/userdataSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempted, setLoginAttempted] = useState(false);
  // const [userError, setUserError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userdata.currentUser);

  function handleSignIn() {
    // setUserError("");
    // setPasswordError("");

    if (userName.trim() === "") {
      // setUserError("Username cannot be empty");
      toast.error("Username cannot be empty");
      return;
    }
    if (password.trim() === "") {
      // setPasswordError("Password cannot be empty");
      toast.error("Password cannot be empty");
      return;
    }

    dispatch(loginUser({ userName, password }));
    setLoginAttempted(true);
  }
  useEffect(() => {
    if (currentUser) {
      navigate("/recipe");
    } else if (loginAttempted) {
      toast.error("Invalid username or password");
    }
  }, [currentUser, loginAttempted, navigate]);

  return (
    <div className="login-page">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="form-container">
        <h1>Spice Route</h1>
        <h3>Your Personalized Recipe Assistant</h3>

        <label>User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            // setUserError("");
          }}
        />
        {/* <p className={`error ${userError ? "visible" : ""}`}>{userError}</p> */}

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            // setPasswordError("");
          }}
        />
        {/* <p className={`error ${passwordError ? "visible" : ""}`}>
          {passwordError}
        </p> */}

        <button onClick={handleSignIn}>Sign In</button>
      </div>

      <div className="login-img">
        <img src={images} alt="Loading..." />
      </div>
    </div>
  );
}

export default Login;
