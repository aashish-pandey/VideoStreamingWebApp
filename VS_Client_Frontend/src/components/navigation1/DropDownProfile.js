import React from "react";
import { useNavigate } from "react-router-dom";
function DropDownProfile() {
  const navigate = useNavigate();
  return (
    <div id="setTime" className="flex flex-col dropDownProfile">
      {/* <h3>Name</h3> */}
      <ul className="flex flex-col gap-4">
        <li>
          <botton
            className="Web_Series"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </botton>
        </li>
        <li>
          <botton className="Setting">Setting</botton>
        </li>
        <li>
          <botton className="SignIn">Logout</botton>
        </li>
      </ul>
    </div>
  );
}

export default DropDownProfile;
