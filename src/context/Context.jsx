/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompts, setprevPrompts] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");
const delayPara=(index,newWord)=>{
setTimeout(()=>{
setresultData((prev)=>prev + newWord)
},index * 75)
}
const newChat=()=>{
  setloading(false)
  setshowResult(false)
}
  const onSent = async (prompt) => {
    setresultData("")
    setloading(true)
    setshowResult(true)
  

    let response;
    if(prompt !==undefined){
 response =  await run(prompt);
 setrecentPrompt(prompt)
      
    }else{
      setprevPrompts(prev=>[...prev,input])
      setrecentPrompt(input)
   response=  await run(input);

    }
  let responseArray=response.split("**")
  let newResponse="";
  for (let i = 0; i < responseArray.length; i++) {
  if(i==0 || i%2 !==1){
    newResponse +=responseArray[i]
  }else{
    newResponse += `<b>${responseArray[i]}</b>`
  }
    
  }
  let newResponse2=newResponse.split("*").join(" <br/>")
 let newResponseArray=newResponse2.split(" ")
 for (let i = 0; i < newResponseArray.length; i++) {

delayPara(i,newResponseArray[i]+" ")
 }
  setloading(false)
  setinput("")

  };
 
  const contextValue = {
    prevPrompts,
    setprevPrompts,
    onSent,
    setrecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput,
    newChat
  };
  return (
    // eslint-disable-next-line react/prop-types
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
