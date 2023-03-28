import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getCookies from "../../pages/CookieHandler";
import useCookies from "react-cookie/cjs/useCookies";
function DropDownProfile() {
  const navigate = useNavigate();
  const [personalDetails, setPersonalDetails] = useState([]);

  const [cookies, setCookies] = useCookies(["user"]);

  const handleLogout = async () => {
    console.log("out");

    const accountLoginStatus = {
      uemail: getCookies("uemail"),
      ip: getCookies("ip"),
      browser: getCookies("browser"),
      os: getCookies("os"),
      device: getCookies("device"),
    };
    console.log(accountLoginStatus);

    var error_status = await fetch(
      process.env.REACT_APP_API_CALL_ADDRESS + "/logout",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(accountLoginStatus),
      }
    )
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        return dt.err;
      });

    if (error_status.toString() == "true") {
      // console.log("Account login status not saved")
    } else {
      setCookies("ip", "");
      setCookies("os", "");
      setCookies("device", "");
      setCookies("browser", "");
      setCookies("uemail", "");
      setCookies("loginStatus", "false");
      navigate("/landing");
      // navigate('/homefeed')
      // console.log("Account Login status saved")
    }
  };

  useEffect(() => {
    var email = getCookies("uemail");
    var nameParts = email.split("@");
    var firstLetter = email.charAt(0).toUpperCase();
    var name = nameParts[0].toUpperCase();
    document.getElementById("uname").innerHTML = name;
    document.getElementById("Uname").innerHTML = firstLetter;

    if (typeof email == "undefined") email = "";
    async function getProfile() {
      var profile = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/getMyProfile/" + email
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt.msg);
          if (dt.err == false) setPersonalDetails(dt.msg);

          return dt.msg;
        });
    }

    getProfile();
  }, []);

  return (
    <>
      <div id="setTime" className="flex flex-col dropDownProfile">
        <h3 id="uname"></h3>
        <hr />
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
            <botton className="SignIn" onClick={handleLogout}>
              Logout
            </botton>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropDownProfile;
