import React from 'react';
import { createContext, useState,useRef,useEffect } from 'react';

import { io } from 'socket.io-client'

const AccountContext = createContext(null);


 
const AccountProvider=({children})=> {

    const [account, setAccount] = useState();
    const [activeUsers,setActiveUsers]=useState([]);
    const [newMessageFlag,setNewMessageFlag]=useState(false)
    
    const socket=useRef();

useEffect(()=>{
  socket.current = io('ws://localhost:9000');
  console.log("socket.current")
},[])    


  return (
      <AccountContext.Provider
          value={{account
          ,setAccount,
          socket,
          setActiveUsers,
          activeUsers,
          newMessageFlag,
          setNewMessageFlag
          }}
      > 
           {children}
      </AccountContext.Provider>
  )
}

export default AccountProvider
export { AccountContext }
