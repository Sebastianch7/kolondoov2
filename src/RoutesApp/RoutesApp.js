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
import QuienesSomos from '../Pages/QuienesSomos';
import Contactenos from '../Pages/Contactenos';
import HerramientaLuz from '../Pages/HerramientaLuz';
import HerramientaTest from '../Pages/HerramientaTest';
import RaizTelefonia from '../Pages/RaizTelefonia';
import RaizEnergia from '../Pages/RaizEnergia';
import RaizStreaming from '../Pages/RaizStreaming';
import PoliticaPrivacidad from '../Pages/PoliticaPrivacidad';
import Blog from '../Pages/Blog';
import BlogItem from '../Pages/BlogItem';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/internet-telefonia" element={<RaizTelefonia />} />
            <Route path="/energia" element={<RaizEnergia />} />
            <Route path="/television-streaming" element={<RaizStreaming />} />
            
            <Route path="/internet-telefonia/comparador-movil" element={<ComparadorMovil />} />
            <Route path="/internet-telefonia/comparador-movil/:id" element={<Lead />} />
            <Route path="/thank/internet-telefonia/comparador-movil/:id" element={<ThankPage />} />
            
            <Route path="/internet-telefonia/comparador-fibra" element={<ComparadorFibra />} />
            <Route path="/internet-telefonia/comparador-fibra/:id" element={<Lead />} />
            <Route path="/thank/internet-telefonia/comparador-fibra/:id" element={<ThankPage />} />

            <Route path="/energia/comparador-tarifas-luz" element={<ComparadorLuz />} />
            <Route path="/energia/comparador-tarifas-luz/:id" element={<Lead />} />
            <Route path="/thank/energia/comparador-tarifas-luz/:id" element={<ThankPage />} />

            <Route path="/energia/comparador-tarifas-gas" element={<ComparadorGas />} />
            <Route path="/energia/comparador-tarifas-gas/:id" element={<Lead />} />
            <Route path="/thank/energia/comparador-tarifas-gas/:id" element={<ThankPage />} />

            <Route path="/energia/comparador-tarifas-luz-y-gas" element={<ComparadorLuzGas />} />
            <Route path="/energia/comparador-tarifas-luz-y-gas/:id" element={<Lead />} />
            <Route path="/thank/energia/comparador-tarifas-luz-y-gas/:id" element={<ThankPage />} />

            <Route path="/internet-telefonia/comparador-tarifas-fibra-y-movil" element={<ComparadorFibraMovil />} />
            <Route path="/internet-telefonia/comparador-tarifas-fibra-y-movil/:id" element={<Lead />} />
            <Route path="/thank/internet-telefonia/comparador-tarifas-fibra-y-movil/:id" element={<ThankPage />} />

            <Route path="/internet-telefonia/comparador-fibra-movil-tv" element={<ComparadorFibraMovilTv />} />
            <Route path="/internet-telefonia/comparador-fibra-movil-tv/:id" element={<Lead />} />
            <Route path="/thank/internet-telefonia/comparador-fibra-movil-tv/:id" element={<ThankPage />} />
            
            <Route path="/internet-telefonia/telefono_con_contrato" element={<ComparadorFibraMovilTv />} />
            <Route path="/internet-telefonia/telefono_con_contrato/:id" element={<Lead />} />
            <Route path="/thank/internet-telefonia/telefono_con_contrato/:id" element={<ThankPage />} />
            
            <Route path="/television-streaming/comparador-de-television" element={<ComparadorStreaming />} />
            <Route path="/television-streaming/comparador-plataformas-streaming" element={<ComparadorStreaming />} />

            <Route path="/quienes-somos" element={<QuienesSomos />} />
            
            <Route path="/herramientas/precio-de-la-luz-hoy" element={<HerramientaLuz />} />
            <Route path="/herramientas/test-de-velocidad" element={<HerramientaTest />} />
            
            <Route path="/contactanos" element={<Contactenos />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/noticia/:id" element={<BlogItem />} />
        </Routes>
    </BrowserRouter>
    );
}

export default RoutesApp;