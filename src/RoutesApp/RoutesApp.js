import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import ComparadorMovil from '../Pages/ComparadorMovil';
import Lead from '../Pages/Lead';
import ComparadorEnergia from '../Pages/ComparadorEnergia';
import ThankPage from '../Pages/ThankPage';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Internet_y_telefonia/" element={<ComparadorMovil />} />
            <Route exact path="/Internet_y_telefonia/Movil" element={<ComparadorMovil />} />
            <Route exact path="/Internet_y_telefonia/Movil/:id" element={<Lead />} />

            <Route exact path="/Energia/" element={<ComparadorEnergia />} />
            <Route exact path="/Energia/Luz/" element={<ComparadorEnergia />} />
            <Route exact path="/Energia/Luz/:id" element={<Lead />} />
            
            <Route exact path="/thank/Energia/Luz/:id" element={<ThankPage />} />
            <Route exact path="/thank/Internet_y_telefonia/Movil/:id" element={<ThankPage />} />
        </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp;