import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../../assets/logo-nuestros-parques.png'

export const Header = () => {
  return (
    <Box>
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      align="center"
  
    >
        <img
        src={logo}
        srcSet={logo}
        alt="cotizador nuestros parques"
        loading="lazy"
      />
      <Box>
        <Typography component="h3" variant="caption" align="center" color="text.primary" display="block" gutterBottom>
          Santiago, {new Date().toLocaleString() + ""}
        </Typography>
        <Typography component="h1" variant="h5" align="center" color="text.primary" gutterBottom>
          PROPUESTA NUESTROS PARQUES
        </Typography>
        <Typography component="h2" variant="body1" align="center" color="text.primary" display="block">
          Ejecutiva Maria Eugenia Viña
        </Typography>
        <Typography component="h2" variant="body2" align="center" color="text.primary" display="block" gutterBottom>
          +56 9 5039 1120
        </Typography>

      </Box>
      </Box>
      </Box>
  )
}
