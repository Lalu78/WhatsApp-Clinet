import React ,{useContext, useState,}from 'react';
import { Box,Typography,makeStyles} from '@material-ui/core';
import { AccountContext } from '../../contex/AccountProvider';
import ChatReply from './ChatReply';

const useStyle= makeStyles({
    Wraper:{
      display:'flex',
      maxWidth:'60%',
      background:'#FFFFFF',
      padding:5,
      borderRadius:10,
      width:'fit-content'
    },
    text:{
        fontSize:14,
     padding:'0px 25px 0px 5px'
        

    },
    time:{
      fontSize:10,
      color:'#919191',
      wordBreak:'keep-all',
      marginTop:'auto',
      marginTop:'6px'
    },
      own:{
      display:'flex',
      maxWidth:'60%',
      background:'#dcf8c6',
      padding:5,
      borderRadius:10,
      width:'fit-content',
      marginLeft:'auto'
    },
})


function Messages({message }) {
  const classes = useStyle()
  const { account } = useContext(AccountContext);
  const [reply, setReply] = useState();
  const [open, setOpen] = useState(false);
  
  
  
const dateFormate=(date)=>{
        return date < 10 ?'0'+date:date;
  }
  
  const onHandleReply = () => {
   
    setOpen(true)
    setReply(message.text)
    
    
    
  }
  return (
    <>
      <Box  onClick={onHandleReply} className={account.googleId===message.sender?classes.own: classes.Wraper}>
      
      <Typography className={classes.text}> {message.text}</Typography>
      <Typography className={classes.time}> {dateFormate(new Date(message.createdAt).getHours())}: {dateFormate(new Date(message.createdAt).getMinutes())}</Typography>
      
      </Box>
      <ChatReply open={open} setOpen={setOpen} reply={reply} setReply={setReply}  />
      
    </>
  )
}

export default Messages


