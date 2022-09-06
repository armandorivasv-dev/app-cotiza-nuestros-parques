import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      align="center"
    >
      <Typography
        component="h1"
        variant="h5"
        align="center"
        gutterBottom
      >
        COTIZADOR LOS PARQUES
      </Typography>

      <Typography
        component="h2"
        variant="h6"
        align="center"
        gutterBottom
      >
        Completa todos los campos requeridos
      </Typography>
    </Box>
  )
}
