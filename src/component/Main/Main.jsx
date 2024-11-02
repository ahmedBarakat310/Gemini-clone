// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setinput,input}=useContext(Context);
  return (
   
   <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult  ? <>
                <div className="greet">
                <p><span>Hello,Dev</span></p>
                <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Tell me about React js and React native</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                    </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                   
                </div>
                </div>}
            
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" onChange={(e)=>{
                        setinput(e.target.value)
                    }} value={input} placeholder='enter keyword...' />
                    <div>
                       
                       {loading ? <span className="loaderSearch"></span>: <img onClick={()=>{onSent()}} src={assets.send_icon} alt="" />}
                    </div>

                </div>
                <p className="bottom-info">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>

            </div>

        </div>
   </div>
  )
}

export default Main