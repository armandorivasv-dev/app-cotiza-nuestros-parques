import { Routes, Route,  BrowserRouter,  } from 'react-router-dom';
import { CotizadorContextProvider } from "./context/CotizadorContext";
import { Footer } from "./components/footer/Footer";
import { CotizadorContainer } from "./containers/CotizadorContainer";
import { PropuestaContainer } from './containers/PropuestaContainer';


function App() {
  return (
    <div className="App">
    <CotizadorContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={<CotizadorContainer/>}  />
            <Route path="/propuesta"  element={<PropuestaContainer/>}  />
          </Routes>
        </BrowserRouter>
        <Footer />
    </CotizadorContextProvider>     
    </div>
  );
}

export default App;
