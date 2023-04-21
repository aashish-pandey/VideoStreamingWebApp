import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getCookies from "../CookieHandler";
import ShowChatMsg from "./ShowChatMsg";

export default function ChatBox() {
  const [globalMsg, setGlobalMsg] = useState([]);

  function updateScroll() {
    const element1 = document.getElementById("anchor");
    if (element1) {
      // Will scroll smoothly to the top of the next section
      element1.scrollIntoView({ behavior: "smooth" });
    }
  }

  const getGlobalMsg = async function () {
    await fetch(process.env.REACT_APP_API_CALL_ADDRESS + "/getGlobalChat")
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt.msg);
        setGlobalMsg(dt.msg);
        setTimeout(() => {
          updateScroll();
        }, 10);
      });
  };



  useEffect(() => {
    async function handle() {
      await getGlobalMsg();
      setTimeout(() => {
        updateScroll();
      }, 10);
    }
    handle();
  }, []);

  const handleChatMsgSend = async function (e) {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(getCookies("uemail"));

    const msgInfo = {
      email: getCookies("uemail"),
      msg: e.target[0].value,
    };

    await fetch(process.env.REACT_APP_API_CALL_ADDRESS + "/saveGlobalChat", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msgInfo),
    })
      .then((res) => res.json())
      .then((dt) => {
        console.log(dt);
        e.target[0].value = "";
      });
    getGlobalMsg();
  };

  updateScroll();

  return (
    <>
      <div className="chat">
        <div className="chatBox">
          <div className="chatHeading">Chat with others</div>

          <div className="chatMsgBox" id="chatMsgBox">
            {globalMsg.map((chat) => {
              return (
                <ShowChatMsg key={chat._id} msg={chat.msg} email={chat.email} />
              );
            })}

            <div id="anchor"></div>
          </div>

          <form className="chatInput" onSubmit={handleChatMsgSend}>
            <input
              type="text"
              placeholder="How was the movie?"
              className="chatInputBox"
            />
            <input
              type="submit"
              value="send msg"
              className="chatInputSendBtn"
            />
          </form>
        </div>
      </div>
    </>
  );
}
