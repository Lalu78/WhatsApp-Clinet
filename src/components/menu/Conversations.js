import React, { useEffect, useState,useContext } from "react";
import { getUsers } from "../../service/api.js";
import { Box,makeStyles } from "@material-ui/core";
import Conversation from './Conversation';
import { AccountContext } from '../../contex/AccountProvider';

const useStyle = makeStyles({
  component: {
    height: "81vh",
    overflow:'overlay'
  }
  
})

function Conversations({text}) {
  const classes=useStyle()

  const {account,socket,setActiveUsers}=useContext(AccountContext)
  const [users, setUser] = useState([]);
 console.log("users from convsion", users);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      const filterData=data.filter((user)=>user.name.toLowerCase().includes(text.toLowerCase()))
     
      setUser(filterData);
    };

    fetchData();
  }, [text]);

  useEffect(()=>{
    socket.current.emit('addUser',account.googleId);
    socket.current.on('getUsers',users=>{
      setActiveUsers(users)
    })
  },[account]);

  return (
    <Box className={classes.component}>
      {users.map((user) => (
        user.googleId!==account.googleId &&
        <Conversation user={user}/>
      ))}
      
    </Box>
  );
}

export default Conversations;
