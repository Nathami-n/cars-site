import { Box, AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom'
import React, { useState } from "react";
import { Logo, SideNav } from "./";

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
  return (
    <Box sx={{position:'relative'}}>
      <AppBar
        position="static"
        sx={{
          background: 'transparent',
          boxShadow: "none",
         
        }}
      >
        <Stack direction="row" alignItems='center' justifyContent= 'space-between' className="pc-nav">
          <Toolbar>
            <Logo />
          </Toolbar>
          <Stack  className='md-xl' direction = 'row' justifyContent= 'space-between' gap={6} sx={{mr:'1.5em', display:{sx:'none',xs:'none', md:'flex'}}}>
            <Link>New</Link>
            <Link>Shop</Link>
            <Link>Cars</Link>
            <Link>Home</Link>
            <Link>Contact</Link>
          </Stack>
          <IconButton sx={{color:'#fff', display:{sx:'block', md:'none', xl:'none'}}} onClick={handleMenu} >
          <MenuIcon className="menu-btn"/>
          </IconButton>   
        </Stack>
      </AppBar>
      <SideNav menu={menu} setMenu={setMenu}/>
         </Box>
  );
};

export default Navbar;
