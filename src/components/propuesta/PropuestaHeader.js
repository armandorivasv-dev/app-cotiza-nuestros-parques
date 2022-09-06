import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const PropuestaHeader = () => {
  return (
    <Box>
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      align="center"
  
    >
      <Box>
        <Typography component="h3" variant="caption" align="center" color="text.primary" display="block" gutterBottom>
          Santiago, {new Date().toLocaleString() + ""}
        </Typography>
        <Typography component="h1" variant="h5" align="center" color="text.primary" gutterBottom>
          PROPUESTA LOS PARQUES
        </Typography>
        <Typography component="h2" variant="body1" align="center" color="text.primary" display="block">
          Ejecutiva Maria Eugenia Viña
        </Typography>
        <Typography component="h2" variant="body2" align="center" color="text.primary" display="block" gutterBottom>
          +56 9 5039 1120
        </Typography>

      </Box>
      <Typography component="h1" variant="subtitle1" align="center" color="text.primary">
        PLAN SELECCIONADO
      </Typography>
      </Box>
      </Box>
  )
}
