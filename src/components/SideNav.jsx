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
import { Icons } from "../utils/Icons";
const SideNav = ({ menu, setMenu }) => {
  const toggleDrawer = () => {
    setMenu(!menu);
  };
  return (
    <Box>
      {menu && (
        <Drawer
          anchor="right"
          open={menu}
          onClose={toggleDrawer}
          sx={{
            background: "hsl(0 0% 100%/0.2)",
            backdropFilter: "blur(1rem)",
          }}
        >
          <Paper
            sx={{
              width:'45vw',
              boxShadow: "none",
              minHeight: "100%",
              paddingInline:'auto',
              background: "hsl(0 20% 69%/0.8)",
            }}
          >
            <List sx={{minWidth:'100%'}}>
              {Icons.map((icon, index) => {
                return (
                  <ListItem key={index}>
                    <Link  style={{width:'100%'}}>
                    <ListItemButton className="nav-link" onClick={toggleDrawer}>
                      {icon.icon}
                      <ListItemText sx={{color:'white'}}>{icon.text}</ListItemText>
                    </ListItemButton>
                    </Link>
                   
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Drawer>
      )}
    </Box>
  );
};

export default SideNav;
