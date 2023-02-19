import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import getCookies from '../CookieHandler';
import ShowChatMsg from './ShowChatMsg';

export default function ChatBox() {

    const [globalMsg, setGlobalMsg] = useState([])

    const getGlobalMsg = async function(){
        await fetch('http://' + process.env.REACT_APP_API_CALL_ADDRESS + ':3560/getGlobalChat')
            .then(res=>res.json())
            .then(dt=>{
                console.log(dt.msg)
                setGlobalMsg(dt.msg)
            })
    }

    useEffect(()=>{
        getGlobalMsg()
    }, [])

    const handleChatMsgSend = async function(e){
        e.preventDefault();
        console.log(e.target[0].value)
        console.log(getCookies('uemail'))

        const msgInfo = {
            email: getCookies('uemail'),
            msg: e.target[0].value
        }

        await fetch('http://' + process.env.REACT_APP_API_CALL_ADDRESS + ':3560/saveGlobalChat', {
            method: "post", 
            headers: {"content-type": "application/json"},
            body: JSON.stringify(msgInfo)
        })
        .then(res=>res.json())
        .then(dt=>{
            console.log(dt)
            e.target[0].value = ""
        })
        getGlobalMsg()
    }

  return (
    <div className='chatBox'>
        <div className="chatHeading">
            Chat with others
        </div>

        <div className='chatMsgBox'>

            {globalMsg.map(chat=>{
                return(
                    <ShowChatMsg key={chat._id} msg={chat.msg} email={chat.email}/>
                )
            })}

            <div id='anchor'></div>

        </div>

        <form className="chatInput" onSubmit={handleChatMsgSend}>
            <input type="text" className='chatInputBox' />
            <input type="submit" value="send msg" className='chatInputSendBtn'/>
        </form>
    </div>
  )
}
