import React from "react";
import { useContext } from "react";
import { AccountContext } from '../../contex/AccountProvider';
import { addUser } from "../../service/api";

import { GoogleLogin } from 'react-google-login';
import {
  Dialog,
  withStyles,
  Box,
  Typography,
  List,
    ListItem,
  makeStyles
} from "@material-ui/core";

const style = {
  DialogPaper: {
    height: "95%",
    width: "60%",
    borderRadius: 0,
    marginTop: "12%",
    boxShadow: "none",
    maxHeight: '100%',
    maxWidth:'100%'
    
  },
};

const useStyle = makeStyles({
    component: {
        display:'flex'
  },
  leftcomponent: {
    padding:'56px 56px 56px 56px'
  },
  qrcode: {
    height: 264,
    width: 264,
    padding:'50px 0px 0px 50px'
  },
  title: {
    fontWeight:600,
    fontSize: 25,
    marginBottom: 26,
    fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif'
  },
  list: {
    '& > *': {
      fontSize: 18,
      marginTop: 15,
      lineHeight: "28px",
      color:"#4a4a4a"
      
    }
 

  }
})

function Login({ classes }) {


  const { account, setAccount} = useContext(AccountContext);
   

  const qrurl = "https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg";
  const clientId='497848310795-l1morusebeajgq8bql06t82csjd8q1nu.apps.googleusercontent.com'
  const classesname = useStyle();
  
  const onHandleSucces = async(res) => {
    console.log("login Succcesful", res.profileObj)
    setAccount(res.profileObj);
     await addUser(res.profileObj)
  }
  
    
  const onHandleFailure = () => {
    console.log("login faliure")
  }

  return (
    <Dialog
      classes={{ paper: classes.DialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
      open={true}
    >
      <Box className={classesname.component}>
         <Box className= {classesname.leftcomponent}>
          <Typography className= {classesname.title}>To Whatsapp on your Computer</Typography>
          <List className={classesname.list}>
            <ListItem> 1. Open Whatsapp on your phone</ListItem>
            <ListItem> 2. Tap Menu and Setting Select Linked Device</ListItem>
            <ListItem>3. Point Your phone to this screen to capture the code </ListItem>
          </List>
        </Box>
        <Box style={{position:'relative'}}>
          <img src={qrurl} alt="barcodelogo"  className={classesname.qrcode} />
          <Box style={{position:'absolute',left:'30%', top:'40%'}} >
          <GoogleLogin
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            onSuccess={onHandleSucces}
            onFailure={onHandleFailure }
            clientId={clientId}


          />
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default withStyles(style)(Login);
