import React, { useState,useEffect,useContext}from 'react';
import { Box } from '@material-ui/core';
import ChatHeader from './ChatHeader';
import Messanger from './Messanger';

import { getConversatioin } from '../../service/api';
import { UserContext } from '../../contex/UserProvider';
import { AccountContext } from '../../contex/AccountProvider';
 
function Chat() {
    const { person } = useContext(UserContext);
    const { account } = useContext(AccountContext)
    const [converstaion,setConversation]=useState({});
    console.log('converstaiondata',converstaion)
    
    useEffect(() => {
        const getConversationDetail = async () => {
            const data = await getConversatioin({sender:account.googleId,receiver:person.googleId});
            setConversation(data)
        }
        getConversationDetail()
        
    },[person.googleId])
  return (
      <Box>
          <ChatHeader />
          <Messanger converstaion={converstaion} person={person} />
         
          
     </Box>
  )
}

export default Chat
