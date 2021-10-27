import React, { useContext, useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../contex/AccountProvider";
import { Chat } from "@material-ui/icons";
import HeaderMenu from "./HeaderMenu";

import Drawer from "../drawer/InfoDrawer";

const useStyle = makeStyles({
  header: {
    height: 35,
    padding: "10px 16px ",
    background: "#ededed",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    height: 37,
    width: 37,
    borderRadius: "50%",
  },
  header_right: {
    display: "flex",
    marginLeft: "auto",
    "& > *": {
      marginLeft: 2,
      padding: 8,
      color: "#919191 ",
    },
    "& :first-child": {
      fontSize: 22,
      marginRight: 8,
    },
  },
});

function Header() {
  const [open, setOpen] = useState();
  const { account } = useContext(AccountContext);
  const classes = useStyle();

  const toggleDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <Box className={classes.header}>
        <img
          src={account.imageUrl}
          onClick={() => toggleDrawer()}
          alt="avatar"
          className={classes.avatar}
        />
        <Box className={classes.header_right}>
          <Chat />
          <HeaderMenu />
        </Box>
      </Box>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
