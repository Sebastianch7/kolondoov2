import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Content from '../Pages/Content';
import Lead from '../Pages/Lead';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Internet_y_telefonia/" element={<Content />} />
            <Route exact path="/Internet_y_telefonia/Movil" element={<Content />} />
            <Route exact path="/Internet_y_telefonia/Movil/:id" element={<Lead />} />
        </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp;