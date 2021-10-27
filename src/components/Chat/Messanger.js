import React,{useState,useContext,useEffect,useRef} from 'react';
import { Box, makeStyles } from '@material-ui/core';
import ChatFooter from './ChatFooter';
import { AccountContext } from '../../contex/AccountProvider';
import { newMessage,getMessage } from '../../service/api';
import  Messages  from './Messages'

const useStyles = makeStyles({
    Wraper: {
       backgroundSize:'50%',
        backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`
    },
    component: {
        height:'79vh',
        overflowY:'scroll'
    },
    messagecontainer:{
      padding:'1px 80px'
    }
})

function Messanger({ converstaion, person }) {
  const ScrollRef=useRef()
  const [value ,setValue]=useState('')
  const [messages,setMessages]=useState([])
  const [incomingMessage,setIncomingMessage]=useState(null)
  const classes = useStyles();
  const { account ,socket, newMessageFlag, setNewMessageFlag} = useContext(AccountContext)
  
  useEffect(() => {
  ScrollRef.current?.scrollIntoView({transitioin:'smooth'})
})


useEffect(()=>{
  socket.current.on('getMessage',data=>{
    setIncomingMessage({
      sender:data.senderId,
      text:data.text,
      createdAt:Date.now()
  })
  })
},[])

useEffect(()=>{
  incomingMessage && converstaion?.member?.includes(incomingMessage.sender) &&
  setMessages(prev =>[...prev,incomingMessage])
},[incomingMessage,converstaion])


  useEffect(()=>{
    const getMessageDetainl=async()=>{
       const data =await getMessage(converstaion._id)
       setMessages(data)
    
       
    }
    getMessageDetainl();
  },[converstaion?._id,person._id,newMessageFlag])

const receiverId = converstaion?.member?.find(memb=> memb !==account.googleId)

    const sendTex = async(e)=>{
      let code=e.keyCode || e.which;
      if(!value) return

      if(code===13)
      {
        let message={
          sender: account.googleId,
          conversationId: converstaion._id,
          text:value

        }
        socket.current.emit('sendMessage',{
          senderId:account.googleId,
          receiverId,
          text:value
        })
        await newMessage(message)
         setValue('');
         setNewMessageFlag(prev => !prev)
      
      

      }
    }
  return (
    <Box className={classes.Wraper}>
          <Box className={classes.component}>
          {
            messages && messages.map(message=>(
              <Box className={classes.messagecontainer} ref={ScrollRef}>
               <Messages message={message} />
              </Box>
            ))
          }
             
         </Box>
          <ChatFooter sendTex={sendTex} value={value} setValue={setValue} />
    </Box>
  )
}


export default Messanger;