import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Content from '../Pages/Content';

function RoutesApp({}) {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Internet_y_telefonia/Movil" element={<Content />} />
        </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp;