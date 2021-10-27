import React,{useContext} from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { AccountContext } from '../../contex/AccountProvider';
import { UserContext } from '../../contex/UserProvider';
import { setConversation } from "../../service/api.js";

const useStyle = makeStyles({
    component: {
        display: "flex",
        alignItems: "center",
        paddingTop: 15,
        paddingLeft: 15,
        cursor:"pointer"
       
        
    },
    displayimage: {
        height:40,
        width: 40, 
        borderRadius: '50%',
       
    },
    name: {
        marginLeft:10
    }
})



function Conversation({ user }) {
    const classes = useStyle()
    const { account } = useContext(AccountContext)
    const { setPerson }=useContext(UserContext)


    const setUser = async () => {
        setPerson(user);
       await  setConversation({ senderId: account.googleId, recieverId: user.googleId })
    }

  return (
    <Box className={classes.component} onClick={()=>setUser()}>
           <Box>
              <img src={user.imageUrl} alt="displayimage" className={classes.displayimage} />
           </Box>
          <Box>
             <Box  className={classes.name}> <Typography>{user.name}</Typography> </Box> 
          </Box>
    </Box> 
  )
}

export default Conversation
