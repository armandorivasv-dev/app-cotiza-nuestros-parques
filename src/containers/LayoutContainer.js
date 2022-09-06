import React from 'react';
import { Header } from '../components/Header';
import Box from '@mui/material/Box';
import { CotizadorContainer } from './CotizadorContainer';
import { Container } from '@mui/material';

export const LayoutContainer = () => {
  return (
    <Container maxWidth="sm" id="main"> 
          <Box setion="form" id="form"><CotizadorContainer /></Box>
    </Container>

  )
}
