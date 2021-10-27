import React, { useState, useContext } from "react";
import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { AccountContext } from "../../contex/AccountProvider";
import Drawer from "../drawer/InfoDrawer";


function HeaderMenu() {

  const { account,setAccount } = useContext(AccountContext)
  console.log("HeaderMenuAccount",account)
  const clientId =
    "497848310795-l1morusebeajgq8bql06t82csjd8q1nu.apps.googleusercontent.com";

  const [open, setOpen] = useState();
  const [openDrawer, setOpenDrawer] = useState();
  //const {  account, setAccount } = useContext(AccountContext);

  const handleClose = () => {  
    setOpen(false);
  };

  const onHandleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const logout = () => {
    alert("your have Logout Successfully");
      setAccount('');
    
     
  };
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <div>
      <MoreVert onClick={onHandleClick} />
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={()=>handleClose(),toggleDrawer}>Profile</MenuItem>

        <MenuItem onClick={handleClose}>
          <GoogleLogout
            onLogoutSuccess={logout}
            clientId={clientId}
            buttonText="Logout"
                  >
          </GoogleLogout>
                  
        </MenuItem>
      </Menu>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
}

export default HeaderMenu;
