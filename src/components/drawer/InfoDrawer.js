import React from 'react';
import { Drawer, Box ,Typography,makeStyles} from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons";
import Profile from "./Profile";

const useStyle = makeStyles({
    header: {
        background: '#00bfa5',
        height: 100,
        color: '#fff',
        display: 'flex',
        '& > *': {
            marginTop:'auto',
            padding: 15,
          
            fontWeight:600
        }
    },
    profile: {
        background: "#ededed",
        height:'100vh'
    }
})

function InfoDrawer({ open, setOpen }) {
    
    const classes = useStyle();
    const handleClose = () => {
        setOpen(false);
    }
  return (
    <Drawer open={open} onClose={handleClose}>
          <Box className={classes.header}>
              <ArrowBack onClick={handleClose} />
              <Typography>Profile</Typography>
          </Box>
          <Box className={classes.profile}>
              <Profile/>
          </Box>
    </Drawer>
  )
}

export default InfoDrawer
