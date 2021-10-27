import React,{useContext} from 'react';
import { Dialog, withStyles, Box, makeStyles } from '@material-ui/core';
import Chat from './Chat/Chat';
import { UserContext } from '../contex/UserProvider';
import EmptyChat from './Chat/EmptyChat';

import Menu from './menu/Menu';

const useStyle = makeStyles({
    component: {
        display:'flex'
    },
    leftcomponent: {
        minWidth:380
        
    },
    rightcomponent: {
        borderLeft:'1px solid rgb(0,0,0,14)'
        
    }
    
      
    
})

const style = {
    DialogPaper: {
      height: "95%",
      width: "95%",
      borderRadius: 0,
      
      boxShadow: "none",
      maxHeight: '100%',
      maxWidth:'100%'
      
    },
  };

function ChatBox({ classes }) {
    const classesname=useStyle()
    const { person } = useContext(UserContext);
  return (
    <Dialog
    classes={{ paper: classes.DialogPaper }}
    BackdropProps={{ style: { backgroundColor: "unset" } }}
    open={true}
      >
          <Box className={classesname.component}>
              <Box className={classesname.leftcomponent}>
                  <Menu/>

              </Box>
              <Box  className={classesname.rightcomponent}>
              {
                Object.keys(person).length? <Chat/>:<EmptyChat/>
                }
               
              
              </Box>
          </Box>
    
  </Dialog>
  )
}

export default withStyles(style)(ChatBox) 
