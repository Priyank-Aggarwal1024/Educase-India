import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Setting from "./components/Setting";

function App() {
  return (
    <>
      <div className="app">
        <div className="main-screen">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
