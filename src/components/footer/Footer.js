import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Copyright } from './Copyright';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 6,
        minHeight: '5vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          py: 1,
          px: 1,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}