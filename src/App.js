import { LayoutContainer } from "./containers/LayoutContainer";
import { Routes, Route,  BrowserRouter,  } from 'react-router-dom';
import { Propuesta } from "./components/propuesta/Propuesta";
import { CotizadorContextProvider } from "./context/CotizadorContext";
import { Footer } from "./components/footer/Footer";
import { CotizadorContainer } from "./containers/CotizadorContainer";


function App() {
  return (
    <div className="App">
    <CotizadorContextProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/"  element={<CotizadorContainer/>}  />
            <Route path="/propuesta"  element={<Propuesta/>}  />
          </Routes>
        </BrowserRouter>
        <Footer />
    </CotizadorContextProvider>     
    </div>
  );
}

export default App;
