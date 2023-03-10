import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import getCookies from "../../pages/CookieHandler";
import useCookies from "react-cookie/cjs/useCookies";
import "./navigationStylesheet.css";
import SessionTracker from "../sessionManagement/SessionTracker";
import DropDownProfile from "./DropDownProfile";

export default function Navigation() {
  const navigate = useNavigate();
  const catMenu = useRef(null);

  const [loginStatus, setloginStatus] = useState();
  const [email, setEmailStatus] = useState("false");
  const [openProfile, setOpenProfile] = useState(false);
  const [cookies, setCookies] = useCookies(["user"]);

  useEffect(() => {
    setloginStatus(getCookies("loginStatus"));
    setEmailStatus(getCookies("uemail"));
  }, []);

  const closeOpenMenus = (e) => {
    if (catMenu.current && openProfile && !catMenu.current.contains(e.target)) {
      setOpenProfile(false);
    }
  };

  document.addEventListener("mousedown", closeOpenMenus);
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
      "http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/logout",
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
              <botton className="Web_Series">Web Series</botton>
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
            <input
              className="Search"
              type="text"
              placeholder="Search.."
            ></input>
            <div className="Profile">
              {/* <button onClick={handleLogout} className="SignIn">
                Logout
              </button> */}
              <img
                src="https://s25.postimg.cc/nvqksp967/Pic-container1.jpg"
                alt="Profile"
                ref={catMenu}
                onClick={() => setOpenProfile((prev) => !prev)}
              />
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
            <botton className="Web_Series">Web Series</botton>
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

        <div className="Navbar3">
          <input className="Search2" type="text" placeholder="Search.."></input>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Navbar" id="falseNav">
        <span className="Title">JAALCHITRA</span>
        <button className="SignIn" onClick={redirectLogin}>
          Sign In
        </button>
      </div>
    );
  }
}
