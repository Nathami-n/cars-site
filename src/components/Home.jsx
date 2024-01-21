import React from 'react'
import {Cards} from './'
import {Box,Stack,Typography} from '@mui/material'
import { images } from '../utils/images'
const Home = () => {
  return (
    <><Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Cards images = {images} />

      <Typography variant='h4' sx={{ color: 'red', wordWrap: 'break-word' }}>

      </Typography>
    </Box>
    <Box>
        GetStarted
      </Box>
      </>
  )
}

export default Home