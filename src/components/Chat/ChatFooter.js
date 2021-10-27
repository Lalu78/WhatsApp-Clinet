import React from "react";
import { Box, InputBase, makeStyles } from "@material-ui/core";
import { Mic, AttachFile, EmojiEmotions } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  component: {
    display: "flex",
    height: 58,
    alignItems: "center",
    width: "70vw",
   padding:1,
    background: "#ededed",
    "& > *": {
     
      color: "#919191",
    },
  },
  rotate: {
      transform: "rotate(40deg)",
    
  },
  serachBox: {
    width: "60vw",
  },
  inputRoot: {
    width: "90%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 65,
    fontSize: 14,
    height: 15,
    width: "90%",
  },
  search: {
    position: "relative",
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
  
    width: "90%",
    },
    mic: {
        marginLeft:'15px'
    }

}));

function ChatFooter({sendTex, setValue,value}) {
  const classes = useStyles();
  const onHandleChange = (e) => {
    setValue(e.target.value)
   
  }
  return (
    <Box className={classes.component}>
      <EmojiEmotions />
      <AttachFile  />
      <Box className={classes.serachBox}>
        <Box className={classes.search}>
          <InputBase
            placeholder="Type your text"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onKeyPress={(e)=>sendTex(e)}
            onChange={onHandleChange}
             value={value}
           // value={reply.text}
          />
        </Box>
      </Box>
      <img style={{height:'30px'}} src="https://icon2.cleanpng.com/20180719/sbp/kisspng-computer-keyboard-enter-key-arrow-keys-clip-art-shift-key-5b5124961a62a5.1928795415320444381081.jpg" alt="enterimage"/>
      <Mic className={classes.mic} />
    </Box>
  );
}

export default ChatFooter;
