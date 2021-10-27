import React,{useContext} from 'react';
import { Box,Typography,makeStyles } from '@material-ui/core';
import { MoreVert, Search } from '@material-ui/icons';
import { UserContext } from '../../contex/UserProvider';
import { AccountContext } from '../../contex/AccountProvider';
    
const useStyles = makeStyles({
    component: {
        display: "flex",
        height: 55,
        width:'70.1vw',
        background: '#ededed',
        alignItems:'center',
        
    },
    displayImage: {
        height: 38,
        width: 38,
        borderRadius: "50%",
        padding:5
        
    },
    righticons: {
        marginLeft: "auto",
        padding:10
    },
    headerleftitem: {
        padding:10
    },
    status: {
        
        fontSize: '10',
        color:"rgb(0,0,0,0.6)"


    }
})

function ChatHeader() {
    const classes = useStyles();
    const { person }=useContext(UserContext)
    const {activeUsers } =useContext(AccountContext)
  return (
    <Box className={classes.component}>
              <img src={person.imageUrl} alt="displayimage" className={classes.displayImage}/>
         
          <Box className={classes.headerleftitem}>
              <Typography> {person.name}</Typography>
              <Typography className={classes.status}>
                {
                    activeUsers?.find(user => user.userId===person.googleId)?'Online':'Offline'
                }
              </Typography>
          </Box>
          <Box className={classes.righticons}>
              <MoreVert />
              <Search/>
          </Box>

    </Box>
  )
}

export default ChatHeader
