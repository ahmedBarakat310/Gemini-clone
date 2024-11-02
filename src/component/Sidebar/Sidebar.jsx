// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'
const Sidebar = () => {
    
    const [expand, setexpand] = useState(false)
    const {prevPrompts,setrecentPrompt,onSent,newChat}=useContext(Context);
    const loadPrompt= async(prompt)=>{
            setrecentPrompt(prompt)
            await onSent(prompt)
    }
  return (
    <div className='sidebar'>
        <div className="top">
            <img src={assets.menu_icon} onClick={()=>{
                setexpand((prev)=>!prev)
            }}  className='menu' alt="" />
            <div className="new-chat" onClick={()=>{newChat()}}>
                <img src={assets.plus_icon} alt="" />
                {expand? <p >new Chat</p> :null}
            </div>
            {expand ?<div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                        <div key={index} onClick={()=>{loadPrompt(item)}} className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>{item.slice(0,18)}...</p> 
                    </div>
            
                    )
                })}
                       
            </div>:null}
            

        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
              {expand?  <p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {expand ?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {expand ?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar