import React,{useContext} from 'react';
import Login from './account/Login';
import ChatBox from './ChatBox';
//import AccountProvider from '../contex/AccountProvider';
import { AccountContext } from '../contex/AccountProvider';

import { AppBar, toolbar, makeStyles ,Box} from '@material-ui/core';

const useStyle = makeStyles({
  loginheader: {
    background: '#00bfa5',
    height: 200,
    boxShadow:'none',
    
  },
  header: {
    background: '#128C7E',
    height: 114,
    boxShadow:'none'
  },
  component: {
    background: "#DCDCDC",
    height: '100vh',
    width:'100vw'
  }
})

const Messenger = () => {
  const { account } = useContext(AccountContext)
  console.log("MessengerAccount",account)
    const classes = useStyle();
    return (
        <Box className={classes.component}>
        <AppBar className={ account?classes.header:classes.loginheader}>
            
        </AppBar>

        {account ? <ChatBox /> : <Login />}
        
       </Box>
    )
}

export default Messenger;