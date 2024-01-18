import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Paper,
  List,
  ListItem,
  Box,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { MailLockRounded } from "@mui/icons-material";

const SideNav = ({ menu, setMenu }) => {
  const toggleDrawer = () => {
    setMenu(!menu);
  };
  return (
    <Box sx={{ color: "black" }}>
      {menu && (
        <Drawer anchor="right" open={menu} onClose={toggleDrawer}>
          <Paper sx={{ width: "40vw", boxShadow: "none", minHeight: "100%" }}>
            <List>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <Link>
                    <MailLockRounded sx={{ color: "black" }} />
                  </Link>
                  <ListItemText>hell</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <Link>
                    <MailLockRounded sx={{ color: "black" }} />
                  </Link>
                  <ListItemText>hell</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <Link>
                    <MailLockRounded sx={{ color: "black" }} />
                  </Link>
                  <ListItemText>hell</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton onClick={toggleDrawer}>
                  <Link>
                    <MailLockRounded sx={{ color: "black" }} />
                  </Link>
                  <ListItemText>hell</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Drawer>
      )}
    </Box>
  );
};

export default SideNav;
