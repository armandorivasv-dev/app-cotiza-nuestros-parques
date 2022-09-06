import { Box } from '@mui/material';
import { CotizadorForm } from '../components/cotizador/CotizadorForm';
import { Header } from '../components/Header';

export const CotizadorContainer = () => {
  return (
    <Box>
      <Header />
      <CotizadorForm />
    </Box>

  )
}
