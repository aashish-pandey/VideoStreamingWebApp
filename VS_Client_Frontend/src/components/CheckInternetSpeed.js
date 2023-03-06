import React, { useState } from 'react'
import { ReactInternetSpeedMeter } from "react-internet-meter";
import useCookies from 'react-cookie/cjs/useCookies';


export default function CheckInternetSpeed() {

  const [checkSpeed, SetCheckSpeed] = useState("Finding internet speed.")

  const [cookies, setCookies] = useCookies(['user'])


  return (
    <div>

<ReactInternetSpeedMeter
        txtSubHeading="Internet connection is slow"
        outputType="" // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={2000} // milliseconds
        txtMainHeading="Opps..."
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        imageUrl="https://www.pngitem.com/images/bg.png"
        downloadSize="1561257" //bytes
        callbackFunctionOnNetworkDown={async (data) =>
          {
            console.log(`Internet speed : ${data}`)
           await  setCookies('internetSpeed', data)}
        }
        callbackFunctionOnNetworkTest={(data) => {
            setCookies('internetSpeed', data)

            SetCheckSpeed(data)}}
      />

    </div>
  )
}
