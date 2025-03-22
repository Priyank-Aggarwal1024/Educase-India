import { useState } from "react";
import "../styles/Login.css";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/setting");
  };
  return (
    <>
      <div className="login">
        <div className="login-content">
          <h2 className="login-content-head">Signin to your PopX account</h2>
          <p className="login-content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-inputs">
            <Input
              handleChange={handleChange}
              value={userData.email}
              label={"Email Address"}
              placeholder={"Enter email address"}
              name={"email"}
            />
            <Input
              handleChange={handleChange}
              value={userData.password}
              label={"Password"}
              placeholder={"Enter Password"}
              name={"password"}
            />
          </div>
          <button className="login-form-button" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
