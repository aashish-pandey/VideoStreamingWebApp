import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import ChatBox from './ChatBox'
import './chatStyleSheet.css'

export default function GroupChat() {
  return (
    <div className='chatMain'>
    <Navigation/>

    <div className="chatMainItems">
    <ChatBox/>
    </div>

    </div>
  )
}
