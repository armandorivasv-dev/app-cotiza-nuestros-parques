import { Box } from '@mui/material';
import { CotizadorForm } from '../components/cotizador/CotizadorForm';
import { Header } from '../components/header/Header';

export const CotizadorContainer = () => {
  return (
    <Box>
      <Header />
      <CotizadorForm />
    </Box>

  )
}
