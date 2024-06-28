import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Es/Home';
import ComparadorMovil from '../Pages/Es/ComparadorMovil';
import Lead from '../Pages/Es/Lead';
import ComparadorLuz from '../Pages/Es/ComparadorLuz';
import ComparadorFibra from '../Pages/Es/ComparadorFibra';
import ThankPage from '../Pages/Es/ThankPage';
import ComparadorGas from '../Pages/Es/ComparadorGas';
import ComparadorLuzGas from '../Pages/Es/ComparadorLuzGas';
import ComparadorFibraMovil from '../Pages/Es/ComparadorFibraMovil';
import ComparadorFibraMovilTv from '../Pages/Es/ComparadorFibraMovilTv';
import ComparadorStreaming from '../Pages/Es/ComparadorStreaming';
import QuienesSomos from '../Pages/Es/QuienesSomos';
import Contactenos from '../Pages/Es/Contactenos';
import HerramientaLuz from '../Pages/Es/HerramientaLuz';
import HerramientaTest from '../Pages/Es/HerramientaTest';
import RaizTelefonia from '../Pages/Es/RaizTelefonia';
import RaizTelefoniaCo from '../Pages/Co/RaizTelefoniaCo';
import RaizEnergia from '../Pages/Es/RaizEnergia';
import RaizStreaming from '../Pages/Co/RaizStreamingCo';
import PoliticaPrivacidad from '../Pages/Es/PoliticaPrivacidad';
import Blog from '../Pages/Es/Blog';
import BlogItem from '../Pages/Es/BlogItem';
import PoliticaCookies from '../Pages/Es/PoliticaCookies';
import PoliticaLegal from '../Pages/Es/PoliticaLegal';
import PageNotFound from '../Pages/Es/PageNotFound';
import BlogItemPreview from '../Pages/Es/BlogItemPreview';
import ComparadoresMarca from '../Pages/Es/ComparadoresMarca';
import ThanksPage from '../Pages/Es/thanksPage';
import HomeMx from '../Pages/Mx/Home';
import ComparadorPlanesCelular from '../Pages/Mx/ComparadorPlanesCelular';
import ComparadorVehiculos from '../Pages/Mx/ComparadorVehiculos';
import LeadVehiculo from '../Pages/Es/LeadVehiculo';
import ComparadorCupones from '../Pages/Es/ComparadorCupones';
import ZonaTransaccional from '../Pages/Co/zonaTransaccional';
import ComparadorPrestamos from '../Pages/Co/ComparadorPrestamosCo';
import HomeCo from '../Pages/Co/HomeCo';
import ComparadorStreamingCo from '../Pages/Co/ComparadorStreamingCo';
import ComparadorMovilCo from '../Pages/Co/ComparadorMovilCo';
import ComparadorFibraCo from '../Pages/Co/ComparadorFibraCo';
import ComparadorFibraMovilCo from '../Pages/Co/ComparadorFibraMovilCo';
import ComparadorFibraMovilTvCo from '../Pages/Co/ComparadorFibraMovilTvCo';
import ContactenosCo from '../Pages/Co/Contactenos';
import PoliticaPrivacidadCo from '../Pages/Co/PoliticaPrivacidadCo';
import PoliticaCookiesCo from '../Pages/Co/PoliticaCookiesCo';
import PoliticaLegalCo from '../Pages/Co/PoliticaLegalCo';
import QuienesSomosCo from '../Pages/Co/QuienesSomosCo';
import RaizStreamingCo from '../Pages/Co/RaizStreamingCo';
import RaizFinanzasCo from '../Pages/Co/RaizFinanzasCo'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta 404 */}
                <Route path="/*" element={<PageNotFound replace />} />
                <Route path="/es/blog/destacado" element={<PageNotFound replace />} />
                <Route path="/es/404" element={<PageNotFound replace />} />
                {<Route
                    path="/"
                    element={<Navigate to="/es" exact />}
                />}

                <Route path="/es" element={<Home />} />
                <Route path="/en" element={<Home />} />
                <Route path="/mx" element={<HomeMx />} />
                <Route path="/co" element={<HomeCo />} />

                <Route path="/es/internet-telefonia" element={<RaizTelefonia />} />
                <Route path="/es/energia" element={<RaizEnergia />} />
                <Route path="/es/television-streaming" element={<RaizStreaming />} />

                <Route path="/es/comparadores/:marca" element={<ComparadoresMarca />} />

                <Route path="/es/energia/comparador-tarifas-luz" element={<ComparadorLuz />} />
                <Route path="/es/energia/comparador-tarifas-luz/:id" element={<Lead />} />
                <Route path="/es/energia/comparador-tarifas-luz/thank/:id" element={<ThankPage />} />

                <Route path="/es/energia/comparador-tarifas-gas" element={<ComparadorGas />} />
                <Route path="/es/energia/comparador-tarifas-gas/:id" element={<Lead />} />
                <Route path="/es/energia/comparador-tarifas-gas/thank/:id" element={<ThankPage />} />

                <Route path="/es/energia/comparador-tarifas-luz-y-gas" element={<ComparadorLuzGas />} />
                <Route path="/es/energia/comparador-tarifas-luz-y-gas/:id" element={<Lead />} />
                <Route path="/es/energia/comparador-tarifas-luz-y-gas/thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/comparador-movil" element={<ComparadorMovil />} />
                <Route path="/es/internet-telefonia/comparador-movil/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/comparador-movil/thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/comparador-fibra" element={<ComparadorFibra />} />
                <Route path="/es/internet-telefonia/comparador-fibra/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/comparador-fibra/thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/comparador-tarifas-fibra-y-movil" element={<ComparadorFibraMovil />} />
                <Route path="/es/internet-telefonia/comparador-tarifas-fibra-y-movil/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/comparador-tarifas-fibra-y-movil/thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/comparador-fibra-movil-tv" element={<ComparadorFibraMovilTv />} />
                <Route path="/es/internet-telefonia/comparador-fibra-movil-tv/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/comparador-fibra-movil-tv//thank/:id" element={<ThankPage />} />

                <Route path="/es/internet-telefonia/telefono_con_contrato" element={<ComparadorFibraMovilTv />} />
                <Route path="/es/internet-telefonia/telefono_con_contrato/:id" element={<Lead />} />
                <Route path="/es/internet-telefonia/telefono_con_contrato//thank/:id" element={<ThankPage />} />

                {/* <Route path="/es/television-streaming/comparador-de-television" element={<ComparadorStreaming />} /> */}
                <Route path="/es/television-streaming/comparador-plataformas-streaming" element={<ComparadorStreaming />} />
                

                <Route path="/es/quienes-somos" element={<QuienesSomos />} />

                <Route path="/es/herramientas" element={<PageNotFound />} />
                <Route path="/es/herramientas/precio-de-la-luz-hoy" element={<HerramientaLuz />} />
                <Route path="/es/herramientas/test-de-velocidad" element={<HerramientaTest />} />

                {/* <Route path="/es/herramientas/suministros" element={<HerramientasSuministros />} />
                <Route path="/es/herramientas/suministros/:id" element={<BlogItem />} />

                <Route path="/es/herramientas/seguros" element={<HerramientasSeguros />} />
                <Route path="/es/herramientas/seguros/:id" element={<BlogItem />} />

                <Route path="/es/herramientas/cobertura" element={<HerramientasCobertura />} />
                <Route path="/es/herramientas/coberturaFibra/:id" element={<BlogItem />} />
                <Route path="/es/herramientas/coberturaMovil/:id" element={<BlogItem />} /> */}

                <Route path="/es/contactanos" element={<Contactenos />} />
                <Route path="/es/politica-privacidad" element={<PoliticaPrivacidad />} />
                <Route path="/es/politica-cookies" element={<PoliticaCookies />} />
                <Route path="/es/politica-legal" element={<PoliticaLegal />} />

                <Route path="/es/blog" element={<Blog />} />
                <Route path="/es/blog/:categoria" element={<Blog />} />
                <Route path="/es/blog/:categoria/:id" element={<BlogItem />} />

                <Route path="/blog/preview/:id" element={<BlogItemPreview />} />

                <Route path="/es/gracias" element={<ThanksPage />} />

                <Route path="/es/cupones" element={<ComparadorCupones />} />
                <Route path="/es/cupones/:id" element={<ComparadorCupones />} />
                <Route path="/es/cupones/categoria/:idCategoria" element={<ComparadorCupones />} />
                <Route path="/es/cupones/categoria" element={<Navigate to="/es/cupones" />} />
                
                {/* cupones */}
                <Route path="/:lang/cupones" element={<ComparadorCupones />} />

                {/* MX */}
                <Route path="/mx/planes-celulares-telefonia-internet-y-tv/comparador-planes-celular" element={<ComparadorPlanesCelular />} />
                <Route path="/mx/planes-celulares-telefonia-internet-y-tv/comparador-planes-celular/:id" element={<Lead />} />
                <Route path="/mx/planes-celulares-telefonia-internet-y-tv/comparador-planes-telefonia-internet" element={<ComparadorFibraMovil />} />
                <Route path="/mx/planes-celulares-telefonia-internet-y-tv/comparador-planes-telefonia-internet-tv" element={<ComparadorFibraMovil />} />
                <Route path="/mx/planes-celulares-telefonia-internet-y-tv/comparador-planes-internet-tv" element={<ComparadorFibraMovil />} />
                <Route path="/mx/servicios/vehiculos" element={<ComparadorVehiculos />} />
                <Route path="/mx/servicios/vehiculos/:id" element={<LeadVehiculo />} />


                {/* CO */}
                <Route path="/co/finanzas" element={<RaizFinanzasCo />} />
                <Route path="/co/rediccion-banco/:id" element={<ZonaTransaccional />} />
                <Route path="/co/finanzas/banca" element={<ComparadorPrestamos />} />
                


                <Route path="/co/contactanos" element={<ContactenosCo />} />
                <Route path="/co/politica-privacidad" element={<PoliticaPrivacidadCo />} />
                <Route path="/co/politica-cookies" element={<PoliticaCookiesCo />} />
                <Route path="/co/politica-legal" element={<PoliticaLegalCo />} />
                <Route path="/co/quienes-somos" element={<QuienesSomosCo />} />
                
                
                <Route path="/co/streaming" element={<RaizStreamingCo />} />
                <Route path="/co/streaming/comparador-plataformas-streaming" element={<ComparadorStreamingCo />} />

                <Route path="/co/internet-movil" element={<RaizTelefoniaCo />} />
                <Route path="/co/internet-movil/comparador-movil" element={<ComparadorMovilCo />} />
                <Route path="/co/internet-movil/comparador-movil/:id" element={<Lead />} />
                <Route path="/co/internet-movil/comparador-movil/thank/:id" element={<ThankPage />} />
                
                <Route path="/co/internet-movil/comparador-fibra" element={<ComparadorFibraCo />} />
                <Route path="/co/internet-movil/comparador-fibra/:id" element={<Lead />} />
                <Route path="/co/internet-movil/comparador-fibra/thank/:id" element={<ThankPage />} />

                <Route path="/co/internet-movil/comparador-tarifas-fibra-y-movil" element={<ComparadorFibraMovilCo />} />
                <Route path="/co/internet-movil/comparador-tarifas-fibra-y-movil/:id" element={<Lead />} />
                <Route path="/co/internet-movil/comparador-tarifas-fibra-y-movil/thank/:id" element={<ThankPage />} />

                <Route path="/co/internet-movil/comparador-fibra-movil-tv" element={<ComparadorFibraMovilTvCo />} />
                <Route path="/co/internet-movil/comparador-fibra-movil-tv/:id" element={<Lead />} />
                <Route path="/co/internet-movil/comparador-fibra-movil-tv//thank/:id" element={<ThankPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;