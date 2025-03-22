import { Link } from "react-router-dom";
import "../styles/Welcome.css";
function Welcome() {
  return (
    <>
      <div className="welcome">
        <div className="welcome-content">
          <h2 className="welcome-content-head">Welcome to PopX</h2>
          <p className="welcome-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="welcome-buttons">
          <Link to={"/signin"} className="welcome-button-createaccount">
            Create Account
          </Link>
          <Link to={"/login"} className="welcome-button-login">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Welcome;
