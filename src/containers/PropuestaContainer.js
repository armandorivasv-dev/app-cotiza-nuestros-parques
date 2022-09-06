import React from 'react';
import { Container } from '@mui/material';
import { Propuesta } from '../components/propuesta/Propuesta';
import { PropuestaHeader } from '../components/propuesta/PropuestaHeader';

export const PropuestaContainer = () => {
  return (
    <Container maxWidth="xs">
      <PropuestaHeader/>
      <Propuesta/>
  </Container>
    
  )
}
