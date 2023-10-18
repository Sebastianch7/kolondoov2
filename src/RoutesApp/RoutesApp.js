import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ComparadorMovil from '../Pages/ComparadorMovil';
import Lead from '../Pages/Lead';
import ComparadorEnergia from '../Pages/ComparadorEnergia';
import ComparadorFibra from '../Pages/ComparadorFibra';
import ThankPage from '../Pages/ThankPage';
import ComparadorGas from '../Pages/ComparadorGas';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            
            <Route exact path="/internet_y_telefonia/" element={<ComparadorMovil />} />
            
            <Route exact path="/internet_y_telefonia/movil" element={<ComparadorMovil />} />
            <Route exact path="/internet_y_telefonia/movil/:id" element={<Lead />} />
            <Route exact path="/thank/internet_y_telefonia/movil/:id" element={<ThankPage />} />
            
            <Route exact path="/internet_y_telefonia/fibra" element={<ComparadorFibra />} />
            <Route exact path="/internet_y_telefonia/fibra/:id" element={<Lead />} />
            <Route exact path="/thank/internet_y_telefonia/fibra/:id" element={<ThankPage />} />

            <Route exact path="/energia/" element={<ComparadorEnergia />} />
            <Route exact path="/energia/luz/" element={<ComparadorEnergia />} />
            <Route exact path="/energia/luz/:id" element={<Lead />} />
            <Route exact path="/thank/energia/luz/:id" element={<ThankPage />} />

            <Route exact path="/energia/gas/" element={<ComparadorGas />} />
            <Route exact path="/energia/gas/:id" element={<Lead />} />
            <Route exact path="/thank/energia/gas/:id" element={<ThankPage />} />
            
        </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp;