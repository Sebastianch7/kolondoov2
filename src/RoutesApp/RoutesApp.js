import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ComparadorMovil from '../Pages/ComparadorMovil';
import Lead from '../Pages/Lead';
import ComparadorLuz from '../Pages/ComparadorLuz';
import ComparadorFibra from '../Pages/ComparadorFibra';
import ThankPage from '../Pages/ThankPage';
import ComparadorGas from '../Pages/ComparadorGas';
import ComparadorLuzGas from '../Pages/ComparadorLuzGas';
import ComparadorFibraMovil from '../Pages/ComparadorFibraMovil';
import ComparadorFibraMovilTv from '../Pages/ComparadorFibraMovilTv';
import ComparadorStreaming from '../Pages/ComparadorStreaming';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/internet_y_telefonia/" element={<ComparadorMovil />} />
            
            <Route path="/internet_y_telefonia/movil" element={<ComparadorMovil />} />
            <Route path="/internet_y_telefonia/movil/:id" element={<Lead />} />
            <Route path="/thank/internet_y_telefonia/movil/:id" element={<ThankPage />} />
            
            <Route path="/internet_y_telefonia/fibra" element={<ComparadorFibra />} />
            <Route path="/internet_y_telefonia/fibra/:id" element={<Lead />} />
            <Route path="/thank/internet_y_telefonia/fibra/:id" element={<ThankPage />} />

            <Route path="/energia/" element={<ComparadorLuz />} />
            <Route path="/energia/luz" element={<ComparadorLuz />} />
            <Route path="/energia/luz/:id" element={<Lead />} />
            <Route path="/thank/energia/luz/:id" element={<ThankPage />} />

            <Route path="/energia/gas" element={<ComparadorGas />} />
            <Route path="/energia/gas/:id" element={<Lead />} />
            <Route path="/thank/energia/gas/:id" element={<ThankPage />} />

            <Route path="/energia/luz_y_gas" element={<ComparadorLuzGas />} />
            <Route path="/energia/luz_y_gas/:id" element={<Lead />} />
            <Route path="/thank/energia/luz_y_gas/:id" element={<ThankPage />} />

            <Route path="/internet_y_telefonia/movil_y_fibra" element={<ComparadorFibraMovil />} />
            <Route path="/internet_y_telefonia/movil_y_fibra/:id" element={<Lead />} />
            <Route path="/thank/internet_y_telefonia/movil_y_fibra/:id" element={<ThankPage />} />

            <Route path="/internet_y_telefonia/movil_fibra_tv" element={<ComparadorFibraMovilTv />} />
            <Route path="/internet_y_telefonia/movil_fibra_tv/:id" element={<Lead />} />
            <Route path="/thank/internet_y_telefonia/movil_fibra_tv/:id" element={<ThankPage />} />
            
            <Route path="/internet_y_telefonia/telefono_con_contrato" element={<ComparadorFibraMovilTv />} />
            <Route path="/internet_y_telefonia/telefono_con_contrato/:id" element={<Lead />} />
            <Route path="/thank/internet_y_telefonia/telefono_con_contrato/:id" element={<ThankPage />} />
            
            <Route path="/television_y_streaming/tv" element={<ComparadorStreaming />} />
            <Route path="/television_y_streaming/streaming" element={<ComparadorStreaming />} />
        </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp;