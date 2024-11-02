// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Sidebar from './component/Sidebar/Sidebar'
import Main from './component/Main/Main'

const App = () => {
  const [removesidebar, setremovesidebar] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setremovesidebar(window.innerWidth <= 700);
    };

    
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    < >
   

    {!removesidebar?<Sidebar/>:null}
      

     <Main />
     
      </>
  
  )
}

export default App