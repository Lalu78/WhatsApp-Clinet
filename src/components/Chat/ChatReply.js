
import React, { useState,useContext ,useEffect,} from 'react';
import { AccountContext } from '../../contex/AccountProvider';
import { newMessage,} from '../../service/api';
import { getConversatioin } from '../../service/api';
import { UserContext } from '../../contex/UserProvider';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    makeStyles,
    InputBase,
    TextareaAutosize
  } from "@material-ui/core";
  
  
  const useStyle = makeStyles((theme) => ({
    DialogWraper: {
      padding: theme.spacing(2),
      position: "absolute",
      top: theme.spacing(25),
      right: theme.spacing(50),
  
      width: "300px",
      height: "100px",
      borderRadius: "20px",
      boxShadow: "black",
    },
  }));
  
const ChatReply = (props) => {
    const [converstaion, setConversation] = useState({});
    const { person } = useContext(UserContext);
    const { account ,socket, setNewMessageFlag} = useContext(AccountContext)
    const {open, setOpen,reply ,setReply} = props;
    const classes = useStyle();
    

    useEffect(() => {
        const getConversationDetail = async () => {
            const data = await getConversatioin({sender:account.googleId,receiver:person.googleId});
            setConversation(data)
        }
        getConversationDetail()
        
    },[person.googleId])
      

    const handleClose = () => {
        setOpen(false);
      };

      const onHandleChange = (e) => {
          setReply(e.target.value);
        
       
    }
    


  

// reply sending
const receiverId = converstaion?.member?.find(memb=> memb !==account.googleId)
    
const sendTex = async(e)=>{
    let code=e.keyCode || e.which;
    if(!reply) return

    if(code===13)
    {
      let message={
        sender: account.googleId,
        conversationId: converstaion._id,
        text:reply

      }
      socket.current.emit('sendMessage',{
        senderId:account.googleId,
        receiverId,
        text:reply
      })
      await newMessage(message)
        setReply('');
        setOpen(false);
       setNewMessageFlag(prev => !prev)
    
    

    }
  }
      
//      



    return (
        <Dialog
         open={open} onClose={handleClose}
       
        maxWidth="sm"
        classes={{ paper: classes.DialogWraper }}
      >
        <DialogTitle>message reply</DialogTitle>
            <DialogContent>
                <InputBase style={{ color: 'grey' }}
                    label="reply"
                    type="text"
                    value={ reply }
                    onChange={onHandleChange}
                    onKeyPress={(e) => sendTex(e)}
                  
                />
              
        </DialogContent>
      </Dialog>
    );
  };
  export default ChatReply;
  