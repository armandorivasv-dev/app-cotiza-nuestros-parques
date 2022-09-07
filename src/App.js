import { Routes, Route,  BrowserRouter,  } from 'react-router-dom';

import { CotizadorContextProvider } from "./context/CotizadorContext";
import { Footer } from "./components/footer/Footer";
import { CotizadorContainer } from "./containers/CotizadorContainer";
import { PropuestaContainer } from './containers/PropuestaContainer';
import { Box, Container } from '@mui/material';


function App() {
  return (
    <Container className="App" maxWidth="sm" sx={{ bgcolor: '#f5f5f5' }}>
    <CotizadorContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={<CotizadorContainer/>}  />
            <Route path="/propuesta"  element={<PropuestaContainer/>}  />
          </Routes>
        </BrowserRouter>
        <Footer />
    </CotizadorContextProvider>     
    </Container>
  );
}

export default App;
