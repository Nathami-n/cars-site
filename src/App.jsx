import { Box } from "@mui/material";
import React from "react";
import {Navbar, Home} from './components'
import { Routes, Route } from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <Box  className='img-div'  minHeight= '100vh' sx={{overflowY:'hidden'}}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
    </Box>
  );
};

export default App;
