import { useState } from "react";
import "../styles/Signin.css";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate = useNavigate();
  const [signinData, setSigninData] = useState({
    full_name: "",
    ph_no: "",
    email: "",
    password: "",
    company_name: "",
    agency: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSigninData({ ...signinData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("signin", JSON.stringify(signinData));
    navigate("/setting");
  };
  return (
    <>
      <form className="signin" onSubmit={handleSubmit}>
        <div className="signin-top">
          <h2 className="signin-head">Create your PopX account</h2>
          <div className="signin-fields">
            <Input
              handleChange={handleChange}
              value={signinData.full_name}
              label={"Full Name"}
              name={"full_name"}
              placeholder={"Enter your full name"}
              required={true}
            />
            <Input
              handleChange={handleChange}
              value={signinData.ph_no}
              label={"Phone number"}
              name={"ph_no"}
              placeholder={"Enter phone number"}
              required={true}
            />
            <Input
              handleChange={handleChange}
              value={signinData.email}
              label={"Email address"}
              name={"email"}
              placeholder={"Enter email"}
              required={true}
            />
            <Input
              handleChange={handleChange}
              value={signinData.password}
              label={"Password "}
              name={"password"}
              placeholder={"Enter password"}
              required={true}
            />
            <Input
              handleChange={handleChange}
              value={signinData.company_name}
              label={"Company name"}
              name={"company_name"}
              placeholder={"Enter company name"}
            />
          </div>
          <div className="signin-radio-box">
            <p className="signin-radio-text">
              Are you an Agency?<span className="signin-radio-required">*</span>
            </p>
            <div className="signin-radio-div">
              <div className="signin-radio-box-main">
                <input
                  type="radio"
                  name="agency"
                  id="yes"
                  value={"yes"}
                  className="signin-radio-input"
                  checked={signinData.agency == "yes"}
                  onChange={handleChange}
                />
                <label htmlFor="yes" className="signin-radio-label">
                  Yes
                </label>
              </div>
              <div className="signin-radio-box-main">
                <input
                  type="radio"
                  name="agency"
                  id="no"
                  className="signin-radio-input"
                  value={"no"}
                  checked={signinData.agency == "no"}
                  onChange={handleChange}
                />
                <label htmlFor="no" className="signin-radio-label">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="signin-botton" type="sybmit">
          Create Account
        </button>
      </form>
    </>
  );
}

export default Signin;
