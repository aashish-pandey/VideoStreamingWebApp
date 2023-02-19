import React from 'react'
import { useEffect } from 'react'
import getCookies from '../CookieHandler'

export default function ShowChatMsg({msg, email}) {

    const currEmail = getCookies('uemail')

    
    

  return (
    <div className='showChatMsgMain'>
        <div className={(email == currEmail)?'showChatMsgMine':'showChatMsgOthers'}>{email}</div>
        <div className={(email == currEmail)?'showChatMsgMine':'showChatMsgOthers'}>
            <span className={(email == currEmail)?'showChatMsgMineText':'showChatMsgOthersText'}>
                {msg}
            </span>
            </div>
    </div>
  )
}
