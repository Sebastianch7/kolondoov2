import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import PoliticaCookies from '../Pages/PoliticaCookies';
import PoliticaLegal from '../Pages/PoliticaLegal';
import PageNotFound from '../Pages/PageNotFound';
import HerramientasSuministros from '../Pages/HerramientasSuministros';
import HerramientasSeguros from '../Pages/HerramientasSeguros';
import HerramientasCobertura from '../Pages/HerramientasCobertura';
import BlogItemPreview from '../Pages/BlogItemPreview';


function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                {<Route
                    path="/"
                    element={<Navigate to="/es" exact />}
                />}

                <Route path="/es" element={<Home />} />

                <Route path="/es/internet-telefonia" element={<RaizTelefonia />} />
                <Route path="/es/energia" element={<RaizEnergia />} />
                <Route path="/es/television-streaming" element={<RaizStreaming />} />

                <Route path="/es/internet-telefonia/comparador-movil" element={<ComparadorMovil />} />
                <Route path="/es/internet-telefonia/comparador-movil/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/comparador-movil/thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/comparador-fibra" element={<ComparadorFibra />} />
                <Route path="/es/internet-telefonia/comparador-fibra/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/comparador-fibra/thank/:id" element={<ThankPage />} />

                <Route path="/es/energia/comparador-tarifas-luz" element={<ComparadorLuz />} />
                <Route path="/es/energia/comparador-tarifas-luz/:id" element={<Lead />} />
                <Route path="/es/energia/comparador-tarifas-luz/thank/:id" element={<ThankPage />} />

                <Route path="/es/energia/comparador-tarifas-gas" element={<ComparadorGas />} />
                <Route path="/es/energia/comparador-tarifas-gas/:id" element={<Lead />} />
                <Route path="/es/energia/comparador-tarifas-gas/thank/:id" element={<ThankPage />} />

                <Route path="/es/energia/comparador-tarifas-luz-y-gas" element={<ComparadorLuzGas />} />
                <Route path="/es/energia/comparador-tarifas-luz-y-gas/:id" element={<Lead />} />
                <Route path="/es/energia/comparador-tarifas-luz-y-gas/thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/comparador-tarifas-fibra-y-movil" element={<ComparadorFibraMovil />} />
                <Route path="/es/internet-telefonia/comparador-tarifas-fibra-y-movil/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/comparador-tarifas-fibra-y-movil/thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/comparador-fibra-movil-tv" element={<ComparadorFibraMovilTv />} />
                <Route path="/es/internet-telefonia/comparador-fibra-movil-tv/:id" element={<Lead />} />
                <Route path="/es/thank/internet-telefonia/comparador-fibra-movil-tv/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/telefono_con_contrato" element={<ComparadorFibraMovilTv />} />
                <Route path="/es/internet-telefonia/telefono_con_contrato/:id" element={<Lead />} />
                <Route path="/es/thank/internet-telefonia/telefono_con_contrato/:id" element={<ThankPage />} />

                {/* <Route path="/es/television-streaming/comparador-de-television" element={<ComparadorStreaming />} /> */}
                <Route path="/es/television-streaming/comparador-plataformas-streaming" element={<ComparadorStreaming />} />

                <Route path="/es/quienes-somos" element={<QuienesSomos />} />

                <Route path="/es/herramientas" element={<PageNotFound />} />
                <Route path="/es/herramientas/precio-de-la-luz-hoy" element={<HerramientaLuz />} />
                <Route path="/es/herramientas/test-de-velocidad" element={<HerramientaTest />} />

                <Route path="/es/herramientas/suministros" element={<HerramientasSuministros />} />
                <Route path="/es/herramientas/suministros/:id" element={<BlogItem />} />

                <Route path="/es/herramientas/seguros" element={<HerramientasSeguros />} />
                <Route path="/es/herramientas/seguros/:id" element={<BlogItem />} />

                <Route path="/es/herramientas/cobertura" element={<HerramientasCobertura />} />
                <Route path="/es/herramientas/cobertura/:id" element={<BlogItem />} />

                <Route path="/es/contactanos" element={<Contactenos />} />
                <Route path="/es/politica-privacidad" element={<PoliticaPrivacidad />} />
                <Route path="/es/politica-cookies" element={<PoliticaCookies />} />
                <Route path="/es/politica-legal" element={<PoliticaLegal />} />

                {/* <Route path="/es/blog" element={<Blog />} />
                <Route path="/es/blog/:categoria" element={<Blog />} />
                <Route path="/es/blog/:categoria/:id" element={<BlogItem />} /> */}
                
                <Route path="/es/blog/preview/:id" element={<BlogItemPreview />} />
                {/* Ruta 404 */}
                <Route path="/*" element={<PageNotFound />} />
                <Route path="/es/blog/destacado" element={<PageNotFound />} />
                <Route path="/es/404" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;