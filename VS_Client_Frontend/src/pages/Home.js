import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvailablePlans from "../components/AvailablePlans";
import Navigation from "../components/navigation/Navigation";
import getCookies from "./CookieHandler";
import useCookies from "react-cookie/cjs/useCookies";

import { browserName, osName, deviceType } from "react-device-detect";

export default function Home() {
  const [subscriptionStatus, setSubscriptionStatus] = useState("false");
  const [cookies, setCookies] = useCookies(["user"]);
  var statusSaved = "false";
  // const [ip, setIp] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = getCookies("uemail");

    const queryInfo = {
      uemail: userEmail,
    };
    async function handlefetch() {
      var error_status = await fetch(
        process.env.REACT_APP_API_CALL_ADDRESS + "/subscriptionStatus",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(queryInfo),
        }
      )
        .then((res) => res.json())
        .then((dt) => {
          console.log(dt);
          return dt.err;
        });

      if (error_status.toString() == "false") {
        setSubscriptionStatus("false");

        navigate("/accountAccessAvailabilityCheck");
      } else {
        setSubscriptionStatus("true");
      }
    }

    handlefetch();
  }, []);

  return (
    <div>
      <AvailablePlans />
    </div>
  );
}
