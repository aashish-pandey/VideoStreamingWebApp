import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import getCookies from "../../pages/CookieHandler";
import CheckInternetSpeed from "../CheckInternetSpeed";
import Navigation from "../navigation/Navigation";
import SessionTracker from "../sessionManagement/SessionTracker";

import "./PlayVideo.css";

export default function PlayBannerVideo({ route, navigation }) {
  const { id } = useParams();

  const [seekPlayerValue, setSeekPlayerValue] = useState(0);
  const [volumeSliderValue, setVolumeSliderValue] = useState(100);

  const [iSpeed, setISpeed] = useState(
    getCookies("internetSpeed") ? getCookies("internetSpeed") : 10
  );

  
  const [playbtn, setPlaybtn] = useState(<div className="css-9a5dmo"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" strokeWidth="2" fill="white" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg></div>) 
  const [soundbtn, setSoundbtn] = useState(<div className="css-9a5dmo"><svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" strokeWidth="2" fill="white" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div>)
  const [maximizebtn, setMaximizebtn] = useState(<div class="css-9a5dmo"><svg viewBox="0 0 24 24" width="30" height="30" stroke="#fff" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>)
  const [backbtn, setBackbtn] = useState(<div className="css-9a5dmo"><svg className="backBtnSvg" viewBox="0 0 24 24" width="50" height="50" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></div>)
  

  useEffect(() => {
    console.log("cookie: " + getCookies("internetSpeed"));
    const saveInfo = {
      movieId: id,
      userEmail: getCookies("uemail"),
    };

    if (getCookies("internetSpeed")) {
      async function set() {
        await setISpeed(getCookies("internetSpeed"));
      }
      set();
      // console.log("Hero calling" + iSpeed)
    }

    //request the server to store the video in user history
    //   fetch("http://" + process.env.REACT_APP_API_CALL_ADDRESS + ":3560/saveWatchHistory", {
    //     method: "post",
    //     headers:{'Content-type': 'application/json'},
    //     body: JSON.stringify(saveInfo)
    //   })

    var vbox = document.getElementById("videoplayerQ");
    vbox.style.height = window.innerHeight;

    volumeSeekerChange();
  });

  const navigate = useNavigate();

  function playPausebtn(bn, vid) {
    var video = document.getElementById(vid);
    var btn = document.getElementById(bn);
    console.log(vid);
    if (video.paused) {
      video.play();
      document.getElementById("big-play-button").style.display = "none";
      setPlaybtn(
        <div className="css-9a5dmo">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#fff"
            strokeWidth="2"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        </div>
      );
    } else {
      video.pause();
      document.getElementById("big-play-button").style.display = "block";
      setPlaybtn(
        <div className="css-9a5dmo">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#fff"
            strokeWidth="2"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      );
    }
  }
  function volumeSeekerChange() {
    var vlm = document.getElementById("volumeSlider");

    var vlmValue = vlm.value;
    console.log(vlmValue);
    vlm.style.background = `linear-gradient(to right, #795eff 0%, #795eff ${vlmValue}%, #fff ${vlmValue}%, white 100%)`;
  }
  function vidSeek() {
    var video = document.getElementById("video-id");
    var seekSlider = document.getElementById("seekSlider");

    var seekto = video.duration * (seekSlider.value / 100);
    video.currentTime = seekto;
    setSeekPlayerValue(seekSlider.value);

    if (seekSlider.value == 100) {
      setSoundbtn(
        <div className="css-9a5dmo">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#fff"
            strokeWidth="2"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
      );
    } else {
      setSoundbtn(
        <div className="css-9a5dmo">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#fff"
            strokeWidth="2"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
      );
    }
  }
  function seekTimeUpdate() {
    var video = document.getElementById("video-id");

    let buffTime = 0;

    const duration = video.duration;
    if (duration > 0) {
      for (let i = 0; i < video.buffered.length; i++) {
        if (
          video.buffered.start(video.buffered.length - 1 - i) <
          video.currentTime
        ) {
          buffTime =
            (video.buffered.end(video.buffered.length - 1 - i) * 100) /
              duration +
            2;
          break;
        }
      }
    }

    var seekSlider = document.getElementById("seekSlider");
    var remTime = document.getElementById("remaningTime");
    volumeSeekerChange();

    console.log(video.seekable);

    var nt = video.currentTime * (100 / video.duration);
    console.log("nt: " + nt + " buft: " + buffTime);
    seekSlider.style.background = `linear-gradient(to right, #f00 0%, #f00 ${nt}%, #777 ${nt}%,  #777 ${buffTime}%, #fff ${buffTime}%, white 100%)`;
    setSeekPlayerValue(nt);

    var remT = video.duration - video.currentTime;

    var hr = Math.floor(remT / 3600);
    var min = Math.floor((remT - hr * 3600) / 60);
    var sec = Math.floor(remT - hr * 3600 - min * 60);

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    var str = "-" + hr + ":" + min + ":" + sec;
    remTime.innerHTML = str;
    // console.log(str)
  }
  function vidMute() {
    var video = document.getElementById("video-id");
    var mutebtn = document.getElementById("mutebtn");
    var vlm = document.getElementById("volumeSlider");

    if (video.muted) {
      video.muted = false;
      setSoundbtn(
        <div className="css-9a5dmo">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#fff"
            strokeWidth="2"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        </div>
      );
      video.volume = 1;
      setVolumeSliderValue(100);
    } else {
      video.muted = true;
      setSoundbtn(
        <div className="css-9a5dmo">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#fff"
            strokeWidth="2"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="css-i6dzq1"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        </div>
      );
      video.volume = 0;
      setVolumeSliderValue(0);
    }

    volumeSeekerChange();
  }
  function volumeSeek() {
    var video = document.getElementById("video-id");
    var vlm = document.getElementById("volumeSlider");

    video.volume = vlm.value / 100;
    setVolumeSliderValue(video.volume * 100);
    volumeSeekerChange();
  }
  function toggleFullScreen() {
    var video = document.getElementById("video-id");
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }
  function handleKeyDown(event) {
    var video = document.getElementById("video-id");

    var btn = document.getElementById("playpausebtn");
    var seekSlider = document.getElementById("seekSlider");

    console.log(event.key);

    if (event.key == " ") {
      console.log("it is a space");
      playPausebtn("playpausebtn", "video-id");
    } else if (event.key == "ArrowRight") {
      video.currentTime += 10;
      setSeekPlayerValue(seekSlider.value);
      console.log("It is an arrow right key");
    } else if (event.key == "ArrowLeft") {
      video.currentTime -= 10;
      setSeekPlayerValue(seekSlider.value);
      console.log("It is an arrow right key");
    } else if (event.key == "ArrowUp") {
      var tmpvlm = video.volume + 0.1;
      if (tmpvlm > 1) {
        tmpvlm = 1;
        setSoundbtn(
          <div className="css-9a5dmo">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#fff"
              strokeWidth="2"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </div>
        );
      }
      video.volume = tmpvlm;
      setVolumeSliderValue(video.volume * 100);
      volumeSeekerChange();
      console.log("It is an arrow up key");
    } else if (event.key == "ArrowDown") {
      var tmpvlm = video.volume - 0.1;
      if (tmpvlm < 0) {
        tmpvlm = 0;
        setSoundbtn(
          <div className="css-9a5dmo">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#fff"
              strokeWidth="2"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          </div>
        );
      } else {
        setSoundbtn(
          <div className="css-9a5dmo">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="#fff"
              strokeWidth="2"
              fill="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </div>
        );
      }
      setVolumeSliderValue(video.volume * 100);
      video.volume = tmpvlm;
      volumeSeekerChange();
      console.log("It is an arrow down key");
    } else {
      console.log("Bro its a key");
    }
  }

  return (
    <>
      <CheckInternetSpeed />
      <SessionTracker />

      <div
        id="videoplayerQ"
        onKeyDown={(event) => handleKeyDown(event)}
        tabIndex="0"
        onDoubleClick={() => toggleFullScreen()}
      >
        {/* {//tabIndex property is used here so as to make div to be active} */}
        <button id="backbtn" onClick={() => navigate(-1)}>
          {backbtn}
        </button>
        <video
          id="video-id"
          autoPlay
          onTimeUpdate={() => seekTimeUpdate()}
          onClick={() => playPausebtn("playpausebtn", "video-id")}
        >
          <source
            src={
              process.env.REACT_APP_API_CALL_ADDRESS +
              "/getBannerMovie/" +
              id +
              "?speed=" +
              getCookies("internetSpeed")
            }
            type="video/mp4"
          />
        </video>
        <div
          id="big-play-button"
          onClick={() => playPausebtn("playpausebtn", "video-id")}
        >
          {playbtn}
        </div>
        <div id="video-controls">
          <div id="video-controls-upper">
            <input
              id="seekSlider"
              onChange={() => vidSeek()}
              onInput={() => vidSeek()}
              type="range"
              min="0"
              max="100"
              value={seekPlayerValue}
              step="0.001"
              className="progress buffered-amount"
            />
          </div>

          <div id="video-controls-lower">
            <div id="video-controls-lower-left">
              <button
                id="playpausebtn"
                onClick={() => playPausebtn("playpausebtn", "video-id")}
              >
                {playbtn}
              </button>

              <div id="sound">
                <button id="mutebtn" onClick={() => vidMute()}>
                  {soundbtn}
                </button>
                <input
                  id="volumeSlider"
                  onChange={() => volumeSeek()}
                  onInput={() => volumeSeek()}
                  type="range"
                  min="0"
                  max="100"
                  value={volumeSliderValue}
                  step="1"
                />
              </div>
              <span id="remaningTime">-00:00:00</span>
            </div>

            <div id="video-controls-lower-right">
              <button id="fullScreenbtn" onClick={() => toggleFullScreen()}>
                {maximizebtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
