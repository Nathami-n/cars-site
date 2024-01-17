import { Box, AppBar, Toolbar, Stack } from "@mui/material";
import {Link} from 'react-router-dom'
import React from "react";
import { Logo } from "./";

const Navbar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          // backgroundColor: 'transparent',
          boxShadow: "none",
        }}
      >
        <Stack direction="row" alignItems='center' justifyContent= 'space-between'>
          <Toolbar>
            <Logo />
          </Toolbar>
          <Stack  direction = 'row' justifyContent= 'space-between' gap={6} sx={{mr:'1.5em'}}>
            <Link>New</Link>
            <Link>Shop</Link>
            <Link>Cars</Link>
            <Link>Home</Link>
            <Link>Contact</Link>
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Navbar;
