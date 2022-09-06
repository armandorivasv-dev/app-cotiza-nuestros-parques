import { Container } from '@mui/material';
import { CotizadorForm } from '../components/cotizador/CotizadorForm';
import { Header } from '../components/cotizador/CotizadorFormHeader';

export const CotizadorContainer = () => {
  return (
    <Container maxWidth="xs">
      <Header />
      <CotizadorForm />
    </Container>

  )
}
