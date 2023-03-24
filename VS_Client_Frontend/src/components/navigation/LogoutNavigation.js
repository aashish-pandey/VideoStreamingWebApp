import React from "react";
import { useNavigate } from "react-router-dom";

import "./navigationStylesheet.css";
function LogoutNavigation() {
  const navigate = useNavigate();

  const redirectLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="Navbar" id="falseNav">
        <span className="Title">JAALCHITRA</span>
        <button className="SignIn" onClick={redirectLogin}>
          Sign In
        </button>
      </div>
    </>
  );
}

export default LogoutNavigation;
