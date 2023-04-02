import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import getCookies from "../../pages/CookieHandler";
import useCookies from "react-cookie/cjs/useCookies";
import "./navigationStylesheet.css";
import SessionTracker from "../sessionManagement/SessionTracker";
import DropDownProfile from "./DropDownProfile";
import LogoutNavigation from "./LogoutNavigation";
export default function Navigation() {
  const navigate = useNavigate();
  const catMenu = useRef(null);

  const [loginStatus, setloginStatus] = useState();
  const [email, setEmailStatus] = useState("false");
  const [openProfile, setOpenProfile] = useState(false);

  const [firstName, setFirstName] = useState("U");

  const [cookies, setCookies] = useCookies(["user"]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setloginStatus(getCookies("loginStatus"));
    setEmailStatus(getCookies("uemail"));

    var email = getCookies("uemail");
    var firstLetter = email.charAt(0).toUpperCase();
    setFirstName(firstLetter);
    // console.log(firstLetter);
  }, []);

  const closeOpenMenus = (e) => {
    if (catMenu.current && openProfile && !catMenu.current.contains(e.target)) {
      setOpenProfile(false);
    }
  };

  // document.addEventListener("mousedown", closeOpenMenus);

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

  const redirectLogin = () => {
    navigate("/login");
  };

  if (loginStatus == "true" && email != "") {
    return (
      <>
        <div>
          <SessionTracker />
          <div className="Navbar">
            <div className="left_Navbar">
              <span
                className="Title"
                onClick={() => {
                  navigate("/homefeed");
                }}
              >
                JAALCHITRA
              </span>
              <div className="links">
                <botton
                  className="Trending"
                  onClick={() => {
                    navigate("/trendingPage");
                  }}
                >
                  Trending
                </botton>
                <botton
                  className="Movies"
                  onClick={() => {
                    navigate("/moviesPage");
                  }}
                >
                  Movies
                </botton>
                <botton
                  className="Movies"
                  onClick={() => {
                    navigate("/chatPage");
                  }}
                >
                  GroupTalk
                </botton>
              </div>
            </div>
            <div className="right_Navbar">
              <div
                className="Profile"
                ref={catMenu}
                onClick={() => setOpenProfile((prev) => !prev)}
              >
                <span className="ProfileCircle">
                  <p className="ProfileName" id="Uname">
                    {firstName}
                  </p>
                </span>
                {/* <b style={{ color: "white" }} id="uname"></b> */}
                {/*yesma user ko name rakhne ho*/}
                <svg
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="css-i6dzq1"
                  color="white"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          {openProfile && <DropDownProfile />}
          <div className="Navbar2">
            <div className="links">
              <botton
                className="Trending"
                onClick={() => {
                  navigate("/trendingPage");
                }}
              >
                Trending
              </botton>
              <botton
                className="Movies"
                onClick={() => {
                  navigate("/moviesPage");
                }}
              >
                Movies
              </botton>
              <botton
                className="Movies"
                onClick={() => {
                  navigate("/chatPage");
                }}
              >
                GroupTalk
              </botton>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <LogoutNavigation />;
  }
}
