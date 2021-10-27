import React,{useContext} from "react";
import { Box ,makeStyles,Typography} from "@material-ui/core";
import { AccountContext } from '../../contex/AccountProvider';

const useStyle = makeStyles({
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
   
  },
  displayImage: {
    height: 200,
    width: 200,
    borderRadius: '50%',
    padding: "15px 0px"
  },
  name: {
    padding: '12px 30px 2px',
    background: 'white',
    '& :first-child': {
      color: "#009688",
      fontSize: 15,
      marginTop:10
    }
  },
  description: {
    padding: '15px 12px 15px 12px',
    '& > *': {
      fontSize: 12,
      color:"rgb(0,0,0,0.45)"
    }
  },
  about: {
    padding: "15px 15px",
    background: 'white',
    '& :first-child': {
      color: "#009688",
      fontSize: 15,
      marginTop:10
    }
      
    
  }

})


function Profile() {
  const classes=useStyle();
    const { account } = useContext(AccountContext);
    console.log( "accountfrom profilejs",account.imageUrl);
  return (
    <>
          <Box className={classes.imageContainer}>
              <img className={classes.displayImage} src={account.imageUrl} alt="plfileimage" />
      </Box>
      <Box  className={classes.name}>
         <Typography> Your Name</Typography>
         
        <Typography>  { account.name}</Typography>
      
       
      </Box>
      <Box className={classes.description}>
        <Typography> This is not your username or pin.This name will be visible on your contact</Typography></Box>
      <Box className={classes.about}>
      <Typography> About</Typography>
      
      <Typography> Enjoy the ice-cream before it melt</Typography>
        
         
      </Box>
    </>
  );
}

export default Profile;
